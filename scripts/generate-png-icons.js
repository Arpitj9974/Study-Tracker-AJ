/**
 * generate-png-icons.js
 * Generates standalone, valid 192x192 and 512x512 PNG app icons for PWA using pure Node zlib.
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createSolidPNG(width, height, r, g, b, a = 255) {
  // RGBA buffer with filter byte at start of each scanline (0 = None)
  const scanlineLength = width * 4 + 1;
  const rawData = Buffer.alloc(scanlineLength * height);

  for (let y = 0; y < height; y++) {
    const rowStart = y * scanlineLength;
    rawData[rowStart] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const px = rowStart + 1 + x * 4;

      // Draw rounded dark card background with glowing lightning bolt center
      const cx = width / 2;
      const cy = height / 2;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Lightning bolt polygon check
      // Simple normalized coords: nx [-1, 1], ny [-1, 1]
      const nx = dx / (width / 2);
      const ny = dy / (height / 2);

      // Check if inside bolt
      let inBolt = false;
      // Upper segment: between ny=-0.65 and ny=0.0
      if (ny >= -0.65 && ny <= 0.0) {
        const leftEdge = -0.3 + (ny + 0.65) * (-0.15 / 0.65);
        const rightEdge = 0.15 + (ny + 0.65) * (-0.15 / 0.65);
        if (nx >= leftEdge && nx <= rightEdge) inBolt = true;
      }
      // Lower segment: between ny=-0.1 and ny=0.65
      if (ny >= -0.1 && ny <= 0.65) {
        const leftEdge = -0.1 + (ny + 0.1) * (-0.05 / 0.75);
        const rightEdge = 0.35 + (ny + 0.1) * (-0.45 / 0.75);
        if (nx >= leftEdge && nx <= rightEdge) inBolt = true;
      }

      if (inBolt) {
        // Bright yellow-orange gold (#FFB300)
        rawData[px] = 255;
        rawData[px + 1] = 185;
        rawData[px + 2] = 0;
        rawData[px + 3] = 255;
      } else if (dist < width * 0.46) {
        // Dark purple-gray card (#161824)
        const glow = Math.max(0, 1 - dist / (width * 0.45));
        rawData[px] = Math.min(255, Math.floor(18 + glow * 40));
        rawData[px + 1] = Math.min(255, Math.floor(20 + glow * 20));
        rawData[px + 2] = Math.min(255, Math.floor(32 + glow * 70));
        rawData[px + 3] = 255;
      } else {
        // Outer dark background (#0A0C10)
        rawData[px] = 10;
        rawData[px + 1] = 12;
        rawData[px + 2] = 16;
        rawData[px + 3] = 255;
      }
    }
  }

  // Compress IDAT
  const compressed = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR Chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit depth
  ihdrData[9] = 6; // RGBA color
  ihdrData[10] = 0; // Deflate
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Non-interlaced
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // IDAT Chunk
  const idatChunk = createChunk('IDAT', compressed);

  // IEND Chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }

  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);

  const crcBuf = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = crc32(crcBuf);
  buf.writeUInt32BE(crc, 8 + len);

  return buf;
}

const assetsDir = path.join(__dirname, '..', 'assets');
const p192 = createSolidPNG(192, 192);
const p512 = createSolidPNG(512, 512);

fs.writeFileSync(path.join(assetsDir, 'icon-192.png'), p192);
fs.writeFileSync(path.join(assetsDir, 'icon-512.png'), p512);
fs.writeFileSync(path.join(assetsDir, 'icon-maskable-192.png'), p192);
fs.writeFileSync(path.join(assetsDir, 'icon-maskable-512.png'), p512);

console.log('✅ Generated 192x192 and 512x512 PWA icons in assets/');

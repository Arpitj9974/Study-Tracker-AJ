/**
 * scripts/process-custom-icon.js
 * Automatically detects an image in custom-icon/ and creates:
 * - assets/icon-192.png
 * - assets/icon-512.png
 * - assets/icon-maskable-192.png
 * - assets/icon-maskable-512.png
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const customIconDir = path.join(rootDir, 'custom-icon');
const assetsDir = path.join(rootDir, 'assets');

const files = fs.readdirSync(customIconDir).filter(f => {
  const ext = path.extname(f).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp', '.bmp'].includes(ext);
});

if (files.length === 0) {
  console.log("No image found in custom-icon/ yet. Please paste your image file into: " + customIconDir);
  process.exit(1);
}

const sourceImage = path.join(customIconDir, files[0]);
console.log("Using official image:", path.basename(sourceImage));

// Copy directly to assets/logo.png
fs.copyFileSync(sourceImage, path.join(assetsDir, 'logo.png'));
console.log("Copied to assets/logo.png");

const psScript = `
Add-Type -AssemblyName System.Drawing;

function Resize-Image($srcPath, $destPath, $width, $height, $paddingRatio) {
    $srcImg = [System.Drawing.Image]::FromFile($srcPath);
    $bmp = New-Object System.Drawing.Bitmap $width, $height;
    $g = [System.Drawing.Graphics]::FromImage($bmp);
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic;
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality;
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality;
    $g.Clear([System.Drawing.Color]::White);

    $targetW = [int]($width * (1.0 - (2 * $paddingRatio)));
    $targetH = [int]($height * (1.0 - (2 * $paddingRatio)));
    $ratio = [Math]::Min($targetW / $srcImg.Width, $targetH / $srcImg.Height);
    $drawW = [int]($srcImg.Width * $ratio);
    $drawH = [int]($srcImg.Height * $ratio);
    $x = [int](($width - $drawW) / 2);
    $y = [int](($height - $drawH) / 2);

    $g.DrawImage($srcImg, $x, $y, $drawW, $drawH);
    $g.Dispose();
    $srcImg.Dispose();
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png);
    $bmp.Dispose();
}

$source = '${sourceImage.replace(/'/g, "''").replace(/\\/g, '\\\\')}';
Resize-Image $source '${path.join(assetsDir, "icon-192.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 192 192 0.0;
Resize-Image $source '${path.join(assetsDir, "icon-512.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 512 512 0.0;
Resize-Image $source '${path.join(assetsDir, "icon-maskable-192.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 192 192 0.1;
Resize-Image $source '${path.join(assetsDir, "icon-maskable-512.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 512 512 0.1;
Write-Output "Successfully generated PWA icons!";
`;

try {
  const output = execSync(`powershell -NoProfile -Command "${psScript.replace(/\r?\n/g, ' ')}"`, { encoding: 'utf8' });
  console.log(output);
  console.log("Updated assets/icon-192.png, assets/icon-512.png and maskable icons.");
} catch (err) {
  console.error("Failed to process image:", err.message);
  process.exit(1);
}

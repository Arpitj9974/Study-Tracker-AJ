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
  return ['.png', '.jpg', '.jpeg', '.webp', '.bmp'].includes(ext) && !f.toLowerCase().includes('chatgpt');
});

if (files.length === 0) {
  console.log("No image found in custom-icon/ yet. Please paste your image file into: " + customIconDir);
  process.exit(1);
}

// 1. Maintain official brand logo for website headers and sidebars
const mainLogoFile = files.find(f => f.toLowerCase().includes('main') || f.toLowerCase().includes('the main')) || files[0];
const mainLogoPath = path.join(customIconDir, mainLogoFile);
fs.copyFileSync(mainLogoPath, path.join(assetsDir, 'logo.png'));
console.log("Main navbar logo preserved:", path.basename(mainLogoPath));

// 2. Select the syncing cloud graphic for mobile PWA splash screen & app icons
const splashFile = files.find(f => f.toLowerCase().includes('sycing') || f.toLowerCase().includes('syncing')) || mainLogoFile;
const splashSource = path.join(customIconDir, splashFile);
fs.copyFileSync(splashSource, path.join(assetsDir, 'syncing-cloud-progress.png'));
console.log("Using syncing cloud graphic for mobile splash & PWA icons:", path.basename(splashSource));

const psScript = `
Add-Type -AssemblyName System.Drawing;

function Resize-Image($srcPath, $destPath, $width, $height, $paddingRatio) {
    $srcImg = [System.Drawing.Image]::FromFile($srcPath);
    $bmp = New-Object System.Drawing.Bitmap $width, $height;
    $g = [System.Drawing.Graphics]::FromImage($bmp);
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic;
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality;
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality;
    $g.Clear([System.Drawing.Color]::Transparent);

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

$source = '${splashSource.replace(/'/g, "''").replace(/\\/g, '\\\\')}';
Resize-Image $source '${path.join(assetsDir, "icon-192.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 192 192 0.0;
Resize-Image $source '${path.join(assetsDir, "icon-512.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 512 512 0.0;
Resize-Image $source '${path.join(assetsDir, "icon-maskable-192.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 192 192 0.1;
Resize-Image $source '${path.join(assetsDir, "icon-maskable-512.png").replace(/'/g, "''").replace(/\\/g, '\\\\')}' 512 512 0.1;
Write-Output "Successfully generated mobile splash PWA icons!";
`;

try {
  const output = execSync(`powershell -NoProfile -Command "${psScript.replace(/\r?\n/g, ' ')}"`, { encoding: 'utf8' });
  console.log(output);
  console.log("Updated assets/icon-192.png, assets/icon-512.png and maskable icons.");
} catch (err) {
  console.error("Failed to process image:", err.message);
  process.exit(1);
}

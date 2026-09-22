/**
 * bump-version.js
 * Automatically increments asset version and updates cache-busting query strings
 * across all HTML files in the project.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const versionFilePath = path.join(rootDir, 'assets', 'app-version.json');

if (!fs.existsSync(versionFilePath)) {
  console.error("Error: assets/app-version.json not found!");
  process.exit(1);
}

const versionData = JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));
versionData.build = (versionData.build || 26) + 1;
versionData.updatedAt = new Date().toISOString().split('T')[0];
fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2), 'utf8');

const newVersion = versionData.build;
console.log(`Bumping asset cache to build v=${newVersion} (version ${versionData.version})...`);

const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
let updatedCount = 0;

htmlFiles.forEach(file => {
  const fullPath = path.join(rootDir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  // Pattern to match versioned assets in script or link tags
  const patterns = [
    /(assets\/nav\.js)(\?v=\d+)?/g,
    /(assets\/auth-sync\.js)(\?v=\d+)?/g,
    /(assets\/admin\.js)(\?v=\d+)?/g,
    /(assets\/mock-tracker\.js)(\?v=\d+)?/g,
    /(assets\/dashboard-generic\.js)(\?v=\d+)?/g,
    /(assets\/login\.js)(\?v=\d+)?/g,
    /(assets\/style\.css)(\?v=\d+)?/g
  ];

  patterns.forEach(regex => {
    content = content.replace(regex, (match, p1) => {
      changed = true;
      return `${p1}?v=${newVersion}`;
    });
  });

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    updatedCount++;
  }
});

console.log(`Successfully synchronized build v=${newVersion} across ${updatedCount} HTML files.`);

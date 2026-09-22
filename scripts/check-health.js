/**
 * check-health.js
 * Scans all HTML files and verifies that every script and stylesheet reference exists on disk.
 * Also runs node syntax validation on all asset JS files.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

let errors = 0;
console.log(`Auditing ${htmlFiles.length} HTML files for broken references...`);

htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');

  // Check script tags
  const scriptMatches = content.matchAll(/<script[^>]+src=["']([^"']+)["']/g);
  for (const match of scriptMatches) {
    let src = match[1].split('?')[0];
    if (src.startsWith('http://') || src.startsWith('https://')) continue;
    if (src.startsWith('./')) src = src.substring(2);

    const targetPath = path.join(rootDir, src);
    if (!fs.existsSync(targetPath)) {
      console.error(`❌ [BROKEN SCRIPT] in ${file}: "${src}" not found on disk!`);
      errors++;
    }
  }

  // Check stylesheet tags
  const linkMatches = content.matchAll(/<link[^>]+href=["']([^"']+)["']/g);
  for (const match of linkMatches) {
    let href = match[1].split('?')[0];
    if (href.startsWith('http://') || href.startsWith('https://')) continue;
    if (href.startsWith('./')) href = href.substring(2);

    const targetPath = path.join(rootDir, href);
    if (!fs.existsSync(targetPath)) {
      console.error(`❌ [BROKEN LINK] in ${file}: "${href}" not found on disk!`);
      errors++;
    }
  }
});

console.log(`\nValidating syntax of JS files in assets/...`);
const assetJsFiles = fs.readdirSync(path.join(rootDir, 'assets')).filter(f => f.endsWith('.js'));
assetJsFiles.forEach(f => {
  try {
    execSync(`node -c "${path.join(rootDir, 'assets', f)}"`);
  } catch (e) {
    console.error(`❌ [SYNTAX ERROR] in assets/${f}: ${e.message}`);
    errors++;
  }
});

if (errors === 0) {
  console.log(`\n✅ Health Check PASSED: All references exist and all scripts have valid syntax.`);
} else {
  console.error(`\n⚠️ Health Check FAILED with ${errors} issue(s).`);
  process.exit(1);
}

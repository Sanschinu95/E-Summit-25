const fs = require('fs');
const path = require('path');

// Copy built files from bplanjr/dist to bplanjr root
const distDir = path.join(__dirname, 'bplanjr', 'dist');
const targetDir = path.join(__dirname, 'bplanjr');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  
  if (fs.statSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      // Skip index.html - we want to keep the built version
      if (file === 'index.html') return;
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    // Skip index.html - we want to keep the built version
    if (path.basename(src) === 'index.html') return;
    fs.copyFileSync(src, dest);
  }
}

// Copy all files from dist to bplanjr root (except index.html)
copyRecursive(distDir, targetDir);

// Copy the built index.html separately
const builtIndexPath = path.join(distDir, 'index.html');
const targetIndexPath = path.join(targetDir, 'index.html');
if (fs.existsSync(builtIndexPath)) {
  fs.copyFileSync(builtIndexPath, targetIndexPath);
  console.log('Built index.html copied successfully!');
}

console.log('Build files copied successfully!');

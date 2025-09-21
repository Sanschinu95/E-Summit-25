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
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy all files from dist to bplanjr root
copyRecursive(distDir, targetDir);
console.log('Build files copied successfully!');

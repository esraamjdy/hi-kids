const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content
        .replace(/py-32 lg:py-48/g, 'py-20 lg:py-28')
        .replace(/py-24 lg:py-40/g, 'py-16 lg:py-24')
        .replace(/py-24 lg:py-32/g, 'py-16 lg:py-24')
        .replace(/opacity-\[0\.03\] grayscale/g, 'opacity-10 mix-blend-multiply')
        .replace(/grayscale opacity-\[0\.03\]/g, 'opacity-10 mix-blend-multiply')
        .replace(/opacity-\[0\.03\]/g, 'opacity-10 mix-blend-multiply');
        
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('app/[lang]');

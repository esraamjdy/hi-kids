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
                // Less empty space globally (except pt-20 for hero which is usually needed)
                .replace(/py-24 lg:py-40/g, 'py-16 lg:py-24')
                .replace(/py-24 lg:py-32/g, 'py-16 lg:py-24')
                .replace(/py-24/g, 'py-16')
                .replace(/py-20 lg:py-28/g, 'py-16 lg:py-20')
                .replace(/py-20 lg:py-32/g, 'py-16 lg:py-24')
                .replace(/py-20/g, 'py-16')
                .replace(/py-32 lg:py-48/g, 'py-20 lg:py-32')
                .replace(/mb-20/g, 'mb-16')
                .replace(/mt-24/g, 'mt-16')

                // Change mascots from opacity-10 mix-blend-multiply -> opacity-20 drop-shadow-sm
                .replace(/opacity-10 mix-blend-multiply/g, 'opacity-20 drop-shadow-sm')
                // if still legacy string:
                .replace(/opacity-\[0\.03\] grayscale/g, 'opacity-20 drop-shadow-sm')
                .replace(/grayscale opacity-\[0\.03\]/g, 'opacity-20 drop-shadow-sm')
                .replace(/opacity-\[0\.03\]/g, 'opacity-20 drop-shadow-sm')
                // other old styles that need updating
                .replace(/opacity-10 opacity-\[0\.03\]/g, 'opacity-20 drop-shadow-sm')
                // increase legacy opacity-10 to opacity-20 for all floating elements hidden xl:block animate-float-slow
                .replace(/opacity-10.*animate-float-slow/g, match => match.replace('opacity-10', 'opacity-20 drop-shadow-sm'))
                .replace(/opacity-20 hidden lg:block translate-x-1\/4/g, 'opacity-30 drop-shadow-sm hidden lg:block translate-x-1/4')
                .replace(/opacity-20 hidden lg:block/g, 'opacity-20 drop-shadow-sm hidden lg:block');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir('app/[lang]');

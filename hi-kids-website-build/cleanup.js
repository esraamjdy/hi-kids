const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./app/[lang]/');

files.forEach(file => {
    // We already manually perfected about/page.tsx, layout.tsx, and page.tsx
    if (file.includes('/about/page.tsx') || file.includes('/layout.tsx') || file.endsWith('/page.tsx') && file.split('/').length === 4) {
       // Wait, `file.endsWith('/page.tsx') && file.split('/').length === 4` skips the home page which is app/[lang]/page.tsx. Let's just explicitly skip it.
       if (file === 'app/[lang]/page.tsx' || file === 'app/[lang]/about/page.tsx') return;
    }
    
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Remove the regex explosion string that repeats 50+ times.
    // The pattern is repeating words like "lg:text-6xl lg:text-[6.5rem] xl:text-[8rem] tracking-tighter leading-[0.95]"
    // We will just aggressively replace long chains of these font-sizing classes.
    const annoyingPattern = /(?:lg:text-6xl\s+|lg:text-\[6\.5rem\]\s+|xl:text-\[8rem\]\s+|tracking-tighter\s+|leading-\[0\.95\]\s+|lg:text-7xl\s+|xl:text-\[5\.5rem\]\s+|leading-\[1\.0\]\s+|lg:text-\[2rem\]\s+|leading-tight\s+|text-6xl\s+){2,}/g;

    let originalLength = content.length;
    content = content.replace(annoyingPattern, ' text-5xl lg:text-[5rem] xl:text-[6rem] tracking-tighter leading-[1.0] ');
    
    // Also repeating py-56 lg:py-40
    const paddingExplosion = /(?:lg:py-56\s+|lg:py-48\s+|lg:py-40\s+|py-40\s+|py-56\s+|py-48\s+){2,}/g;
    content = content.replace(paddingExplosion, ' py-32 lg:py-48 ');

    // 2. Add min-h-[95vh] and max-w-[1600px]
    // To make sections huge:
    content = content.replace(/<section className="([^"]*?)"/g, (match, classes) => {
        let newClasses = classes;
        if (!newClasses.includes('min-h-')) {
            newClasses += ' min-h-[95vh] flex flex-col justify-center';
        }
        if (!newClasses.includes('py-')) {
            newClasses += ' py-32 lg:py-48';
        }
        return `<section className="${newClasses}"`;
    });

    content = content.replace(/max-w-7xl/g, 'max-w-[1600px] w-full');
    content = content.replace(/max-w-5xl/g, 'max-w-[1400px] w-full');
    content = content.replace(/max-w-3xl/g, 'max-w-[1200px] w-full');
    content = content.replace(/max-w-4xl/g, 'max-w-[1200px] w-full');
    
    // Upgrade existing text classes that might not have exploded
    content = content.replace(/text-4xl lg:text-5xl/g, 'text-5xl lg:text-[6rem]');
    content = content.replace(/text-lg lg:text-xl/g, 'text-2xl lg:text-3xl');
    content = content.replace(/text-xl lg:text-2xl/g, 'text-3xl lg:text-4xl');
    content = content.replace(/text-lg text-slate-600/g, 'text-2xl lg:text-3xl text-slate-600');
    
    // Upgrade standard paddings
    content = content.replace(/p-6 lg:p-8/g, 'p-10 lg:p-14');
    content = content.replace(/p-8/g, 'p-12 lg:p-16');

    // Upgrade rounding
    content = content.replace(/rounded-2xl/g, 'rounded-[2rem]');
    content = content.replace(/rounded-3xl/g, 'rounded-[3rem]');
    content = content.replace(/rounded-\[2rem\]/g, 'rounded-[4rem]');

    
    if (content.length !== originalLength || true) {
        fs.writeFileSync(file, content);
        console.log("Upgraded", file);
    }
});

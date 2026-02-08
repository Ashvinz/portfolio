const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

// Function to defer scripts
function processHtml(content, filename) {
    let newContent = content;

    // 1. Replace image extensions with .webp (local assets only)
    // Matches src="assets/images/..." ending in .png, .jpg, .jpeg, .gif
    // Also background-image: url('assets/images/...')

    // Regex for src attributes
    newContent = newContent.replace(/src=["'](assets\/images\/[^"']+\.(?:png|jpg|jpeg|gif))["']/gi, (match, p1) => {
        return `src="${p1.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp')}"`;
    });

    // Regex for inline styles (background-image) if present
    // Note: This is fragile but covers common cases.
    newContent = newContent.replace(/url\(['"]?(assets\/images\/[^)'"]+\.(?:png|jpg|jpeg|gif))['"]?\)/gi, (match, p1) => {
        return `url('${p1.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp')}')`;
    });

    // 2. Add defer to non-essential scripts in <head>
    // Specifically looking for FontAwesome kit, Iconify if possible (external)
    // Actually, explicit defer attribute addition.

    // Defer FontAwesome
    newContent = newContent.replace(/<script src=['"]https:\/\/kit\.fontawesome\.com\/[^'"]+['"]><\/script>/gi, (match) => {
        return match.replace('<script', '<script defer');
    });

    // Defer Iconify
    newContent = newContent.replace(/<script src="https:\/\/code\.iconify\.design\/[^"]+"><\/script>/gi, (match) => {
        return match.replace('<script', '<script defer');
    });

    // 3. Preload critical image (background2.webp) in index.html
    if (filename === 'index.html') {
        if (!newContent.includes('<link rel="preload" as="image" href="assets/images/background2.webp">')) {
            newContent = newContent.replace('</head>', '    <link rel="preload" as="image" href="assets/images/background2.webp">\n</head>');
        }

        // Remove old preloader CSS link if we inline it later, but here just ensure it's handled.
        // Actually, let's inline preloader.css content.
        try {
            const preloaderCss = fs.readFileSync(path.join(__dirname, 'assets', 'css', 'preloader.css'), 'utf8');
            // Remove external link
            newContent = newContent.replace('<link rel="stylesheet" href="assets/css/preloader.css">', `<style>${preloaderCss}</style>`);
        } catch (e) {
            console.log('Could not inline preloader.css', e);
        }
    }

    // 4. Lazy load off-screen images
    // Add loading="lazy" to all images except the first one (usually hero/profile)
    // Simple heuristic: if img tag doesn't have loading attribute, add it.
    // Use regex to find img tags.
    // NOTE: Hero image in index.html is line 94: <img src="assets/images/background2.webp" ... class="rounded-circle" ...>
    // This is above fold? "margin-top: 140px".
    // It's likely visible. So don't lazy load it.
    // The wave hand (line 90) also visible.

    // We can add loading="lazy" to images that are likely below fold.
    // For now, let's just add it to project images if any.
    // Or simpler: add loading="lazy" to all, then remove from hero.

    // Replacer for img tags
    newContent = newContent.replace(/<img\s+([^>]+)>/gi, (match, attributes) => {
        if (match.includes('loading=')) return match; // Already has loading

        // Check if hero (background2) or Hand.gif
        if (match.includes('background2') || match.includes('Hand')) {
            return match.replace('<img', '<img fetchpriority="high"'); // High priority for hero
        }

        return match.replace('<img', '<img loading="lazy"');
    });

    return newContent;
}

htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = processHtml(content, file);
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${file}`);
});

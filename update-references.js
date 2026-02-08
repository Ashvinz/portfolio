const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const assetsDir = path.join(rootDir, 'assets');

function getAllFiles(dirPath, extensionFilter = []) {
    let files = [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            files = files.concat(getAllFiles(fullPath, extensionFilter));
        } else {
            if (extensionFilter.length === 0 || extensionFilter.includes(path.extname(entry.name).toLowerCase())) {
                files.push(fullPath);
            }
        }
    }
    return files;
}

const targetFiles = getAllFiles(rootDir, ['.html', '.css', '.js']);

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    const ext = path.extname(filePath).toLowerCase();

    // 1. Replace image extensions with .webp
    // Be careful not to replace external URLs unless they look like local paths
    // Regex for: assets/images/..... .png/.jpg/.jpeg/.gif
    // We are looking for strings that START with specific paths or just end with extensions if relative.
    // Safest bet: Look for "assets/images/..." pattern specifically as it is used in this project.

    // Replace assets/images/....(png|jpg|jpeg|gif) with .webp
    // This covers HTML src, CSS url(), and JS strings.
    content = content.replace(/(assets\/images\/[\w\-\.\/]+)\.(png|jpg|jpeg|gif)/gi, (match, p1, p2) => {
        // Check if file exists as .webp (to be safe? No, let's assume optimize-images run successfully)
        return `${p1}.webp`;
    });

    // 2. HTML Specific Optimizations
    if (ext === '.html') {
        // Defer scripts
        // FontAwesome
        content = content.replace(/<script src=['"]https:\/\/kit\.fontawesome\.com\/[^'"]+['"]><\/script>/gi, (match) => {
            return match.includes('defer') ? match : match.replace('<script', '<script defer');
        });
        // Iconify
        content = content.replace(/<script src="https:\/\/code\.iconify\.design\/[^"]+"><\/script>/gi, (match) => {
            return match.includes('defer') ? match : match.replace('<script', '<script defer');
        });

        // Lazy load images
        // Add loading="lazy" to all images that don't have it
        content = content.replace(/<img\s+([^>]+)>/gi, (match, attributes) => {
            if (attributes.includes('loading=')) return match;

            // Hero image check (background2 or Hand)
            // If it's the hero, add fetchpriority="high"
            if (attributes.includes('background2') || attributes.includes('Hand')) {
                return match.replace('<img', '<img fetchpriority="high"');
            }

            return match.replace('<img', '<img loading="lazy"');
        });

        // Specific to index.html
        if (filePath.endsWith('index.html')) {
            // Inline preloader CSS
            if (content.includes('assets/css/preloader.css')) {
                try {
                    const cssPath = path.join(assetsDir, 'css', 'preloader.css');
                    if (fs.existsSync(cssPath)) {
                        const cssContent = fs.readFileSync(cssPath, 'utf8');
                        content = content.replace('<link rel="stylesheet" href="assets/css/preloader.css">', `<style>${cssContent}</style>`);
                    }
                } catch (e) {
                    console.error('Error inlining CSS:', e);
                }
            }

            // Preload Hero Image
            if (!content.includes('<link rel="preload" as="image" href="assets/images/background2.webp">')) {
                content = content.replace('</head>', '    <link rel="preload" as="image" href="assets/images/background2.webp">\n</head>');
            }
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

targetFiles.forEach(file => {
    // Skip node_modules (if any, though we are in root)
    if (file.includes('node_modules')) return;
    processFile(file);
});

console.log('Reference updates complete.');

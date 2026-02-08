const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'assets', 'images');

// Function to recursively find image files
function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            if (['.png', '.jpg', '.jpeg', '.gif'].includes(path.extname(file).toLowerCase())) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const allImages = getFiles(imagesDir);

console.log(`Found ${allImages.length} images to process.`);

(async () => {
    for (const imagePath of allImages) {
        const ext = path.extname(imagePath).toLowerCase();
        const outputWebP = imagePath.replace(ext, '.webp');

        console.log(`Processing: ${imagePath}`);

        try {
            if (ext === '.gif') {
                // Optimization for gifs (limited support in sharp for animated gif -> webp sometimes, but let's try)
                // Or just keep it as is if optimization fails/isn't great.
                // Actually animated webp is supported.
                await sharp(imagePath, { animated: true })
                    .webp({ quality: 80 })
                    .toFile(outputWebP);
            } else {
                await sharp(imagePath)
                    .webp({ quality: 80 })
                    .toFile(outputWebP);
            }
            console.log(`Created: ${outputWebP}`);
        } catch (error) {
            console.error(`Error processing ${imagePath}:`, error);
        }
    }
    console.log('Image optimization complete.');
})();

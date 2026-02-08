const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexFile, 'utf8');

// Fix favicon type
if (content.includes('href="assets/images/favicon.webp" type="image/x-png"')) {
    content = content.replace('type="image/x-png"', 'type="image/webp"');
    fs.writeFileSync(indexFile, content);
    console.log('Fixed favicon type in index.html');
}

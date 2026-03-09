const fs = require('fs');
const path = require('path');
const dateStr = new Date().toISOString().split('T')[0];
const note = `// AUDITED & CLEANED — ${dateStr}\n`;

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (!content.startsWith('// AUDITED & CLEANED')) {
                fs.writeFileSync(fullPath, note + content);
            }
        }
    });
}
processDir('./src');
console.log('Done');

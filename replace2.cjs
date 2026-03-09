const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/Aruntej/Desktop/portfolio/src/components';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.jsx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        content = content.replace(/#050505/g, '#000000');

        fs.writeFileSync(filePath, content);
    }
});

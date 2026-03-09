const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/Aruntej/Desktop/portfolio/src/components';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.jsx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        content = content.replace(/#0a0f1e/g, '#000000');
        content = content.replace(/#0f172a/g, '#050505'); // Just a very dark shade for cards if they had #0f172a, or keep 000000. Let's use #000000 for pure black.
        content = content.replace(/#0f172a/g, '#000000');
        content = content.replace(/#3b82f6/g, '#4da6ff');
        content = content.replace(/glow-teal/g, 'glow-cyan');

        fs.writeFileSync(filePath, content);
    }
});

let appPath = 'C:/Users/Aruntej/Desktop/portfolio/src/App.jsx';
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(/#0a0f1e/g, '#000000');
appContent = appContent.replace(/#3b82f6/g, '#4da6ff');
fs.writeFileSync(appPath, appContent);

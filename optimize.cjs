const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

async function walk(dir) {
    let results = [];
    const list = await fs.readdir(dir);
    for (let file of list) {
        file = path.join(dir, file);
        const stat = await fs.stat(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(await walk(file));
        } else {
            if (/\.(png|jpe?g)$/i.test(file)) {
                results.push(file);
            }
        }
    }
    return results;
}

async function optimizeImages() {
    console.log('Finding images in assets/ ...');
    const images = await walk('assets');
    
    let originalSize = 0;
    let newSize = 0;

    for (const file of images) {
        const stat = await fs.stat(file);
        originalSize += stat.size;
        
        const ext = path.extname(file);
        const webpFile = file.replace(new RegExp('\\' + ext + '$', 'i'), '.webp');
        
        console.log('Converting ' + file + ' -> ' + webpFile);
        await sharp(file)
            .webp({ quality: 82 })
            .toFile(webpFile);
            
        const newStat = await fs.stat(webpFile);
        newSize += newStat.size;
        
        await fs.unlink(file); // Delete the original
    }
    
    console.log('Optimization complete!');
    console.log('Original: ' + (originalSize / 1024 / 1024).toFixed(2) + ' MB');
    console.log('New: ' + (newSize / 1024 / 1024).toFixed(2) + ' MB');
    console.log('Saved: ' + ((originalSize - newSize) / 1024 / 1024).toFixed(2) + ' MB');
    
    // Now replace references in HTML and CSS
    const rootFiles = await fs.readdir('.');
    for (const f of rootFiles) {
        if (f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.js')) {
            let content = await fs.readFile(f, 'utf8');
            // Safe replacement: match assets/... .png or .jpg and replace with .webp
            const updatedContent = content.replace(/(assets\/[a-zA-Z0-9_/-]+)\.(png|jpe?g)/gi, '$1.webp');
            if (content !== updatedContent) {
                console.log('Updated references in ' + f);
                await fs.writeFile(f, updatedContent, 'utf8');
            }
        }
    }
}

optimizeImages().catch(console.error);

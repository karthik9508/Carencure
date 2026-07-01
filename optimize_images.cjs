const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dirsToScan = ['Images', 'Gallery', 'Certificates'];
const extensions = ['.png', '.jpg', '.jpeg', '.jfif'];

async function processImages() {
  for (const d of dirsToScan) {
    const dirPath = path.join(__dirname, d);
    if (!fs.existsSync(dirPath)) continue;
    
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      if (file.toLowerCase() === 'icon.png') continue;
      
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        const fullPath = path.join(dirPath, file);
        const nameWithoutExt = path.basename(file, ext);
        const newFile = path.join(dirPath, `${nameWithoutExt}.webp`);
        
        console.log(`Converting ${fullPath} to WebP...`);
        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(newFile);
          fs.unlinkSync(fullPath);
        } catch (e) {
          console.error(`Failed on ${file}: ${e.message}`);
        }
      }
    }
  }

  const rootFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') || f === 'update_nav.cjs');
  for (const file of rootFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace .png, .jpg, .jfif with .webp, EXCEPT for icon.png
    content = content.replace(/\.(png|jpg|jpeg|jfif)/gi, (match, ext, offset, fullString) => {
        if (fullString.substring(offset - 4, offset).toLowerCase() === 'icon') {
            return match;
        }
        return '.webp';
    });
    
    // Inject loading="lazy" for all img tags EXCEPT Hero and Logo
    content = content.replace(/<img([^>]*)>/gi, (match, p1) => {
      if (p1.includes('loading="') || p1.includes('Hero') || p1.includes('logo')) {
        return match;
      }
      return `<img loading="lazy"${p1}>`;
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

processImages().catch(console.error);

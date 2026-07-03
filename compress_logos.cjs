const sharp = require('sharp');
const fs = require('fs');

async function compress() {
  // Compress logo.webp
  const logo = 'd:/web/Carencure/Images/logo.webp';
  if (fs.existsSync(logo)) {
    const logoBuffer = fs.readFileSync(logo);
    await sharp(logoBuffer)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile('d:/web/Carencure/Images/logo_opt.webp');
    fs.copyFileSync('d:/web/Carencure/Images/logo_opt.webp', logo);
    fs.unlinkSync('d:/web/Carencure/Images/logo_opt.webp');
    console.log('Compressed logo.webp');
  }

  // Compress icon.png
  const icon = 'd:/web/Carencure/Images/icon.png';
  if (fs.existsSync(icon)) {
    const iconBuffer = fs.readFileSync(icon);
    await sharp(iconBuffer)
      .resize({ width: 256, withoutEnlargement: true }) // icons don't need to be huge
      .png({ quality: 80, compressionLevel: 9 })
      .toFile('d:/web/Carencure/Images/icon_opt.png');
    fs.copyFileSync('d:/web/Carencure/Images/icon_opt.png', icon);
    fs.unlinkSync('d:/web/Carencure/Images/icon_opt.png');
    console.log('Compressed icon.png');
  }
}

compress();

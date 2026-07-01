const sharp = require('sharp');
const fs = require('fs');

async function compress() {
  const file = 'd:/web/Carencure/Images/arun.webp';
  const buffer = fs.readFileSync(file);
  await sharp(buffer)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile('d:/web/Carencure/Images/arun_optimized.webp');
  
  fs.copyFileSync('d:/web/Carencure/Images/arun_optimized.webp', file);
  fs.unlinkSync('d:/web/Carencure/Images/arun_optimized.webp');
  console.log('Compressed arun.webp');
}

compress();

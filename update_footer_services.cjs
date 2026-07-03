const fs = require('fs');
const path = require('path');

const root = 'd:/web/Carencure';
const files = fs.readdirSync(root).filter(f => f.endsWith('.html'));

const oldBlock = `          <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="services.html#cockroach" class="hover:text-secondary transition-colors">Cockroach Control</a></li>
            <li><a href="services.html#termite" class="hover:text-secondary transition-colors">Termite Control</a></li>
            <li><a href="services.html#rodent" class="hover:text-secondary transition-colors">Rodent Control</a></li>
            <li><a href="services.html#bedbug" class="hover:text-secondary transition-colors">Bed Bug Control</a></li>
            <li><a href="services.html#mosquito" class="hover:text-secondary transition-colors">Mosquito Control</a></li>
            <li><a href="services.html#redant" class="hover:text-secondary transition-colors">Red Ant Control</a></li>
            <li><a href="services.html#ratmice" class="hover:text-secondary transition-colors">Rat & Mice</a></li>
          </ul>`;

const newBlock = `          <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="services.html#cockroach" class="hover:text-secondary transition-colors">Cockroach Control</a></li>
            <li><a href="services.html#termite" class="hover:text-secondary transition-colors">Termite Control</a></li>
            <li><a href="services.html#rodent" class="hover:text-secondary transition-colors">Rodent Control</a></li>
            <li><a href="services.html#bedbug" class="hover:text-secondary transition-colors">Bed Bug Control</a></li>
            <li><a href="services.html#mosquito" class="hover:text-secondary transition-colors">Mosquito Control</a></li>
            <li><a href="services.html#redant" class="hover:text-secondary transition-colors">Red Ant Control</a></li>
            <li><a href="services.html#ratmice" class="hover:text-secondary transition-colors">Rat & Mice</a></li>
            <li><a href="services.html#spider" class="hover:text-secondary transition-colors">Spider Control</a></li>
          </ul>`;

files.forEach(file => {
  const filePath = path.join(root, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes(oldBlock)) {
    content = content.replace(oldBlock, newBlock);
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  } else {
    console.log('Could not find block in ' + file);
  }
});

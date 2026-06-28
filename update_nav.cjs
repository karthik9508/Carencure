const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const links = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About Us' },
  { href: 'services.html', label: 'Services' },
  { href: 'certificates.html', label: 'Certificates' },
  { href: 'gallery.html', label: 'Gallery' },
  { href: 'contact.html', label: 'Contact' }
];

htmlFiles.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Build Desktop Nav
  let desktopNavHtml = '      <nav class="hidden md:flex gap-6 items-center">\n';
  links.forEach(link => {
    const isActive = link.href === file || (file === 'index.html' && link.href === '/');
    const classes = isActive ? 'text-primary font-medium transition-colors' : 'text-gray-600 hover:text-primary transition-colors';
    desktopNavHtml += `        <a href="${link.href}" class="${classes}">${link.label}</a>\n`;
  });
  desktopNavHtml += '      </nav>';

  // Build Mobile Nav
  let mobileNavHtml = '      <nav class="flex flex-col px-4 py-2">\n';
  links.forEach((link, index) => {
    const isActive = link.href === file || (file === 'index.html' && link.href === '/');
    const isLast = index === links.length - 1;
    const baseClasses = 'py-2 ' + (isLast ? '' : 'border-b border-gray-100');
    const textClasses = isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors';
    mobileNavHtml += `        <a href="${link.href}" class="${baseClasses} ${textClasses}">${link.label}</a>\n`;
  });
  mobileNavHtml += '      </nav>';

  const fullHeader = `  <!-- Header / Navbar -->
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-custom py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-poppins font-bold text-primary flex items-center gap-2">
        <svg class="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
        Carencure
      </a>
      
${desktopNavHtml}

      <div class="hidden md:block">
        <a href="tel:+919894677328" class="btn-primary">Call Now</a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100">
${mobileNavHtml}
    </div>
  </header>`;

  // Replace everything between <header> and </header>
  const updatedContent = content.replace(/<!-- Header \/ Navbar -->[\s\S]*?<\/header>|<header[\s\S]*?<\/header>/i, fullHeader);

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated navigation in ${file}`);
  }
});

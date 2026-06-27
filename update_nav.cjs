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
  let desktopNavHtml = '<nav class="hidden md:flex gap-6 items-center">\n';
  links.forEach(link => {
    const isActive = link.href === file;
    const classes = isActive ? 'text-primary font-medium transition-colors' : 'text-gray-600 hover:text-primary transition-colors';
    desktopNavHtml += `        <a href="${link.href}" class="${classes}">${link.label}</a>\n`;
  });
  desktopNavHtml += '      </nav>';

  // Build Mobile Nav
  let mobileNavHtml = '<nav class="flex flex-col px-4 py-2">\n';
  links.forEach((link, index) => {
    const isActive = link.href === file;
    const isLast = index === links.length - 1;
    const baseClasses = 'py-2 ' + (isLast ? '' : 'border-b border-gray-100');
    const textClasses = isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary transition-colors';
    mobileNavHtml += `        <a href="${link.href}" class="${baseClasses} ${textClasses}">${link.label}</a>\n`;
  });
  mobileNavHtml += '      </nav>';

  // Replace Desktop Nav
  content = content.replace(/<nav class="hidden md:flex gap-6 items-center">[\s\S]*?<\/nav>/, desktopNavHtml);

  // Replace Mobile Nav
  content = content.replace(/<nav class="flex flex-col px-4 py-2">[\s\S]*?<\/nav>/, mobileNavHtml);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated navigation in ${file}`);
});

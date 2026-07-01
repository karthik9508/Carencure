const fs = require('fs');
const path = require('path');

const filesToUpdate = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
filesToUpdate.push(path.join('src', 'main.js'));

filesToUpdate.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Step 1: Replace full name combinations
  content = content.replace(/Caren[cC]ure\s+Pest\s+Control\s+Services?/g, 'Care N Cure Pest Control Service');
  
  // Step 2: Replace partial name combinations
  content = content.replace(/Caren[cC]ure\s+Pest\s+Control/g, 'Care N Cure Pest Control Service');

  // Step 3: Replace standalone name
  // Exclude lowercase carencure which usually denotes domain names / emails
  // We are specifically looking for CarenCure or Carencure
  content = content.replace(/Caren[cC]ure(?!\s*pestcontrol\.com)/g, 'Care N Cure Pest Control Service');

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});

const fs = require('fs');
const https = require('https');

const files = [
  'App.tsx',
  'components/About.tsx',
  'components/Contact.tsx',
  'components/Features.tsx',
  'components/Footer.tsx',
  'components/Header.tsx',
  'components/Hero.tsx',
  'components/ProductModal.tsx',
  'components/Products.tsx',
  'data/products.ts'
];

files.forEach(file => {
  const url = `https://raw.githubusercontent.com/Hyt-1020/HyTork/main/${file}`;
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const dir = file.split('/').slice(0, -1).join('/');
      if (dir && !fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(file, data);
      console.log(`Downloaded ${file}`);
    });
  });
});

const https = require('https');

https.get('https://raw.githubusercontent.com/Hyt-1020/HyTork/main/data/products.ts', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});

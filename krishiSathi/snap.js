const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

function delay(ms){ return new Promise(res => setTimeout(res, ms)); }

async function snap(file, out){
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  const url = 'file://' + file;
  await page.goto(url, { waitUntil: 'networkidle2' });
  await delay(1000);
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
}

(async () => {
  const base = path.resolve(__dirname);
  const shots = path.join(base, 'screenshots');
  if(!fs.existsSync(shots)) fs.mkdirSync(shots);
  await snap(path.join(base, 'index.html'), path.join(shots, 'index.png'));
  await snap(path.join(base, 'market.html'), path.join(shots, 'market.png'));
  await snap(path.join(base, 'farmer.html'), path.join(shots, 'farmer.png'));
  console.log('Saved screenshots to', shots);
})();
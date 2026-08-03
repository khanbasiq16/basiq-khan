const { chromium } = require('playwright');
(async () => {
  const outDir = process.argv[2];
  const browser = await chromium.launch();
  for (const w of [1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto('http://localhost:5500/services/web-development', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${outDir}/hero_${w}.png` });
    await page.close();
  }
  await browser.close();
})();

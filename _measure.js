const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  for (const w of [1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width: w, height: 1000 } });
    await page.goto('http://localhost:5500/services/web-development', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    const box = await page.locator('img[alt*="Laptop and phone"]').boundingBox();
    console.log(w, box);
    await page.close();
  }
  await browser.close();
})();

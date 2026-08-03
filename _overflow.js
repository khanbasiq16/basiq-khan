const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const widths = [320, 360, 375, 390, 414, 480, 576, 640, 768, 820, 912, 1024, 1280, 1366, 1440, 1536, 1600, 1728, 1920, 2560];
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto('http://localhost:5500/services/web-development', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    const { sw, cw } = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
    const overflow = sw - cw;
    console.log(`${w}px -> overflow=${overflow}${overflow > 1 ? '  <-- OVERFLOW' : ''}`);
    await page.close();
  }
  await browser.close();
})();

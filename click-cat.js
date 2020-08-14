const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.catwarehouse.com/');
    let clickTheCat = 0;
    while(clickTheCat < 1001) {
        await page.click('#catclick');
        clickTheCat += 1;
    }
    await page.screenshot({
        path: 'catclicked.png'
    });

    await browser.close();
})();
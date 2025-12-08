import { test, expect, chromium } from '@playwright/test';



test('Auto suggestions for google', async ({ page, request }) => {


    await page.goto('https://www.google.com/')


    const acceptBtn = page.locator("text=I agree")

    // if (await acceptBtn.isVisible()) {
    //     await acceptBtn.click()
    // }

    await page.locator("//textarea[@name='q']").fill('Playwright')
    // await page.waitForTimeout(3000)


    const autosuggest=page.locator("//ul[@role='listbox']/li")

    await autosuggest.first().waitFor({ state: 'visible' });


    console.log("No of auto suggestions:", await autosuggest.count())


    for (let i = 0; i < await autosuggest.count(); i++) {

        console.log(await autosuggest.nth(i).innerText())


       const text = await autosuggest.nth(i).innerText()
        if (text.toLowerCase().includes("playwright")) {
            await autosuggest.nth(i).click()
            //await page.waitForNavigation(); // wait for search results
            console.log('Clicked on suggestion:', text);
            break;

        }


    }

    
    // await page.waitForTimeout(5000)
    // const title=await page.title()
    // console.log("Title is:",title)


})




 
for (const browserType of ['chromium', 'firefox', 'webkit']) {
  test.only(`Cross browser - ${browserType}`, async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    expect(await page.title()).toContain('Example');
    await browser.close();
  });
}




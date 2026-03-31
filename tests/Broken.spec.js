




import { test, expect, chromium } from '@playwright/test';

test('This test is broken', async ({ page ,request}) => {


    await page.goto("https://www.google.com/")


    const links=await page.locator("a").all()
    console.log(`🔗 Total links found: ${await links.length()   }`)

    for(const link of links){
        const href=await link.getAttribute("href")
        console.log(href)
        if(href && href.startsWith("http")){
            const response=await page.request.get(href)
            const status=response.status()
            if(status>=400){
                console.log(href,"is broken link with status code",status)
            }else{
                console.log(href,"is valid link with status code",status)
            }
        }
    }
})


test('link names', async ({ page}) => {

    await page.goto("https://www.google.com/")

    const links = await page.locator("a").all()

    for(const link of links){

        const linknames=await link.textContent();
        console.log(linknames)

        if(linknames.includes("Gmail")){
            console.log("Gmail link is present")
            await link.click()
            await page.waitForLoadState("networkidle")
            const url=page.url()
            console.log("Navigated to:", url)
            expect(url).toContain("gmail")
        }

    }

})


test('No of pages', async ({ page }) => {


    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
    const page3=await context.newPage();    

    await page1.goto("https://www.google.com/")
    await page2.goto("https://www.facebook.com/")
    await page3.goto("https://www.amazon.com/")
    console.log("Total pages opened:",await  context.pages().length)

    await page2.bringToFront()
    console.log("Current page title:",await page2.title())

   // await browser.close()
   await page1.close()
   console.log("Total pages after closing one page:",await context.pages().length)

})

test.only("No of textboxes", async ({ page }) => {
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)
    const textboxes = page.getByRole('textbox');

for (let i = 0; i < await textboxes.count(); i++) {
  const placeholder = await textboxes.nth(i).getAttribute('placeholder');
  console.log(`Textbox ${i + 1}:`, placeholder);
}


})
        
    


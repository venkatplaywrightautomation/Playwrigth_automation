


import { test, expect, chromium } from '@playwright/test';    


test('Verify number of pages in the application', async () => {


    const browser= await chromium.launch()

    const context= await browser.newContext()

    const page1= await context.newPage()
    const page2= await context.newPage()

    const pages= context.pages()

    console.log("Number of pages open in the application are: "+ pages.length)

    expect(pages.length).toBe(2)
    await page1.goto('https://facebook.com')
    await page2.goto('https://google.com')
    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)
    await page1.bringToFront()
    await page1.waitForTimeout(3000)
 

})

test.only("No of links in the page", async ({page})=>{

    await page.goto("https://google.com")

    const links=await page.locator("a")
    console.log("Number of links in the page are: "+ await links.count())

    for(let i=0;i<await links.count();i++){

       const text= await links.nth(i).innerText()
       console.log(text)
       if(text==="Terms")
       {
        await links.nth(i).click()
        await page.waitForTimeout(3000)
       }
    }
})
import {test,expect, chromium} from '@playwright/test'



test("Multiple windows",async ()=>{


    const browser= await chromium.launch()

    const context= await browser.newContext()

    const page1=await context.newPage()

    const page2= await context.newPage()

    const allPages= context.pages()


    console.log("No of Pages: "+ allPages.length)


    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   const title1= await page1.title()
console.log("Page 1 title is :",title1)


await expect(page1).toHaveTitle("OrangeHRM")

//await page1.click("//a[normalize-space()='OrangeHRM, Inc']")

await page2.goto("https://www.orangehrm.com/")
   const title2= await page2.title()
console.log("Page 2 title is :",title2)
await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")


})


test("Multiple windows 2",async ()=>{


    const browser= await chromium.launch()

    const context= await browser.newContext()

    const page1=await context.newPage()



    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  

await expect(page1).toHaveTitle("OrangeHRM")



//await page1.click("//a[normalize-space()='OrangeHRM, Inc']")

//await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")
const pagePromise=context.waitForEvent('page')
await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
const newPage= await pagePromise;


await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")


await page1.waitForTimeout(3000)
await newPage.waitForTimeout(3000)
await page1.bringToFront()
await page1.waitForTimeout(3000)

})




test("Multiple windows 3",async ()=>{


    const browser= await chromium.launch()

    const context= await browser.newContext()

    const page1=await context.newPage()

    const page2= await context.newPage()

    const allPages= context.pages()


    console.log("No of Pages: "+ allPages.length)


    const second= allPages[1]

    await second.bringToFront()


})


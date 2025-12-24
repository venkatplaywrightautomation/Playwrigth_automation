


import { test, expect } from '@playwright/test';    



test.only("checkbox",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    await page.locator("//input[@id='sunday' and @type='checkbox']").check()
    await page.waitForTimeout(3000)
    await expect(page.locator("#sunday")).toBeChecked()

    expect(await page.locator("#sunday").isChecked()).toBeTruthy()


    const checkbo= await page.$$("input[type='checkbox']")
    console.log("total no of checkboxes in the page are: "+ checkbo.length)

for(const lo of checkbo){
    await lo .check()
    await page.waitForTimeout(1000)
}


    // for(let i=0;i<checkboxcount;i++){

    //     const checkboxname= await page.locator("input[type='checkbox']").nth(i).getAttribute("id")
    //     console.log("checkbox names are: "+ checkboxname)
    //     if(checkboxname==="sunday" || checkboxname==="saturday"){

    //         await page.locator("input[type='checkbox']").nth(i).check()
    //         await page.waitForTimeout(1000)
    //         expect (await page.locator("input[type='checkbox']").nth(i).isChecked()).toBeTruthy()

          

    //     }

        
    // }
   
    const checkbox=[

        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='tuesday' and @type='checkbox']",
       // "//input[@id='wednesday' and @type='checkbox']",
       // "//input[@id='thursday' and @type='checkbox']",
        "//input[@id='friday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"

    ]

    // for(let i=0;i<=checkboxcount;i++){

    //     await page.locator(checkbox[i]).check()
    //     await page.waitForTimeout(1000)
    //     //expect (await page.locator(checkbox[i]).isChecked()).toBeTruthy()
    // }


    // for(const locator of checkbox){
    //     await page.locator(locator).check()
    //     await page.waitForTimeout(1000)
    //   //  expect (await page.locator(locator).isChecked()).toBeTruthy()
    // }

    
    // for(const locator of checkbox){
    //     if(await page.locator(locator).isChecked()){

    //     await page.locator(locator).uncheck()
    //     await page.waitForTimeout(1000)
    //   //  expect (await page.locator(locator).isChecked()).toBeTruthy()
    // }

//}
})



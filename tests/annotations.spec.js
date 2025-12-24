import { test, expect, chromium } from '@playwright/test'
import { randomBytes } from 'crypto';












test("page title", async () => {


    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://google.com');


    const link = page.locator("//a")

    const linkCount = await link.count()


    for (let i = 0; i <= linkCount; i++) {

        let text = await link.nth(i).textContent()
        if (text.includes("About")) {

            await link.nth(i).click()
            break
        }

    }

    const t=await page.title()
    console.log(t)
    await page.waitForTimeout(3000)

    
})




test("check boxes",async ({page})=>{


    await page.goto("")
    const checkboxes= page.locator("//[input[@type='checkbox']")

    const cou=await checkboxes.count()


    // for(let i=0;i<cou;i++){

    //     await checkboxes.nth(i).check()
    // }


    await Promise.all(
        (await checkboxes.all()).map(c=>c.check())
    )
})


test("check boxes already checked",async ({page})=>{


    await page.goto("")
    const checkboxes= page.locator("//[input[@type='checkbox']")

    const cou=await checkboxes.count()


    for(let i=0;i<cou;i++){

        if(!(checkboxes.nth(i).isChecked())){
            await checkboxes.nth(i).check()

        }
    }

   
})
test("check boxes check if not check",async ({page})=>{


    await page.goto("")
    const checkboxes= page.locator("//[input[@type='checkbox']")

    const cou=await checkboxes.count()

for(let i=0;i<cou;i++){

    const check= checkboxes.nth(i)
    if(await check.isChecked()){

        await check.uncheck()
    }
    else{

        await check.check()
    }
}

   
})

test("Random Checkboxes check",async ({page})=>{


    await page.goto("")
    const checkboxes= page.locator("//[input[@type='checkbox']")

    const cou=await checkboxes.count()


   const reandomcheck= Math.floor(Math.random() * cou)

   await checkboxes.nth(randomBytes).check()

   
})
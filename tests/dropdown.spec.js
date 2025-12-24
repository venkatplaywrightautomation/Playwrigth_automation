

import { test, expect } from '@playwright/test';    


test("drop down handling",async ({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    const state= page.locator("#state")
    const city= await state.locator("option")
    console.log("total no of dropdown values are: "+ await city.count())

    let isRajasthan=false
    for(let i=0;i<await city.count();i++){
        const ddvalues= await city.nth(i).innerText()
        console.log("dropdown values are:${i} "+ ddvalues)
        if(ddvalues.trim()==="Rajasthan"){
            isRajasthan=true
            await state.selectOption("Rajasthan")
            break
        }
    }


})

   
import { test, expect } from '@playwright/test'




import dotenv from 'dotenv'
import { Loginpage } from '../Pages/Login.js'


import { log } from 'console'



test("Valid username and password", async ({ page }) => {

    const login = new Loginpage(page)
   

   //await login.navigateToURL(process.env.URL)



    //await login.navigateToURL("https://www.saucedemo.com/")
    await login.navigateToURL(process.env.URL)
    

    //   // "test:qa": "cross-env $env:TEST_ENV='qa' npx playwright test env.spec.js --project=chromium --headed"

    //await page.goto("https://www.saucedemo.com/")

    //await login.enterUserNamePassword("standard_user","secret_sauce")
    await login.enterUserNamePassword(process.env.USERNAME1, process.env.PASSWORD)
    await expect(await login.isInventoryBisible).toBeTruthy()
    await login.waitForTime(5000)
    //await expect(await login.getErrorMessage).toConain("something")

    //    await page.locator("//input[@id='user-name']").fill("standard_user")
    //     await page.locator("//input[@id='password']").fill("secret_sauce")
    //     await page.locator("//input[@id='login-button']").click()

})



test("inValid username and invalid password", async ({ page }) => {

    const login = new Loginpage(page)

    //await login.navigateToURL("https://www.saucedemo.com/")
    await login.navigateToURL(process.env.URL)
    await login.waitForTime(page, 3000)



    //await page.goto("https://www.saucedemo.com/")

     await login.enterUserNamePassword(process.env.USERNAME1,process.env.PASSWORD)

    // await login.waitForTime(5000)


    //await expect(await login.getErrorMessage).toContain("Epic sadface")

})


test("console log", async ({ page }) => {
    console.log(process.env.URL)
    console.log(process.env.USERNAME1)
    console.log(process.env.PASSWORD)

})


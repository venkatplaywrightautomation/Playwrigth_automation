


import {test} from "@playwright/test"


import { chromium } from "@playwright/test";

test("login",async ()=>{

    



    // await page.goto("https://www.google.com/")

    // //https://www.google.com/
    
    // await page.waitForTimeout(3000)


     
        const browser= await chromium.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    //await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await page.waitForTimeout(5000);



})
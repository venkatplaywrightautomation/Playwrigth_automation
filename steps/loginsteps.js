


import { Given,Then,When,setDefaultTimeout } from "@cucumber/cucumber";   


import { chromium ,expect} from "@playwright/test";

import { strictEqual } from "assert";


let browser;
let page;

Given("user is on thesaas  login page",async function () {
    
 browser= await chromium.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:false})

 page= await browser.newPage();
 await page.goto("https://www.saucedemo.com/") 
})

When("User enter username",async ({page})=> {

    //await page.fill("#user-name","standard_user")
    await page.locator("#user-name").fill("standard_user")

})

When("user enter password",async function() {

    await page.fill("#password","secret_sauce")
})

When("user clik on login button",async function() {


    await page.click("#login-button")

})
Then("user should see the home page",async function() {


    const title= await page.title()

    //expect(title).toHaveTitle("Swag Labs")
    strictEqual(title,"Swag Labs")
    await browser.close()
})
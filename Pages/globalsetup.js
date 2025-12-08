
import {chromium,test,expect} from '@playwright/test';

async function  globalSetuPO(){
    
    
    
    const browser= await chromium.launch({headless:false});
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://www.saucedemo.com/");
//await page.goto("https://www.saucedemo.com/");
await page.locator("//input[@id='user-name']").fill("standard_user");

await page.locator("//input[@id='password']").fill("secret_sauce");
await page.locator("//input[@id='login-button']").click();
await page.waitForTimeout(5000);
await page.context().storageState({path:'testdata/auth.json'});
}

export default globalSetuPO;
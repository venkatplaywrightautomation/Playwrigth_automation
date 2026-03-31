// global-setup.ts
import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

 await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@id='user-name']").fill("standard_user")  
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()
    await page.context().storageState({ path: './Loginauth.json' });
    //await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service")
    await  page.waitForTimeout(3000)
  //await browser.close();
}

export default globalSetup;



import { chromium } from '@playwright/test';

import globalSetup from '../globalsetup';   
import { test, expect } from '@playwright/test';    
 test(`data driven testing with invalid data`, async ({ page }) => {
    // await page.goto("/inventory.html/")
//     await page.locator("//input[@id='user-name']").fill(logindata.username)  
//     await page.locator("//input[@id='password']").fill(logindata.password)
//     await page.locator("//input[@id='login-button']").click()
    //await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service")
   // await  page.waitForTimeout(3000)
    await expect(page).toHaveTitle("Swag Labs")
    await page.locator('button :visible').click({trial: true})


})


test('test1', async ({ page }) => {

  //await page.goto("/inventory.html/")
  await page.waitForTimeout(3000)
await expect(page).toHaveTitle("Swag Labs1")
})
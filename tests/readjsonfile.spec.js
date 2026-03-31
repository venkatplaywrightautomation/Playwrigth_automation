



import { test, expect } from '@playwright/test';
import fs from 'fs';

import data  from '../testdata/logindata.json'
import { log } from 'console';

// import path from 'path';    
// const path1=path.resolve(__dirname,'../testdata/logindata.json')

// const data = JSON.parse(fs.readFileSync(path1))


// const path1='testdata/logindata.json'

// const data= JSON.parse(fs.readFileSync(path1))

test(`data driven testing with valid data ${data.username}`, async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@id='user-name']").fill(data.username)
    await page.locator("//input[@id='password']").fill(data.password)
    await page.locator("//input[@id='login-button']").click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await  page.waitForTimeout(3000)
    
})



data.forEach(logindata => 
{
test.only(`data driven testing with invalid data ${logindata.username}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@id='user-name']").fill(logindata.username)  
    await page.locator("//input[@id='password']").fill(logindata.password)
    await page.locator("//input[@id='login-button']").click()
    //await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service")
    await  page.waitForTimeout(3000)
})

})


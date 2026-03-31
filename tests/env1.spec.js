




// import { test, expect } from '@playwright/test';


//         import dotenv from 'dotenv';
// import path from 'path';

// //dotenv.config({ path: path.resolve(__dirname, '../.env.qa') });

// test("env file ", async ({page})=>{

//     console.log(process.env.URL)
//     console.log(process.env.USERNAME1)
//     console.log(process.env.PASSWORD)   

//     const url= process.env.URL
//     const username= process.env.USERNAME1
//     const password= process.env.PASSWORD
//      await page.goto(url)    
//     await page.waitForLoadState('networkidle')
//     await page.locator('#user-name').fill(username)
//     await page.locator('#password').fill(password)
//     await page.locator('#login-button').click()
//     await page.waitForLoadState('networkidle')
//     const title= await page.locator('.title').innerText()
//     console.log(title)
//     expect(title).toBe('Products')  
  
// })


// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   await page.locator('[data-test="username"]').fill('standard_user');
 
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
// });


// test.beforeEach(async ({page}) =>{

//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// })

// test('test1', async ({ page }) => {

//  // await page.locator("//input[@placeholder='Username']").fill("Admin")

// })
// test('test2', async ({ page }) => {

// })

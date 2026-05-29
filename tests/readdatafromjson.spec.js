import fs from 'fs'



import { test, expect } from '@playwright/test';


import data from '../testdata/usernames.json';
import testdata from '../testdata/differentData.json'


import  arr from '../testdata/array.json';



// console.log(arr[0].fname);

// console.log(arr[1].fname);


console.log(arr.users[0].fname );
console.log(arr.users[1].fname );



test.beforeEach(async ({ page }) => {





    await page.goto(data.url);

    await page.locator("//input[@placeholder='Username']").fill(data.username);

    await page.locator("//input[@placeholder='Password']").fill(data.password);
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000);


})

test.skip('this is test 1', async ({ page }) => {
    //await page.goto(data.url);  
    //await page.locator('input[name="username"]').fill(data.username);  
    // await page.waitForTimeout(3000); 
    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Recruitment']").click()

    await page.locator("//button[normalize-space()='Add']").click()
    await page.waitForTimeout(3000);
    await page.locator("//input[@placeholder='First Name']").fill(testdata.fname)
    await page.locator("//input[@placeholder='Middle Name']").fill(testdata.middleName)
    await page.locator("//input[@placeholder='Last Name']").fill(test.lname)
    await page.locator("(//input[@placeholder='Type here'])[1]").fill(testdata.email)

})







test.skip('this is test 2' , async ({ page }) => {
    //await page.goto(data.url);  
    //await page.locator('input[name="username"]').fill(data.username);  
    // await page.waitForTimeout(3000); 


    console.log("this is test 2");

})




// testdata.forEach((data) =>{

// test('this is test 1' + data.fname, async ({ page }) => {
//     //await page.goto(data.url);  
//     //await page.locator('input[name="username"]').fill(data.username);  
//     // await page.waitForTimeout(3000); 
//     await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Recruitment']").click()

//     await page.locator("//button[normalize-space()='Add']").click()
//     await page.waitForTimeout(3000);
//     await page.locator("//input[@placeholder='First Name']").fill(data.fname)
//     await page.locator("//input[@placeholder='Middle Name']").fill(data.middleName)
//     await page.locator("//input[@placeholder='Last Name']").fill(data.lname)
//     await page.locator("(//input[@placeholder='Type here'])[1]").fill(data.email)
//     await page.waitForTimeout(5000); 

// })

// })





// for (const data of testdata)

//     {
// test('this is test 1' + data.fname, async ({ page }) => {
//     //await page.goto(data.url);  
//     //await page.locator('input[name="username"]').fill(data.username);  
//     // await page.waitForTimeout(3000); 
//     await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Recruitment']").click()

//     await page.locator("//button[normalize-space()='Add']").click()
//     await page.waitForTimeout(3000);
//     await page.locator("//input[@placeholder='First Name']").fill(data.fname)
//     await page.locator("//input[@placeholder='Middle Name']").fill(data.middleName)
//     await page.locator("//input[@placeholder='Last Name']").fill(data.lname)
//     await page.locator("(//input[@placeholder='Type here'])[1]").fill(data.email)
//     await page.waitForTimeout(5000); 

// })

//     }
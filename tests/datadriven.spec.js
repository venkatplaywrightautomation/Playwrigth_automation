

import {test,expect} from '@playwright/test'

import fs from 'fs';

//import data from '../testdata/data.json' assert { type: "json" };






const path1='testdata/data.json'

const jsondata= JSON.parse(fs.readFileSync(path1))


//console.log(jsondata) 




for(const data of jsondata){



    test(`data driven testing ${data.username}`,async({page}) =>{



 
   await page.goto("https://www.saucedemo.com/")

   await page.locator("//input[@id='user-name']").fill(data.username)
    await page.locator("//input[@id='password']").fill(data.password)
    await page.locator("//input[@id='login-button']").click()

   // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  
    
   })

}




//    test(`data driven testing with invalid data ${data.username}`,async({page}) =>{
//     await page.goto("https://www.saucedemo.com/")
//     await page.locator("//input[@id='user-name']").fill(data.username)
//      await page.locator("//input[@id='password']").fill(data.password)
//      await page.locator("//input[@id='login-button']").click()  
//         await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service")


   
// })




test('Add product to cart on saucedemo', async ({ page }) => {
    // Navigate to saucedemo
    await page.goto('https://www.saucedemo.com/');
    
    // Login with standard user
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Wait for products to load
    await page.waitForSelector('.inventory_item');
    
    // Add first product to cart
    await page.click('.inventory_item:first-child button[id*="add-to-cart"]');
    
    // Verify cart badge shows 1 item
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    // Click on cart
    await page.click('.shopping_cart_link');
    
    // Verify product is in cart
    await expect(page.locator('.cart_item')).toBeVisible();
    
    // Optional: Verify specific product details
    await expect(page.locator('.inventory_item_name')).toBeVisible();
    await expect(page.locator('.inventory_item_price')).toBeVisible();

    await page.waitForTimeout(5000);
});





test.only('Add two products to cart on saucedemo', async ({ page }) => {
    // Navigate to saucedemo
    await page.goto('https://www.saucedemo.com/');
    
    // Login with standard user
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Wait for products to load
    await page.waitForSelector('.inventory_item');
    
    // Add first product to cart
    await page.click('.inventory_item:nth-child(1) button[id*="add-to-cart"]');
    
    // Add second product to cart
    await page.click('.inventory_item:nth-child(2) button[id*="add-to-cart"]');
    
    // Verify cart badge shows 2 items
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    
    // Click on cart
    await page.click('.shopping_cart_link');
    
    // Verify two products are in cart
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(2);
    
    // Optional: Verify specific product details
    const productNames = page.locator('.inventory_item_name');
    await expect(productNames).toHaveCount(2);
    
    const productPrices = page.locator('.inventory_item_price');
    await expect(productPrices).toHaveCount(2);

    await page.waitForTimeout(5000);
    
});
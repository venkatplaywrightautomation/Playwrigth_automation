



import { test, expect, chromium } from '@playwright/test';

import {login} from "../Utilities/addtocart"

test('This test add to cart button', async ({ page }) => {

   // await page.goto('https://www.saucedemo.com/');

    const LoginPge=new login(page)
    await LoginPge.login("standard_user","secret_sauce")
    await LoginPge.addOnCart("Sauce Labs Bike Light")

    // // Login
    // await page.fill('#user-name', 'standard_user');
    // await page.fill('#password', 'secret_sauce');
    // await page.click('#login-button');

    // // Product name
    // const productName = 'Sauce Labs Backpack';
    // console.log("Product name:", productName);
    // await page.waitForTimeout(3000)


    // const products = page.locator(".inventory_item")
    // const count = await products.count();
    // console.log("Total no of products", count)

    // let productNames = "Sauce Labs Bike Light"
    // for (let i = 0; i < count; i++) {

    //     const name = await products.nth(i).locator(".inventory_item_name").textContent()
    //     console.log("Product name:", name)

    //     if (name.trim() === productNames) {
            
    //     await products.nth(i).locator("button").click()
    //      //await page.waitForTimeout(3000)
    //     break;
    //     }
       

    // }

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
     await page.click('.shopping_cart_link');
    //    await expect(page.locator('.inventory_item_name'))
    // .toHaveText(productName);
      // 🔹 Checkout
  await page.click('#checkout');

  // 🔹 Fill checkout details
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '500001');

  await page.click('#continue');

  // 🔹 Validate overview page
  await expect(page.locator('.summary_info')).toBeVisible();

  // 🔹 Finish order
  await page.click('#finish');

  // 🔹 Validate success message
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
    await page.waitForTimeout(3000) 

})
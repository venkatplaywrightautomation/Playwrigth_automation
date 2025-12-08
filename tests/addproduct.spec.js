import {test,expect} from '@playwright/test';

import data from '../testdata/username.json';




import fs from 'fs';


//test.use({viewport:{width: 1280, height: 720}})  // Set viewport size for all tests in this file.



//const jsondata= fs.readFileSync('testdata/username.json');

const jsondata= fs.readFileSync('testdata/data.json');

const userdata=JSON.parse(jsondata);


// console.log(userdata[0].username);
// console.log(userdata[0].password);
//console.log(userdata.url);  

for(const d of userdata){


test.skip(`add product to the cart ${d.username}`,async ({page}) =>{
  test.info().annotations.push({ type: 'issue', description: '123' });
  test.info().annotations.push({ type: 'testId', description: 'TC-1' });
  test.info().annotations.push({ type: 'severity', description: 'critical' });    


  

  await page.goto("https://www.saucedemo.com/");  
    //  await page.fill('#user-name',userdata.username);
    // await page.fill('#password',userdata.password);
    // await page.click('#login-button');
    // await page.waitForTimeout(3000);

    await page.fill('#user-name',d.username);
    await page.fill('#password',d.password);
    await page.click('#login-button');
    await page.waitForTimeout(3000);


   

 
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


//     // Add a product (Sauce Labs Backpack)
//   await page.click('button[id="add-to-cart-sauce-labs-backpack"]');
//     await page.waitForTimeout(3000);

//   // Check cart badge updated
//   const cartBadge = page.locator('.shopping_cart_badge');
//   await expect(cartBadge).toHaveText('1');

//   // Navigate to cart
//   await page.click('.shopping_cart_link');
//     await page.waitForTimeout(3000);

//   // Verify product is in cart
//   await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
//   await page.waitForTimeout(3000);
// //  .inventory_item_name 
// // btn_small btn_inventory 


// console.log("test completed successfully");

})
}








import { Given, When, Then } from "@cucumber/cucumber";
//import { expect } from "@playwright/test";


import{bdddata} from "../data"
import { test ,expect,playwright} from "@playwright/test";

Given('I am logging in to the ecommerce application wiht {username} and {password},{timeout:50000}', async function (username, password, timeout) {

    const browser= await playwright.chromium.launch()

  const  context= await browser.newContext()
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/")

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveTitle(/Swag Labs/);
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
});


When('add {string} to the cart and checkout',async  function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('verify {string} is displayed in the checkout page', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('enter valid details and submit the order', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('verify the order is placed successfully',async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
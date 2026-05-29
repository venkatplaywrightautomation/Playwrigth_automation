



import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page },testInfo) => {
  await page.goto('https://www.saucedemo.com/');
    console.log(`Completed: ${testInfo.title}`);
});

test.afterEach(async ({ page }) => {
  console.log('Test completed');
});



test('Test 1', async ({ page }) => {
    console.log('Running Test 1');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Test 2', async ({ page }) => {
    console.log('Running Test 2');
  await expect(page.locator('#login-button')).toBeVisible();
});



import report from './javascript.js';

test('Test 3', async ({ page }) => {
    console.log('Running Test 3');

    const r= new report();

    r.onBegin({ title: 'Test 3' });
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveTitle(/Swag Labs/);
});


test('Test 4', async ({ page }) => {
    console.log('Running Test 4');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce'); 
  await page.click('#login-button');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: 'failure.png' });
  }
});

const prices = await page.locator('.price').allTextContents();
const sorted = [...prices].sort();

console.log(prices.toString() === sorted.toString());



test.only('Test 5', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const links = await page.locator('a');
console.log("No of links: " + await links.count());

// console.log("Link names:");
// for (let i = 0; i < await links.count(); i++) {
//   const linkText = await links.nth(i).textContent();
//   console.log(linkText.trim());
// }


})
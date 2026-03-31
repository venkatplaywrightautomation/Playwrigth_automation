



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
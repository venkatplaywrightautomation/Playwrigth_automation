import { test, expect } from '@playwright/test';

test.describe('SauceDemo core shopping flow', () => {
  test('Login to the application', async ({ page }) => {
    // 1. Open https://www.saucedemo.com/ in a fresh browser session.
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('#login-button')).toBeVisible();

    // 2. Enter username standard_user and password secret_sauce.
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await expect(page.locator('#user-name')).toHaveValue('standard_user');
    await expect(page.locator('#password')).toHaveValue('secret_sauce');

    // 3. Click the Login button.
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page).toHaveTitle('Swag Labs');

    // 4. Verify the Products header is visible after login.
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});

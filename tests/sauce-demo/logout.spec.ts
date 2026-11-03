import { test, expect } from '@playwright/test';

async function login(page) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/\/inventory\.html$/);
}

test.describe('SauceDemo core shopping flow', () => {
  test('Log out of the session', async ({ page }) => {
    // 1. Open the app menu from the hamburger icon in the page header.
    await login(page);
    await page.locator('#react-burger-menu-btn').click();
    await expect(page.locator('#logout_sidebar_link')).toBeVisible();
    await expect(page.locator('#inventory_sidebar_link')).toBeVisible();

    // 2. Select Logout.
    await page.locator('#logout_sidebar_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('#login-button')).toBeVisible();

    // 3. Attempt to access the inventory page again using a direct URL or browser navigation.
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // 4. Verify the session is ended cleanly.
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
  });
});

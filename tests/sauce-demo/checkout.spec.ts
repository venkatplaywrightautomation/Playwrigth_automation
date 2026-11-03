import { test, expect } from '@playwright/test';

async function loginAndAddItem(page: any) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
}

test.describe('SauceDemo core shopping flow', () => {
  test('Complete checkout with valid information', async ({ page }) => {
    await loginAndAddItem(page);

    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/\/checkout-step-one\.html$/);

    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await expect(page.locator('[data-test="continue"]')).toBeEnabled();

    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
    await expect(page.locator('.summary_info')).toBeVisible();
    await expect(page.locator('.summary_total_label')).toBeVisible();

    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});

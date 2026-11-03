import { test, expect } from '@playwright/test';

async function login(page:any) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/\/inventory\.html$/);
}

test.describe('SauceDemo core shopping flow', () => {
  test('Add products to cart and review cart', async ({ page }) => {
    // 1. Select at least two products from the catalog and click Add to cart.
    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();

    // 2. Open the cart from the cart icon in the page header.
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/\/cart\.html$/);
    await expect(page.locator('.cart_list')).toBeVisible();

    // 3. Confirm that the chosen items and quantities are correct before checkout.
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(2);
    await expect(page.locator('.inventory_item_name')).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);

    // 4. Click Continue Shopping or proceed directly to Checkout.
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/\/checkout-step-one\.html$/);
  });
});

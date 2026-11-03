import { test, expect } from '@playwright/test';

async function login(page:any) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/\/inventory\.html$/);
}

test.describe('SauceDemo core shopping flow', () => {
  test('Browse and sort the product catalog', async ({ page }) => {
    await login(page);

    const products = page.locator('.inventory_item');
    await expect(products).toHaveCount(6);
    await expect(page.locator('.inventory_item_name').first()).toBeVisible();
    await expect(page.locator('.inventory_item_price').first()).toBeVisible();

    const sort = page.locator('.product_sort_container');
    await expect(sort).toBeVisible();
    await sort.selectOption('lohi');
    await expect(sort).toHaveValue('lohi');

    const firstProduct = page.locator('.inventory_item_name').first();
    const productName = (await firstProduct.textContent())?.trim();
    await firstProduct.click();

    await expect(page.locator('.inventory_details_name')).toHaveText(productName ?? '');
    await expect(page.locator('.inventory_details_price')).toBeVisible();
    await expect(page.getByRole('button', { name: /add to cart/i })).toBeVisible();

    await page.locator('#back-to-products').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.title')).toHaveText('Products');
  });
});

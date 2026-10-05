

import { base } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test('Login into Facebook', async ({ page }) => {
  // Navigate to Facebook
  await page.goto('https://www.facebook.com/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Fill in email/phone field
  const emailInput = page.locator('input[id="email"]');
  await emailInput.fill('your_email@example.com');

  // Fill in password field
  const passwordInput = page.locator('input[id="pass"]');
  await passwordInput.fill('your_password');

  // Click login button
  const loginButton = page.locator('button[name="login"]');
  await loginButton.click();

  // Wait for navigation and verify login
  await page.waitForLoadState('networkidle');
  
  // Check if login was successful by verifying we're on the home page
  const homeHeader = page.locator('[data-testid="feed_title_header"]');
  await expect(homeHeader).toBeVisible({ timeout: 10000 });

  console.log('✅ Successfully logged into Facebook');

});

test('Add product to cart on Sauce Demo', async ({ page }) => {
  // Navigate to Sauce Demo website
  await page.goto('https://www.saucedemo.com/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Login with standard credentials
  await page.locator('input[id="user-name"]').fill('standard_user');
  await page.locator('input[id="password"]').fill('secret_sauce');
  await page.locator('id=login-button').click();

  // Wait for inventory to load
  await page.waitForLoadState('networkidle');

  // Add first product to cart
  const addToCartButton = page.locator('button[id="add-to-cart-sauce-labs-backpack"]').first();
  await addToCartButton.click();

  // Verify product was added to cart
  const cartBadge = page.locator('span.shopping_cart_badge');
  await expect(cartBadge).toContainText('1');

  console.log('✅ Product successfully added to cart');

  // Navigate to cart to verify
  await page.locator('a.shopping_cart_link').click();
  await page.waitForLoadState('networkidle');

  // Verify product is in cart
  const cartItem = page.locator('div.cart_item');
  await expect(cartItem).toBeVisible();

  console.log('✅ Product verified in cart');
});


//SHp1273385

// I C D G C G G A I H




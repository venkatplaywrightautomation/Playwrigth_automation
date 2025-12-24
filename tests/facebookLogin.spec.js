const { test, expect } = require('@playwright/test');
const FacebookLoginPage = require('../Pages/FacebookLoginPage');

const email = process.env.FB_EMAIL;
const password = process.env.FB_PASSWORD;

test.describe('Facebook Login', () => {
  test.skip(!email || !password, 'FB_EMAIL and FB_PASSWORD required in environment');

  test('logs in with provided credentials', async ({ page }) => {
    const fb = new FacebookLoginPage(page);
    await fb.goto();
    await fb.login(email, password);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/facebook.com/);
  });
});

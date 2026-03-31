const { test, expect } = require('@playwright/test');
const FacebookLoginPage = require('../Pages/FacebookLoginPage');

// Set your credentials here or use environment variables
const email = process.env.FB_EMAIL || 'your-email@gmail.com';
const password = process.env.FB_PASSWORD || 'your-password';

test.describe('Facebook Login Tests', () => {
  
  test('Login to Facebook with credentials', async ({ page }) => {
    const fb = new FacebookLoginPage(page);
    await fb.goto();
    await page.waitForLoadState('networkidle');
    
    // Verify login form is visible
    await expect(fb.email).toBeVisible();
    await expect(fb.password).toBeVisible();
    
    // Perform login
    await fb.login(email, password);
    await page.waitForTimeout(3000);
    await page.waitForLoadState('networkidle');
    
    // Verify login was successful
    const url = page.url();
    console.log('Current URL after login:', url);
    
    expect(url).not.toContain('login');
    console.log('✓ Successfully logged into Facebook');
  });

  test('Verify Facebook login form elements', async ({ page }) => {
    const fb = new FacebookLoginPage(page);
    await fb.goto();
    await page.waitForLoadState('networkidle');
    
    // Check if all form elements are visible
    await expect(fb.email).toBeVisible();
    await expect(fb.password).toBeVisible();
    await expect(fb.loginBtn).toBeVisible();
    
    console.log('✓ All login form elements are visible');
  });
});

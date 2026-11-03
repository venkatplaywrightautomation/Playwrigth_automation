# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample5.spec.js >> Login Test
- Location: tests\Sample5.spec.js:3:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('mmddd')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.only('Login Test', async ({ page }) => {
  4  |   //console.log('Login Test');
  5  | 
  6  | 
  7  |   await page.goto("https://www.saucedemo.com/")
> 8  |   await page.locator("mmddd").fill("wnkk")
     |                               ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  | });
  10 | 
  11 | test('Home Test', async ({ page }) => {
  12 |   //console.log('Home Test');
  13 |     await page.goto("https://www.saucedemo.com/")
  14 | 
  15 | });
  16 | 
  17 | test('Profile Test', async ({ page }) => {
  18 |  // console.log('Profile Test');
  19 |     await page.goto("https://www.saucedemo.com/")
  20 | 
  21 | });
  22 | 
  23 | test('Logout Test', async ({ page }) => {
  24 |  // console.log('Logout Test');
  25 |     await page.goto("https://www.saucedemo.com/")
  26 | 
  27 | });
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BaseTest.spec.js >> Login with valid credentials
- Location: tests\BaseTest.spec.js:25:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'password')
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
  1  | 
  2  | 
  3  | 
  4  | 
  5  | import {test,expect} from '@playwright/test';
  6  | 
  7  | 
  8  | 
  9  | //import {BasePage} from '../Pages/BaseFile.js';
  10 | 
  11 | import {Base} from '../Pages/BaseFile.js';
  12 | 
  13 | 
  14 | const usernames=[
  15 | 
  16 | 
  17 | 
  18 |     {
  19 |         username:'standard_user',
  20 |         password:'secret_sauce'
  21 |     }
  22 | ]
  23 | 
  24 | 
  25 | test("Login with valid credentials",async ({page}) => {
  26 | 
  27 |     //const basePage = new BasePage(page);
  28 | 
  29 |     const basePage = new Base(page);
  30 | 
  31 | 
  32 | 
  33 |     //await basePage.navigateTo('https://www.saucedemo.com/inventory.html');
  34 |     await basePage.navigateTo('https://www.saucedemo.com/');
  35 | 
> 36 |     await basePage.fillInput(usernames[0].username,usernames[1].password);
     |                                                                 ^ TypeError: Cannot read properties of undefined (reading 'password')
  37 |     //await basePage.fillInput('#password',usernames[0].password);
  38 |     await basePage.clickButton('#login-button');
  39 | 
  40 |     await basePage.waitForNavigation();
  41 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  42 | 
  43 | 
  44 |     //await basePage.waitForElement1('.inventory_list');
  45 | 
  46 |     await basePage.waitForElement(page.locator('.inventory_list'));
  47 | 
  48 |     //await basePage.click(page.locator('#login-button'));
  49 | 
  50 | 
  51 | 
  52 | 
  53 | })
  54 | 
  55 | 
```
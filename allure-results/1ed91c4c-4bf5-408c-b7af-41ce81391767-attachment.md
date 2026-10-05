# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BaseTest.spec.js >> login with locked_out_user
- Location: tests\BaseTest.spec.js:82:10

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": locked_out_user
    - textbox "Password": secret_sauce
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Sorry, this user has been locked out."
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
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
  29 |    
  30 | 
  31 |  const basePage = new Base(page);
  32 | 
  33 |     //await basePage.navigateTo('https://www.saucedemo.com/inventory.html');
  34 |     await basePage.navigateTo('https://www.saucedemo.com/');
  35 |     await basePage.fillInput('#user-name',usernames[0].username);
  36 |     await basePage.fillInput('#password',usernames[0].password);
  37 | 
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
  56 | 
  57 | 
  58 | const diffUsernames=[
  59 | 
  60 |     {
  61 | 
  62 |         username:'locked_out_user',
  63 |         password:'secret_sauce'
  64 |     },
  65 | 
  66 |     {
  67 | 
  68 |         username:'problem_user',
  69 |         password:'secret_sauce'
  70 | 
  71 |     }
  72 | 
  73 | 
  74 | ]
  75 | 
  76 | 
  77 | for(const user of diffUsernames){
  78 | 
  79 | 
  80 | 
  81 | 
  82 |     test.only(`login with ${user.username}`,async ({page}) =>{
  83 | 
  84 |  const basePage = new Base(page);
  85 |         await basePage.navigateTo('https://www.saucedemo.com/');
  86 |         await basePage.fillInput('#user-name',user.username);
  87 |         await basePage.fillInput('#password',user.password);
  88 | 
  89 |         await basePage.clickButton('#login-button');
  90 | 
  91 |         await basePage.waitForNavigation();
> 92 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  93 | 
  94 |     })
  95 | }
```
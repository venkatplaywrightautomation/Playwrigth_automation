# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BaseTest.spec.js >> login with 
- Location: tests\BaseTest.spec.js:101:10

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
    - textbox "Username"
    - textbox "Password"
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username is required"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  11  | import {Base} from '../Pages/BaseFile.js';
  12  | 
  13  | 
  14  | const usernames=[
  15  | 
  16  | 
  17  | 
  18  |     {
  19  |         username:'standard_user',
  20  |         password:'secret_sauce'
  21  |     }
  22  | ]
  23  | 
  24  | 
  25  | test("Login with valid credentials",async ({page}) => {
  26  | 
  27  |     //const basePage = new BasePage(page);
  28  | 
  29  |    
  30  | 
  31  |  const basePage = new Base(page);
  32  | 
  33  |     //await basePage.navigateTo('https://www.saucedemo.com/inventory.html');
  34  |     await basePage.navigateTo('https://www.saucedemo.com/');
  35  |     await basePage.fillInput('#user-name',usernames[0].username);
  36  |     await basePage.fillInput('#password',usernames[0].password);
  37  | 
  38  |     await basePage.clickButton('#login-button');
  39  | 
  40  |     await basePage.waitForNavigation();
  41  |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  42  | 
  43  | 
  44  |     //await basePage.waitForElement1('.inventory_list');
  45  | 
  46  |     await basePage.waitForElement(page.locator('.inventory_list'));
  47  | 
  48  |     //await basePage.click(page.locator('#login-button'));
  49  | 
  50  | 
  51  | 
  52  | 
  53  | })
  54  | 
  55  | 
  56  | 
  57  | 
  58  | const diffUsernames=[
  59  | 
  60  |     {
  61  | 
  62  |         username:'locked_out_user',
  63  |         password:'secret_sauce'
  64  |     },
  65  | 
  66  |     {
  67  | 
  68  |         username:'problem_user',
  69  |         password:'secret_sauce'
  70  | 
  71  |     },
  72  | 
  73  |     {
  74  |         username:'performance_glitch_user',
  75  |         password:'secret_sauce'
  76  |     },
  77  | 
  78  |     {
  79  | 
  80  |         username:'invalid_user',
  81  |         password:'invalid_password'
  82  | 
  83  | 
  84  |     },
  85  | 
  86  |     {
  87  | 
  88  |         username:'',
  89  |         password:''
  90  |     }
  91  | 
  92  | 
  93  | ]
  94  | 
  95  | 
  96  | for(const user of diffUsernames){
  97  | 
  98  | 
  99  | 
  100 | 
  101 |     test.only(`login with ${user.username}`,async ({page}) =>{
  102 | 
  103 |  const basePage = new Base(page);
  104 |         await basePage.navigateTo('https://www.saucedemo.com/');
  105 |         await basePage.fillInput('#user-name',user.username);
  106 |         await basePage.fillInput('#password',user.password);
  107 | 
  108 |         await basePage.clickButton('#login-button');
  109 | 
  110 |         await basePage.waitForNavigation();
> 111 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      |                            ^ Error: expect(page).toHaveURL(expected) failed
  112 | 
  113 |     })
  114 | }
```
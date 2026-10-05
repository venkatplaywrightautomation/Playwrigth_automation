# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BaseTest.spec.js >> Difffernt users login >> login with invalid_user
- Location: tests\BaseTest.spec.js:124:14

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
    - textbox "Username": invalid_user
    - textbox "Password": invalid_password
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
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
  101 |     test(`login with ${user.username}`,async ({page}) =>{
  102 | 
  103 |  const basePage = new Base(page);
  104 |         await basePage.navigateTo('https://www.saucedemo.com/');
  105 |         await basePage.fillInput('#user-name',user.username);
  106 |         await basePage.fillInput('#password',user.password);
  107 | 
  108 |         await basePage.clickButton('#login-button');
  109 | 
  110 |         await basePage.waitForNavigation();
  111 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  112 | 
  113 |     })
  114 | }
  115 | 
  116 | 
  117 | 
  118 | test.describe("Difffernt users login",() =>{
  119 | 
  120 | 
  121 |     for(const user of diffUsernames){
  122 | 
  123 | 
  124 |         test.only(`login with ${user.username}`,async ({page}) =>{
  125 | 
  126 |             const basePage = new Base(page);
  127 |             await basePage.navigateTo('https://www.saucedemo.com/');
  128 |             await basePage.fillInput('#user-name',user.username);
  129 |             await basePage.fillInput('#password',user.password);
  130 |             await basePage.clickButton('#login-button');
  131 | 
  132 |             await basePage.waitForNavigation();
> 133 |             await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');   
      |                                ^ Error: expect(page).toHaveURL(expected) failed
  134 |         })
  135 |     }
  136 | 
  137 | 
  138 | })
```
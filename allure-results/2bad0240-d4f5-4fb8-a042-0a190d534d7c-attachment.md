# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BaseTest.spec.js >> login with json file locked_out_user
- Location: tests\BaseTest.spec.js:150:6

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
  58  | 
  59  | 
  60  | const diffUsernames=[
  61  | 
  62  |     {
  63  | 
  64  |         username:'locked_out_user',
  65  |         password:'secret_sauce'
  66  |     },
  67  | 
  68  |     {
  69  | 
  70  |         username:'problem_user',
  71  |         password:'secret_sauce'
  72  | 
  73  |     },
  74  | 
  75  |     {
  76  |         username:'performance_glitch_user',
  77  |         password:'secret_sauce'
  78  |     },
  79  | 
  80  |     {
  81  | 
  82  |         username:'invalid_user',
  83  |         password:'invalid_password'
  84  | 
  85  | 
  86  |     },
  87  | 
  88  |     {
  89  | 
  90  |         username:'',
  91  |         password:''
  92  |     }
  93  | 
  94  | 
  95  | ]
  96  | 
  97  | 
  98  | for(const user of diffUsernames){
  99  | 
  100 | 
  101 | 
  102 | 
  103 |     test(`login with ${user.username}`,async ({page}) =>{
  104 | 
  105 |  const basePage = new Base(page);
  106 |         await basePage.navigateTo('https://www.saucedemo.com/');
  107 |         await basePage.fillInput('#user-name',user.username);
  108 |         await basePage.fillInput('#password',user.password);
  109 | 
  110 |         await basePage.clickButton('#login-button');
  111 | 
  112 |         await basePage.waitForNavigation();
  113 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  114 | 
  115 |     })
  116 | }
  117 | 
  118 | 
  119 | 
  120 | test.describe("Difffernt users login",() =>{
  121 | 
  122 | 
  123 |     for(const user of diffUsernames){
  124 | 
  125 | 
  126 |         test(`login with ${user.username}`,async ({page}) =>{
  127 | 
  128 |             const basePage = new Base(page);
  129 |             await basePage.navigateTo('https://www.saucedemo.com/');
  130 |             await basePage.fillInput('#user-name',user.username);
  131 |             await basePage.fillInput('#password',user.password);
  132 |             await basePage.clickButton('#login-button');
  133 | 
  134 |             await basePage.waitForNavigation();
  135 |             await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');   
  136 |         })
  137 |     }
  138 | 
  139 | 
  140 | })
  141 | 
  142 | 
  143 | 
  144 | for(const user of testdata){
  145 | 
  146 | 
  147 | 
  148 | 
  149 | 
  150 | test.only(`login with json file ${user.username}`,async ({page}) =>{
  151 | 
  152 |     const basePage = new Base(page);
  153 |     await basePage.navigateTo('https://www.saucedemo.com/');
  154 |     await basePage.fillInput('#user-name',user.username);
  155 |     await basePage.fillInput('#password',user.password);
  156 |     await basePage.clickButton('#login-button');
  157 |     await basePage.waitForNavigation();
> 158 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  159 | 
  160 | 
  161 | })
  162 | 
  163 | }
```
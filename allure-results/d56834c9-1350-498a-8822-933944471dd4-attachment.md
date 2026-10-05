# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Features\login-dd.feature.spec.js >> Data driven testing using JSON file >> Failed with invalid Username and Password >> Example #3
- Location: .features-gen\tests\Features\login-dd.feature.spec.js:26:9

# Error details

```
Error: toHaveText can be only used with Locator object, was called with Epic sadface: Username and password do not match any user in this service
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: problem_user123
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]: secret_sauce123
        - img [ref=e16]
      - alert [ref=e19]:
        - button "Dismiss error" [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | 
  2  | const { url } = require('inspector')
  3  | const { createBdd } = require('playwright-bdd');
  4  | const { LoginPageBDDClass } = require('../Pages/LoginPageBDD');
  5  | //const { LoginPage } = require('../Pages/LoginPageBDD.js');
  6  | 
  7  | const { expect, page } = require('@playwright/test');
  8  | const { error } = require('console');
  9  | //import {LoginPageBDDClass} from '../Pages/LoginPageBDD'
  10 | const { Given, When, Then, Before, And } = createBdd()
  11 | let InvalidData = require('../../testdata/bdd-data.json')
  12 | let results = []
  13 | When('I Enter Invalid username and Password and click on login button', async ({ page }) => {
  14 |     let login = new LoginPageBDDClass(page)
  15 | 
  16 |     results = []
  17 |     for (const data of InvalidData) {
  18 |         console.log(data)
  19 | 
  20 |         await login.enterUsername(data.username)
  21 | 
  22 |         await login.enterPassword(data.password)
  23 |         await login.clickLogin();
  24 |         const errorText = await login.errorMessage.textContent()
  25 |         console.log(errorText)
  26 |         results.push({
  27 | 
  28 |             username: data.username,
  29 |             actualError: errorText,
  30 |             expectedError: data.error
  31 |         })
  32 |         await login.page.reload()
  33 |     }
  34 | 
  35 | });
  36 | 
  37 | 
  38 | 
  39 | Then('I Should see the error message', async ({ page }) => {
  40 |     for (const result of results) {
  41 |         expect(result.actualError).toContain(result.expectedError)
  42 |         console.log(`Passed for ${result.username}`)
  43 |     }
  44 | 
  45 | });
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | // Next Test case
  52 | 
  53 | 
  54 | 
  55 | let testData = []
  56 | 
  57 | When('I Enter Invalid username and Password and click on login button for {string}', async ({page }, index) => {
  58 | 
  59 |   let login = new LoginPageBDDClass(page)
  60 | 
  61 | const data=InvalidData[index]
  62 | 
  63 | 
  64 | 
  65 |     //for (const data of InvalidData) {
  66 |         //console.log(data)
  67 | 
  68 |         await login.enterUsername(data.username)
  69 | 
  70 |         await login.enterPassword(data.password)
  71 |         await login.clickLogin();
  72 |        
  73 |      
  74 |     
  75 | 
  76 | });
  77 | 
  78 | Then('I Should see the error message for {string}', async ({page }, index) => {
  79 | 
  80 |   let login = new LoginPageBDDClass(page)
  81 | 
  82 | 
  83 |   const data=InvalidData[index]
  84 |     //await expect(login.errorMessage).toHaveText(data.error)
  85 | 
  86 | 
  87 | 
  88 | 
  89 |     const actText= await login.errorMessage.textContent()
  90 | 
> 91 |     await expect(actText).toHaveText(data)
     |                           ^ Error: toHaveText can be only used with Locator object, was called with Epic sadface: Username and password do not match any user in this service
  92 | console.log(`Passed for ${data.username}`)
  93 | 
  94 | });
  95 | 
  96 | 
  97 | 
  98 | 
```
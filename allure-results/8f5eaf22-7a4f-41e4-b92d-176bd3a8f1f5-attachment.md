# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Features\login.feature.spec.js >> Feature name >> failed with invalid credentials >> Example #1
- Location: .features-gen\tests\Features\login.feature.spec.js:16:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "text"
Received string:    "Epic sadface: Username and password do not match any user in this service"
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: standard_user
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]: venkat
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
  1  | //const { Given } = require('@cucumber/cucumber')
  2  | const { url } = require('inspector')
  3  | const {createBdd}= require('playwright-bdd');
  4  | const {LoginPageBDDClass } = require('../Pages/LoginPageBDD');
  5  | //const { LoginPage } = require('../Pages/LoginPageBDD.js');
  6  | 
  7  | 
  8  | const {expect,page}=require('@playwright/test')
  9  | 
  10 | 
  11 | //import {LoginPageBDDClass} from '../Pages/LoginPageBDD'
  12 | 
  13 | 
  14 | const {Given,When,Then,Before,And}= createBdd()
  15 | 
  16 | 
  17 | //let log;
  18 | 
  19 | 
  20 | 
  21 | 
  22 | // Before(async ({page})=>{
  23 | 
  24 | // log= new LoginPageBDDClass(page)
  25 | // //await log.navigate(url)
  26 | 
  27 | // })
  28 | 
  29 | Given(`I Navigate to {string}`,async ({page},url)=>{
  30 | 
  31 | let log= new LoginPageBDDClass(page)
  32 |     await log.navigate(url)
  33 |     
  34 | })
  35 | 
  36 | Given(`I Enter Username {string}`,async({page},username)=>{
  37 | 
  38 | let log= new LoginPageBDDClass(page)
  39 |     await log.enterUsername(username)
  40 | })
  41 | 
  42 | 
  43 | Given(`I Enter password {string}`,async({page},password)=>{
  44 | 
  45 | let log= new LoginPageBDDClass(page)
  46 |     await log.enterPassword(password)
  47 | })
  48 | 
  49 | When("click on Login Button",async ({page})=>{
  50 | 
  51 | let log= new LoginPageBDDClass(page)
  52 |     await log.clickLogin()
  53 | })
  54 | 
  55 | 
  56 | 
  57 | 
  58 | Then(`I Should see the Page containing {string}`,async ({page},msg)=>{
  59 | 
  60 | let log= new LoginPageBDDClass(page)
  61 | await expect (log.successmsg).toContainText(msg)
  62 | })
  63 | 
  64 | 
  65 | Then('I Should see the error message {string}', async ({page}, messgae) => {
  66 |   // Step: Then I Should see the error message "Error message"
  67 |   // From: tests\Features\login.feature:23:9
  68 | let log= new LoginPageBDDClass(page)
  69 |  // await expect (log.text).toContainText(messgae)
  70 | 
  71 |   const data=await log.getErrorMessage()
  72 | 
> 73 |   expect(data).toContain(messgae)
     |                ^ Error: expect(received).toContain(expected) // indexOf
  74 |  
  75 | });
  76 | 
```
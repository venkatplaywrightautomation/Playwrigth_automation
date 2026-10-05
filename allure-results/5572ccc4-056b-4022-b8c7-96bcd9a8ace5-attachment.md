# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Features\login.feature.spec.js >> Feature name >> failed with invalid credentials >> Example #2
- Location: .features-gen\tests\Features\login.feature.spec.js:24:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[data-test="error"]')
Expected substring: "text"
Received string:    "Epic sadface: Username and password do not match any user in this service"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('[data-test="error"]')
    13 × locator resolved to <h3 role="alert" data-test="error">…</h3>
       - unexpected value "Epic sadface: Username and password do not match any user in this service"

```

```yaml
- alert:
  - button "Dismiss error"
  - text: "Epic sadface: Username and password do not match any user in this service"
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
  8  | const {expect,page}=require('@playwright/test');
  9  | const { error } = require('console');
  10 | 
  11 | 
  12 | //import {LoginPageBDDClass} from '../Pages/LoginPageBDD'
  13 | 
  14 | 
  15 | const {Given,When,Then,Before,And}= createBdd()
  16 | 
  17 | 
  18 | //let log;
  19 | 
  20 | 
  21 | 
  22 | 
  23 | // Before(async ({page})=>{
  24 | 
  25 | // log= new LoginPageBDDClass(page)
  26 | // //await log.navigate(url)
  27 | 
  28 | // })
  29 | 
  30 | Given(`I Navigate to {string}`,async ({page},url)=>{
  31 | 
  32 | let log= new LoginPageBDDClass(page)
  33 |     await log.navigate(url)
  34 |     
  35 | })
  36 | 
  37 | Given(`I Enter Username {string}`,async({page},username)=>{
  38 | 
  39 | let log= new LoginPageBDDClass(page)
  40 |     await log.enterUsername(username)
  41 | })
  42 | 
  43 | 
  44 | Given(`I Enter password {string}`,async({page},password)=>{
  45 | 
  46 | let log= new LoginPageBDDClass(page)
  47 |     await log.enterPassword(password)
  48 | })
  49 | 
  50 | When("click on Login Button",async ({page})=>{
  51 | 
  52 | let log= new LoginPageBDDClass(page)
  53 |     await log.clickLogin()
  54 | })
  55 | 
  56 | 
  57 | 
  58 | 
  59 | Then(`I Should see the Page containing {string}`,async ({page},msg)=>{
  60 | 
  61 | let log= new LoginPageBDDClass(page)
  62 | await expect (log.successmsg).toContainText(msg)
  63 | })
  64 | 
  65 | 
  66 | Then('I Should see the error message {string}', async ({page}, messgae) => {
  67 |   // Step: Then I Should see the error message "Error message"
  68 |   // From: tests\Features\login.feature:23:9
  69 | let log= new LoginPageBDDClass(page)
  70 |  // await expect (log.text).toContainText(messgae)
  71 | 
  72 | //   const data=await log.getErrorMessage()
  73 | 
  74 | // console.log(data)
  75 | // expect(data).toContain(messgae)
  76 | 
> 77 |  await expect(log.errorMessage).toContainText(messgae)
     |                                 ^ Error: expect(locator).toContainText(expected) failed
  78 | });
  79 | 
```
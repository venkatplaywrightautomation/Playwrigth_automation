# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Features\login-dd.feature.spec.js >> Data driven testing using JSON file >> Failed with invalid credentials from json
- Location: .features-gen\tests\Features\login-dd.feature.spec.js:6:7

# Error details

```
TypeError: login.errorMessage.textcontent is not a function
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
        - textbox "Password" [ref=e15]: secret_
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
  2  | 
  3  | 
  4  | 
  5  | //const { Given } = require('@cucumber/cucumber')
  6  | const { url } = require('inspector')
  7  | const {createBdd}= require('playwright-bdd');
  8  | const {LoginPageBDDClass } = require('../Pages/LoginPageBDD');
  9  | //const { LoginPage } = require('../Pages/LoginPageBDD.js');
  10 | 
  11 | 
  12 | const {expect,page}=require('@playwright/test');
  13 | const { error } = require('console');
  14 | 
  15 | 
  16 | //import {LoginPageBDDClass} from '../Pages/LoginPageBDD'
  17 | 
  18 | 
  19 | const {Given,When,Then,Before,And}= createBdd()
  20 | 
  21 | 
  22 | 
  23 | let InvalidData= require('../../testdata/bdd-data.json')
  24 | 
  25 | 
  26 | //console.log(InvalidData)
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | // Before(async ({page})=>{
  33 | 
  34 | 
  35 | // let login= new LoginPageBDDClass(page)
  36 | 
  37 | // })
  38 | 
  39 | 
  40 | 
  41 | let results=[]
  42 | 
  43 | When('I Enter Invalid username and Password and click on login button', async ({page}) => {
  44 | 
  45 | 
  46 |     let  login= new LoginPageBDDClass(page)
  47 | 
  48 |   results=[]
  49 | for(const data of InvalidData ){
  50 | 
  51 | 
  52 |     console.log(data)
  53 | 
  54 |     await login.enterUsername(data.username)
  55 | 
  56 |     await login.enterPassword(data.password)
  57 |     await login.clickLogin();
  58 | 
  59 | 
  60 | 
> 61 | const errorText=await login.errorMessage.textcontent()
     |                                          ^ TypeError: login.errorMessage.textcontent is not a function
  62 | console.log(errorText)
  63 | 
  64 | 
  65 | results.push({
  66 | 
  67 |     username:data.username,
  68 | 
  69 |     actualError:errorText,
  70 | 
  71 |     expectedError:data.error
  72 | })
  73 | 
  74 | await login.page.reload()
  75 | }
  76 | 
  77 | });
  78 | 
  79 | Then('I Should see the error message', async ({page}) => {
  80 | 
  81 | 
  82 |     for(const result of results){
  83 | 
  84 |         expect(result.actualError).toContain(result.expectedError)
  85 |         console.log(`Passed for ${result.username}`)
  86 |     }
  87 |   
  88 | });
  89 | 
  90 | 
  91 | 
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\Features\login-dd.feature.spec.js >> Data driven testing using JSON file >> Failed with invalid Username and Password >> Example #3
- Location: .features-gen\tests\Features\login-dd.feature.spec.js:26:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | 
  3  | export class LoginPageBDDClass {
  4  | 
  5  |     constructor(page) { 
  6  |         this.page = page;
  7  | 
  8  |         this.username = page.locator('#user-name');
  9  |         this.password = page.locator('#password');
  10 |         this.loginButton = page.locator('#login-button');
  11 |         this.errorMessage = page.locator('[data-test="error"]');
  12 |         this.text= page.locator("//span[@class='title']")
  13 |         this.successmsg=page.locator("//div[normalize-space()='Sauce Labs Backpack']")
  14 |         
  15 |     }
  16 | 
  17 |     async navigate(url) {
  18 |        // await this.page.goto('https://www.saucedemo.com/');
  19 | 
> 20 |         await this.page.goto(url);
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  21 |     }
  22 | 
  23 |     async enterUsername(username) {
  24 |         await this.username.fill(username);
  25 |     }
  26 | 
  27 |     
  28 |     async enterPassword(password) {
  29 |         await this.password.fill(password);
  30 |     }
  31 | 
  32 |     async clickLogin() {
  33 |         await this.loginButton.click();
  34 |     }
  35 | 
  36 |     async getErrorMessage() {
  37 |         return await this.errorMessage.textContent();
  38 |     }
  39 | }
  40 | 
  41 | //module.exports = { LoginPageBDD };
  42 | 
  43 | //module.exports={LoginPageBDDClass}
```
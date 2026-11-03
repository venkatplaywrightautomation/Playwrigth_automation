# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample4.spec.js >> saucedemo
- Location: tests\Sample4.spec.js:30:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('login_credentials')

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
  3  | import {test,expect} from  "@playwright/test"
  4  | 
  5  | 
  6  | test("Without config file",async({page})=>{
  7  | 
  8  | 
  9  |     await page.goto("https://flights.qedgetech.com/")
  10 | 
  11 | 
  12 | })
  13 | 
  14 | // async function test1(){
  15 | 
  16 | //     return "Hello"
  17 | 
  18 | // }
  19 | // test1().then(result => console.log(result))
  20 | 
  21 | // console.log(add(10, 20));
  22 | 
  23 | // function add(a, b) {
  24 | //   return a + b;
  25 | // }
  26 | 
  27 | 
  28 | 
  29 | 
  30 | test.only("saucedemo",async ({page})=>{
  31 | 
  32 | 
  33 |     await page.goto("https://www.saucedemo.com/")
  34 | 
> 35 |     const text=await page.locator("login_credentials").innerText()
     |                                                        ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  36 | 
  37 | 
  38 |     console.log("TExt is:"+ text)
  39 | })
```
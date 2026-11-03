# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample3.spec.js >> login
- Location: tests\Sample3.spec.js:11:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | 
  3  | 
  4  | import { da } from "@faker-js/faker";
  5  | import {test} from "@playwright/test"
  6  | 
  7  | 
  8  | import { chromium } from "@playwright/test";
  9  | import { link } from "fs";
  10 | 
  11 | test("login",async ()=>{
  12 | 
  13 |     
  14 | 
  15 | 
  16 |     //   const browser= await chromium.launch();
  17 |     // const context=await browser.newContext()
  18 |     // const page=await context.newPage();
  19 |     // await page.goto("https://www.google.com/")
  20 | 
  21 |   
  22 |     
  23 |     //await page.waitForTimeout(3000)
  24 | 
  25 | 
  26 |      
  27 |         const browser= await chromium.launch();
  28 |     const context=await browser.newContext()
  29 |     const page=await context.newPage();
> 30 |     await page.goto("https://www.saucedemo.com/");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  31 |     //await page.goto("https://www.saucedemo.com/");
  32 |     await page.locator("//input[@id='user-name']").fill("standard_user");
  33 |     
  34 |     await page.locator("//input[@id='password']").fill("secret_sauce");
  35 |     await page.locator("//input[@id='login-button']").click();
  36 |     await page.waitForTimeout(2000);
  37 |     //await page.bringToFront()
  38 | 
  39 | await page.goto("https://www.google.com/")
  40 |  await page.waitForTimeout(2000);
  41 | 
  42 | 
  43 | 
  44 | 
  45 |  const links =page.getByRole("link")
  46 | 
  47 |  console.log("Links cpunt"+ await links.count())
  48 | 
  49 | 
  50 |  for(let i=0;i<await links.count();i++)
  51 |  {
  52 | 
  53 |     const data= await links.nth(i).textContent()
  54 |     console.log(data)
  55 |  }
  56 | 
  57 | 
  58 | })
```
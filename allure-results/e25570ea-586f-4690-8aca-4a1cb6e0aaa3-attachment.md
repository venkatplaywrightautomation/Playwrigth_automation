# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample3.spec.js >> Select Multiple values
- Location: tests\Sample3.spec.js:96:6

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1   | 
  2   | 
  3   | 
  4   | import { da } from "@faker-js/faker";
  5   | import {test} from "@playwright/test"
  6   | 
  7   | 
  8   | import { chromium } from "@playwright/test";
  9   | import { link } from "fs";
  10  | 
  11  | test("login",async ()=>{
  12  | 
  13  |     
  14  | 
  15  | 
  16  |     //   const browser= await chromium.launch();
  17  |     // const context=await browser.newContext()
  18  |     // const page=await context.newPage();
  19  |     // await page.goto("https://www.google.com/")
  20  | 
  21  |   
  22  |     
  23  |     //await page.waitForTimeout(3000)
  24  | 
  25  | 
  26  |      
  27  |         const browser= await chromium.launch();
  28  |     const context=await browser.newContext()
  29  |     const page=await context.newPage();
  30  | 
  31  |     // await page.goto("https://www.saucedemo.com/");
  32  |     // //await page.goto("https://www.saucedemo.com/");
  33  |     // await page.locator("//input[@id='user-name']").fill("standard_user");
  34  |     
  35  |     // await page.locator("//input[@id='password']").fill("secret_sauce");
  36  |     // await page.locator("//input[@id='login-button']").click();
  37  |     // await page.waitForTimeout(2000);
  38  |     //await page.bringToFront()
  39  | 
  40  | await page.goto("https://www.google.com/")
  41  |  await page.waitForTimeout(2000);
  42  | 
  43  | 
  44  | 
  45  | 
  46  | //  const links =page.getByRole("link")
  47  | 
  48  | //  console.log("Links count"+ await links.count())
  49  | 
  50  | await page.getByRole("combobox",{name:'Search'}).fill("Playwright")
  51  | 
  52  | 
  53  | //console.log("No of textboxes:"+ await textboxes.count())
  54  | 
  55  | 
  56  | //const text=await textboxes.textContent()
  57  | 
  58  | //  for(let i=0;i<await links.count();i++)
  59  | //  {
  60  | 
  61  | //     const data= await links.nth(i).textContent()
  62  | //     console.log(data)
  63  | //     //await links.nth(i).click()
  64  | //  }
  65  | 
  66  | // await links.nth(2).click()
  67  | // console.log(await page.title())
  68  | 
  69  | })
  70  | 
  71  | 
  72  | test("Clear trip",async ({page})=>{
  73  | 
  74  | 
  75  | 
  76  |     // await page.goto("https://www.cleartrip.com/")
  77  |     // await page.getByTestId("closeIcon").click() 
  78  | 
  79  |     // await page.getByRole("radio",{name: "Round trip"}).click()
  80  | 
  81  | 
  82  | 
  83  |     await page.goto("https://flights.qedgetech.com/")
  84  |     await page.waitForTimeout(2000)
  85  |     await page.getByRole("link",{name:"Register "}).click()
  86  |     await page.getByRole("textbox",{name:"name"}).first().fill("venkat")
  87  | //     await page.getByRole("checkbox",{name:"By Clicking Register button you agree to the QEdge privacy policy"
  88  | //   }).check()
  89  | 
  90  | await page.getByRole("combobox",{label:"Gender"}).selectOption({value:"F"})
  91  | 
  92  | 
  93  |     await page.waitForTimeout(3000)
  94  | })
  95  | 
  96  | test.only("Select Multiple values",async ({}) =>{
  97  | 
> 98  |     await page.goto("https://html.com/attributes/select-Multiple/")
      |     ^ ReferenceError: page is not defined
  99  |     await page.getByRole("listbox").selectOption(["Chilean flamingo","Lesser flamingo"])
  100 |      await page.waitForTimeout(3000)
  101 | })
```
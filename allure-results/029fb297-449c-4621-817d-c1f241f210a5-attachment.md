# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BaseTest.spec.js >> Read data from .env file
- Location: tests\BaseTest.spec.js:169:6

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1   | //import { expect } from "@playwright/test";
  2   | 
  3   | 
  4   | import {test,expect,page,locator} from '@playwright/test';
  5   | 
  6   | 
  7   | 
  8   | 
  9   | 
  10  | 
  11  |  export class  Base{
  12  | 
  13  | 
  14  |     constructor(page){
  15  |         this.page = page;
  16  |     }
  17  | 
  18  | 
  19  |     async navigateTo(url){
> 20  |         await this.page.goto(url);
      |                         ^ Error: page.goto: url: expected string, got undefined
  21  |         await this.page.waitForLoadState('networkidle');
  22  |     }
  23  | 
  24  |     async fillInput(selector, value){
  25  |         const inputField = this.page.locator(selector);
  26  |         await inputField.fill(value);
  27  |     }
  28  | 
  29  |     async clickButton(selector){
  30  |         const button = this.page.locator(selector);
  31  |         await button.click();
  32  |     }
  33  | 
  34  |     async click(locator){
  35  |         await locator.click();
  36  |     }
  37  |     async enterText(locator, text){
  38  |         await locator.fill(text);
  39  |     }
  40  | 
  41  | 
  42  |     async getText(locator){
  43  |         return await locator.textContent();
  44  |     }
  45  | 
  46  |     async isVisible(locator){
  47  |         return await locator.isVisible();
  48  |     }
  49  | 
  50  |     async selectOption(locator, optionValue){
  51  |         await locator.selectOption(optionValue);
  52  | 
  53  |     }
  54  | 
  55  |     async waitForNavigation(){
  56  |         await this.page.waitForLoadState('networkidle');
  57  |     }
  58  | 
  59  | 
  60  |     async waitForElement(locator, timeout = 5000){
  61  |         await locator.waitFor({ state: 'visible', timeout });
  62  |     }
  63  | 
  64  |     async waitForElement1(locator, timeout=5000){
  65  | 
  66  |         await this.page.waitForSelector(locator, { state: 'visible', timeout });
  67  |     }
  68  | 
  69  | 
  70  |     async waitForElementToDisappear(locator, timeout = 5000){
  71  |         await locator.waitFor({ state: 'hidden', timeout });
  72  |     }
  73  | 
  74  |     async getLocator(selector){
  75  |         return this.page.locator(selector);
  76  |     }
  77  | 
  78  |     async getAllLocators(selector){
  79  |         return this.page.locator(selector);
  80  |     }
  81  | 
  82  |     async getLocatorCount(selector){
  83  |         const locator = this.page.locator(selector);
  84  |         return await locator.count();
  85  |     }
  86  |     async getLocatorText(selector){
  87  |         const locator = this.page.locator(selector);
  88  |         return await locator.textContent();
  89  |     }
  90  | 
  91  | 
  92  |     async  getLocatorAttribute(selector, attributeName){
  93  |         const locator = this.page.locator(selector);
  94  |         return await locator.getAttribute(attributeName);
  95  |     }
  96  | 
  97  |     async getLocatorValue(selector){
  98  |         const locator = this.page.locator(selector);
  99  |         return await locator.inputValue();
  100 |     }
  101 | 
  102 | 
  103 |     async getLocatorInnerHTML(selector){
  104 |         const locator = this.page.locator(selector);
  105 |         return await locator.innerHTML();
  106 |     }
  107 | 
  108 |     async getLocatorInnerText(selector){
  109 |         const locator = this.page.locator(selector);
  110 |         return await locator.innerText();
  111 |     }
  112 | 
  113 |     async getLocatorBoundingBox(selector){
  114 |         const locator = this.page.locator(selector);
  115 |         return await locator.boundingBox();
  116 |     }
  117 | 
  118 |     async getLocatorScreenshot(selector){
  119 |         const locator = this.page.locator(selector);
  120 |         return await locator.screenshot();
```
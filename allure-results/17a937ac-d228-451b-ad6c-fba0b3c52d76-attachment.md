# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample5.spec.js >> To
- Location: tests\Sample5.spec.js:35:6

# Error details

```
Error: page.press: key: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - text: This is just a demo of TodoMVC for testing, not the
    - link "real TodoMVC app." [ref=e3] [cursor=pointer]:
      - /url: https://todomvc.com/
  - generic [ref=e6]:
    - heading "todos" [level=1] [ref=e7]
    - textbox "What needs to be done?" [active] [ref=e8]: Learn JavaScript
  - contentinfo [ref=e9]:
    - paragraph [ref=e10]: Double-click to edit a todo
    - paragraph [ref=e11]:
      - text: Created by
      - link "Remo H. Jansen" [ref=e12] [cursor=pointer]:
        - /url: http://github.com/remojansen/
    - paragraph [ref=e13]:
      - text: Part of
      - link "TodoMVC" [ref=e14] [cursor=pointer]:
        - /url: http://todomvc.com
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const path = require('path');
  3  | 
  4  | test('TodoMVC tasks can be added and completed', async ({ page }) => {
  5  | 
  6  |   //await page.evaluate(() => localStorage.clear())
  7  |   await page.goto('https://demo.playwright.dev/todomvc');
  8  |   await page.evaluate(() => localStorage.clear());
  9  |   await page.reload();
  10 |   await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  11 | 
  12 |   const taskNames = ['Learn JavaScript', 'Learn Playwright', 'Learn AI Testing'];
  13 |   const newTodo = page.locator('.new-todo');
  14 |   for (const taskName of taskNames) {
  15 |     await newTodo.fill(taskName);
  16 |     await page.waitForTimeout(3000)
  17 |     await newTodo.press('Enter');
  18 |   }
  19 | 
  20 |   const tasks = page.locator('.todo-list li');
  21 |   await expect(tasks).toHaveCount(3);
  22 |   await tasks.filter({ hasText: 'Learn JavaScript' }).getByRole('checkbox').check();
  23 | 
  24 |   await expect(tasks).toHaveCount(3);
  25 |   await expect(page.locator('.todo-list li.completed')).toHaveCount(1);
  26 |   await expect(page.locator('.todo-list li.completed label')).toHaveText('Learn JavaScript');
  27 | 
  28 |   await page.screenshot({
  29 |     path: path.resolve(process.cwd(), 'screenshots', 'TodoMVC-tasks.png'),
  30 |     fullPage: true,
  31 |   });
  32 | });
  33 | 
  34 | 
  35 | test.only("To",async ({page}) =>{
  36 | 
  37 | 
  38 |     await page.goto('https://demo.playwright.dev/todomvc');
  39 |     await page.evaluate(()=>localStorage.clear())
  40 | 
  41 |     await page.reload()
  42 | 
  43 |     page.locator("")
  44 | 
  45 | const taskNames = ['Learn JavaScript', 'Learn Playwright', 'Learn AI Testing'];
  46 | 
  47 | 
  48 | const text= page.locator(".new-todo")
  49 | 
  50 | for(const v of taskNames)
  51 | {
  52 | 
  53 |   await page.locator(".new-todo").fill(v)
  54 |   await page.waitForTimeout(3000)
  55 | 
> 56 |   await page.press("Enter")
     |              ^ Error: page.press: key: expected string, got undefined
  57 | }
  58 | 
  59 | })
```
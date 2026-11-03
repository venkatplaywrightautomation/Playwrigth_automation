# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample5.spec.js >> To
- Location: tests\Sample5.spec.js:36:6

# Error details

```
Error: Inner "hasNot" locator must belong to the same frame.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - text: This is just a demo of TodoMVC for testing, not the
    - link "real TodoMVC app." [ref=e3] [cursor=pointer]:
      - /url: https://todomvc.com/
  - generic [ref=e5]:
    - generic [ref=e6]:
      - heading "todos" [level=1] [ref=e7]
      - textbox "What needs to be done?" [active] [ref=e8]
    - generic [ref=e9]:
      - checkbox "❯Mark all as complete" [ref=e10]
      - generic [ref=e11]: ❯Mark all as complete
      - list [ref=e12]:
        - listitem [ref=e13]:
          - generic [ref=e14]:
            - checkbox "Toggle Todo" [ref=e15]
            - generic [ref=e16]: Learn JavaScript
            - text: ×
        - listitem [ref=e17]:
          - generic [ref=e18]:
            - checkbox "Toggle Todo" [ref=e19]
            - generic [ref=e20]: Learn Playwright
            - text: ×
        - listitem [ref=e21]:
          - generic [ref=e22]:
            - checkbox "Toggle Todo" [ref=e23]
            - generic [ref=e24]: Learn AI Testing
            - text: ×
    - generic [ref=e25]:
      - generic [ref=e26]:
        - strong [ref=e27]: "3"
        - text: items left
      - list [ref=e28]:
        - listitem [ref=e29]:
          - link "All" [ref=e30] [cursor=pointer]:
            - /url: "#/"
        - listitem [ref=e31]:
          - link "Active" [ref=e32] [cursor=pointer]:
            - /url: "#/active"
        - listitem [ref=e33]:
          - link "Completed" [ref=e34] [cursor=pointer]:
            - /url: "#/completed"
  - contentinfo [ref=e35]:
    - paragraph [ref=e36]: Double-click to edit a todo
    - paragraph [ref=e37]:
      - text: Created by
      - link "Remo H. Jansen" [ref=e38] [cursor=pointer]:
        - /url: http://github.com/remojansen/
    - paragraph [ref=e39]:
      - text: Part of
      - link "TodoMVC" [ref=e40] [cursor=pointer]:
        - /url: http://todomvc.com
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { checkDataType } = require('ajv/dist/compile/validate/dataType');
  3  | const path = require('path');
  4  | 
  5  | test('TodoMVC tasks can be added and completed', async ({ page }) => {
  6  | 
  7  |   //await page.evaluate(() => localStorage.clear())
  8  |   await page.goto('https://demo.playwright.dev/todomvc');
  9  |   await page.evaluate(() => localStorage.clear());
  10 |   await page.reload();
  11 |   await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  12 | 
  13 |   const taskNames = ['Learn JavaScript', 'Learn Playwright', 'Learn AI Testing'];
  14 |   const newTodo = page.locator('.new-todo');
  15 |   for (const taskName of taskNames) {
  16 |     await newTodo.fill(taskName);
  17 |     await page.waitForTimeout(3000)
  18 |     await newTodo.press('Enter');
  19 |   }
  20 | 
  21 |   const tasks = page.locator('.todo-list li');
  22 |   await expect(tasks).toHaveCount(3);
  23 |   await tasks.filter({ hasText: 'Learn JavaScript' }).getByRole('checkbox').check();
  24 | 
  25 |   await expect(tasks).toHaveCount(3);
  26 |   await expect(page.locator('.todo-list li.completed')).toHaveCount(1);
  27 |   await expect(page.locator('.todo-list li.completed label')).toHaveText('Learn JavaScript');
  28 | 
  29 |   await page.screenshot({
  30 |     path: path.resolve(process.cwd(), 'screenshots', 'TodoMVC-tasks.png'),
  31 |     fullPage: true,
  32 |   });
  33 | });
  34 | 
  35 | 
  36 | test.only("To",async ({page}) =>{
  37 | 
  38 | 
  39 |     await page.goto('https://demo.playwright.dev/todomvc');
  40 |     await page.evaluate(()=>localStorage.clear())
  41 | 
  42 |     await page.reload()
  43 | 
  44 |     page.locator("")
  45 | 
  46 | const taskNames = ['Learn JavaScript', 'Learn Playwright', 'Learn AI Testing'];
  47 | 
  48 | 
  49 | const text= page.locator(".new-todo")
  50 | 
  51 | for(const v of taskNames)
  52 | {
  53 | 
  54 |   await page.locator(".new-todo").fill(v)
  55 |   await page.waitForTimeout(3000)
  56 | 
  57 |   await page.locator(".new-todo").press("Enter")
  58 | }
  59 | 
  60 | 
  61 | const total= page.locator(".todo-list li")
  62 | await expect(total).toHaveCount(3)
  63 | //await total.filter({hasText: `Learn Playwright` }).getByRole("checkbox").check()
  64 | //await total.filter({ hasText: 'Learn JavaScript' }).getByRole('checkbox').check();
  65 | 
  66 | //await page.waitForTimeout(3000)
  67 | 
  68 | 
  69 | for(let i=0;i<await total.count();i++)
  70 | {
  71 | 
> 72 |   await total.filter({hasNot:taskNames}).getByRole("checkbox").nth(i).check()
     |               ^ Error: Inner "hasNot" locator must belong to the same frame.
  73 | 
  74 | 
  75 | 
  76 | }
  77 |   await page.waitForTimeout(3000)
  78 | 
  79 | // for(const v of total)
  80 | // {
  81 | 
  82 | //   await v.filter({hasText:taskNames}).check()
  83 | // }
  84 | })
```
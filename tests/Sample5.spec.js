const { test, expect, chromium } = require('@playwright/test');

const { checkDataType } = require('ajv/dist/compile/validate/dataType');
const path = require('path');

test('TodoMVC tasks can be added and completed', async ({ page }) => {

  //await page.evaluate(() => localStorage.clear())
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();

  const taskNames = ['Learn JavaScript', 'Learn Playwright', 'Learn AI Testing'];
  const newTodo = page.locator('.new-todo');
  for (const taskName of taskNames) {
    await newTodo.fill(taskName);
    await page.waitForTimeout(3000)
    await newTodo.press('Enter');
  }

  const tasks = page.locator('.todo-list li');
  await expect(tasks).toHaveCount(3);
  await tasks.filter({ hasText: 'Learn JavaScript' }).getByRole('checkbox').check();

  await expect(tasks).toHaveCount(3);
  await expect(page.locator('.todo-list li.completed')).toHaveCount(1);
  await expect(page.locator('.todo-list li.completed label')).toHaveText('Learn JavaScript');

  await page.screenshot({
    path: path.resolve(process.cwd(), 'screenshots', 'TodoMVC-tasks.png'),
    fullPage: true,
  });
});


test("To",async ({page}) =>{


    await page.goto('https://demo.playwright.dev/todomvc');
    await page.evaluate(()=>localStorage.clear())

    await page.reload()

    page.locator("")

const taskNames = ['Learn JavaScript', 'Learn Playwright', 'Learn AI Testing'];


const text= page.locator(".new-todo")

for(const v of taskNames)
{

  await page.locator(".new-todo").fill(v)
  await page.waitForTimeout(3000)

  await page.locator(".new-todo").press("Enter")
}


const total= page.locator(".todo-list li")


const checkboxes=  total.getByRole("checkbox")

const checkboxCount= await checkboxes.count()


await expect(total).toHaveCount(3)
//await total.filter({hasText: `Learn Playwright` }).getByRole("checkbox").check()
//await total.filter({ hasText: 'Learn JavaScript' }).getByRole('checkbox').check();

//await page.waitForTimeout(3000)

//const checkboxes = page.locator('input[type="checkbox"]');
 //   const count = await checkboxes.count();

for(let i=0;i < checkboxCount;i++)
{

  //await total.filter({hasText:taskNames}).getByRole("checkbox").nth(i).check()
//await checkboxes.nth(i).check()

await checkboxes.nth(i).check()


}
  await page.waitForTimeout(3000)

// for(const v of total)
// {

//   await v.filter({hasText:taskNames}).check()
// }
})


test.only("Launch",async() =>{



  const browser= await chromium.launch({headless:false})



  const context1= await browser.newContext();


  //const context2= await browser.newContext()



  const page1= await context1.newPage()
  const page2= await context1.newPage()

//await page1.waitForTimeout(5000)

  await page1.goto("https://www.saucedemo.com/")
await page1.waitForTimeout(3000)


  await page2.goto("https://www.facebook.com/")
await page2.waitForTimeout(3000)
const pages= context1.pages()

console.log("Pages:"+  pages.length)

  
})
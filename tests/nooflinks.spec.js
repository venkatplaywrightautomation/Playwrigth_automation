




import { test, expect, chromium } from '@playwright/test'; 
import { url } from 'inspector';

test('Verify number of pages in the application', async ({page}) => { 

    await page.goto('https://google.com')

    const links= page.locator("//a")

    console.log("Number of links in the page are: "+ await links.count())
    await page.waitForTimeout(3000)

})


test('broken links', async ({page,request}) => {
await page.goto('https://google.com')

 const links = await page.locator('a').all();

  for (const link of links) {
    const url = await link.getAttribute('href');

    if (url) {
      const response = await request.get(url);
      console.log(url, response.status());
    }
  }
})

test('Verify Amazon menu items count', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  // Locate menu items in top navigation
  const menuItems = page.locator('#nav-xshop a');

  // Get count
  await page.waitForTimeout(3000)
  const count = await menuItems.count();
  console.log("Total Menu Items:", count);

 

  // Validate count is greater than 0
  //expect(count).toBeGreaterThan(0);

});


test('Print Amazon menu items', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  const menuItems = page.locator('#nav-xshop a');
  await page.waitForTimeout(3000)
  const count = await menuItems.count();

  for (let i = 0; i < count; i++) {
    const text = await menuItems.nth(i).textContent();
    console.log(text);
     // await page.waitForTimeout(3000)
  }

});



test("Verify number of pages in the application @smoke",async ()=>{

    const b=await chromium.launch({headless:false})
    const c= await b.newContext()
    const p=await c.newPage()

    await p.goto('https://google.com')

    const links= p.locator("//a")
    console.log("Number of links in the page are: "+ await links.count())
    await p.waitForTimeout(3000)
    await b.close()

})

test("Verify number of pages in the application 2",async ()=>{

    const b=await chromium.launch({headless:false})
    const c= await b.newContext()
    const p=await c.newPage()
    const p1 =await c.newPage()

    await p.goto('https://google.com')
    await p1.goto('https://bing.com')

    console.log("no of pages: "+c.pages().length)

})


test("Verify number of pages in the application 3",async ()=>{

  const b=await chromium.launch({headless:false})
  
  const c= await b.newContext()

  const p=await c.newPage()

  await p.goto('https://google.com')

  const links= p.locator("//a")
  console.log("Number of links in the page are: "+ await links.count())
  await p.waitForTimeout(3000)
  await b.close()






})

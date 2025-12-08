import { withoutconstructor } from '../Pages/withoutconstructor'


//import{test,expec,chromium,firefox,webkit, devices} from "@playwright/test"


const { error, log } = require('console')
const { link } = require('fs')
const {test,expect,chromium,firefox,webkit}=require('playwright/test')

test("Browser laucnh",async()=>{


    const browsers=[chromium,firefox,webkit]


    for(const browseRType of browsers){

       const browser= await browseRType.launch({headless:false})
       const context= await browser.newContext()
      const page= await browser.newPage()
      await page.goto("https://google.com")
      

    }


})

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
  }
});

// test.only("retry Login", async ({ page,request }) => {

//   await page.goto("https://www.google.com/")
  // for (let i = 0; i < 3; i++) {
  //   try {
  //     await page.locator("#login").click();
  //     break;
  //   } catch {
  //     if (i === 2) {
  //       console.error("login failed")
  //     }
  //   }
  // }


//   const response = await request.get('https://gorest.co.in/public/v2/users');
// expect(response.status()).toBe(200);
// const data = await response.json();
// console.log(data);


// await page.fill('[name="q"]', 'Playwright');
// const suggestions = page.locator('li span1');
// await suggestions.first().waitFor(); // wait for dropdown to load
// const count = await suggestions.count();

// for (let i = 0; i < count; i++) {
//   const text = await suggestions.nth(i).textContent();
//   if (text.includes('tutorial')) {
//     await suggestions.nth(i).click();
//     break;
//   }
// }


// for (let i = 0; i < 3; i++) {
//     try {
//       await page.click('#submit');
//       break;
//     } catch (e) {
//       console.log(`Retry attempt ${i + 1}`);
//       await page.screenshot({ path: `retry-${i + 1}.png` });
//     }
//   }
//   })





test("sample",async({page},request) =>{


  await page.goto("https://www.google.com/")
const links = await page.$$('a');
console.log("No of links:"+links.length)
for (const link of links) {
  const text = await link.innerText();
  console.log(text);
}

})


test.only("Without const",async({page}) =>{

//const login=  new withoutconstructor()
//await withoutconstructor.naviagateTo(page,"https://www.google.com")
await page.goto("https://www.google.com/")

 // await page.goto("https://www.facebook.com")
 // await withoutconstructor.enterUsernmaeAndpassword(page,"venkat","venkat")

//   const links = await page.locator('a').all();

//   console.log("no of links",links.length)
// const hrefs = await Promise.all(links.map(l => l.getAttribute('href')));
// console.log(hrefs);


// const products = await page.locator('a').allTextContents();
// console.log(products);
// console.log("lenth",products.length)

const anchors = await page.locator('a').all();
const urls = await Promise.all(anchors.map(a => a.getAttribute('href')));

for (const url of urls) {
  const response = await page.request.get(url);
  console.log(url, response.status());
}
 // await page.waitForTimeout(3000)
})


import { test,expect,chromium} from "allure-playwright";    


test("Extract Text from page", async ({page}) => {


//   const browser = await chromium.launch({ headless: false });
 

//     const context= await browser.newContext(
//         {

//             httpCredentials:{
//                 username:"admin",
//                 password:"admin"
//             }
//         })
//     const page= await context.newPage() 

    //await page.goto("https://google.com/") 

    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await expect(page.locator('h3')).toHaveText('Basic Auth');
    // const text= await page.evaluate(() => document.body.innerText)

    // console.log(text)


//     const links = await page.locator('a').all();
// for (const link of links) {
//   const href = await link.getAttribute('href');
//   if (href && href.startsWith('http')) {
//     await page.goto(href);
//     console.log('Title:', await page.title());
//   }



//}



// const links=await page.locator('a').all();

// for(const link of  links){

//     const  href= await link.getAttribute('href');

//     if(href && href.startsWith('http')){
//         await page.goto(href);
//         console.log('Title:', await page.title());
// }
// }
    



})
    
//  const moduleName = '@playwright/test';
//   import { test } from (moduleName); 

//console.log("Executing flipcart.spec.js");

// const moduleName = '@playwright/test';
// const { test,chromium } = require(moduleName);

console.log("Executing flipcart.spec.js");

//const { test,chromium } = require('@playwright/test');
import { test, expect ,chromium} from '@playwright/test';

test('add product to the cart', async () => {  
    
   // await page.waitForTimeout(3000) 
    //let productName = 'ADIDAS ORIGINAL'
    //await page.goto("https://www.flipkart.com/")
     const browser = await chromium.launch({
    headless: false, // Set to true for headless mode
   
  });

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.flipkart.com/")
    //await page.locator("button:has-text('✕')").click()
    // await page.locator("input[title='Search for products, brands and more']").fill("Adidas Originals Sneakers")
    // await page.locator("button[type='submit']").click()

       const searchQuery = 'laptop';
    console.log(`Searching for: ${searchQuery}`);
    const productName="ASUS Chromebook CX14 Intel Celeron Dual Core N4500 - (4 GB/64 GB EMMC Storage/Chrome OS) CX1405CKA-NK0..."

    await page.getByPlaceholder("Search for products, brands and more").fill(searchQuery);

    await page.locator("button[type='submit']").click();
   
    await page.waitForTimeout(3000)
    // Wait for search results to load
    await page.waitForSelector('div[data-id]', { timeout: 10000 });
    console.log('Search results loaded');
await page.waitForTimeout(3000)

const products= page.locator("div[data-id]")
const productText= await products.locator('.RG5Slk').allTextContents()
    console.log("all products text",productText)
const count= await products.count();

console.log("Total no of products",count)
for(let i=0;i<count;i++){       
    const productNames= await products.nth(i).locator('.RG5Slk').textContent()
    console.log("all product names",productNames)
    if(productName===productNames){
        await products.nth(i).locator('a').click()
        break
        await page.waitForTimeout(3000)
    }

}

        await page.waitForTimeout(3000)


        const pages= context.pages()

        const pagecount= pages.length;
        console.log("number of pages",pagecount)
        const newPage= pages[pages.length-1]
        await newPage.bringToFront();
        await newPage.waitForLoadState();  
        await newPage.waitForTimeout(3000)
        // await newPage.locator("button:has-text('Add to Cart')").click()
       // await newPage.locator("button:has-text('Add to cart')").click()
      // await newPage.getByRole('button',{name:'Add to Cart'}).click()
       await newPage.locator("//button[text()='Add to cart']").click()
       await newPage.waitForTimeout(3000)
    //await newPage.locator("a:has-text('Cart')").click()
    await newPage.waitForTimeout(3000)
     //await newPage.getByRole('button',{name:'Checkout'}).click()

     //await newPage.getByPlaceholder("Select Country").pressSequentially("ind")
     await newPage.locator("//span[text()='Place Order']").click()
        await newPage.waitForTimeout(3000)
        //await page.locator("button:has-text('✕')").click()
       // await newPage.waitForTimeout(3000)
        await newPage.locator("input[type='text']").fill("9538165342")
       // await newPage.locator("button:has-text('CONTINUE')").click()
        await newPage.waitForTimeout(3000)
     await newPage.locator("button:has-text('CONTINUE')").click()
        await newPage.waitForTimeout(3000)












    //     const pages = context.pages();
    //     const pageCount = pages.length;
    //     console.log(`Number of open pages: ${pageCount}`);
    //     const newPage = pages[pages.length - 1];
    //     await newPage.bringToFront();
    //    // await newPage.waitForLoadState();  
    //     await page.waitForTimeout(3000) 
   
})
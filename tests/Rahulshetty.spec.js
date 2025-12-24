


const { test, expect } = require('@playwright/test');

test('add product to the cart', async ({ page }) => {

 await page.waitForTimeout(3000)
    let productName = 'ADIDAS ORIGINAL'
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("venkatautomation5342@gmail.com")
    await page.locator("//input[@id='userPassword']").fill("Venkat@9538");
    await page.locator("//input[@id='login']").click();

    await page.waitForTimeout(3000)
    //await expect(page.getByRole('button', { name: ' HOME' })).toBeVisible()

    await expect(page.getByRole('button',{name:' HOME'})).toBeVisible()

    const products= page.locator("div.card-body ")
    const productText= await products.locator('b').allTextContents()
        console.log("all products text",productText)


    const count= await products.count();
    
    // console.log("Total no of products",count)

    // for(let i=0;i<count;i++){       
    //     const productNames= await products.nth(i).locator('b').textContent()

    //     console.log("all product names",productNames)
    // }
for(let i=0;i<count;i++){
    const ProductNames=await products.nth(i).locator('b').textContent();
    console.log("all product names",ProductNames)

    if(productName===ProductNames){
        await products.nth(i).getByRole('button',{name:' Add To Cart'}).click()
        break
        await page.waitForTimeout(3000)
    }
}
await page.waitForTimeout(3000)
//await expect (page.locator("#toast-container")).toBeVisible()
await page.locator("[routerlink='/dashboard/cart']").click()
await page.getByRole('button',{name:'Checkout'}).click()
await page.getByPlaceholder("Select Country").pressSequentially("ind")

const countryDdvalues= page.locator(".ta-results button")
await page.waitForTimeout(3000)
await countryDdvalues.first().waitFor()

const countryddropdownvalues= await countryDdvalues.count()
console.log("country dropdown values count",countryddropdownvalues)
for(let i=0;i<countryddropdownvalues;i++){

    const names= await countryDdvalues.nth(i).textContent()
    console.log("country values",names)
    if(names===' India'){
        await countryDdvalues.nth(i).click()
        break;
    }
}

await page.getByText('Place Order ').click()
const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
console.log("order id",orderId)

await page.locator("[routerlink='/dashboard/myorders']").first().click()
await page.waitForTimeout(3000)
const rows= page.locator("table tbody tr")
const rowscount= await rows.count()
console.log("total no of rows in orders table",rowscount)
for(let i=0;i<rowscount;i++){

    const rowsdata=await rows.nth(i).locator('th').textContent()
    console.log("order id each row",rowsdata)
    if(orderId.includes(rowsdata)){
        await rows.nth(i).locator("button").first().click()
        break;
    }
    // const orderideachrow= await rows.nth(i).locator("th").textContent()
    // console.log("order id each row",orderideachrow)
    // if(orderId.includes(orderideachrow)){
    //     await rows.nth(i).locator("button").first().click()
    //     break;
    // }
}
await page.waitForTimeout(3000)

})
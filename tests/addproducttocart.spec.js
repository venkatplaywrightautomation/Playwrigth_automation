



import { test, expect } from "allure-playwright";


test("add prodct to the cart", async ({ page }) => {



    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");




    //   await page.locator("//input[@id='user-name']").fill("standard_user")
    //   await page.locator("//input[@id='password']").fill("secret_sauce");
    //   await page.locator("//input[@id='login-button']").click();

    //   await page.waitForTimeout(3000)


    let productName = 'ADIDAS ORIGINAL'
    await page.locator("#userEmail").fill("venkatautomation5342@gmail.com")
    await page.locator("//input[@id='userPassword']").fill("Venkat@9538");
    await page.locator("//input[@id='login']").click();

    await page.waitForTimeout(3000)
    await expect(page.getByRole('button', { name: ' HOME' })).toBeVisible()

    const produts = await page.locator("div.card-body ")
    const productText = await produts.locator('b').allTextContents()
    console.log("all products text", productText)

    const count = await produts.count();
    console.log("Total no of products", count)
    for (let i = 0; i < count; i++) {

        const productNames = await produts.nth(i).locator('b').textContent()

        console.log("all product names", productNames)

        if (productNames === productName) {
            await produts.nth(i).getByRole('button', { name: ' Add To Cart' }).click()
            break;
        }
    }

    const emailId = "venkatautomation5342@gmail.com"
    await expect(page.locator("#toast-container")).toBeVisible()
    await page.locator("[routerlink='/dashboard/cart']").click()
    await page.getByRole('button', { name: 'Checkout' }).click()
    await page.getByPlaceholder("Select Country").pressSequentially("ind")

    const countryDdvalues = page.locator(".ta-results button")
    await page.waitForTimeout(3000)
    await countryDdvalues.first().waitFor()

    const countryddropdownvalues = await countryDdvalues.count()

    for (let i = 0; i < countryddropdownvalues; i++) {
        const countryvalues = await countryDdvalues.nth(i).textContent()
        console.log("country values", countryvalues)
        if (countryvalues === ' India') {
            await countryDdvalues.nth(i).click()
            break;

        }

    }

    await page.getByText("Place Order ").click()

    await expect(page.locator(".hero-primary")).toHaveAttribute('class',"hero-primary")
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log("order id",orderId)
    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await page.waitForTimeout(3000)
    await page.locator("tbody").waitFor()

    const rows= page.locator('tbody tr')

    const rowscount= await rows.count()
    console.log("No of rows", await rows.count())


    for(let i=0;i<rowscount;i++)
    {

        const ids=await rows.nth(i).textContent()
        console.log("Ids",ids)
    }


})
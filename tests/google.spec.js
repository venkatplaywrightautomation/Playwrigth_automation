



const { test } = require('@playwright/test')



test('google test', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator('textarea[name="q"]').fill('playwright');

    await page.locator('textarea[name="q"]').press('Enter');

    await page.waitForSelector('#search');

    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);


    })

    await page.waitForResponse(res => res.includes('googleads.g.doubleclick.net/pagead/ads?') && res.status() === 200);




})


test('google test 2', async ({ page, request }) => {
    await page.goto('https://www.google.com/');

    const links = await page.locator("a").all();
    console.log(`Total links: ${links.length}`);





    // for(let link of links){

    //     const url= await link.getAttribute('href');

    //     console.log(url);
    // const res = await page.request.get(url);

    // //console.log(url.status());

    // if(res.status() !== 200)
    //     console.log(`Link ${url} is broken with status code ${res.status()}`);



    // }

})


test.only("add to cart test", async ({ page }) => {



    await page.goto("https://www.saucedemo.com/");

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForTimeout(3000);

    const products = page.locator('.inventory_item_description')

    const count = await products.count();
    console.log(`Total products: ${count}`);

    let addedProducts = [];

    for (let i = 0; i < count; i++) {
        const product = products.nth(i);


        console.log("inside for loop" + await product.textContent());


        const title = await product.locator('.inventory_item_name ').textContent();
        console.log("title is " + title);
        const priceText = await product.locator('.inventory_item_price').textContent();
        console.log("price is" + priceText);


        const price = parseFloat(priceText.replace(/[^\d.]/g, ''));

        console.log("price is  after delete " + price);

        if (price < 300) {
            await product.getByText('Add to cart').click();
            addedProducts.push(title.trim());
        }
        await page.waitForTimeout(1000);
    }

    console.log('Added Products:', addedProducts);


})


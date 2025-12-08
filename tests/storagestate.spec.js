const{test,expect, chromium}=require('@playwright/test')


test.use({storageState:{cookies:[],origins:[]}})


test("storage state demo",async({page})=>{

// const browser= await chromium.launch({headless:false});
// const context=await browser.newContext({storageState:'./state.json'});
// const page=await context.newPage();
// await page.goto()("https://www.saucedemo.com/");



await page.goto("https://www.saucedemo.com/inventory.html");

// await page.goto("https://www.saucedemo.com/");
// await page.locator("//input[@id='user-name']").fill("standard_user");

// await page.locator("//input[@id='password']").fill("secret_sauce");
// await page.locator("//input[@id='login-button']").click();
// await page.waitForTimeout(5000);
// await page.context().storageState({path:'testdata/auth.json'});



//await browser.close();  

//await expect(page1.locator('.inventory_list')).toBeVisible();

})

test("skip login steps",async({page})=>{

await page.goto("https://www.saucedemo.com/inventory.html");
//await browser.close();  

//await expect(page1.locator('.inventory_list')).toBeVisible();

})
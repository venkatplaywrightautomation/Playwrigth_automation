




// export async function login(page,username, password) {




//     await page.goto("https://www.saucedemo.com/")
//     await page.locator("//input[@id='user-name']").fill(username)  
//     await page.locator("//input[@id='password']").fill(password)
//     await page.locator("//input[@id='login-button']").click()
//     //await page.context().storageState({ path: './Loginauth.json' });

    

// }


export class login{

    constructor(page){
        this.page=page
        this.username=page.locator("#user-name")
        this.password=page.locator("#password")
        this.loginBtn=page.locator("#login-button")
        this.products=page.locator(".inventory_item")
    }

    async login(username,password){

        await this.page.goto("https://www.saucedemo.com/")
        await this.username.fill(username)  
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    async addOnCart(productName){
        // const products = this.page.locator(".inventory_item")
        // const count = await products.count();
        // console.log("Total no of products", count)
//await this.page.locator(".inventory_item").filter({ hasText: productName }).first().locator("button").click()

await this.products
    .filter({ hasText: productName })
    .getByRole('button', { name: 'Add to cart' })
    .click();
    }

}

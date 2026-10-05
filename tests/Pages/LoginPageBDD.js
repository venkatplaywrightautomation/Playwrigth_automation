

export class LoginPageBDDClass {

    constructor(page) { 
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
        this.text= page.locator("//span[@class='title']")
        this.successmsg=page.locator("//div[normalize-space()='Sauce Labs Backpack']")
        
    }

    async navigate(url) {
       // await this.page.goto('https://www.saucedemo.com/');

        await this.page.goto(url);
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    
    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}

//module.exports = { LoginPageBDD };

//module.exports={LoginPageBDDClass}
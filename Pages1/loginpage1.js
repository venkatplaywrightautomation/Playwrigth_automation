class login
{
    constructor(page)
    {
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button'; 
    }

    async loginToApp(username,password)
    {
        await this.page.goto('https://www.saucedemo.com/');
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
    async loginToAppWithReusableMethods(username,password)
    {
        await this.page.goto('https://www.saucedemo.com/'); 

    }
}
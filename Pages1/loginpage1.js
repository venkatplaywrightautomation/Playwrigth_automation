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
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);

        await this.username.fill(username);         
        await this.page.click(this.loginButton);
    }
    async loginToAppWithReusableMethods(username,password)
    {
        await this.page.goto('https://www.saucedemo.com/'); 

    }
}
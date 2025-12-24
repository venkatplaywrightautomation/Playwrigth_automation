const { expect } = require('@playwright/test');

class FacebookLoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.email = page.locator('#email');
    this.password = page.locator('#pass');
    this.loginBtn = page.locator('button[name="login"]');
  }

  async goto() {
    await this.page.goto('https://www.facebook.com/');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = FacebookLoginPage;

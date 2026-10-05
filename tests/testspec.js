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
    await this.page.waitForLoadState('networkidle');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async isLoginFormVisible() {
    return (
      await this.email.isVisible() &&
      await this.password.isVisible() &&
      await this.loginBtn.isVisible()
    );
  }
}

module.exports = FacebookLoginPage;
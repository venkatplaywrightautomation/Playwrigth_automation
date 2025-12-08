const { BasePage } = require('./BasePage');

class LoginPagePOM extends BasePage {
  constructor(page) {
    super(page);
    this.userName = this.locator("//input[@id='user-name']");
    this.password = this.locator("//input[@id='password']");
    this.loginBtn = this.locator("//input[@id='login-button']");
    this.errorMessage = this.locator('[data-test="error"]');
    this.inventoryContainer = this.locator('.inventory_list');
  }

  async navigateToURL(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.fill(this.userName, username);
    await this.fill(this.password, password);
    await this.click(this.loginBtn);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async isInventoryVisible() {
    return await this.isVisible(this.inventoryContainer);
  }

  async goBack() {
    await this.page.goBack();
  }

  async refreshPage() {
    await this.page.reload();
  }

  async goForward() {
    await this.page.goForward();
  }

  async waitForSelectorTimeout(selector, timeout) {
    await this.waitForSelector(selector, { timeout });
  }

}

module.exports = { LoginPagePOM };

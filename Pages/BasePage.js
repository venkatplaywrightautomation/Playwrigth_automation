class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Return a locator for a selector or passthrough if already a locator
  locator(selector) {
    if (!selector) return null;
    if (typeof selector.fill === 'function') return selector; // already a locator
    return this.page.locator(selector);
  }

  async click(selector, options) {
    const loc = this.locator(selector);
    await loc.waitFor({ state: 'visible' });
    await loc.click(options);
  }

  async fill(selector, text, options) {
    const loc = this.locator(selector);
    await loc.waitFor({ state: 'visible' });
    await loc.fill(text, options);
  }

  async type(selector, text, options) {
    const loc = this.locator(selector);
    await loc.waitFor({ state: 'visible' });
    await loc.type(text, options);
  }

  async getText(selector) {
    const loc = this.locator(selector);
    return await loc.textContent();
  }

  async getAttribute(selector, name) {
    const loc = this.locator(selector);
    return await loc.getAttribute(name);
  }

  async isVisible(selector) {
    const loc = this.locator(selector);
    return await loc.isVisible();
  }

  async waitForSelector(selector, options) {
    const loc = this.locator(selector);
    return await loc.waitFor(options);
  }

  async waitForNavigation(options) {
    return await this.page.waitForNavigation(options);
  }

  async hover(selector, options) {
    const loc = this.locator(selector);
    await loc.waitFor({ state: 'visible' });
    await loc.hover(options);
  }

  async setFiles(selector, files) {
    const loc = this.locator(selector);
    await loc.setInputFiles(files);
  }

  async selectOption(selector, values) {
    const loc = this.locator(selector);
    await loc.selectOption(values);
  }

  async clear(selector) {
    const loc = this.locator(selector);
    await loc.fill('');
  }

  async wait(ms) {
    await this.page.waitForTimeout(ms);
  }

  // Convenience: click when visible + enabled
  async clickWhenVisible(selector, options) {
    const loc = this.locator(selector);
    await loc.waitFor({ state: 'visible' });
    await loc.click(options);
  }
}

module.exports = { BasePage };


//import { asyncWrapProviders } from "async_hooks"
import { page, locator } from '@playwright/test'
import { time } from 'console'
import { text } from 'stream/consumers'



class Loginpage {
  constructor(page) {
    this.page = page
    this.userName = page.locator("//input[@id='user-name']")
    this.password = page.locator("//input[@id='password']")
    this.loginBtn = page.locator("//input[@id='login-button']")
    this.errorMessage = page.locator('[data-test="error"]');
    this.inventoryContainer = page.locator('.inventory_list');
  }
  async navigateToURL(url) {
    await this.page.goto(url)
  }

  async enterUserNamePassword(username, password) {
    await this.userName.fill(username)
    await this.password.fill(password)
    await this.loginBtn.click()

  }

async goback(){

  await this.page.goBack();
}

async  refreshpage(){

  await this.page.reload();
}
async goforward(){

  await this.page.goForward();
}


async waitForSelector(selector,timeout){
await this.page.waitForSelector(selector,{timeout})
}
async waitForTimeout(ms) {
    await this.page.waitForTimeout(ms);
  }


  async click(selector){
    await this.page.locator(selector).click();
  }

   async doubleClick(selector) {
    await this.page.dblclick(selector);
  }
  async  clickByText(text){
    await this.page.click(`text=${text}`);
  }
async doubleClick(selector){
  await this.page.locator(selector).dblclick();
}
async rightClick(selector){
  await this.page.locator(selector).click({button:'right'});
}


async fillinput(selector,text){
  await this.page.locator(selector).fill(text);
}
async typeslowly(selector,text,delay=100){
  await this.page.locator(selector).type(text,{delay});
}

async clearinput(selector){
  await this.page.locator(selector).fill('');
}

async presskey(key){
  await this.page.keyboard.press(key);
}
async checkcheckbox(selector){
  await this.page.locator(selector).check();
}

async uncheckcheckbox(selector){
  await this.page.locator(selector).uncheck();
}

async ischecked(selector){
 return await this.page.locator(selector).isChecked();
}

async isvisible(selector){
 return await this.page.locator(selector).isvisible
}
async gettext(selector){
 return await this.page.locator(selector).textContent();
}
async getattribute(selector,attribute){
 return await this.page.locator(selector).getAttribute(attribute);
}

async selectoption(selector,value){
  await this.page.locator(selector).selectOption(value);
}
async secluoptionBylabel(selector,label){
  await this.page.locator(selector).selectOption({label:label});
}
async selectoptionByindex(selector,index){
  await this.page.locator(selector).selectOption({index:index});
}
async setfilestoinput(selector,filepath){
  await this.page.locator(selector).setInputFiles(filepath);
}
async hoveron(selector){
  await this.page.locator(selector).hover();
}

async draganddrop(source,target){
  await this.page.locator(source).dragTo(this.page.locator(target));
}

async waitfornavigation(timeout){
  await this.page.waitForNavigation({timeout:timeout});
}

async gettitle(){
 return this.page.title()
}
async geturl(){
  return this.page.url();
}
async gotourl(url){
  await this.page.goto(url);
}
async reloadpage(){
  await this.page.reload();
}
async isVisible(selector){
  return await this.page.locator(selector).isVisible();
}
async isenabled(selector){
  return await this.page.locator(selector).isEnabled();
} 
async isdisabled(selector){
  return !(await this.page.locator(selector).isdisabled
}

async isEditable(selector){
  return await this.page.locator(selector).isEditable()
}
async gettext(selector){
 return await this.page.locator(selector).textContent();
}

async getValue(selector){
 return await this.page.locator(selector).inputValue();
} 

 async getInnerHTML(selector) {
    return await this.page.innerHTML(selector);
  }

  async getInnerText(selector) {
    return await this.page.innerText(selector);
  }
  async waitForNavigation(options) {
    await this.page.waitForNavigation(options);
  }
  async waitForLoadState(state, options) {
    await this.page.waitForLoadState(state, options);
  }
  async getAlltextcontents(selector){
    return await this.page.locator(selector).allTextContents();
  }
  async countofelements(selector){
    return await this.page.locator(selector).count();
  }
  async nthElementText(selector,index){
    return await this.page.locator(selector).nth(index).textContent();
  }
  async firstElementText(selector){
    return await this.page.locator(selector).first().textContent();
  }
async lastElementText(selector){
  return await this.page.locator(selector).last().textContent();
}
async elementExists(selector){
  return await this.page.locator(selector).count()>0;
}
async elementDisabled(selector){
  return await this.page.locator(selector).isDisabled();
}
async elementEnabled(selector){
  return await this.page.locator(selector).isEnabled();
}
async elementHidden(selector){
  return await this.page.locator(selector).isHidden();
}
async elementVisible(selector){
  return await this.page.locator(selector).isVisible();
}
async waitForSelectorTimeout(selector, timeout) {
    await this.page.waitForSelector(selector, { timeout });
  }
  async getAllTexts(selecor){
    return await this.page.$$(selecor,elements => elements.map(el => el.textContent));
  }

async takeScreenshot(options){
  await this.page.screenshot(options);
}
async elementScreenshot(selector,options){
  await this.page.locator(selector).screenshot(options);
}
 async focusElement(selector) {
    await this.page.focus(selector);
  }

  // Scroll Methods
  async scrollToElement(selector) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

    async switchToFrame(frameName) {
    return this.page.frame(frameName);
  }

  async switchToFrameByUrl(url) {
    return this.page.frame({ url });
  }

  // Cookie Methods
  async getCookies() {
    return await this.page.context().cookies();
  }


    async clearCookies() {
    await this.page.context().clearCookies();
  }

   async getTitle() {
    return await this.page.title();
  }

  async evaluateScript(script) {
    return await this.page.evaluate(script);
  }

  async executeAsyncScript(script, ...args) {
    return await this.page.evaluate(script, ...args);
  }

  // Multiple Elements Methods
  async clickNthElement(selector, index) {
    await this.page.locator(selector).nth(index).click();
  }

  async getTextFromNthElement(selector, index) {
    return await this.page.locator(selector).nth(index).textContent();
  }

  async getAllElements(selector) {
    return await this.page.locator(selector).all();
  }
}
  // asy
  // 
  


  //      await this.page.waitForTimeout(timeout);
  // }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
  async isInventoryBisible() {

    return await this.inventoryContainer.isVisible()
  }

  async waitForTime(page, ms) {
    await page.waitForTimeout(ms);
  }

  async gettitle(){
 return this.page.title()
  }

  async waitfornavigation(timeout){
    await this.page.waitfornavigation(timeout)
  }

  #validateCedentials(username,password){

  }

  async #login(){

  }

}

module.exports = { Loginpage }
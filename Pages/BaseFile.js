//import { expect } from "@playwright/test";


import {test,expect,page,locator} from '@playwright/test';






 export class  Base{


    constructor(page){
        this.page = page;
    }


    async navigateTo(url){
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    async fillInput(selector, value){
        const inputField = this.page.locator(selector);
        await inputField.fill(value);
    }

    async clickButton(selector){
        const button = this.page.locator(selector);
        await button.click();
    }

    async click(locator){
        await locator.click();
    }
    async enterText(locator, text){
        await locator.fill(text);
    }


    async getText(locator){
        return await locator.textContent();
    }

    async isVisible(locator){
        return await locator.isVisible();
    }

    async selectOption(locator, optionValue){
        await locator.selectOption(optionValue);

    }

    async waitForNavigation(){
        await this.page.waitForLoadState('networkidle');
    }


    async waitForElement(locator, timeout = 5000){
        await locator.waitFor({ state: 'visible', timeout });
    }

    async waitForElement1(locator, timeout=5000){

        await this.page.waitForSelector(locator, { state: 'visible', timeout });
    }


    async waitForElementToDisappear(locator, timeout = 5000){
        await locator.waitFor({ state: 'hidden', timeout });
    }

    async getLocator(selector){
        return this.page.locator(selector);
    }

    async getAllLocators(selector){
        return this.page.locator(selector);
    }

    async getLocatorCount(selector){
        const locator = this.page.locator(selector);
        return await locator.count();
    }
    async getLocatorText(selector){
        const locator = this.page.locator(selector);
        return await locator.textContent();
    }


    async  getLocatorAttribute(selector, attributeName){
        const locator = this.page.locator(selector);
        return await locator.getAttribute(attributeName);
    }

    async getLocatorValue(selector){
        const locator = this.page.locator(selector);
        return await locator.inputValue();
    }


    async getLocatorInnerHTML(selector){
        const locator = this.page.locator(selector);
        return await locator.innerHTML();
    }

    async getLocatorInnerText(selector){
        const locator = this.page.locator(selector);
        return await locator.innerText();
    }

    async getLocatorBoundingBox(selector){
        const locator = this.page.locator(selector);
        return await locator.boundingBox();
    }

    async getLocatorScreenshot(selector){
        const locator = this.page.locator(selector);
        return await locator.screenshot();
    }
    async getLocatorScreenshotAsBase64(selector){
        const locator = this.page.locator(selector);
        const screenshotBuffer = await locator.screenshot();
        return screenshotBuffer.toString('base64');
    }

    async getLocatorScreenshotAsBuffer(selector){
        const locator = this.page.locator(selector);
        return await locator.screenshot();
    }

    async getLocatorScreenshotAsFile(selector, filePath){
        const locator = this.page.locator(selector);
        await locator.screenshot({ path: filePath });
    }

    async iselementEnabled(selector){
        const locator = this.page.locator(selector);
        return await locator.isEnabled();
    }

    async iselementDisabled(selector){
       // const locator = this.page.locator(selector);

        return await locator.isDisabled();
         
       // return await locator.isDisabled();
    }

    async iselementChecked(selector){
        const locator = this.page.locator(selector);
        return await locator.isChecked();
    }


    async iselementUnchecked(selector){
        const locator = this.page.locator(selector);
        return await locator.isUnchecked();
    }
    async iselementEditable(selector){
        const locator = this.page.locator(selector);
        return await locator.isEditable();
    }


    async iselementNotEditable(selector){
        const locator = this.page.locator(selector);
        return await locator.isNotEditable();
    }


    async iselementFocused(selector){
        const locator = this.page.locator(selector);
        return await locator.isFocused();
    }

    async iselementNotFocused(selector){
        const locator = this.page.locator(selector);
        return await locator.isNotFocused();
    }

    async iselementVisible(selector){
        const locator = this.page.locator(selector);
        return await locator.isVisible();
    }

    async iselementNotVisible(selector){
        const locator = this.page.locator(selector);
        return await locator.isNotVisible();
    }


    async iselementHidden(selector){
        const locator = this.page.locator(selector);
        return await locator.isHidden();
    }

    async iselementNotHidden(selector){
        const locator = this.page.locator(selector);
        return await locator.isNotHidden();
    }

    async iselementAttached(selector){
        const locator = this.page.locator(selector);
        return await locator.isAttached();
    }


    async iselementNotAttached(selector){
        const locator = this.page.locator(selector);
        return await locator.isNotAttached();
    }

    async iselementDetached(selector){
        const locator = this.page.locator(selector);
        return await locator.isDetached();
    }


    async iselementNotDetached(selector){
        const locator = this.page.locator(selector);
        return await locator.isNotDetached();
    }


    async iselementStable(selector){
        const locator = this.page.locator(selector);
        return await locator.isStable();
    }

    async iselementNotStable(selector){
        const locator = this.page.locator(selector);
        return await locator.isNotStable();
    }

    async iselementEnabled(selector){
        const locator = this.page.locator(selector);
        return await locator.isEnabled();
    }






}


//module.exports = BasePage;
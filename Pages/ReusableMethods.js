

export class ReusableMethods {

    constructor(page){

this.page = page;
    }



    async clickElement(locator){

        await this.page.locator(locator).click();
    }
    async fillElement(locator, value){

        await this.page.locator(locator).fill(value);
    }

    


}
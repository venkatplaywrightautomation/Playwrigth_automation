export class HomePage {

    constructor(page) {
        this.page = page;
        this.inventoryContainer = page.locator('.inventory_list');
    }

    async isHomePageDisplayed() {
        return await this.inventoryContainer.isVisible();
    }
}

//module.exports = { HomePage };
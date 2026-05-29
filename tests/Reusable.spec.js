


import {test,expect} from '@playwright/test'

import {ReusableMethods} from '../pages/ReusableMethods'

test('add to cart test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');


    const reusableMethods = new ReusableMethods(page);

    await reusableMethods.fillElement('#user-name', 'standard_user');
    await reusableMethods.fillElement('#password', 'secret_sauce');
    await reusableMethods.clickElement('#login-button');    
})
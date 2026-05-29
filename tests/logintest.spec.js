

import { test, expect } from '@playwright/test';

import {loginPage} from '../pages/loginPage'

test('login test', async ({ page }) => {

    const login = new loginPage(page);

    await login.loginToApp('standard_user', 'secret_sauce');
    await page.goto('https://www.saucedemo.com/');  

})
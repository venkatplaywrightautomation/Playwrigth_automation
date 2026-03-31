




import { test, expect } from '@playwright/test';


const roles={

    admin:{
        username:"standard_user",
        password:"secret_sauce"
    },
    user:{
        username:"standard_user",
        password:"secret_sauce"     
    }
}


test.describe('Role-based tests', () => {

    test('Admin Login Test', async ({ page }) => {  
        const admin=roles.admin
        const user=roles.user
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', user.username);
        await page.fill('#password', user.password);
        await page.click('#login-button');
        await expect(page).toHaveTitle(/Swag Labs/);
      
    });
    })




    // const rolebaseusers= [

    //     {
    //         role:'admin',
    //         username:"standard_user",
    //         password:"secret_sauce"
    //     },
    //     {
    //         role:'user',
    //         username:"standard_user",
    //         password:"secret_sauce"
    //     }
    // ]  ; 


    const users = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' }
];

    for(const user of users){

        test.only(`Login Test for ${user.username}`, async ({ page }) => {  
            await page.goto('https://www.saucedemo.com/');
            await page.fill('#user-name', user.username);
            await page.fill('#password', user.password);
            await page.click('#login-button');
            await expect(page).toHaveTitle(/Swag Labs/);    

        

        });
    }
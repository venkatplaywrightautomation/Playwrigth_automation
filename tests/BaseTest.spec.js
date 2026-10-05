



import {test,expect, chromium} from '@playwright/test';

import testdata from  '../DifferentUsers/DiffUserNames.json'


import dotenv from 'dotenv';

import path from 'path';
//dotenv.config({path: path.resolve(__dirname, '../.env')});

//dotenv.config({path: path.resolve(__dirname, '../envfiles/.env')});




//import {BasePage} from '../Pages/BaseFile.js';

import {Base} from '../Pages/BaseFile.js';


const usernames=[



    {
        username:'standard_user',
        password:'secret_sauce'
    }
]


test("Login with valid credentials",async ({page}) => {

    //const basePage = new BasePage(page);

   

 const basePage = new Base(page);

    //await basePage.navigateTo('https://www.saucedemo.com/inventory.html');
    await basePage.navigateTo('https://www.saucedemo.com/');
    await basePage.fillInput('#user-name',usernames[0].username);
    await basePage.fillInput('#password',usernames[0].password);

    await basePage.clickButton('#login-button');

    await basePage.waitForNavigation();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


    //await basePage.waitForElement1('.inventory_list');

    await basePage.waitForElement(page.locator('.inventory_list'));

    //await basePage.click(page.locator('#login-button'));




})




const diffUsernames=[

    {

        username:'locked_out_user',
        password:'secret_sauce'
    },

    {

        username:'problem_user',
        password:'secret_sauce'

    },

    {
        username:'performance_glitch_user',
        password:'secret_sauce'
    },

    {

        username:'invalid_user',
        password:'invalid_password'


    },

    {

        username:'',
        password:''
    }


]


for(const user of diffUsernames){




    test(`login with ${user.username}`,async ({page}) =>{

 const basePage = new Base(page);
        await basePage.navigateTo('https://www.saucedemo.com/');
        await basePage.fillInput('#user-name',user.username);
        await basePage.fillInput('#password',user.password);

        await basePage.clickButton('#login-button');

        await basePage.waitForNavigation();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    })
}



test.describe("Difffernt users login",() =>{


    for(const user of diffUsernames){


        test(`login with ${user.username}`,async ({page}) =>{

            const basePage = new Base(page);
            await basePage.navigateTo('https://www.saucedemo.com/');
            await basePage.fillInput('#user-name',user.username);
            await basePage.fillInput('#password',user.password);
            await basePage.clickButton('#login-button');

            await basePage.waitForNavigation();
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');   
        })
    }


})



for(const user of testdata){





test(`login with json file ${user.username}`,async ({page}) =>{

    const basePage = new Base(page);
    await basePage.navigateTo('https://www.saucedemo.com/');
    await basePage.fillInput('#user-name',user.username);
    await basePage.fillInput('#password',user.password);
    await basePage.clickButton('#login-button');
    await basePage.waitForNavigation();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


})

}


test("Read data from .env file",async ({page}) =>{

    const basePage = new Base(page);   


    console.log(process.env.URL);
    console.log(process.env.USERNAME1);
    console.log(process.env.PASSWORD);
    
   // await basePage.navigateTo(process.env.URL);
   await basePage.navigateTo('/');
    await basePage.fillInput('#user-name',process.env.USERNAME1);
    await basePage.fillInput('#password',process.env.PASSWORD);
    await basePage.clickButton('#login-button');
    await basePage.waitForNavigation();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');   


await page.context().storageState({path:'testdata/role.json'})

})

test.only("Login valid input data ",async () => {


    const  browser= await chromium.launch()
    const context= await browser.newContext()

    const page= await context.newPage()
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    //await page.waitForTimeout(3000)

    await page.context().storageState({path:"testdata/admin.json"})


})

test("data login",async () =>{

//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


})



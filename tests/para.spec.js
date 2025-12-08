import { test, expect } from '@playwright/test';





test.describe.parallel("parallel tests",()=>{




    const users= [


        {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        {
            username: 'locked_out_user',
            password: 'secret_sauce'
        },
        {
            username: 'problem_user', 
            password: 'secret_sauce'

        }
    ]


users.forEach(user =>{




test(`test1 ${user.username}`,async ({page}) =>{
   await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', user.username);
      await page.fill('#password', user.password);
      await page.click('#login-button');


})



})

})
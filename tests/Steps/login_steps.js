//const { Given } = require('@cucumber/cucumber')
const { url } = require('inspector')
const {createBdd}= require('playwright-bdd');
const {LoginPageBDDClass } = require('../Pages/LoginPageBDD');
//const { LoginPage } = require('../Pages/LoginPageBDD.js');


const {expect,page}=require('@playwright/test');
const { error } = require('console');


//import {LoginPageBDDClass} from '../Pages/LoginPageBDD'


const {Given,When,Then,Before,And}= createBdd()


//let log;




// Before(async ({page})=>{

// log= new LoginPageBDDClass(page)
// //await log.navigate(url)

// })

Given(`I Navigate to {string}`,async ({page},url)=>{

let log= new LoginPageBDDClass(page)
    await log.navigate(url)
    
})

Given(`I Enter Username {string}`,async({page},username)=>{

let log= new LoginPageBDDClass(page)
    await log.enterUsername(username)
})


Given(`I Enter password {string}`,async({page},password)=>{

let log= new LoginPageBDDClass(page)
    await log.enterPassword(password)
})

When("click on Login Button",async ({page})=>{

let log= new LoginPageBDDClass(page)
    await log.clickLogin()
})




Then(`I Should see the Page containing {string}`,async ({page},msg)=>{

let log= new LoginPageBDDClass(page)
await expect (log.successmsg).toContainText(msg)
})


Then('I Should see the error message {string}', async ({page}, messgae) => {
  // Step: Then I Should see the error message "Error message"
  // From: tests\Features\login.feature:23:9
let log= new LoginPageBDDClass(page)
 // await expect (log.text).toContainText(messgae)

//   const data=await log.getErrorMessage()

// console.log(data)
// expect(data).toContain(messgae)

 await expect(log.errorMessage).toContainText(messgae)
});

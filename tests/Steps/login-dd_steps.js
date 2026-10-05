
const { url } = require('inspector')
const { createBdd } = require('playwright-bdd');
const { LoginPageBDDClass } = require('../Pages/LoginPageBDD');
//const { LoginPage } = require('../Pages/LoginPageBDD.js');

const { expect, page } = require('@playwright/test');
const { error } = require('console');
//import {LoginPageBDDClass} from '../Pages/LoginPageBDD'
const { Given, When, Then, Before, And } = createBdd()
let InvalidData = require('../../testdata/bdd-data.json')
let results = []
When('I Enter Invalid username and Password and click on login button', async ({ page }) => {
    let login = new LoginPageBDDClass(page)

    results = []
    for (const data of InvalidData) {
        console.log(data)

        await login.enterUsername(data.username)

        await login.enterPassword(data.password)
        await login.clickLogin();
        const errorText = await login.errorMessage.textContent()
        console.log(errorText)
        results.push({

            username: data.username,
            actualError: errorText,
            expectedError: data.error
        })
        await login.page.reload()
    }

});



Then('I Should see the error message', async ({ page }) => {
    for (const result of results) {
        expect(result.actualError).toContain(result.expectedError)
        console.log(`Passed for ${result.username}`)
    }

});





// Next Test case



let testData = []

When('I Enter Invalid username and Password and click on login button for {string}', async ({page }, index) => {

  let login = new LoginPageBDDClass(page)

const data=InvalidData[index]



    //for (const data of InvalidData) {
        //console.log(data)

        await login.enterUsername(data.username)

        await login.enterPassword(data.password)
        await login.clickLogin();
       
     
    

});

Then('I Should see the error message for {string}', async ({page }, index) => {

  let login = new LoginPageBDDClass(page)


  const data=InvalidData[index]
    //await expect(login.errorMessage).toHaveText(data.error)




    const actText= await login.errorMessage.textContent()

    await expect(actText).toContainText(data)
console.log(`Passed for ${data.username}`)

});




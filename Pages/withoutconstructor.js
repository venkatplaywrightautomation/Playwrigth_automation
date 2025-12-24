
// //import { asyncWrapProviders } from "async_hooks"
// import { page, locator } from '@playwright/test'
// import { time } from 'console'



// class Loginpage {
//   page;

//   // constructor(page) {
//   //   this.page = page
//   //   this.userName = page.locator("//input[@id='user-name']")
//   //   this.password = page.locator("//input[@id='password']")
//   //   this.loginBtn = page.locator("//input[@id='login-button']")
//   //   this.errorMessage = page.locator('[data-test="error"]');
//   //   this.inventoryContainer = page.locator('.inventory_list');
//   // }
//   async navigateToURL(page,url) {
//     await page.goto(url)
//   }

//   async enterUserNamePassword(page,username, password) {
//     // await this.userName.fill(username)
//     // await this.password.fill(password)
//     // await this.loginBtn.click()
// await page.locator("//input[@id='user-name']").fill(username)

// await page.locator("//input[@id='password']").fill(password)
// await page.locator("//input[@id='login-button']").click()
//   }


// }



class withoutconstructor{

static  async  userinput(page){
    return  page.locator("#email")
    
  }
  static async userpassword(page){

    return page.locator("#pass")
  }
  static async clickLogin(page){

    return page.locator("//button[@name='login']")
  }
  static async naviagateTo(page,url)
  {

    await page.goto(url)
  }
  static async enterUsernmaeAndpassword(page,username,password){

    await this.userinput(page).fill(username)
    await this.userpassword(page).fill(password)
    await this.clickLogin(page).click()
  }
}

module.exports={withoutconstructor}
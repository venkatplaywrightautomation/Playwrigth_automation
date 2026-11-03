import { allFakers, da } from "@faker-js/faker";
import {expect, test} from "@playwright/test"


import { chromium } from "@playwright/test";
import { asyncWrapProviders } from "async_hooks";
import { link } from "fs";

test("login",async ()=>{

    


    //   const browser= await chromium.launch();
    // const context=await browser.newContext()
    // const page=await context.newPage();
    // await page.goto("https://www.google.com/")

  
    
    //await page.waitForTimeout(3000)


     
        const browser= await chromium.launch();
    const context=await browser.newContext()
    const page=await context.newPage();

    // await page.goto("https://www.saucedemo.com/");
    // //await page.goto("https://www.saucedemo.com/");
    // await page.locator("//input[@id='user-name']").fill("standard_user");
    
    // await page.locator("//input[@id='password']").fill("secret_sauce");
    // await page.locator("//input[@id='login-button']").click();
    // await page.waitForTimeout(2000);
    //await page.bringToFront()

await page.goto("https://www.google.com/")

const links=page.getByRole("link")

console.log(await links.count())

 await page.waitForTimeout(2000);


 for(let i=0;i< await links.count();i++)
 {


    const data=await links.nth(i).textContent()
    console .log(data)


 }

// await page.getByRole("link",{name:"Business"}).click()


//  const links =page.getByRole("link")

//  console.log("Links count"+ await links.count())

await page.getByRole("combobox",{name:'Search'}).fill("Playwright")


//console.log("No of textboxes:"+ await textboxes.count())


//const text=await textboxes.textContent()

//  for(let i=0;i<await links.count();i++)
//  {

//     const data= await links.nth(i).textContent()
//     console.log(data)
//     //await links.nth(i).click()
//  }

// await links.nth(2).click()
// console.log(await page.title())

})


test("SauceDemo page title", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    const title = await page.title();
    console.log("Page title is:", title);
    expect(title).toBe("Swag Labs");
});


test("Clear trip", async ({page})=>{



    // await page.goto("https://www.cleartrip.com/")
    // await page.getByTestId("closeIcon").click() 

    // await page.getByRole("radio",{name: "Round trip"}).click()



    let dob="22-May-2024"
    let temp=dob.split("-")
    let dt=temp[0]
    let month=temp[1]
    let year=temp[2]

    await page.goto("https://flights.qedgetech.com/")
    await page.waitForTimeout(2000)
    
    await page.getByRole("link",{name:"Register "}).click()
    await page.getByRole("textbox",{name:"name"}).first().fill("venkat")


    await page.waitForTimeout(2000)
    await page.locator("//input[@name='contact']").fill("9538165342")

        await page.locator("//input[@name='email']").fill("venkatautomation@gmail.com")
        await page.getByRole("combobox",{label:"Gender"}).selectOption({value:"F"})


            await page.locator("//input[@name='contact']").fill("9538165342")

                await page.locator("//input[@id='address']").fill("9538165")

    await page.locator("//input[@name='dob']").click()

    await page.locator(".ui-datepicker-month").selectOption(month)

    await page.locator(".ui-datepicker-year").selectOption(year)



    const date=page.locator(".ui-datepicker-calendar")

    const rows=  date.locator("tr")
    let flag=false
    for(let i=1;i<await rows.count();i++){


        const cels= await rows.nth(i).locator("td")
        for(let j=0;j<await cels.count();j++)
        {
const celldata=await cels.nth(j).textContent()
if(celldata == dt){

await cels.nth(j).click()
} 

flag=true
break;
        }
    }


//     await page.getByRole("checkbox",{name:"By Clicking Register button you agree to the QEdge privacy policy"
//   }).check()

//await page.getByRole("combobox",{label:"Gender"}).selectOption({value:"F"})


    await page.waitForTimeout(3000)
})

test("Select Multiple values",async ({page}) =>{

    await page.goto("https://html.com/attributes/select-Multiple/")
    await page.getByRole("listbox").selectOption(["Chilean flamingo","Lesser flamingo"])
    //  await page.waitForTimeout(3000)
     await page.getByRole("listbox").scrollIntoViewIfNeeded()
      await page.waitForTimeout(3000)
})

test("Rail",async ({page})=>{


    await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
    await page.waitForTimeout(5000)

    const table= page.locator(".timetable_table__4hbNj")


    const rows= table.getByRole("row")



for(let i=1; i<await rows.count();i++)
{


    const cells= await table.getByRole("cell")

    // const rowtext= await rows.nth(i).textContent();

    // console.log("Rows:"+ rowtext)

    // const coltext= await cells.nth(i).textContent()
    // console.log("Col text:"+ coltext)


    
    let train_numbders= await cells.nth(0).textContent()
    let train_names= await cells.nth(1).textContent()
    console.log("Train Numbers:"+ train_numbders)
   console.log("train names:"+ train_names)
 }
   
})




test("Train full data ",async ({page})=>{


    await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
    await page.waitForTimeout(5000)

    const table= page.locator(".timetable_table__4hbNj")


    const rows= table.getByRole("row")



for(let i=0; i<await rows.count();i++)
{

  //  const cells= await table.getByRole("cell")
  const cells= rows.nth(i).getByRole("cell")

    for(let j=0;j<await cells.count();j++)
    {

        const train_data=await cells.nth(j).textContent()
        console.log("Train full dada is :"+ train_data)
    }

 }
   
})




test("data",async ({page})=>{


    await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
    await page.waitForTimeout(5000)

    const table= page.locator(".timetable_table__4hbNj tbody tr")


    const rows=  table



for(let i=0; i<await rows.count();i++)
{

  //  const cells= await table.getByRole("cell")
  const cells= rows.nth(i).locator("td")

    for(let j=0;j<await cells.count();j++)
    {

        const train_data=await cells.nth(j).textContent()
        console.log("Train full dada is :"+ train_data)
    }

 }


   
})




test("data train ",async ({page})=>{


    await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
    await page.waitForTimeout(5000)

    const table= page.locator(".timetable_table__4hbNj tbody tr")


    const rows=  table



for(let i=0; i<await rows.count();i++)
{

  //  const cells= await table.getByRole("cell")
  const cells= rows.nth(i).locator("td")

  const data=await cells.allInnerTexts()
  console.log("data is :"+ data.join(' | '))


       
  

}


   
})


test("Train Number checking",async ({page})=>{

await  page.goto("https://www.railyatri.in/time-table?utm_source=dwebhome_header&device_type_id=6")
    await page.waitForTimeout(5000)

    const table= page.locator(".timetable_table__4hbNj")


    const rows=  table.locator("tbody tr")


    let actTrainNumber= ["12267","12268"];
    let allTrains=[]
for(let i=0;i<await rows.count();i++)
{


    const cols= await rows.nth(i).locator("td")



    allTrains.push(await cols.first().textContent())

    console.log(await cols.first().textContent())
}
let expResults= actTrainNumber.every(train => allTrains.includes(train))
expect(expResults).toBe(true)

} )


test("Amazon",async ({page}) => {



    const actVlaues=["All Departments","Arts & Crafts"]

    await page.goto("https://www.amazon.com/")
    await page.waitForTimeout(5000)

    const total= page.getByTitle("Search in")
    const options= await total.locator("//option")
    const alloptions=await options.allTextContents()

    //console.log("Total countis :"+ await options.count());

    let ecpResult= actVlaues.every(item =>alloptions.includes(item))

    expect(ecpResult).toBe(true)
    

})
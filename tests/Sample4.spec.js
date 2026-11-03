

import {test,expect} from  "@playwright/test"


test("Without config file",async({page})=>{


    await page.goto("https://flights.qedgetech.com/")


})

// async function test1(){

//     return "Hello"

// }
// test1().then(result => console.log(result))

// console.log(add(10, 20));

// function add(a, b) {
//   return a + b;
// }




test("saucedemo",async ({page})=>{


    await page.goto("https://www.saucedemo.com/")

    const innertext=await page.locator(".login_credentials").innerText()


    console.log("TExt is:"+ innertext)

    
    // const textcontent=await page.locator(".login_credentials").textContent()


    // console.log("TExt  content isis:"+ textcontent)


    const userAray= innertext.split("\n").slice(1)
    console.log(userAray)


    const firstUser= userAray[0]


    await page.locator("#user-name").fill(firstUser)
    await page.waitForTimeout(2000)
})


test("Flipkart",async ({page})=>{


    await page.goto("https://www.flipkart.com/")

  
    await page.locator("input[name='q']").first().fill("laptop")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)


    const PRoductCards= await page.locator(".jIjQ8S")

    const PRoductCount= await PRoductCards.count()

    console.log("Count is:"+ PRoductCount)




  //const Productmap = new Map(String,String);
  const Productmap = new Map();

for(let i=0;i<PRoductCount;i++){

const cards= PRoductCards.nth(i)
const nameLocatror= cards.locator(".RG5Slk")
const price= cards.locator(".hZ3P6w")

const nametext= (await nameLocatror.textContent())?.trim().split(' ')[0]
const priceTExt= (await price.textContent())?.trim()

if(nametext && priceTExt)

{
Productmap.set(nametext,priceTExt)

}
console.log("Product map is:",Productmap)
const productName= "Apple"
if(Productmap.has(productName)){

    console.log(`${productName} price is ${Productmap.get(productName)}`)
}


for(const [product ,price] of Productmap){

    console.log(`product :${product},price :${price}`)
}

}

})




test.only("Flipkart search pen",async ({page})=>{


    await page.goto("https://www.amazon.com/")

  
    await page.locator("//input[@id='twotabsearchtextbox']").fill("pen")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)

    let pageCount=1

    while (true){

        console.log(`Currently on tha page ${pageCount}`)

        const NextBtn= page.locator("//span[normalize-space()='Next']")

        if(await NextBtn.count() > 0 && await NextBtn.isVisible())
        {

const classValue= await NextBtn.getAttribute("class")

            if(classValue.includes("s-pagination-disabled"))
            {
                console.log("Nu=ext btn is disabled")
            break
            }
        console.log("Clicking on Next btn")
        await NextBtn.scrollIntoViewIfNeeded()
        await page.waitForTimeout(3000)
        await NextBtn.click()
        await page.waitForLoadState("domcontentloaded")
                await page.waitForTimeout(3000)
                pageCount++;

        }
        else{
            console.log("next btn is not visible")
            break;
        }   
    }


    




})
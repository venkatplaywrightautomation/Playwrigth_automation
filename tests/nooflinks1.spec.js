import {test,expect } from "@playwright/test"



test("No of links in the google page",async ({page}) =>{


    await page.goto("https://www.google.com/")
const links = await page.locator("a").count()
console.log("No of links in the page are : "+links)

const linksnames= await page.locator("a").allTextContents()
console.log("All the links in the page are : "+linksnames)

for(const link of linksnames){
    if(link.includes("Gmail")){
        console.log("Gmail link is present in the page")
        await expect(link).toContain("Gmail")
        await page.locator("a").filter({hasText:link}).click()
        await page.waitForTimeout(5000)

        break;
    }
}

// const links1 = await page.locator("a").allTextContents()
// console.log("All the links in the page are : "+links1)


})


test("No of links in the google ",async ({page}) =>{

await page.goto("https://www.google.com/")

const nooflinks=await page.locator("a").count()
console.log("No of links in the page are : "+nooflinks)
//await expect(nooflinks).toHaveLength(29)
for(let i=0;i<nooflinks;i++){
    const linkname=await page.locator("a").nth(i).textContent()
    console.log("Link name is : "+linkname)
    if(linkname.includes("Gmail")){
        console.log("Gmail link is present in the page")
        await expect(linkname).toContain("Gmail")
        await page.locator("a").filter({hasText:linkname}).click()
        await page.waitForTimeout(5000)
        break;
    }
}
})

test("No of links ",async ({page,request}) =>{
    await page.goto("https://www.google.com/")
    const links = await page.locator("a").all()
    console.log("No of links in the page are : "+links.length)

    for(const link of links){
        
       const urls=  await link.getAttribute("href")
       if(urls){
        console.log("URL is : "+urls)   

const response = await page.request.get(urls)
console.log("Response status is : "+response.status())
if(response.status()>=200){
    console.log("Broken link is : "+urls)
}
else
{
    console.log("Valid link is : "+urls)
}

       }

    }

})


test("only visible links",async ({page,request}) =>{
    await page.goto("https://www.google.com/")
    const links = await page.locator('a')
    console.log("No of links in the page are : "+await links.count())

await expect(links).toHaveCount(29)

    for(let i=0;i<await links.count();i++){
        const linkname=await links.nth(i).textContent()
        console.log("Link name is : "+linkname)

        const urls= await links.nth(i).getAttribute("href")
        console.log("URL is : "+urls)
        if(urls){
            const response = await page.request.get(urls)
            if(response.status()>=200){
                console.log("Broken link is : "+urls)
            }
        }

    }
})

test("click on every link",async ({page}) =>{
    await page.goto("https://www.google.com/")
    const links = await page.locator('a')
    console.log("No of links in the page are : "+await links.count())

    for(let i=0;i<await links.count();i++){
        //await expect(links.nth(i)).toBeVisible()

        await links.nth(i).click()
        await page.waitForTimeout(3000)
        const pageTitle= await page.title() 
        console.log("Page title is : "+pageTitle)
        await page.goBack()
        await page.waitForTimeout(3000)

    }

})


test("count links on multiple pages",async ({page}) =>{

    const urls=["https://www.google.com/","https://www.amazon.in/","https://www.facebook.com/"]

    for(const url of urls){
        await page.goto(url)
        const links = await page.locator('a')
        console.log("No of links in the page "+url+" are : "+await links.count())
    }

})

test("dropdonwn",async ({page}) =>{

await page.goto("https://practice.expandtesting.com/dropdown")
//await page.locator("#dropdown").selectOption({label:"Option 2"})
//await page.waitForTimeout(3000)
//await expect(page.locator("#dropdown")).toHaveValue("option2")
await page.locator("#dropdown").selectOption({label:"Option 2"})
await page.waitForTimeout(3000)
// const selectedvalue=await page.locator("#dropdown").inputValue()
// console.log("Selected value is : "+selectedvalue)
// await expect(page.locator("#dropdown")).toHaveValue("2")
const selectedvalue= await page.locator("#dropdown option:checked").textContent()
console.log("Selected value is : "+selectedvalue)
await expect(page.locator("#dropdown option:checked")).toHaveText("Option 2")

})


test("print all dropdown values",async ({page}) =>{

    await page.goto("https://practice.expandtesting.com/dropdown")
    const dropdownvalues=await page.locator("#dropdown option").allTextContents()
    console.log("All dropdown values are : "+dropdownvalues)
})


test('Count options', async ({ page }) => {

    const count = await page.locator('#country option').count();

console.log(count);

});

test('Print all options', async ({ page }) => {

await page.goto('https://practice.expandtesting.com/dropdown');


const options = await page.locator('#country option')

const count = await options.count();
console.log('Total options: ' + count);

for(let i = 0; i < count; i++) {
    const optionText = await options.nth(i).textContent();
    //console.log('Option ' + (i + 1) + ': ' + optionText);
    if(optionText === 'IN'.trim()) {
        console.log('India is present in the dropdown');
        await expect(options.nth(i)).toHaveText('IN');
        await options.nth(i).click();
        await page.waitForTimeout(3000);
        break;
    }
}
})


test('Verify option exists', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dropdown');


    const options = await page.locator('#dropdown option').allTextContents();

    expect(options).toContain('Option 2');

});

test("select one by one ", async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dropdown');


    const dropdown = await page.locator('#dropdown');

    const options = await dropdown.locator('option').all()

    for (let i = 1; i < options.length; i++) {

        const value = await options[i].getAttribute('value');

        await dropdown.selectOption(value);

        console.log("Selected:", value);
    }

})


test("custom dropdown", async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.getByRole('button',{name:'country'}).click();
    await page.getByRole('option',{name:'IN'}).click();
    await page.waitForTimeout(3000);

})


test.only("random dropdown", async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dropdown');

    const options = await page.locator('#dropdown option');

    const count = await options.count();

    const randomIndex = Math.floor(Math.random() * count);

    const randomOption = await options.nth(randomIndex).textContent();

    await page.locator('#dropdown').selectOption({ label: randomOption });
    await page.waitForTimeout(3000);



})




import { test, expect,locator } from '@playwright/test';

test("Read data from all Pages", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

    const webtable = page.locator(".display")
    const rows = await webtable.locator("tbody tr")
    const rowcount = await rows.count()
    console.log("total no of rows:" + rowcount)


    const column = await webtable.locator("thead tr th")
    const columncount = await column.count()
    console.log("total no of columns:" + columncount)


    const allpages = await page.locator('.dt-paging button')
    const pagecount = await allpages.count()
    console.log("total no of pages:" + pagecount)


    for (let p = 0; p < pagecount - 1; p++) {


        const allpage = await allpages.nth(p).textContent()
        console.log("page number is:" + allpage)
        if (p > 0) {
            await allpages.nth(p).click()
            await page.waitForTimeout(3000)
        }
        for (let i = 0; i < rowcount; i++) {
            const row = await rows.nth(i)
            const tds = await row.locator("td")
            for (let j = 0; j < await tds.count(); j++) {

                const data = await tds.nth(j).textContent()
                console.log("table data is " + data)
            }
        }
    }

})





test("Read specific data from all Pages", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

    
    // const rowcount= await rows.length
    // console.log("total no of rows:"+rowcount)

let hasmorepages=true
while(hasmorepages)
    {    
        const rows=await page.locator("#example tbody tr").all()
    for(let row of rows){

        console.log(await row.innerText())
    }
   // await page.waitForTimeout(3000)
// button[aria-label='Next']
//button[aria-controls='example']:has-text('›')
//button[aria-controls='example']:nth-child(9)


const nextbutton=page.locator("button[aria-label='Next']")

const isdisabled= await nextbutton.getAttribute("class")
console.log("class value is:"+isdisabled)
if(isdisabled.includes("disabled")){
    hasmorepages=false  
}
else{
    await nextbutton.click()
    await page.waitForTimeout(3000)

}
    }
})


test("Filter the rows and check the count", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    const dropdown= page.locator("#dt-length-0")
    await dropdown.selectOption({label:'25'})
    await page.waitForTimeout(3000)

    const rows=  page.locator("#example tbody tr")
    const rowcount= await rows.count()
    console.log("total no of rows after selecting 25 is:"+rowcount)
    //expect(rows.length).toBe(25)
expect(rowcount).toBe(25)

for(let i=0;i<rowcount;i++){
    const rowdata= await rows.nth(i).innerText()
    console.log("row data is:"+rowdata) 

}

})
test("Search specific data in table", async ({ page }) => {


    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
const searchbox= page.locator("#dt-search-0")

await searchbox.fill("Shou Itou")
await page.waitForTimeout(3000)
const rows= await page.locator("#example tbody tr").all()
// const rowcount= await rows.length
// console.log("total no of rows after search is:"+rowcount)
//expect(rowcount).toBe(3)
if(rows.length>=1){

    let mathcFound=false
    for(let row of rows)
    {
        const rowtext= await row.innerText()
        console.log("row text after search is:"+rowtext)
        if(rowtext.includes("Shou Itou"))
        {

           console.log("record found matching the search criteria:"+rowtext)
            mathcFound=true
            break
        }
    }
}
else{
    console.log("No records found matching the search criteria")
}


})

test.only("Google", async ({ page }) => {

      await page.goto("https://google.com")
     const links=await page.locator("a").all()
     console.log("total no of links in google homepage:"+links)
     console.log("total no of links in google homepage:"+links.length)
    // const linkcount= await links.count()
    // console.log("total no of links in google homepage:"+linkcount)      
    // for(let i=0;i<linkcount;i++){
    //     const linktext= await links.nth(i).innerText()
    //     console.log("link text is:"+linktext)
    // }

})

  
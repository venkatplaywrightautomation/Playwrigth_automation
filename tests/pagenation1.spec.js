


import { test, expect } from '@playwright/test';


test("Pagenation", async ({ page }) => {   
    await page.goto("https://testautomationpractice.blogspot.com/") 

const table=await page.locator("#productTable")
const rows= await table.locator("tbody tr")
const rowcount= await rows.count()
console.log("total no of rows:"+rowcount)


const columns= await table .locator("thead tr th")
const columncount= await columns.count()
console.log("total no of columns:"+columncount)

    expect(await rows.count()).toBe(5)
    expect(await columns.count()).toBe(4)

    // const matchedRow= await rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch'
    // })
    // await matchedRow.locator('input').check()
    // await page.waitForTimeout(4000)

    // })

await selectrows( page,rows,"Smartphone")
await selectrows( page,rows,"Laptop")
await selectrows( page,rows,"Tablet")
await selectrows( page,rows,"Smartwatch")
await page.waitForTimeout(4000)



const allpages= await page.locator('.pagination li a')
const pagecount= await allpages.count()
console.log("total no of pages:"+pagecount)

for(let i=0;i<pagecount;i++){

    const pagenumber= await allpages.nth(i).textContent()
    console.log("page number is:"+pagenumber)
    if(i>0){
        await allpages.nth(i).click()
        await page.waitForTimeout(3000)
    }
for(let i=0;i<rowcount;i++){
    const row= await rows.nth(i);
    const tds= await row.locator('td')
    for(let j=0;j<await tds.count();j++){

        const data =await tds.nth(j).textContent()
        console.log("table data is "+data)
    }
}
    
}


})

    async function  selectrows(page,rows,name)
    {
        
    const matchedRow= rows.filter({
        has:page.locator('td'),
        hasText:name
    })
    await matchedRow.locator('input').check()
        
    }



import {test,expect} from '@playwright/test'


test("Webtable",async ({page})=>{


    await page.goto("https://letcode.in/")
    const table= await page.locator("#simpletable")

    const thead= await table.locator("thead")

    const headerText=  await thead.allTextContents()

    console.log("all text"+ headerText)
    await page.waitForTimeout(5000)


    const rows= table.locator("tbody tr")
    console.log("No of Rows"+ await rows.count())


    const cols= rows.first().locator('td')
    console.log("No of Cols"+ await cols.count())


    // const matchedRow= rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Raj'
    // })
    // await matchedRow.locator('input').check()



    for(let i=0;i< await rows.count();i++)
    {

        const row= await rows.nth(i)
        const tds= row.locator('td')
        for(let j=0;j<await tds.count();j++){

            if(await tds.nth(j).textContent()=="Raj")
            {
await tds.last().locator('input').check()
            }
        }
    }
})



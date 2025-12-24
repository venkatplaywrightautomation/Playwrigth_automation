


import { test, expect } from '@playwright/test';

test("Pagenation", async ({ page }) => {


    await page.goto("https://practice.expandtesting.com/dynamic-table")

    const table = await page.locator(".table")
    const rows=await table.locator("tbody tr").all()
    const rowcount=await rows.length    
     console.log("total no of rows:"+rowcount)

     const colums= await table.locator("thead tr th").all()
    const columncount= await colums.length  
    console.log("total no of columns:"+columncount)
    // expect(await rows.count()).toBe(4)
    // expect(await colums.count()).toBe(5)


    let cpu=''
    for(const row of rows)
    {

        const processname=await row.locator("td").nth(0).innerText()
        console.log("process name is:"+processname)

        if(processname==="Chrome")
        {

            // cpu= await row.locator("td:has-text('%')").innerText()
            //console.log("cpu value for chrome is:"+cpu)
            cpu= await row.locator('td',{hasText:"%"}).innerText()
            console.log("cpu value for chrome is:"+cpu)
            
            
        }
    }

    const yellowtest=await page.locator("#chrome-cpu").innerText()
    console.log("yellow text cpu value is:"+yellowtest)
    if(yellowtest.includes(cpu))
    {
        console.log("cpu value matches")
    }
    else{
        console.log("cpu value not matches")
    }
    expect(yellowtest).toContain(cpu)
})


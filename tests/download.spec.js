import {test,expect} from '@playwright/test'



test("download a file",async ({browser})=>{


    const context= await browser.newContext({
        acceptDownloads:true
    })


    const page= await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/download")


    const [download]= await Promise.all([

        page.waitForEvent('download'),
         //  page.waitForEvent('filechooser');

        page.click("//*[@id='content']/div/a[36]")
    ])

   // await download.saveAs("")
   const suggestfilename= await download.suggestedFilename()
   await download.saveAs(suggestfilename)
})
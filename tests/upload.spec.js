import {test,expect} from '@playwright/test'
import path from 'path'



test("uplad a file",async ({browser})=>{


    const context= await browser.newContext({
        acceptDownloads:true
    })


    const page= await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/upload")


    const [filechooser]= await Promise.all([

        page.waitForEvent('filechooser'),

        page.click("#file-upload")
    ])

await filechooser.setFiles('tests/venkat.txt')
await page.click("#file-submit")
await page.waitForTimeout(5000)
})


test("File upload",async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")

await page.waitForTimeout(5000)
    const[filechooser]= await Promise.all([

        page.waitForEvent('filechooser'),

        page.click("#file-upload")
    ])

      const filepath=path.join(__dirname,'venkat.txt')
   // await filechooser.setFiles('tests/venkat.txt')

      await filechooser.setFiles(filepath)
    await page.click("#file-submit")
   // await page.waitForTimeout(5000)


  

})



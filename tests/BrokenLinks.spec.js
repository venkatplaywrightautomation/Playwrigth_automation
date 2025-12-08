


import { test, expect } from '@playwright/test';
import { request } from 'http';



test('Broken Links', async ({ page ,request}) => {
    await page.goto('https://the-internet.herokuapp.com/')

    // const links = await page.locator('a').all();
    // console.log(`🔗 Total links found: ${links.length}`);


    // for (const link of links) {
    //     const href = await link.getAttribute('href');
    //     if (href && href.startsWith('http')) {


    //         const response = await request.get(href);


    //         const status = response.status();

    //         if (status >= 100) {
    //             console.log(href, "is broken link with status code", status)
    //         } else {
    //             console.log(href, "is valid link with status code", status)
    //         }

    //     }

    
    // }


    
const links  = await page.$$eval('a',alllinks =>alllinks.map(link => link.href));

    console.log(`🔗 Total links found: ${links.length}`);


     for (const link of links) {

        if (link && link.startsWith('http')) {
           const response= await request.get(link)

           const status=response.status();
              if(status>=400){
                console.log(link,"is broken link with status code",status)
              }else{
                console.log(link,"is valid link with status code",status)
              }
        }

    }
    })


    


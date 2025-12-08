

import {test,expert} from '@playwright/test'



test("frames",async ({page})=>{



    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.getByText('Iframe with in an Iframe').click();

// Outer frame
// const outerFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');

// // Inner frame inside the outer frame
// const innerFrame = outerFrame.frameLocator('iframe[src="SingleFrame.html"]');

// // Fill input inside inner frame
// await innerFrame.locator('input[type="text"]').fill('Nested Frame in Playwright');

// await page.waitForTimeout(3000)



  // Get all iframe elements in
  // 
  //side this section
  const iframeElements = await page.locator('iframe').all();

  console.log('Total iframes found:', iframeElements.length);
// const frames = page.frames();


// console.log("total frames"+ await frames.length)
// // for (const frame of frames) {
// //   console.log('Frame name:', frame.name(), ' | URL:', frame.url());
// // }


// if(frames.length ===2){

//     return true
// }
// else {
//     console.log('🧩 Multiple frames detected, entering inner frame...');
// }


})


test.only("Frames with in frames",async ({page}) =>{



  await page.goto("https://demo.automationtesting.in/Frames.html")
  await page.getByText("Iframe with in an Iframe").click()

  const outerframe= page.frameLocator("iframe[src='MultipleFrames.html']")

  const innerframe= outerframe.frameLocator("iframe[src='SingleFrame.html']")
await innerframe.locator('input[type="text"]').fill('Nested Frame in Playw  right');
await page.waitForTimeout(4000)
//const frames = page.frames();

const frames = await page.locator("iframe").all()


console.log("total frames"+ await frames.length)
// for (const frame of frames) {
//   console.log('Frame name:', frame.name(), ' | URL:', frame.url());
// }

})


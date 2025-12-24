const {chromium,firefox,webkit}=require('@playwright/test')

const {test}=require('@playwright/test')



test.skip("Lauch chromium Browser",async()=>{

  

    const browsers= [chromium,firefox,webkit]


    // for(const browserType of browsers){
    //     const browser= await browserType.launch({headless:false})
    //     const context= await browser.newContext()
    //     const page= await context.newPage()
    //     await page.goto("https://www.saucedemo.com/")

    // }



//     await Promise.all(

//  browsers.map(async (browserTpe)=>{

//     const b=await browserTpe.launch({headless:false})
//     const c= await b.newContext()
//     const p= await c.newPage()

//     await p.goto("https://www.facebbok.com")
// })
//     )


const b=await chromium.launch({headless:false})

const contexts=[
    await b.newContext(),
    await b.newContext()

];

const p=await Promise.all(contexts.map(c => c.newPage()))


await p[0].goto('https://www.google.com')
await p[0].waitForTimeout(5000)
await p[1].goto('https://www.facebook.com')
await p[0].waitForTimeout(5000)

})  


test.skip('Test 1 - Google', async ({ page }) => {
  await page.goto('https://google.com');
 // await expect(page).toHaveTitle(/Google/);
});

test('Test 2 - Bing', async ({ page }) => {
  await page.goto('https://bing.com');
  //await expect(page).toHaveTitle(/Bing/);
});

test('Test 3 - DuckDuckGo', async ({ page }) => {
  await page.goto('https://duckduckgo.com');
  //await expect(page).toHaveTitle(/DuckDuckGo/);
});



test("cross browser testing",async ()=>{


    const urls=['https://google.com', 'https://bing.com', 'https://duckduckgo.com'];


    await Promise.all([

(async () =>{

const b=await chromium.launch({headless:false})
const c= await b.newContext()
const p=await c.newPage()

await p.goto(urls[0])
await b.close()
})(),


(async () =>{

const b=await firefox.launch({headless:false})
const c= await b.newContext()
const p=await c.newPage()

await p.goto(urls[1])



})(),

(async () =>{

const b=await webkit.launch({headless:false})
const c= await b.newContext()
const p=await c.newPage()

await p.goto(urls[2])



})(),


    ])
})


test("paallel",async() =>{

      const browser = await chromium.launch({ headless: false });

  const contexts = [await browser.newContext(), await browser.newContext()];
  const pages = await Promise.all(contexts.map(ctx => ctx.newPage()));

  await Promise.all([
    pages[0].goto('https://google.com'),
    pages[1].goto('https://bing.com')
  ]);

  //await browser.close();
})




test.beforeEach(async({page,context})=>{
await context.tracing.start({ screenshots: true, snapshots: true });  

})
test.afterEach(async({context,testinfo})=>{

  if(testinfo.status !== testinfo.expectedStatus){
    await context.tracing.stop({ path: `trace-${Date.now()}.zip` });

})



test("context",async ()=>{


   const browser = await chromium.launch({ headless: false });

  const contexts = [await browser.newContext(), await browser.newContext()];
  await contexts.tracing.start({ screenshots: true, snapshots: true, sources: true });
  await contexts.tracing.stop({ path: 'trace.zip' });
  const pages = await Promise.all(contexts.map(ctx => ctx.newPage()));

  await Promise.all([
    pages[0].goto('https://google.com'),
    await pages[0].waitForTimeout(4000),
    pages[1].goto('https://bing.com')
  ]);
})
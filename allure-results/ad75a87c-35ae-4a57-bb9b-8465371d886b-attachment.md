# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample4.spec.js >> Flipkart search pen
- Location: tests\Sample4.spec.js:117:6

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name=\'q\']').first()
    - waiting for" https://www.amazon.com/" navigation to finish...
    - navigated to "https://www.amazon.com/"

```

# Test source

```ts
  23  | // function add(a, b) {
  24  | //   return a + b;
  25  | // }
  26  | 
  27  | 
  28  | 
  29  | 
  30  | test("saucedemo",async ({page})=>{
  31  | 
  32  | 
  33  |     await page.goto("https://www.saucedemo.com/")
  34  | 
  35  |     const innertext=await page.locator(".login_credentials").innerText()
  36  | 
  37  | 
  38  |     console.log("TExt is:"+ innertext)
  39  | 
  40  |     
  41  |     // const textcontent=await page.locator(".login_credentials").textContent()
  42  | 
  43  | 
  44  |     // console.log("TExt  content isis:"+ textcontent)
  45  | 
  46  | 
  47  |     const userAray= innertext.split("\n").slice(1)
  48  |     console.log(userAray)
  49  | 
  50  | 
  51  |     const firstUser= userAray[0]
  52  | 
  53  | 
  54  |     await page.locator("#user-name").fill(firstUser)
  55  |     await page.waitForTimeout(2000)
  56  | })
  57  | 
  58  | 
  59  | test("Flipkart",async ({page})=>{
  60  | 
  61  | 
  62  |     await page.goto("https://www.flipkart.com/")
  63  | 
  64  |   
  65  |     await page.locator("input[name='q']").first().fill("laptop")
  66  |     await page.keyboard.press("Enter")
  67  |     await page.waitForTimeout(2000)
  68  | 
  69  | 
  70  |     const PRoductCards= await page.locator(".jIjQ8S")
  71  | 
  72  |     const PRoductCount= await PRoductCards.count()
  73  | 
  74  |     console.log("Count is:"+ PRoductCount)
  75  | 
  76  | 
  77  | 
  78  | 
  79  |   //const Productmap = new Map(String,String);
  80  |   const Productmap = new Map();
  81  | 
  82  | for(let i=0;i<PRoductCount;i++){
  83  | 
  84  | const cards= PRoductCards.nth(i)
  85  | const nameLocatror= cards.locator(".RG5Slk")
  86  | const price= cards.locator(".hZ3P6w")
  87  | 
  88  | const nametext= (await nameLocatror.textContent())?.trim().split(' ')[0]
  89  | const priceTExt= (await price.textContent())?.trim()
  90  | 
  91  | if(nametext && priceTExt)
  92  | 
  93  | {
  94  | Productmap.set(nametext,priceTExt)
  95  | 
  96  | }
  97  | console.log("Product map is:",Productmap)
  98  | const productName= "Apple"
  99  | if(Productmap.has(productName)){
  100 | 
  101 |     console.log(`${productName} price is ${Productmap.get(productName)}`)
  102 | }
  103 | 
  104 | 
  105 | for(const [product ,price] of Productmap){
  106 | 
  107 |     console.log(`product :${product},price :${price}`)
  108 | }
  109 | 
  110 | }
  111 | 
  112 | })
  113 | 
  114 | 
  115 | 
  116 | 
  117 | test.only("Flipkart search pen",async ({page})=>{
  118 | 
  119 | 
  120 |     await page.goto("https://www.amazon.com/")
  121 | 
  122 |   
> 123 |     await page.locator("input[name='q']").first().fill("pen")
      |                                                   ^ Error: locator.fill: Target page, context or browser has been closed
  124 |     await page.keyboard.press("Enter")
  125 |     await page.waitForTimeout(5000)
  126 | 
  127 |     let pageCount=1
  128 | 
  129 |     while (true){
  130 | 
  131 |         console.log(`Currently on tha page ${pageCount}`)
  132 | 
  133 |         const NextBtn= page.locator("//span[normalize-space()='Next']")
  134 | 
  135 |         if(await NextBtn.count() > 0 && await NextBtn.isVisible())
  136 |         {
  137 | 
  138 | const classValue= await NextBtn.getAttribute("class")
  139 | 
  140 |             if(classValue.includes("s-pagination-disabled"))
  141 |             {
  142 |                 console.log("Nu=ext btn is disabled")
  143 |             break
  144 |             }
  145 |         console.log("Clicking on Next btn")
  146 |         await NextBtn.scrollIntoViewIfNeeded()
  147 |         await page.waitForTimeout(5000)
  148 |         await NextBtn.click()
  149 |         await page.waitForLoadState("domcontentloaded")
  150 |                 await page.waitForTimeout(5000)
  151 |                 pageCount++
  152 | 
  153 |         }
  154 |         else{
  155 |             console.log("next btn is not visible")
  156 |             break
  157 |         }
  158 |     }
  159 | 
  160 | })
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BaseTest.spec.js >> data login
- Location: tests\BaseTest.spec.js:216:6

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - button [ref=e13] [cursor=pointer]: All Items
                - button [ref=e14] [cursor=pointer]: Dynamic Catalog
                - link [ref=e16] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - button [ref=e17] [cursor=pointer]: Logout
                - button [ref=e18] [cursor=pointer]: Reset App State
              - generic [ref=e19]:
                - button [ref=e20] [cursor=pointer]: Close Menu
                - img [ref=e21]
        - generic [ref=e23]: Swag Labs
        - button "Cart, empty" [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]: Products
        - generic [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Name (A to Z)
          - combobox "Sort products" [ref=e31]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e32]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - button "View details for Sauce Labs Backpack" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - button "View details for Sauce Labs Backpack" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Sauce Labs Backpack
              - generic [ref=e44]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e45]:
              - generic [ref=e46]: $29.99
              - button "Add to cart" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - button "View details for Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - button "View details for Sauce Labs Bike Light" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Sauce Labs Bike Light
              - generic [ref=e56]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e57]:
              - generic [ref=e58]: $9.99
              - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e62] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e66] [cursor=pointer]:
                - generic [ref=e67]: Sauce Labs Bolt T-Shirt
              - generic [ref=e68]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e69]:
              - generic [ref=e70]: $15.99
              - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e74] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Sauce Labs Fleece Jacket
              - generic [ref=e80]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e81]:
              - generic [ref=e82]: $49.99
              - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button "View details for Sauce Labs Onesie" [ref=e86] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]:
              - button "View details for Sauce Labs Onesie" [ref=e90] [cursor=pointer]:
                - generic [ref=e91]: Sauce Labs Onesie
              - generic [ref=e92]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e93]:
              - generic [ref=e94]: $7.99
              - button "Add to cart" [ref=e95] [cursor=pointer]
        - generic [ref=e96]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e98] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e99]
          - generic [ref=e100]:
            - generic [ref=e101]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e102] [cursor=pointer]:
                - generic [ref=e103]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e104]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e105]:
              - generic [ref=e106]: $15.99
              - button "Add to cart" [ref=e107] [cursor=pointer]
  - contentinfo [ref=e108]:
    - list [ref=e109]:
      - listitem [ref=e110]:
        - link "X" [ref=e111] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e112]:
        - link "Facebook" [ref=e113] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e114]:
        - link "LinkedIn" [ref=e115] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e116]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  118 | 
  119 |         await basePage.clickButton('#login-button');
  120 | 
  121 |         await basePage.waitForNavigation();
  122 |         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  123 | 
  124 |     })
  125 | }
  126 | 
  127 | 
  128 | 
  129 | test.describe("Difffernt users login",() =>{
  130 | 
  131 | 
  132 |     for(const user of diffUsernames){
  133 | 
  134 | 
  135 |         test(`login with ${user.username}`,async ({page}) =>{
  136 | 
  137 |             const basePage = new Base(page);
  138 |             await basePage.navigateTo('https://www.saucedemo.com/');
  139 |             await basePage.fillInput('#user-name',user.username);
  140 |             await basePage.fillInput('#password',user.password);
  141 |             await basePage.clickButton('#login-button');
  142 | 
  143 |             await basePage.waitForNavigation();
  144 |             await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');   
  145 |         })
  146 |     }
  147 | 
  148 | 
  149 | })
  150 | 
  151 | 
  152 | 
  153 | for(const user of testdata){
  154 | 
  155 | 
  156 | 
  157 | 
  158 | 
  159 | test(`login with json file ${user.username}`,async ({page}) =>{
  160 | 
  161 |     const basePage = new Base(page);
  162 |     await basePage.navigateTo('https://www.saucedemo.com/');
  163 |     await basePage.fillInput('#user-name',user.username);
  164 |     await basePage.fillInput('#password',user.password);
  165 |     await basePage.clickButton('#login-button');
  166 |     await basePage.waitForNavigation();
  167 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  168 | 
  169 | 
  170 | })
  171 | 
  172 | }
  173 | 
  174 | 
  175 | test("Read data from .env file",async ({page}) =>{
  176 | 
  177 |     const basePage = new Base(page);   
  178 | 
  179 | 
  180 |     console.log(process.env.URL);
  181 |     console.log(process.env.USERNAME1);
  182 |     console.log(process.env.PASSWORD);
  183 |     
  184 |    // await basePage.navigateTo(process.env.URL);
  185 |    await basePage.navigateTo('/');
  186 |     await basePage.fillInput('#user-name',process.env.USERNAME1);
  187 |     await basePage.fillInput('#password',process.env.PASSWORD);
  188 |     await basePage.clickButton('#login-button');
  189 |     await basePage.waitForNavigation();
  190 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');   
  191 | 
  192 | 
  193 | await page.context().storageState({path:'testdata/role.json'})
  194 | 
  195 | })
  196 | 
  197 | test.only("Login valid input data ",async () => {
  198 | 
  199 | 
  200 |     const  browser= await chromium.launch()
  201 |     const context= await browser.newContext()
  202 | 
  203 |     const page= await context.newPage()
  204 |     await page.goto("https://www.saucedemo.com/")
  205 |     await page.locator("#user-name").fill("standard_user")
  206 |     await page.locator("#password").fill("secret_sauce")
  207 |     await page.locator("#login-button").click()
  208 | 
  209 |     //await page.waitForTimeout(3000)
  210 | 
  211 |     await page.context().storageState({path:"testdata/admin.json"})
  212 | 
  213 | 
  214 | })
  215 | 
  216 | test.only("data login",async () =>{
  217 | 
> 218 | await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      |              ^ ReferenceError: page is not defined
  219 | 
  220 | 
  221 | })
  222 | 
  223 | 
  224 | 
```
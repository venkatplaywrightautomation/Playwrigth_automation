# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> API Basics
- Location: tests\apitesting.spec.js:526:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  437 |                 data: {
  438 |                     name: user.name,
  439 |                     job: user.job
  440 | 
  441 |                 }
  442 |             })
  443 | 
  444 |  expect(response.status()).toBe(201)
  445 |     const body= await response.json()
  446 |     console.log(body)
  447 | 
  448 | 
  449 |     expect(body.name).toBe(user.name)
  450 |     expect(body.job).toBe(user.job)
  451 | 
  452 |         })
  453 |     })
  454 |    
  455 | 
  456 | test("Path Parameter",async ({request}) =>{
  457 | 
  458 | const userid="2"
  459 |    
  460 | 
  461 |     const response= await request.get(`https://reqres.in/api/users/${userid}`,{
  462 |         
  463 |         headers:{
  464 |         
  465 | 
  466 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  467 |             
  468 |             
  469 |         },
  470 | 
  471 |     
  472 |         
  473 |         
  474 |     })
  475 |      expect(response.status()).toBe(200);
  476 | 
  477 |   const body = await response.json();
  478 | 
  479 |   console.log(body)
  480 | })
  481 | 
  482 | 
  483 | 
  484 | 
  485 | test("update user",async ({request}) =>{
  486 | 
  487 | const userid=2
  488 |    
  489 | 
  490 |     const response= await request.put(`https://reqres.in/api/users/${userid}`,{
  491 |         headers:{
  492 | 
  493 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  494 |         },
  495 |         data:{
  496 |             name: "venkat",
  497 |             job: "QA"
  498 |         },
  499 |         
  500 | 
  501 |     })
  502 |      expect(response.status()).toBe(200);
  503 | 
  504 |   const body = await response.json();
  505 | 
  506 |   console.log(body)
  507 | })
  508 | 
  509 | 
  510 | 
  511 | 
  512 | test.afterEach(async ({page},testInfo) =>{
  513 | 
  514 |     if(testInfo===fail){
  515 | 
  516 |         await page.screenshot({
  517 |             path:`screenshots/${testInfo.status}.png`
  518 |         })
  519 |     }
  520 | 
  521 | 
  522 | })
  523 | 
  524 | 
  525 | 
  526 | test.only("API Basics",async ({request}) =>{
  527 | 
  528 | 
  529 | 
  530 | 
  531 |     const response= await request.get("https://reqres.in/api/users/2'")
  532 | 
  533 | 
  534 | 
  535 |       console.log("Response data is :"+ response.status())
  536 | 
> 537 |       expect(response.status()).toBe(200)
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  538 | 
  539 | 
  540 | })
```
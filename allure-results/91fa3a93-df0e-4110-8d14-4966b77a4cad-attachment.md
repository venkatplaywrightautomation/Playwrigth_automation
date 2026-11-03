# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> POst Method
- Location: tests\apitesting.spec.js:554:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Venkat"
Received: "venkat"
```

# Test source

```ts
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
  526 | test("API Basics Get Method",async ({request}) =>{
  527 | 
  528 | 
  529 | 
  530 | 
  531 |     const response= await request.get("https://reqres.in/api/users/2")
  532 | 
  533 | 
  534 | 
  535 |       console.log("Response data is :"+ response.status())
  536 | 
  537 |       expect(response.status()).toBe(200)
  538 | 
  539 | 
  540 |       const body= await response.json()
  541 | 
  542 | 
  543 |       console.log("Body is:"+ body)
  544 | 
  545 |       expect(body.data.id).toBe(2)
  546 | 
  547 | 
  548 | 
  549 | 
  550 | 
  551 | })
  552 | 
  553 | 
  554 | test.only("POst Method",async ({request}) =>{
  555 | 
  556 | 
  557 | 
  558 |     const response= await request.post('https://reqres.in/api/users',{
  559 | 
  560 | 
  561 |         data:{
  562 |             name:"venkat",
  563 |             job: "Automation tester"
  564 |         }
  565 |     });
  566 | 
  567 | expect(response.status()).toBe(201)
  568 | 
  569 | const body= await response.json()
  570 | 
  571 | console.log("Body is "+ body)
  572 | 
  573 | 
> 574 | expect(body.name).toBe("Venkat")
      |                   ^ Error: expect(received).toBe(expected) // Object.is equality
  575 | 
  576 | 
  577 | })
```
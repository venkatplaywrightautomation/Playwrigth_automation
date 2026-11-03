# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> Delete Method
- Location: tests\apitesting.spec.js:606:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 204
Received: 200
```

# Test source

```ts
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
  554 | test("POst Method",async ({request}) =>{
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
  574 | expect(body.name).toBe("venkat")
  575 | 
  576 | expect(body.job).toBe("Automation tester")
  577 | 
  578 | 
  579 | })
  580 | 
  581 | test("PUT Method",async ({request}) =>{
  582 | 
  583 | 
  584 | 
  585 |     const response= await request.put('https://reqres.in/api/users/2',{
  586 | 
  587 | 
  588 |         data:{
  589 |             name:"venkat updated",
  590 |             job: "Senior Automation tester"
  591 |         }
  592 |     });
  593 | 
  594 | expect(response.status()).toBe(200)
  595 | 
  596 | const body= await response.json()
  597 | 
  598 | console.log("Body is "+ body)
  599 | 
  600 | 
  601 | 
  602 | })
  603 | 
  604 | 
  605 | 
  606 | test.only("Delete Method",async ({request}) =>{
  607 | 
  608 | 
  609 | 
  610 |     const response= await request.put('https://reqres.in/api/users/2')
  611 | 
> 612 | expect(response.status()).toBe(204)
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  613 | 
  614 | 
  615 | 
  616 | 
  617 | })
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> Read data from json -Raji
- Location: tests\apitesting.spec.js:718:6

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND reqres.in
Call log:
  - → POST https://reqres.in/api/users
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - x-api-key: free_user_3G7TebN7wh9gPjhgrmGw57IWyeV
    - content-type: application/json
    - content-length: 30

```

# Test source

```ts
  632 | 
  633 | 
  634 |     const response= await request.post('https://reqres.in/api/users',{
  635 | 
  636 | 
  637 |         data:{
  638 |             name:"venkat",
  639 |             job: "Automation tester"
  640 |         }
  641 |     });
  642 | 
  643 | expect(response.status()).toBe(201)
  644 | 
  645 | const body= await response.json()
  646 | 
  647 | console.log("Body is "+ body)
  648 | 
  649 | 
  650 | expect(body.name).toBe("venkat")
  651 | 
  652 | expect(body.job).toBe("Automation tester")
  653 | 
  654 | 
  655 | })
  656 | 
  657 | test("PUT Method",async ({request}) =>{
  658 | 
  659 | 
  660 | 
  661 |     const response= await request.put('https://reqres.in/api/users/2',{
  662 | 
  663 | 
  664 |         data:{
  665 |             name:"venkat updated",
  666 |             job: "Senior Automation tester"
  667 |         }
  668 |     });
  669 | 
  670 | expect(response.status()).toBe(200)
  671 | 
  672 | const body= await response.json()
  673 | 
  674 | console.log("Body is "+ body)
  675 | 
  676 | 
  677 | 
  678 | })
  679 | 
  680 | 
  681 | 
  682 | test("Delete Method",async ({request}) =>{
  683 | 
  684 | 
  685 | 
  686 |     const response= await request.delete('https://reqres.in/api/users/2')
  687 | 
  688 | expect(response.status()).toBe(204)
  689 | 
  690 | 
  691 | 
  692 | 
  693 | })
  694 | 
  695 | 
  696 | test("Validate response body",async ({request}) =>{
  697 | const response= await request.get("https://reqres.in/api/users/2");
  698 | const body= await response.json()
  699 | 
  700 | expect(body.data.id).toBe(2)
  701 | expect(body.data.email).toContain("@")
  702 | expect(body.data.email).toBeTruthy()
  703 | 
  704 | 
  705 | 
  706 | 
  707 | })
  708 | 
  709 | 
  710 | 
  711 | 
  712 | 
  713 | 
  714 | 
  715 | 
  716 | testdata.forEach((user) =>
  717 | {
  718 | test.only(`Read data from json -${user.name}`,async ()=>{
  719 | 
  720 | 
  721 | 
  722 |     const apicontext= await request.newContext({
  723 | 
  724 |         extraHTTPHeaders: {
  725 |                     "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV",
  726 |                     
  727 | 
  728 |                 },
  729 |     });
  730 | 
  731 | 
> 732 |     const response= await apicontext.post("https://reqres.in/api/users",{
      |                                      ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND reqres.in
  733 | 
  734 |         data:{
  735 | 
  736 |             name:user.name,
  737 |             job: user.job
  738 | 
  739 |             
  740 |         }
  741 |     })
  742 | 
  743 |     
  744 |  expect(response.status()).toBe(201)
  745 |     const body= await response.json()
  746 |     console.log(body)
  747 | 
  748 | 
  749 |     expect(body.name).toBe(user.name)
  750 |     expect(body.job).toBe(user.job)
  751 | 
  752 |     
  753 | 
  754 | 
  755 | })
  756 | 
  757 | 
  758 | }
  759 | 
  760 | )
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> BASE URL
- Location: tests\apitesting.spec.js:781:6

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  687 | 
  688 | 
  689 |     const response = await request.delete('https://reqres.in/api/users/2')
  690 | 
  691 |     expect(response.status()).toBe(204)
  692 | 
  693 | 
  694 | 
  695 | 
  696 | })
  697 | 
  698 | 
  699 | 
  700 | 
  701 | 
  702 | 
  703 | 
  704 | 
  705 | 
  706 | 
  707 | testdata.forEach((user) => {
  708 |     test(`Read data from json -${user.name}`, async () => {
  709 | 
  710 | 
  711 | 
  712 |         const apicontext = await request.newContext({
  713 | 
  714 |             extraHTTPHeaders: {
  715 |                 "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV",
  716 | 
  717 | 
  718 |             },
  719 |         });
  720 | 
  721 | 
  722 |         const response = await apicontext.post("https://reqres.in/api/users", {
  723 | 
  724 |             data: {
  725 | 
  726 |                 name: user.name,
  727 |                 job: user.job
  728 | 
  729 | 
  730 |             }
  731 |         })
  732 | 
  733 | 
  734 |         expect(response.status()).toBe(201)
  735 |         const body = await response.json()
  736 |         console.log(body)
  737 | 
  738 | 
  739 |         expect(body.name).toBe(user.name)
  740 |         expect(body.job).toBe(user.job)
  741 | 
  742 | 
  743 | 
  744 | 
  745 |     })
  746 | 
  747 | 
  748 | }
  749 | 
  750 | )
  751 | 
  752 | 
  753 | test('API context example', async () => {
  754 | 
  755 |     const apiContext = await request.newContext({
  756 |         baseURL: 'https://reqres.in/api',
  757 |         extraHTTPHeaders: {
  758 | 
  759 |             'Content-Type': 'application/json',
  760 |              "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  761 |         }
  762 |     });
  763 | 
  764 |     const response = await apiContext.get('/users');
  765 | 
  766 |     //expect(response.status()).toBe(404);
  767 | 
  768 |     const body =  await response.json();
  769 | 
  770 |     console.log(body);
  771 | 
  772 |     //await apiContext.dispose();
  773 | });
  774 | 
  775 | test.use({
  776 | 
  777 |     baseURL:'https://reqres.in/api'
  778 | })
  779 | 
  780 | 
  781 | test.only("BASE URL",async({request})=>{
  782 | 
  783 | const response= await request.get('/users?page=2')
  784 | 
  785 |     expect(response.status()).toBe(404);
  786 | 
> 787 |     const body = await response.json();
      |                  ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  788 | 
  789 |     console.log(body);
  790 | 
  791 | 
  792 | })
```
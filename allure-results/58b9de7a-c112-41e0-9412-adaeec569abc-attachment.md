# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> API context example
- Location: tests\apitesting.spec.js:753:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  664 |     const response = await request.put('https://reqres.in/api/users/2', {
  665 | 
  666 | 
  667 |         data: {
  668 |             name: "venkat updated",
  669 |             job: "Senior Automation tester"
  670 |         }
  671 |     });
  672 | 
  673 |     expect(response.status()).toBe(200)
  674 | 
  675 |     const body = await response.json()
  676 | 
  677 |     console.log("Body is " + body)
  678 | 
  679 | 
  680 | 
  681 | })
  682 | 
  683 | 
  684 | 
  685 | test("Delete Method", async ({ request }) => {
  686 | 
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
  753 | test.only('API context example', async () => {
  754 | 
  755 |     const apiContext = await request.newContext({
  756 |         baseURL: 'https://reqres.in/api',
  757 |         extraHTTPHeaders: {
  758 |             'Content-Type': 'application/json'
  759 |         }
  760 |     });
  761 | 
  762 |     const response = await apiContext.get('/users');
  763 | 
> 764 |     expect(response.status()).toBe(200);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  765 | 
  766 |     const body = await response.json();
  767 | 
  768 |     console.log(body);
  769 | 
  770 |     //await apiContext.dispose();
  771 | });
```
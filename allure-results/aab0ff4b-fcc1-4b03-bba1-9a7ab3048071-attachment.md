# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.js >> Login API testing
- Location: tests\API.spec.js:29:6

# Error details

```
TypeError: request.newContext is not a function
```

# Test source

```ts
  1  | 
  2  | 
  3  | import { request, test,expect } from "@playwright/test";
  4  | 
  5  | test("Login AP", async({ request }) => {
  6  | 
  7  |     const loginResponse =  await request.post('https://reqres.in/api/login', {
  8  |         data: {
  9  |             email: 'test@example.com',
  10 |             password: 'password123'
  11 |         }
  12 |     });
  13 | 
  14 |     expect(loginResponse.status()).toBe(400);
  15 | 
  16 |     const loginBody = await loginResponse.json();
  17 | 
  18 |     const token = loginBody.token;
  19 | 
  20 |     console.log('Token:', token);
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | })
  27 | 
  28 | 
  29 | test.only("Login API testing", async ({request}) => {
  30 | 
  31 | 
  32 | 
> 33 |     const apicontext = await request.newContext({
     |                                      ^ TypeError: request.newContext is not a function
  34 | 
  35 |         extraHTTPHeaders: {
  36 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  37 | 
  38 |         }
  39 |     }
  40 |     );
  41 | 
  42 | 
  43 |     const response = await apicontext.post('https://reqres.in/api/login', {
  44 |         data: {
  45 | 
  46 |             email: "eve.holt@reqres.in",
  47 |             password: "cityslicka"
  48 | 
  49 |         }
  50 |     })
  51 | 
  52 |     expect(response.status()).toBe(200);
  53 | 
  54 |     const responseBody = await response.json();
  55 |     expect(responseBody).toHaveProperty('token');
  56 |   //  console.log("Body" + responseBody);
  57 |   //  console.log("Token+: " + responseBody.token);
  58 | 
  59 | 
  60 |     const token= responseBody.token
  61 | 
  62 |   console.log("Token+: " + responseBody.token);
  63 | 
  64 |   console.log("##############")
  65 | 
  66 |   const respose= await request.get("https://reqres.in/api/login",{
  67 | 
  68 | 
  69 |     Headers:{
  70 |         Authorization: `Bearer ${token}`
  71 |     }
  72 |   })
  73 | 
  74 | })
```
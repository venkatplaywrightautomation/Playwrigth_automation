# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.js >> Login AP
- Location: tests\API.spec.js:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
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
> 14 |     expect(loginResponse.status()).toBe(200);
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
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
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.js >> Reusable functions used
- Location: tests\API.spec.js:141:6

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND reqres.in
Call log:
  - → POST https://reqres.in/api/users
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 28

```

# Test source

```ts
  1  | 
  2  | 
  3  | export class apiUsers {
  4  | 
  5  | 
  6  | 
  7  |     constructor(request) {
  8  | 
  9  |         this.request = request
  10 |     }
  11 | 
  12 |     async getUser() {
  13 | 
  14 | 
  15 |         return await this.request.get("https://reqres.in/api/users?page=2")
  16 |     }
  17 | 
  18 | 
  19 |     async createUser(name, job) {
  20 | 
> 21 |         return await this.request.post("https://reqres.in/api/users", {
     |                                   ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND reqres.in
  22 | 
  23 |             data: {
  24 | 
  25 |                 name,
  26 |                 job
  27 |             }
  28 |         })
  29 | 
  30 |     }
  31 | 
  32 | 
  33 | 
  34 |     async updateUSer(id, name, job) {
  35 | 
  36 | 
  37 |         return await this.request.get(`https://reqres.in/api/users/{id}`, {
  38 | 
  39 |             data: {
  40 | 
  41 |                 name,
  42 |                 job
  43 |             }
  44 |         })
  45 |     }
  46 | 
  47 | async deleteUser(id){
  48 | 
  49 |     return await this.request.get(`https://reqres.in/api/users/${id}`)
  50 | }
  51 | 
  52 | }
```
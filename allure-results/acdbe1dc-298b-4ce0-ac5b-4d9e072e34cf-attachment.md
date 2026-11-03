# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> API testing bascis
- Location: tests\apitesting.spec.js:19:5

# Error details

```
Error: apiRequestContext.get: Request context disposed.
Call log:
  - → GET https://reqres.in/api/users?page=2
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1   | 
  2   | 
  3   | //const {test,expect,request}=request("@playwright/test")
  4   | 
  5   | import { test, expect, request } from "@playwright/test"
  6   | import { TIMEOUT } from "dns";
  7   | import { on } from "events";
  8   | 
  9   | 
  10  | import testdata from '../testdata/apidata.json'
  11  | import { userInfo } from "os";
  12  | import { fail } from "assert";
  13  | import { execPath } from "process";
  14  | import { runInNewContext } from "vm";
  15  | import path from "path";
  16  | 
  17  | 
  18  | //    'x-api-key': 'reqres-free-v1'
  19  | test("API testing bascis", async ({ request }) => {
  20  | 
> 21  |     const response = await request.get("https://reqres.in/api/users?page=2");
      |                                    ^ Error: apiRequestContext.get: Request context disposed.
  22  | 
  23  |     //expect(response.status()).toBe(200)
  24  | 
  25  |     const body = await response.json()
  26  | 
  27  |     console.log(body)
  28  | 
  29  | 
  30  | })
  31  | 
  32  | 
  33  | test("API testing bascis 1 ", async ({ request }) => {
  34  | 
  35  |     const response = await request.get("https://reqres.in/api/users?page=2");
  36  | 
  37  |     //expect(response.status()).toBe(200)
  38  | 
  39  |     const body = await response.json()
  40  | 
  41  |     console.log(body)
  42  | 
  43  | 
  44  | })
  45  | 
  46  | 
  47  | 
  48  | 
  49  | 
  50  | test("API Key value validation", async () => {
  51  | 
  52  | 
  53  |     const apicontext = await request.newContext({
  54  |         extraHTTPHeaders: {
  55  | 
  56  |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  57  | 
  58  |         }
  59  |     });
  60  | 
  61  |     const response = await apicontext.get('https://reqres.in/api/users?page=2');
  62  | 
  63  |     //expect(response.status()).toBe(200);
  64  | 
  65  |     const body = await response.json();
  66  |     console.log(body);
  67  |     expect(response.ok()).toBeTruthy()
  68  | 
  69  | 
  70  |     //   console.log(body);
  71  | 
  72  |     //   expect(body.total).toBe(12);
  73  |     //   expect(body.per_page).toBe(6);
  74  |     //   expect(body.page).toBe(2);
  75  | 
  76  | 
  77  |     //   expect(body.data[0].id).toBe(12);
  78  |     //   expect(body.data[0].first_name).toBe("Michael");
  79  |     //   expect(body.data[0].last_name).toBe("Lawson");
  80  | 
  81  | 
  82  |     // body.data.forEach((user) =>{
  83  | 
  84  |     //     console.log("first name is : "+user.first_name + " last name is : "+user.last_name)
  85  |     // })
  86  | 
  87  | 
  88  |     // body.data.forEach((user) =>{
  89  | 
  90  |     //     console.log("email is : "+user.email)
  91  |     // })
  92  | })
  93  | 
  94  | 
  95  | 
  96  | 
  97  | 
  98  | test("API Key value validation 1", async () => {
  99  | 
  100 | 
  101 | 
  102 | 
  103 |     const apicontext = await request.newContext({
  104 |         extraHTTPHeaders: {
  105 | 
  106 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  107 | 
  108 |         }
  109 |     });
  110 | 
  111 |     const response = await apicontext.get('https://reqres.in/api/users?page=2');
  112 | 
  113 |     //expect(response.status()).toBe(200);
  114 | 
  115 |     const body = await response.json();
  116 |     console.log(body);
  117 |     expect(response.ok()).toBeTruthy()
  118 | 
  119 | 
  120 |     console.log(body);
  121 | 
```
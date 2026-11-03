# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> API Key value validation 1
- Location: tests\apitesting.spec.js:95:6

# Error details

```
ReferenceError: apicontext is not defined
```

# Test source

```ts
  7   | import { on } from "events";
  8   | 
  9   | 
  10  | import testdata from '../testdata/apidata.json'
  11  | import { userInfo } from "os";
  12  | import { fail } from "assert";
  13  | import { execPath } from "process";
  14  | 
  15  | 
  16  | //    'x-api-key': 'reqres-free-v1'
  17  | test("API testing bascis",async ({request}) =>{
  18  | 
  19  |     const response= await request.get("https://reqres.in/api/users?page=2");
  20  | 
  21  |      //expect(response.status()).toBe(200)
  22  | 
  23  |     const body= await response.json()
  24  | 
  25  |     console.log(body)
  26  | 
  27  | 
  28  | })
  29  | 
  30  | 
  31  | test("API testing bascis 1 ",async ({request}) =>{
  32  | 
  33  |     const response= await request.get("https://reqres.in/api/users?page=2");
  34  | 
  35  |      //expect(response.status()).toBe(200)
  36  | 
  37  |     const body= await response.json()
  38  | 
  39  |     console.log(body)
  40  | 
  41  | 
  42  | })
  43  | 
  44  | 
  45  | 
  46  | 
  47  | 
  48  | test.only("API Key value validation",async () =>{
  49  | 
  50  | 
  51  | const apicontext= await request.newContext({
  52  |     extraHTTPHeaders:{
  53  | 
  54  |         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  55  | 
  56  |     }
  57  | });
  58  | 
  59  | const response = await apicontext.get('https://reqres.in/api/users?page=2');
  60  | 
  61  |   //expect(response.status()).toBe(200);
  62  | 
  63  |   const body = await response.json();
  64  |   console.log(body);
  65  |   expect(response.ok()).toBeTruthy()
  66  | 
  67  | 
  68  | //   console.log(body);
  69  | 
  70  | //   expect(body.total).toBe(12);
  71  | //   expect(body.per_page).toBe(6);
  72  | //   expect(body.page).toBe(2);
  73  | 
  74  | //   expect(body.data[0].id).toBe(12);
  75  | //   expect(body.data[0].first_name).toBe("Michael");
  76  | //   expect(body.data[0].last_name).toBe("Lawson");
  77  |   
  78  | 
  79  | // body.data.forEach((user) =>{
  80  | 
  81  | //     console.log("first name is : "+user.first_name + " last name is : "+user.last_name)
  82  | // })
  83  | 
  84  | 
  85  | // body.data.forEach((user) =>{
  86  | 
  87  | //     console.log("email is : "+user.email)
  88  | // })
  89  | })
  90  | 
  91  | 
  92  | 
  93  | 
  94  | 
  95  | test.only("API Key value validation 1",async () =>{
  96  | 
  97  | 
  98  | 
  99  | 
  100 | 
  101 |     const apirequestcontext= await request.newContext({
  102 | extraHTTPHeaders:{
  103 |      "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  104 | }
  105 |     })
  106 | 
> 107 |     const response = await apicontext.get('https://reqres.in/api/users?page=2');
      |                      ^ ReferenceError: apicontext is not defined
  108 | 
  109 | 
  110 |     const body= await response.json()
  111 | 
  112 | console.log("Body is:"+ body)
  113 | expect(response.ok()).toBeTruthy()
  114 |     expect(body.page).toBe(2)
  115 |     expect(body.per_page).toBe(6)
  116 |     expect(body.total).toBe(12)
  117 |     expect(body.total_pages).toBe(2)
  118 |   
  119 | })
  120 | 
  121 | 
  122 | test("Post request",async () =>{
  123 | 
  124 | 
  125 |     const apicontext= await request.newContext({
  126 |         extraHTTPHeaders:{
  127 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  128 |         }
  129 | 
  130 | });
  131 | 
  132 | 
  133 | const response = await apicontext.post('https://reqres.in/api/users',{
  134 | 
  135 |     data:{
  136 |         name: "Venkat",
  137 |         job: "QA"
  138 |     }
  139 | }
  140 | );
  141 | expect(response.status()).toBe(201);
  142 | 
  143 | const body = await response.json();
  144 | 
  145 | console.log(body);
  146 | 
  147 | 
  148 | // expect(body.name).toBe("Venkat");
  149 | // expect(body.job).toBe("QA");
  150 | // expect(body.id).not.toBeNull();
  151 | // expect(body.createdAt).not.toBeNull();
  152 | 
  153 | })
  154 | 
  155 | 
  156 | test("put example",async() =>{
  157 | 
  158 | 
  159 | const apicontext= await request.newContext({
  160 |     extraHTTPHeaders:{
  161 |         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  162 |     }
  163 | 
  164 | 
  165 | });
  166 | 
  167 | const response= await apicontext.put('https://reqres.in/api/users/2',{
  168 |     data:{
  169 |         name: "Venkata reddy",
  170 |         job: "Senior QA"
  171 |     }
  172 | }
  173 | )
  174 | expect(response.status()).toBe(200);
  175 | expect(response.ok()).toBeTruthy();
  176 | 
  177 | const body= await response.json();
  178 | console.log(body);
  179 | 
  180 | expect(body.name).toBe("Venkata reddy");
  181 | expect(body.job).toBe("Senior QA");
  182 | //expect(body.updatedAt).not.toBeNull();
  183 | 
  184 | 
  185 | })
  186 | 
  187 | 
  188 | 
  189 | 
  190 | test("patch example",async() =>{
  191 | 
  192 | 
  193 | const apicontext= await request.newContext({
  194 |     extraHTTPHeaders:{
  195 |         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  196 |     }
  197 | 
  198 | 
  199 | });
  200 | 
  201 | const response= await apicontext.patch('https://reqres.in/api/users/2',{
  202 |     data:{
  203 |         name: "Venkata reddy",
  204 |         //job: "Senior QA"
  205 |     }
  206 | }
  207 | )
```
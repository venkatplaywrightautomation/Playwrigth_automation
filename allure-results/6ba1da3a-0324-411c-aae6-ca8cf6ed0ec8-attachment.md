# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> API Key value validation 1
- Location: tests\apitesting.spec.js:96:6

# Error details

```
TypeError: (0 , _test.expect)(...).toBeBe is not a function
```

# Test source

```ts
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
  48  | test("API Key value validation",async () =>{
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
  74  | 
  75  | //   expect(body.data[0].id).toBe(12);
  76  | //   expect(body.data[0].first_name).toBe("Michael");
  77  | //   expect(body.data[0].last_name).toBe("Lawson");
  78  |   
  79  | 
  80  | // body.data.forEach((user) =>{
  81  | 
  82  | //     console.log("first name is : "+user.first_name + " last name is : "+user.last_name)
  83  | // })
  84  | 
  85  | 
  86  | // body.data.forEach((user) =>{
  87  | 
  88  | //     console.log("email is : "+user.email)
  89  | // })
  90  | })
  91  | 
  92  | 
  93  | 
  94  | 
  95  | 
  96  | test.only("API Key value validation 1",async () =>{
  97  | 
  98  | 
  99  | 
  100 | 
  101 | const apicontext= await request.newContext({
  102 |     extraHTTPHeaders:{
  103 | 
  104 |         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  105 | 
  106 |     }
  107 | });
  108 | 
  109 | const response = await apicontext.get('https://reqres.in/api/users?page=2');
  110 | 
  111 |   //expect(response.status()).toBe(200);
  112 | 
  113 |   const body = await response.json();
  114 |   console.log(body);
  115 |   expect(response.ok()).toBeTruthy()
  116 | 
  117 | 
  118 |   console.log(body);
  119 | 
  120 | 
  121 |   expect(body.data[1].id).toBe(8)
  122 | 
  123 |   expect(body.data[0].first_name).toBe("Michael")
  124 | 
  125 |     expect(body.data[0].last_name).toBe("Lawson")
  126 | 
> 127 |     expect(body.data[0].email).toBeBe("michael.lawson@reqres.in")
      |                                ^ TypeError: (0 , _test.expect)(...).toBeBe is not a function
  128 | 
  129 | 
  130 | 
  131 |   
  132 | })
  133 | 
  134 | 
  135 | test("Post request",async () =>{
  136 | 
  137 | 
  138 |     const apicontext= await request.newContext({
  139 |         extraHTTPHeaders:{
  140 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  141 |         }
  142 | 
  143 | });
  144 | 
  145 | 
  146 | const response = await apicontext.post('https://reqres.in/api/users',{
  147 | 
  148 |     data:{
  149 |         name: "Venkat",
  150 |         job: "QA"
  151 |     }
  152 | }
  153 | );
  154 | expect(response.status()).toBe(201);
  155 | 
  156 | const body = await response.json();
  157 | 
  158 | console.log(body);
  159 | 
  160 | 
  161 | // expect(body.name).toBe("Venkat");
  162 | // expect(body.job).toBe("QA");
  163 | // expect(body.id).not.toBeNull();
  164 | // expect(body.createdAt).not.toBeNull();
  165 | 
  166 | })
  167 | 
  168 | 
  169 | test("put example",async() =>{
  170 | 
  171 | 
  172 | const apicontext= await request.newContext({
  173 |     extraHTTPHeaders:{
  174 |         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  175 |     }
  176 | 
  177 | 
  178 | });
  179 | 
  180 | const response= await apicontext.put('https://reqres.in/api/users/2',{
  181 |     data:{
  182 |         name: "Venkata reddy",
  183 |         job: "Senior QA"
  184 |     }
  185 | }
  186 | )
  187 | expect(response.status()).toBe(200);
  188 | expect(response.ok()).toBeTruthy();
  189 | 
  190 | const body= await response.json();
  191 | console.log(body);
  192 | 
  193 | expect(body.name).toBe("Venkata reddy");
  194 | expect(body.job).toBe("Senior QA");
  195 | //expect(body.updatedAt).not.toBeNull();
  196 | 
  197 | 
  198 | })
  199 | 
  200 | 
  201 | 
  202 | 
  203 | test("patch example",async() =>{
  204 | 
  205 | 
  206 | const apicontext= await request.newContext({
  207 |     extraHTTPHeaders:{
  208 |         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  209 |     }
  210 | 
  211 | 
  212 | });
  213 | 
  214 | const response= await apicontext.patch('https://reqres.in/api/users/2',{
  215 |     data:{
  216 |         name: "Venkata reddy",
  217 |         //job: "Senior QA"
  218 |     }
  219 | }
  220 | )
  221 | //expect(response.status()).toBe(200);
  222 | //expect(response.ok()).toBeTruthy();
  223 | 
  224 | const body= await response.json();
  225 | console.log(body);
  226 | 
  227 | expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting.spec.js >> Login API testing
- Location: tests\apitesting.spec.js:307:6

# Error details

```
TypeError: _test.request.post is not a function
```

# Test source

```ts
  221 |         //job: "Senior QA"
  222 |     }
  223 | }
  224 | )
  225 | //expect(response.status()).toBe(200);
  226 | //expect(response.ok()).toBeTruthy();
  227 | 
  228 | const body= await response.json();
  229 | console.log(body);
  230 | 
  231 | 
  232 | 
  233 | expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');
  234 | 
  235 | 
  236 | expect(body.name).toBe("Venkata reddy");
  237 | //expect(body.job).toBe("Senior QA");
  238 | //expect(body.updatedAt).not.toBeNull();
  239 | 
  240 | 
  241 | })
  242 | 
  243 | 
  244 | test("Delete example",async() =>{
  245 | 
  246 | 
  247 | const apicontext= await request.newContext({
  248 |     extraHTTPHeaders:{
  249 |         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  250 |     }
  251 | 
  252 | 
  253 | 
  254 | });
  255 | 
  256 | const response= await apicontext.delete('https://reqres.in/api/users/2')
  257 | 
  258 | expect(response.status()).toBe(204);
  259 | 
  260 | console.log(response.headers());
  261 | 
  262 | //expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');
  263 | 
  264 | //expect(response.ok()).toBeTruthy();
  265 | 
  266 | // const body= await response.json();
  267 | // console.log(body);
  268 | 
  269 | //expect(body.name).toBe("Venkata reddy");
  270 | //expect(body.job).toBe("Senior QA");
  271 | //expect(body.updatedAt).not.toBeNull();
  272 | 
  273 | 
  274 | })
  275 | 
  276 | 
  277 | 
  278 | test("Response Time validation",async() =>{
  279 | 
  280 |     const apicontext= await request.newContext({
  281 |         extraHTTPHeaders:{
  282 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  283 |         }
  284 |     })
  285 | 
  286 |     const startTime = Date.now();
  287 |     const response= await apicontext.get('https://reqres.in/api/users?page=2')
  288 |     const endTime = Date.now();
  289 |     const responseTime = endTime - startTime;
  290 |     console.log(`Response time: ${responseTime} ms`);
  291 |     expect(responseTime).toBeLessThan(2000);
  292 | 
  293 | 
  294 |      const responseBody = await response.json();
  295 |      expect(responseBody).toHaveProperty('data');
  296 |      expect(responseBody).toHaveProperty('page');
  297 |      expect(responseBody).toHaveProperty('per_page');
  298 |      expect(responseBody).toHaveProperty('total');
  299 |      expect(responseBody).toHaveProperty('total_pages');
  300 |      expect(responseBody).toHaveProperty('support');
  301 |     console.log(responseBody);
  302 |      console.log(response.headers());
  303 | 
  304 | 
  305 | })
  306 | 
  307 | test.only("Login API testing",async() =>{
  308 | 
  309 | 
  310 | 
  311 |     // const apicontext= await request.newContext({
  312 |         
  313 |     //     extraHTTPHeaders:{
  314 |     //         "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  315 | 
  316 |     //     }
  317 |     //     }
  318 |     // );
  319 | 
  320 | 
> 321 |         const response= await request.post('https://reqres.in/api/login',{
      |                                       ^ TypeError: _test.request.post is not a function
  322 |             data:{  
  323 | 
  324 |                 email: "eve.holt@reqres.in",
  325 |                 password: "cityslicka"
  326 | 
  327 |             }
  328 |         })
  329 | 
  330 |         expect(response.status()).toBe(200);
  331 | 
  332 |         const responseBody = await response.json();
  333 |         expect(responseBody).toHaveProperty('token');
  334 |         console.log(responseBody);
  335 |         console.log(responseBody.token);  
  336 | 
  337 |         expect(responseBody.token).not.toBeNull();
  338 |         expect(responseBody.token).toBe("QpwL5tke4Pnpja7X4");
  339 |         expect(responseBody.token).toMatch(/^[A-Za-z0-9]+$/);
  340 |         expect(responseBody.token.length).toBeGreaterThan(10);
  341 |         expect(responseBody.token.length).toBeLessThan(20);
  342 |         expect(responseBody.token.length).toBe(17);
  343 |         expect(responseBody.token).toContain("QpwL5tke4Pnpja7X4");
  344 |         expect(responseBody.token).not.toContain("invalid_token");
  345 | 
  346 | })
  347 | 
  348 | 
  349 | test("Register user API testing",async() =>{
  350 | 
  351 | 
  352 | 
  353 | 
  354 |     const apicontext= await request.newContext({
  355 |         extraHTTPHeaders:{
  356 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV",
  357 | 
  358 |     
  359 |             
  360 | 
  361 |         },
  362 |         // headers:{
  363 |         //     'x-api-key': 'reqres-free-v1'
  364 |         // }
  365 |         }
  366 |     );
  367 | 
  368 | const resopnse= await apicontext.post('https://reqres.in/api/register',{
  369 |     data:{
  370 |                     email: 'eve.holt@reqres.in',
  371 | 
  372 |                      password: "pistol"
  373 | 
  374 |     }
  375 |     })
  376 | 
  377 | 
  378 | 
  379 | expect(resopnse.status()).toBe(200);
  380 | 
  381 | const responseBody = await resopnse.json();
  382 | 
  383 | expect(responseBody).toHaveProperty('id');
  384 | expect(responseBody).toHaveProperty('token');
  385 | console.log(responseBody);
  386 | console.log(responseBody.id);
  387 | console.log(responseBody.token);        
  388 | })
  389 | 
  390 | 
  391 | 
  392 | 
  393 | test("Create API context request",async() =>{
  394 | 
  395 | 
  396 |     const apicontext= await request.newContext({
  397 |           baseURL: 'https://reqres.in/api'
  398 | 
  399 |     })
  400 | 
  401 | console.log(apicontext)
  402 | })
  403 | 
  404 | 
  405 | test("Get users",async () =>{
  406 | 
  407 | const apicontext= await request.newContext({
  408 |    // baseURL: 'https://reqres.in/api',
  409 |     extraHTTPHeaders:{
  410 |             "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
  411 | 
  412 |         }
  413 | 
  414 | })
  415 | 
  416 | const response= await apicontext.get('https://reqres.in/api/users?page=2')
  417 | 
  418 | expect.soft(response.status()).toBe(200)
  419 | 
  420 |   const body = await response.json();
  421 | 
```
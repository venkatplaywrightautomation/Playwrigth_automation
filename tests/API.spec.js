

import { json } from 'stream/consumers';
import {apiUsers} from '../Pages/apifunctions'

import { request, test,expect } from "@playwright/test";

test("Login AP", async({ request }) => {

    const loginResponse =  await request.post('https://reqres.in/api/login', {
        data: {
            email: 'test@example.com',
            password: 'password123'
        }
    });

    expect(loginResponse.status()).toBe(400);

    const loginBody = await loginResponse.json();

    const token = loginBody.token;

    console.log('Token:', token);





})


test("Login API testing", async () => {



    const apicontext = await request.newContext({

        extraHTTPHeaders: {
            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"

        }
    }
    );


    const response = await apicontext.post('https://reqres.in/api/login', {
        data: {

            email: "eve.holt@reqres.in",
            password: "cityslicka"

        }
    })

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
  //  console.log("Body" + responseBody);
  //  console.log("Token+: " + responseBody.token);


    const token= responseBody.token

  console.log("Token+: " + responseBody.token);

  console.log("##############")

  

})



test("Token",async ()=>{

let token="QpwL5tke4Pnpja7X4"


    const apicontext = await request.newContext({
        extraHTTPHeaders: {
            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
        }



    });
    const respose= await apicontext.get("https://reqres.in/api/users",{


    Headers:{
        Authorization: `Bearer ${token}`
    } 
  })
  const body=await respose.json()

  console.log(body)
})


test('API chaining', async ({ request }) => {

    // 1. Create
    const createResponse = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'Venkat',
            job: 'Tester'
        }
    });

    expect(createResponse.status()).toBe(201);

    const createdUser = await createResponse.json();

    const userId = createdUser.id;

    console.log('Created ID:', userId);

    // 2. Get
    const getResponse = await request.get(`https://reqres.in/api/users/${userId}`);

    console.log(await getResponse.json());

    // 3. Update
    const updateResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
        data: {
            name: 'Venkat Updated',
            job: 'Senior Tester'
        }
    });

    expect(updateResponse.status()).toBe(200);

    // // 4. Delete
    // const deleteResponse = await request.delete(`https://reqres.in/api/users/${userId}`);

    // expect(deleteResponse.status()).toBe(204);
});



test.only("Reusable functions used",async ({request,page}) =>{

   


    const apiUser=  new apiUsers(request)

const response = await apiUser.get('https://reqres.in/api/users');

expect(response.status()).toBe(429);

await page.route(`**/api/users`,async route =>{


    await route.fulfill({
        status:200,

        contentType:"application/json",
        body:JSON.stringify({

            users:[

                id : 1,
                name:"venkat"
            ]
        })


    })
})
   

})
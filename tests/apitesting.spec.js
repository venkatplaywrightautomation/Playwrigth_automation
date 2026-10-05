

//const {test,expect,request}=request("@playwright/test")

import {test,expect,request} from "@playwright/test"
import { TIMEOUT } from "dns";
import { on } from "events";


import testdata from '../testdata/apidata.json'
import { userInfo } from "os";
import { fail } from "assert";


//    'x-api-key': 'reqres-free-v1'
test("API testing bascis",async ({request}) =>{

    const response= await request.get("https://reqres.in/api/users?page=2");

     //expect(response.status()).toBe(200)

    const body= await response.json()

    console.log(body)


})

test("API Key value validation",async () =>{


const apicontext= await request.newContext({
    extraHTTPHeaders:{

        "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"

    }
});

const response = await apicontext.get('https://reqres.in/api/users?page=2');

  //expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
  expect(response.ok()).toBeTruthy()


//   console.log(body);

//   expect(body.total).toBe(12);
//   expect(body.per_page).toBe(6);
//   expect(body.page).toBe(2);

//   expect(body.data[0].id).toBe(12);
//   expect(body.data[0].first_name).toBe("Michael");
//   expect(body.data[0].last_name).toBe("Lawson");
  

// body.data.forEach((user) =>{

//     console.log("first name is : "+user.first_name + " last name is : "+user.last_name)
// })


// body.data.forEach((user) =>{

//     console.log("email is : "+user.email)
// })
})


test("Post request",async () =>{


    const apicontext= await request.newContext({
        extraHTTPHeaders:{
            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
        }

});


const response = await apicontext.post('https://reqres.in/api/users',{

    data:{
        name: "Venkat",
        job: "QA"
    }
}
);
expect(response.status()).toBe(201);

const body = await response.json();

console.log(body);


// expect(body.name).toBe("Venkat");
// expect(body.job).toBe("QA");
// expect(body.id).not.toBeNull();
// expect(body.createdAt).not.toBeNull();

})


test("put example",async() =>{


const apicontext= await request.newContext({
    extraHTTPHeaders:{
        "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
    }


});

const response= await apicontext.put('https://reqres.in/api/users/2',{
    data:{
        name: "Venkata reddy",
        job: "Senior QA"
    }
}
)
expect(response.status()).toBe(200);
expect(response.ok()).toBeTruthy();

const body= await response.json();
console.log(body);

expect(body.name).toBe("Venkata reddy");
expect(body.job).toBe("Senior QA");
//expect(body.updatedAt).not.toBeNull();


})




test("patch example",async() =>{


const apicontext= await request.newContext({
    extraHTTPHeaders:{
        "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
    }


});

const response= await apicontext.patch('https://reqres.in/api/users/2',{
    data:{
        name: "Venkata reddy",
        //job: "Senior QA"
    }
}
)
//expect(response.status()).toBe(200);
//expect(response.ok()).toBeTruthy();

const body= await response.json();
console.log(body);

expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');


expect(body.name).toBe("Venkata reddy");
//expect(body.job).toBe("Senior QA");
//expect(body.updatedAt).not.toBeNull();


})


test("Delete example",async() =>{


const apicontext= await request.newContext({
    extraHTTPHeaders:{
        "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
    }



});

const response= await apicontext.delete('https://reqres.in/api/users/2')

expect(response.status()).toBe(204);

console.log(response.headers());

//expect(response.headers()['content-type']).toBe('application/json; charset=utf-8');

//expect(response.ok()).toBeTruthy();

// const body= await response.json();
// console.log(body);

//expect(body.name).toBe("Venkata reddy");
//expect(body.job).toBe("Senior QA");
//expect(body.updatedAt).not.toBeNull();


})



test("Response Time validation",async() =>{

    const apicontext= await request.newContext({
        extraHTTPHeaders:{
            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
        }
    })

    const startTime = Date.now();
    const response= await apicontext.get('https://reqres.in/api/users?page=2')
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`Response time: ${responseTime} ms`);
    expect(responseTime).toBeLessThan(2000);


     const responseBody = await response.json();
     expect(responseBody).toHaveProperty('data');
     expect(responseBody).toHaveProperty('page');
     expect(responseBody).toHaveProperty('per_page');
     expect(responseBody).toHaveProperty('total');
     expect(responseBody).toHaveProperty('total_pages');
     expect(responseBody).toHaveProperty('support');
    // console.log(responseBody);
    // console.log(response.headers());


})

test("Login API testing",async() =>{



    const apicontext= await request.newContext({
        
        extraHTTPHeaders:{
            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"

        }
        }
    );


        const response= await apicontext.post('https://reqres.in/api/login',{
            data:{  

                email: "eve.holt@reqres.in",
                password: "cityslicka"

            }
        })

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('token');
        console.log(responseBody);
        console.log(responseBody.token);  

        expect(responseBody.token).not.toBeNull();
        expect(responseBody.token).toBe("QpwL5tke4Pnpja7X4");
        expect(responseBody.token).toMatch(/^[A-Za-z0-9]+$/);
        expect(responseBody.token.length).toBeGreaterThan(10);
        expect(responseBody.token.length).toBeLessThan(20);
        expect(responseBody.token.length).toBe(17);
        expect(responseBody.token).toContain("QpwL5tke4Pnpja7X4");
        expect(responseBody.token).not.toContain("invalid_token");

})


test("Register user API testing",async() =>{




    const apicontext= await request.newContext({
        extraHTTPHeaders:{
            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV",

    
            

        },
        // headers:{
        //     'x-api-key': 'reqres-free-v1'
        // }
        }
    );

const resopnse= await apicontext.post('https://reqres.in/api/register',{
    data:{
                    email: 'eve.holt@reqres.in',

                     password: "pistol"

    }
    })



expect(resopnse.status()).toBe(200);

const responseBody = await resopnse.json();

expect(responseBody).toHaveProperty('id');
expect(responseBody).toHaveProperty('token');
console.log(responseBody);
console.log(responseBody.id);
console.log(responseBody.token);        
})




test("Create API context request",async() =>{


    const apicontext= await request.newContext({
          baseURL: 'https://reqres.in/api'

    })

console.log(apicontext)
})


test("Get users",async () =>{

const apicontext= await request.newContext({
   // baseURL: 'https://reqres.in/api',
    extraHTTPHeaders:{
            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"

        }

})

const response= await apicontext.get('https://reqres.in/api/users?page=2')

expect.soft(response.status()).toBe(200)

  const body = await response.json();

  console.log(body);

})


test("bacis autnebtication",async () =>{


    const apicontext= await request.newContext({
         baseURL:'',

        // httpCredentials:{
        //     username:'admin',
        //     password:'admin123'
        // },
        extraHTTPHeaders:{
        
    
        }
        
    })
})


test("sending params",async()=> {


    const response= await request.get('https://reqres.in/api/users',{

        params:{
            page:2

        }
    
    })
})


test("timeout",async ()=>{
const apicontext= await request.newContext({
  
    extraHTTPHeaders:{
        "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
    }
})

const response= await apicontext.get("https://reqres.in/api/users?page=2")

    

console.log("timeout"+ response)


const body= await response.json()

console.log("body"+ body)
const header=response.headers()


expect(header['content-type']).toContain("application/json")
})



//test("read data from json", async () => {


    testdata.forEach((user) => {


        test(`Create user -${user.name}`, async () => {
            const apicontext = await request.newContext({

                extraHTTPHeaders: {
                    "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV",
                    

                },
                
            })

            const response = await apicontext.post("https://reqres.in/api/users", {

                data: {
                    name: user.name,
                    job: user.job

                }
            })

 expect(response.status()).toBe(201)
    const body= await response.json()
    console.log(body)


    expect(body.name).toBe(user.name)
    expect(body.job).toBe(user.job)

        })
    })
   

test.only("Path Parameter",async ({request}) =>{

const userid="2"
   

    const response= await request.get(`https://reqres.in/api/users/${userid}`,{
        
        headers:{
        

            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
            
            
        },

    
        
        
    })
     expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body)
})




test("update user",async ({request}) =>{

const userid=2
   

    const response= await request.put(`https://reqres.in/api/users/${userid}`,{
        headers:{

            "x-api-key": "free_user_3G7TebN7wh9gPjhgrmGw57IWyeV"
        },
        data:{
            name: "venkat",
            job: "QA"
        },
        

    })
     expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body)
})




test.afterEach(async ({page},testInfo) =>{

    if(testInfo===fail){

        await page.screenshot({
            path:`screenshots/${testInfo.status}.png`
        })
    }


})
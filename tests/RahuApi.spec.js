

import { test,expect,request} from '@playwright/test'





// const loginPayLoad={userEmail: "venkatautomation5342@gmail.com", userPassword: "Venkat@9538"}


// // userEmail
// // : 
// // "venkatautomation5342@gmail.com"
// // userPassword
// // : 
// // "Venkat@9538"
// test.beforeAll(async () => {


//     const contextApi = await request.newContext();


//     const APIresponse = await contextApi.post("https://rahulshettyacademy.com/client/#/auth/login",
//         {

//             data: loginPayLoad
//         }

//     )
//     expect(APIresponse.ok()).toBeTruthy();


//     const jsonBody=APIresponse.json()


//     const Token= jsonBody.Token

//     console.log(jsonBody)


//     console.log(Token)




// });




// test.afterAll( async () =>{


//     await request.newContext()
// })


test.only("API Testing" , async ({request}) => {


    //const contextApi = await request.newContext();


    const APIresponse = await request.get("https://rahulshettyacademy.com/client/#/auth/login",


        {


        

        Headers:{

            "userEmail" : "venkatautomation5342@gmail.com", 
            "userPassword": "Venkat@9538",
        }
        
    
    }
    )
    expect(APIresponse.ok()).toBeTruthy();


    const jsonBody= APIresponse.json()


   // console.log("Token"+ jsonBody.Token)

    console.log(jsonBody)


    //console.log(Token)


})
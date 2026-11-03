





import { da } from "@faker-js/faker"
import {test,expect,page} from "@playwright/test"
import { request } from "http"


test("API key validation",async({request}) =>{


    const response= await request.get("https://jsonplaceholder.typicode.com/users")

    console.log(await response.json())
    expect(response.status()).toBe(200)

})




test("Create user validation",async({request}) =>{


    const response= await request.post("https://jsonplaceholder.typicode.com/users",{

        data:{

            name:"venkat",
            job: "tester"

        }
    })

    const body= await response.json()
    console.log(body)
    expect(response.status()).toBe(201)
    
})

test("Update user validation",async({request}) =>{


    const response= await request.put("https://jsonplaceholder.typicode.com/users/1",{

        data:{

            name:"venkata reddy",
            job: "tester updated"

        }
    })

    const body= await response.json()
    console.log(body)


    console.log("status is :",response.status())
    expect(response.status()).toBe(200)
    
})


test("Delete user validation",async({request}) =>{


    const response= await request.put("https://jsonplaceholder.typicode.com/users/1"

       
    )

    const body= await response.json()
    console.log(body)


    console.log("status is :",response.status())
    expect(response.status()).toBe(200)
    
})


test.only("API key more validation",async({request}) =>{


    const response= await request.get("https://jsonplaceholder.typicode.com/users")

    console.log(await response.json())


    const data= await response.json()



    expect(response.status()).toBe(200)


    expect(data.length).toBe(10)

    expect(Array.isArray(data)).toBeTruthy()


    const firstUser= data[0]
    expect(firstUser.id).toBe(1)
    expect(firstUser.name).toBeDefined()
    expect(firstUser.email).toContain("@")

expect(response.headers()['content-type']).toBeDefined()
expect(response.headers()['content-type']).toContain("application/json")


    expect(firstUser.address).toBeDefined()

    expect(firstUser.address.city).toBeDefined()
   //    expect(firstUser.address.pincode).toBeDefined()


    for(const user of data)
    {

        expect(user.id).toBeDefined()
        expect(user.email).toBeDefined()
        expect(user.phone).toBeDefined()
    }


    expect(typeof firstUser.id).toBe("number")
    //expect(typeof firstUser.name).tobe("string")

})




test.only("Interepted API",async ({page}) =>)

    



await page.route('**/products.json',async (route) =>{
console.log("Product API interpted")

const request= route.request()
console.log(request.url())
console.log(request.method())
console.log(request.headers())


await route.continue()


});




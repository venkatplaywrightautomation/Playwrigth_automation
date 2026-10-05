



// documentation  

// https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-UpdateBooking
import {test,expect} from '@playwright/test'
import { error } from 'console'
import { get, request } from 'http'


import testData from "../testdata/Bookings.json"


import fs from 'fs'

test("get a API call",async ({request}) => {


    const response= await request.get("https://jsonplaceholder.typicode.com/posts/1")


    console.log(response)


    const status=  response.status()
    console.log("status is:"+status)


    const statusTExt= response.statusText()

    console.log("status text is:"+ statusTExt)

expect(status).toBe(200)
expect(statusTExt).toBe("OK")

expect(response.ok()).toBeTruthy()

    // const body= await response.body()

    // console.log(body)


    const  json= await response.json()
     console.log(json)
     expect(json).toHaveProperty("userId",1)


        expect(json).toHaveProperty("id",1)
           expect(json).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")

expect(json.body).toContain("molestiae ut ut quas totam")


//     const header= response.headers()
//     console.log(header)

// const headArray= response.headersArray()

// console.log(headArray)


})
    


test("post method",async ({request}) =>{

const authdata={


    "username" : "admin",
    "password" : "password123"
}

    const response=await request.post("https://restful-booker.herokuapp.com/auth",{

headers:{

    "Content-Type": "application/json",

},
data:authdata
     })
  
    const responseData= await response.json()
expect(responseData.token).not.toBeNull()

   

})



test("post method with booking id",async ({request}) =>{

    const bookingData = {
        "firstname": "Venkat",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }

    const response=await request.post("https://restful-booker.herokuapp.com/booking",{

headers:{

    "Content-Type": "application/json",

},
data:bookingData
     })
  

     console.log(response.status())
    console.log(await response.json())


    const responsedata= await response.json()
    console.log(responsedata.bookingid)
  expect(responsedata.bookingid).not.toBeNull()

  expect(responsedata.booking.firstname).toContain("Venkat")

  
  expect(responsedata.booking.firstname).toBe(bookingData.firstname)
  

   expect(responsedata.booking.lastname).toContain("Brown")



   
})


test("Token", async ({ request }) => {



    const authdata =
    {
        "username": "admin",
        "password": "password123"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth", {

        headers: {
            "Content-Type": "application/json"

        },
        data: authdata
    })

    const jsonResponse= await response.json()
    const authToken= jsonResponse.token
    console.log("token is:"+authToken)


const newBookingData={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    const newBookingReponse=await request.post("https://restful-booker.herokuapp.com/booking",{

        headers:{

            "Content-Type":"application/json"
        },
        data:newBookingData
    })
    const newBookingResonsejson= await newBookingReponse.json()

    console.log(await newBookingReponse.json())
    const bookingid=  newBookingResonsejson.bookingid

    console.log("Booking id:"+ bookingid)



    const UpdatedBookingData={
    "firstname" : "Venkat",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
const updatedResponse=await request.put("https://restful-booker.herokuapp.com/booking/"+bookingid,{

    headers:{
        "Content-Type":"application/json",
        "Accept": "application/json",
        "Cookie": "token="+authToken
        
    },
    data:UpdatedBookingData
})


console.log(updatedResponse)

const updatedResponseJson= await updatedResponse.json()

console.log(await updatedResponse.json())
})




test("delete call",async ({request}) =>{

  const authdata =
    {
        "username": "admin",
        "password": "password123"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth", {

        headers: {
            "Content-Type": "application/json"

        },
        data: authdata
    })

    const jsonResponse= await response.json()
    const authToken= jsonResponse.token
    console.log("token is:"+authToken)


const newBookingData={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    const newBookingReponse=await request.post("https://restful-booker.herokuapp.com/booking",{

        headers:{

            "Content-Type":"application/json"
        },
        data:newBookingData
    })
    const newBookingResonsejson= await newBookingReponse.json()

    console.log(await newBookingReponse.json())
    const bookingid=  newBookingResonsejson.bookingid

    console.log("Booking id:"+ bookingid)



    

 const deleteResponse=await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingid,{

    headers:
    {
        "Content-Type":"application/json",
         "Cookie": "token="+authToken

    }

})

const status= await deleteResponse.status();
console.log("Delete status is "+status)
console.log(deleteResponse.status())
console.log(deleteResponse.statusText())

expect(deleteResponse.status()).toBe(201)
expect(deleteResponse.statusText()).toBe("Created")
//const deletejson= await deleteResponse.json()


const getResponse= await request.get("https://restful-booker.herokuapp.com/booking/"+bookingid)

console.log(getResponse.status())
console.log(getResponse.statusText())

expect(getResponse.status()).toBe(404)
expect(getResponse.statusText()).toBe("Not Found")

})


test("Health checkups",async ({request})=>{


    test.setTimeout(0)

while(true){

    const start= Date.now()
    const response= await request.get("https://restful-booker.herokuapp.com/ping")
const end= Date.now()

const duration= end - start



if(duration > 100){
    throw new Error(`API response is very slow ${duration} ms`)

}
else
{
console.log(`Total time taken ${duration} ms`)
}
    const status= response.status()
    console.log(`Response code from API is ${status}`)
expect(status).toBe(201)

}
})



test.only("create booking with external file using JSON file",async ({request}) =>{

const f=fs.readFileSync("./testdata/Bookings.json")

const book=JSON.parse(f)


    const response=await request.post("https://restful-booker.herokuapp.com/booking",{
headers:{

    "Content-Type": "application/json",
    
},


data:book



    })

   // console.log(response)

    const responseData= await response.json()
    console.log("respone data is:"+responseData)

        const bookingid=responseData.bookingid

        
    console.log(bookingid)

    console.log(await response.json())
})



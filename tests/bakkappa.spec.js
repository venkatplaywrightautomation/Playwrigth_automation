


// install faker js    test data generataion
// install luxon 

// npm install @faker-js/faker --save-dev
//npm install --save luxon  to generate custom dates



import {test,expect} from '@playwright/test'



import { stringFormat } from "../Utils/common.js"

//const BookingAPIRequestBody=require(`../testdata/post_dynamic_data.json`)


import BookingAPIRequestBody from  '../testdata/post_dynamic_data.json'

import {faker}  from '@faker-js/faker'

import dateTime from  'luxon'

const {DateTime}=require('luxon')







// test("post method with booking id",async ({request,page}) =>{


//     await page.route("url", route=>{

//         route.fulfill({

//             status:200,
//             body:JSON.stringify({

//                 id:100,
//                 name:"venkat"
//             })


            
//         })
//     })

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



test("post method dynamic data", async ({ request ,page}) => {


const[download]= await promise.all([


     page.waitForEvent('download')
   page.click();

   


]);

await download.saveAs()
    const firstName= faker.person.firstName()

      const lastName= faker.person.lastName()

    const totalPrice= faker.number.int(1000)

    const checkInDate=DateTime.now().toFormat('yyyy-MM-dd')

    const checkOutDate=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd')



    const response = await request.post("https://restful-booker.herokuapp.com/booking", {
        data: {
            "firstname": firstName,
            "lastname": lastName,
            "totalprice": totalPrice,
            "depositpaid": true,
            "bookingdates": {
                "checkin": checkInDate,
                "checkout": checkOutDate
            },
            "additionalneeds": "Breakfast"
        },

        // headers: {

        //     "Content-Type": "application/json",

        // },

    })



    expect(response.ok()).toBeTruthy()


    expect(response.status()).toBe(200)


    const jsonBody= await response.json();
console.log(jsonBody)


expect(jsonBody.booking).toHaveProperty("firstname",firstName)

expect(jsonBody.booking).toHaveProperty("lastname",lastName)


    // console.log(response.status())
    // console.log(await response.json())


    // const responsedata = await response.json()
    // console.log(responsedata.bookingid)
    // expect(responsedata.bookingid).not.toBeNull()

    //   expect(responsedata.booking.firstname).toContain("Venkat")


    //   expect(responsedata.booking.firstname).toBe(bookingData.firstname)


    //    expect(responsedata.booking.lastname).toContain("Brown")

})



test("post method with run time data",async ({request}) =>{

    
    const dynamicRequestbody = stringFormat(JSON.stringify(BookingAPIRequestBody),"venkata reddy","Polaka","Apple")

    const response=await request.post("https://restful-booker.herokuapp.com/booking",{

// headers:{

//     "Content-Type": "application/json",

// },
data:JSON.parse(dynamicRequestbody)
     })
  

     console.log(response.status())
    console.log(await response.json())


//     const responsedata= await response.json()
//     console.log(responsedata.bookingid)
//   expect(responsedata.bookingid).not.toBeNull()

//   expect(responsedata.booking.firstname).toContain("Venkat")

  
//   expect(responsedata.booking.firstname).toBe(bookingData.firstname)
  

//    expect(responsedata.booking.lastname).toContain("Brown")





    expect(response.ok()).toBeTruthy()


    expect(response.status()).toBe(200)


    const jsonBody= await response.json();
console.log(jsonBody)
const bid= jsonBody.bookingid


console.log("booking id:"+bid)


const getAPIResponse=await request.get(`https://restful-booker.herokuapp.com/booking/${bid}`)

console.log(await getAPIResponse.json())

expect(getAPIResponse.ok()).toBeTruthy()
expect(getAPIResponse.status()).toBe(200)
   
})




test.only("query parameter",async ({request}) =>{

    
    const dynamicRequestbody = stringFormat(JSON.stringify(BookingAPIRequestBody),"venkata reddy","Polaka","Apple")

    const response=await request.post("https://restful-booker.herokuapp.com/booking",{

// headers:{

//     "Content-Type": "application/json",

// },
data:JSON.parse(dynamicRequestbody)
     })
  

     console.log(response.status())
    console.log(await response.json())


//     const responsedata= await response.json()
//     console.log(responsedata.bookingid)
//   expect(responsedata.bookingid).not.toBeNull()

//   expect(responsedata.booking.firstname).toContain("Venkat")

  
//   expect(responsedata.booking.firstname).toBe(bookingData.firstname)
  

//    expect(responsedata.booking.lastname).toContain("Brown")





    expect(response.ok()).toBeTruthy()


    expect(response.status()).toBe(200)


    const jsonBody= await response.json();
console.log(jsonBody)
const bid= jsonBody.bookingid


console.log("booking id:"+bid)


const getAPIResponse = await request.get("https://restful-booker.herokuapp.com/booking/",{

    params: {
        "firstname": "Raji",
        "lastname": "Polaka"
    }
})

console.log(await getAPIResponse.json())

expect(getAPIResponse.ok()).toBeTruthy()
expect(getAPIResponse.status()).toBe(200)
   
})
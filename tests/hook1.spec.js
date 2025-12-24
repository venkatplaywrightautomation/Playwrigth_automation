import {test,expect} from '@playwright/test';


test.beforeAll(async () =>{


    console.log("This is before all hook");

})
test.afterAll(async () =>{
    console.log("This is after all hook");

})
test.beforeEach(async () =>{
    console.log("This is before each hook");
})
test.afterEach(async () =>{
    console.log("This is after each hook");
})


test("sample test 1",async ({page})=>{

    console.log("This is sample test 1");
})
test("sample test 2",async ({page})=>{

    console.log("This is sample test 2");
})


// let arr=[1, , 6]

// console.log(arr.length)


// let str= "aaaaabbbbcccc  venkat venkat"

// let count={}

// let s=str.split(" ")

// for(let ch of s)
// {
//     count[ch]=(count[ch] || 0) + 1
// }

// console.log(count)


// let a=1
// let b= a++
// console.log(a)

// console.log("5" - 2)
// console.log("5" + 2)
// console.log("5" + "2")


// let str="this is venkat"

// let result=str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")


// console.log(result)


// var a=20
// var a=30
// console.log(a)

// let c=30
//  c=40

// console.log(c)


// let country="india"


// console.log(country)
//let str= "venkatareddy"

// let count=0

// for(let char of str)
// {
//     count++;
    
// }
// console.log(count)


// for(let i=0;i<str.length;i++)
// {
//     console.log(str[i])
// }


// const person={

//     name:"venkat",
//     age: 39,
//     greet:function(){
// console.log("name is:"+this.name);


//     }
// }

// person.greet()


// function varexample() {

// var x=2
// if(true){
//     var x=4
//     console.log(x)

// }

// console.log(x)
// }
// varexample()

let numbers = [0, 1, 0, 2, 3, 0, 4];

let nonZero = numbers.filter(num => num !== 0);
let zeros = numbers.filter(num => num === 0);

console.log([...nonZero, ...zeros]);


// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// let isEqual = arr1.length === arr2.length;

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//         isEqual = false;
//         break;
//     }
// }

// console.log(isEqual);


// Merge two arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = [...arr1, ...arr2];

// console.log(result);





// let  word="this is venkat this is venkat this is venkat"
// let count= {}

// let words= word.split(" ")

// for(let w of words)
// {

//     count[w]=(count[w] || 0) + 1
// }

// console.log(count)

// let  word="this is venkat this is venkat this is venkat"
// let count= {}

// //let words= word.split(" ")

// for(let w of word)
// {

//     count[w]=(count[w] || 0) + 1
// }

// console.log(count)


// let str="this is javascript"


// let rev= " "

// for(let i=str.length-1;i>=0;i--){

//     rev=rev+str[i]
// }

// console.log(rev)

// let num=1234

// let rev=0

// while(num>0){


//     let digit= num%10
//     rev=rev*10+digit

//     num=Math.floor(num/10)
// }

// console.log(rev)

// let num=[1,2,3,4,5,6,7,8,9,22,0]

//     let max= num[0]

//     for(let i=1;i<num.length;i++)
//         {

//             if(num[i] < max)
//             {
//                 max=num[i]
//             }
//         }
//         console.log(max)
    


// let arr=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]

// let unique=[]

// for(let num of arr)
// {

//     if(!unique.includes(num))
//     {
//         unique.push(num)
//     }
// }
// console.log(unique)


// let count={}

// for(let num of arr)
// {

//     count[num]=(count[num] || 0) + 1
// }

// console.log(count)

// let arr1=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]

// // let unique= new Set([...arr1])

// // console.log(unique)

// let unique= arr1.filter((num,index)=>arr1.indexOf(num)==index)
// console.log(unique)


// let arr=[1,3,4,55,6,33]

// for(let i=0;i<arr.length;i++){

//    for(let j=i+1;j<arr.length;j++)
//    {
//     if(arr[i]>arr[j])
//     {
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//     }
//    }


// }
// console.log(arr)


// let str="venkatareddy"


// let vowels="aeiou"
// let count=0

// for(let char of str){
//     if(vowels.includes(char.toLowerCase())){
//         count++
//     }
// }

// console.log("Number of vowels in the string:", count)


// let num=17
// let isPrime=true

// if(num <2){
//     isPrime=false
// }


// for(let i=2;i<=Math.sqrt(num);i++)
// {
//     if(num % i === 0){
//         isPrime=false
//         break
//     }
// }
// console.log(isPrime)


// for(let i=0;i<=100;i++){

//     let isPrime=true
//     if(i <2){
//         isPrime=false
//     }

//     for(let j=2;j<=Math.sqrt(i);j++)
//     {
//         if(i % j === 0){
//             isPrime=false
//             break
//         }
//     }
//     if(isPrime){
//         console.log(i)
//     }
// }



// let fact=1

// for(let i=1;i<=5;i++)
// {
//     fact=fact*i
// }
// console.log(fact)

// let arr=[1,2,3,4,5,6,7,8,9]
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
//     sum=sum+arr[i]
// }
// console.log(sum)



// let a=0
// let b=1
// let next;

// for(let i=1;i<10;i++)
// {
//     console.log(a)
//     next=a+b
//     a=b
//     b=next
// }
// console.log("Fibonacci series generated successfully")

// let arr = [1, 2, 4, 6, 8,99,100];



// for(let i=0;i<=100;i++){

//     if(!arr.includes(i))
//     {

//         console.log(i)
//     }
// }



// let str="thisis!@#$%345123"
// //let result= str.replaceAll(/[a-zA-Z0-9]/g,"")

// let result= str.replace(/\D/g,"")

// console.log(result)

// let num = 123456;

// let count = 0;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// console.log(count);

// let num=12345
// let sum=0


// while(num>0){

//     sum=sum+num%10
//     num=Math.floor(num/10)
// }

// console.log(sum)

// let num=221

// if(num % 2 === 0){
//     console.log("Even number")
// }
// else{
//     console.log("Odd number")
// }


// let a = 12
// let b = 10;


// [a, b] = [b, a];
// console.log("a:",a)
// console.log("b:",b)

// let str= "this is venkat this"

// let result=""

// let words= str.split(" ")

// for(let char of words){

//     if(!result.includes(char)){
//         result=result+char
//     }
// }
// console.log(result)

// let str = "JavaScript is easy";

// let result = str.split(" ").reverse().join(" ");

// console.log(result);

// let str = "JavaScript is easy";


// // let re=str.trim().split(/\s+/, 3)

// // console.log(re.length)

// let re=str.replaceAll(" ", "")
// console.log(re)


let arr=[0,2,0,4,5,0,44]


let nonzeros= arr.filter(num => num !== 0)

let zero= arr.filter(num => num === 0)

let re= nonzeros.concat(zero)

console.log(re)
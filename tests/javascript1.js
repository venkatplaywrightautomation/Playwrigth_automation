

// let arr=[1, , 6]

const { ar, fakerEN_US, fa } = require("@faker-js/faker")
const { join } = require("path")

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
// let b= a--
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
// let str= "venkatareddy"

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
//  varexample()

// let numbers = [0, 1, 0, 2, 3, 0, 4];

// let nonZero = numbers.filter(num => num !== 0);
// let zeros = numbers.filter(num => num === 0);

// console.log([...nonZero, ...zeros]);


// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// let isEqual = arr1.length === arr2.length;

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//         isEqual = false;
//         break;
//     }
// }

//console.log(isEqual);


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



// let arr1=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]

// let unique=[]

// for(let num of arr1)
// {

//     if(!unique.includes(num))
//     {
//         unique.push(num)
//     }
// }
// console.log("Unique values"+unique)


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


// let re=str.trim().split(/\s+/, 3)

// console.log(re.length)

// let re=str.replaceAll(" ", "")
// console.log(re)


// let arr=[0,2,0,4,5,0,44]


// let nonzeros= arr.filter(num => num !== 0)

// let zero= arr.filter(num => num === 0)

// let re= nonzeros.concat(zero)

// console.log(re)


// function add(){

//     var  x=1

//     if(true){
//         var  x=2
//         console.log("inside if conditon"+ x)
//     }


//     console.log("outside loop",x)
// }


// console.log(add())


// console.log("hoisted")
// console.log(a)


// var a= "venkat"


// const numbers = [1, 2, 3];

// const result = numbers.map(n => n * 2);
// console.log(result); // [2, 4, 6]

// numbers.forEach(n => console.log(n));


// const numbers= [10,30,20,40,50]


// const reverse= [...numbers].reverse()

// console.log(reverse)

// console.log(numbers)


// const cart= [


//     {

//         name: "keyword",price: 100 
//     },
//     {
//         name: "monitor", price:4000
//     }
// ];

// const total= cart.reduce((sum,product) =>{

// return sum + product.price
// },0)


// console.log(total)






// const students= [


//     {


//         name: "venkat", marks: 45 
//     },
//       {


//         name: "raji", marks: 30
//     },


//       {


//         name: "Amma", marks: 50
//     },
// ]




// const grade= students.filter(student =>student.marks >=45)


// console.log(grade)


// const arr1= [10,20,30,40]


// const arr2= [20,40,50]


// const result= arr1.filter(num => arr2.includes(num))


// console.log(result)




// const numbers=[10,20,30,20,40,50]


// const seen= new Set()

// const duplicate= numbers.find(num =>{

// if(seen.has(num))
// {
//     return true
// }
// seen.add(num)

// })


// console.log(duplicate)



// const values=[10,false,0,"hello",null,25,"",undefined]


// const result= values.filter(num => Boolean(num))


// console.log(result)


// const numbers= [10,20,30,40,50]


// const sum= numbers.reduce((total,current) => total + current,0)

// console.log(sum)

// const avg= sum / numbers.length

// console.log("Average"+ avg)

// const re= numbers.filter(num => num >avg)

// console.log(re)



// const numbers= [10,20,30,40,50]


// const max= Math.max(...numbers)

// const min= Math.min(...numbers)


// console.log(max)

// console.log(min)


// const numers= [1,2,3,7,4]

// const len= numers.length

// console.log("Length of "+ len)

// let rev= ""

// for(let i= len - 1 ;i>= 0;i--){

//     rev= rev + numers[i]
// }

// console.log(rev)

//const result= [...numers].reverse()

//const result= numers.reverse()

//console.log(result)





// const numers= [1,2,3,7,4]
// const rev=[]

// for(let i=numers.length -1;i>= 0;i--){

//     rev.push(numers[i])
// }


// console.log(rev)


// let  num= 2345;




// let rev =0

// let digit;

// while(num > 0){

//     digit= num % 10;

//     rev= rev * 10 + digit

//     num= Math.floor(num /10)

// }


// console.log(rev)


// const str= "venkata reddy"

// let count= {}

// for(const c of str){

// count[c]= (count[c] || 0) + 1

// }
// console.log(count)


// const str= "venkata reddy venkata"


// let s= str.split(" ")
// let count= {}

// for(const c of s){

// count[c]= (count[c] || 0) + 1

// }
// console.log(count)

// let arr= [1,2,3,4]

// let sum= 0


// for(let i=0;i<arr.length;i++)
// [

//     sum= sum+ arr[i]
// ]


// console.log(sum)

// let arr1= [10,20,30,40]
// let arr2= [10,50,20,60]


// let result= arr1.filter((num =>!arr2.includes(num)))


// console.log(result)

// const str= "venkata reddy"

// const arr=[1,2,3,4,5,6]

// for(let i=0;i<str.length;i++){


//     console.log(str[i])
// }



// const arr= [1,2,3,4]

// for(let i=arr.length - 1;i>=0;i-- ){


//     console.log(arr[i])
// }


// let arr= [1,2,,3,4,5]
// let max= arr[0]

// for(let i=1;i<=arr.length;i++){
// if(arr[i] > 0)

// max= arr[i]
// }

// console.log(max)

// let arr= [10,20,30,40]

// let sum=0

// for(let i=0;i<arr.length;i++){


//     sum= sum+ arr[i]
// }


// console.log(sum)

// let avg= sum / arr.length

// console.log(avg)


//let arr= [1,2,3,4,5,6,7,8,9]



// for(let i= 0;i<arr.length;i++){

//     if(arr[i] % 2 !==0)
//     {
//         console.log(arr[i])
//     }
// }


// console.log(arr.length)


// const arr = [10, 20, 30, 40, 50];

// const num = 30;

// if (arr.includes(num)) {
//     console.log("Element found");
// } else {
//     console.log("Element not found");
// }


// let arr=[1,2,3,4,5,2,3]


// // let res= [... new Set(arr)]


// // console.log(res)

// const result=arr.filter((Value,indx) => arr.indexOf(Value) !== indx)


// console.log(result)


// let arr= [1,2,3,4,5]

// let max= arr[0]


// for(let i=0;i<arr.length;i++){


//     if(arr[i] >max)
//     {
//         max= arr[i]
//     }
// }


// console.log(max)

// let arr= [10,20,3,4,60,5]


// let largest= arr[0]

// let secondlargest= arr[0]

// for(let num of arr){
//     if(num >largest){

//         secondlargest=largest
//         largest=num
//     }
//    else if(num > secondlargest && num < largest)
//     secondlargest=num

// }


// console.log(largest)
// console.log(secondlargest)



// let arr=[1,4,3,2]
// const resu=arr.sort((a,b) => b - a)


// console.log(resu)

// console.log(resu[1])

// const arr = [10, 50, 20, 80, 30,,50];

// const unique = [...new Set(arr)];


// console.log("Unique"+unique)
// unique.sort((a, b) => b - a);

// console.log(unique[1]);


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = [...arr1, ...arr2];

// console.log(result);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// const common = arr1.filter(value => !arr2.includes(value));

// console.log(common);

// const arr = [1, 2, 2, 3, 3, 3, 4];

// const count = {};

// for (const value of arr) {
//     count[value] = (count[value] || 0) + 1;
// }

// console.log(count);

// const arr= [1,0,4,5,0,5,7]


// const res= [
//     ... arr.filter((value) =>value !==0),

//     ... arr.filter((value) => value === 0),

//     //  ... arr.filter((value) =>value !==0),



// ]


// console.log(res)


// let arr= [1,2,4,5]

// let n=5
// let exp= (n *(n + 1)) / 2

// let  act=arr.reduce((sum,value) => sum + value,0)

// let res= exp - act


// console.log(res)

// const arr = [1, 2, 3, 4, 5];

// const product = arr.reduce((result, value) => result * value, 1);

// console.log(product);

// const  arr= [1,2,3,4,5,2,3]

// const seen= new Set()


// let repeted;
// for(const num of arr)
// {

//     if(seen.has(num)){

//         repeted=num
//         break
//     }

// seen.add(num)


// }

// console.log(repeted)



// let num=12345

// let rev= 0
// let digit;

// while(num > 0){

// digit= num % 10

// rev= rev* 10 + digit

// num= Math.floor(num / 10)


// }

// console.log(rev)

// if(num ===rev){


//     console.log("Polindrum")
// }

// else{

//     console.log("not")
// }
// let str= "madam"

// let rev= ""

// for(let i= str.length -1 ;i>= 0;i--){


//     rev=rev + str[i]
// }

// console.log(rev)

// if(str === rev){


//     console.log("Yes")
// }

// else{

//     console.log("Not")
// }


// let num=18

// let isprime= true

// if(num < 2){

//     isprime=false
// }

// for(let i=2 ;i<=Math.sqrt(num);i++)
// {


//     if(num % i === 0){

//         isprime=false
//         break
//     }


// }
// console.log(isprime)

// let num=100

// for (let i = 0; i <= num; i++) {



//     let isprime = true

//     if (num < 2) {

//         isprime = false
//     }


//     for (let j = 2; j < Math.sqrt(i); j++) {
//         if (i % j === 0) {

//             isprime = false
//             break
//         }

//     }
// if(isprime)
// {

//     console.log(i)
// }
// }


// let num1= [1,2,3,4,5]

// const resu=num1.map((n) =>n*2)


// console.log(resu)

// let a=20;b=30;c="*"


// let result;

// switch(c){

//     case "+":
//         result= a + b
//         console.log(result)
//         break;
//         case "*":
//             result=a*b

//             console.log(result)
// }


// let num= [1,2,3,4,5,6]


// let max= num[0]

// let min= num[0]


// for(let c  of num ){


//     if(c > max)
//         max=c

//     if(c < min)
//         min=c
// }


// console.log(max)
// console.log(min)





// let fact=1

// let num=5

// for(let i=1;i<=num;i++){


//     fact=fact * i
// }

// console.log(fact)


// let n=5


// for(let i=1;i<=10;i++){



//     console.log(`${n}  {i}= ${n * i}`)
// }


// let num=12345


// let sum=0

// while(num > 0)
// {
// sum= sum + num % 10

// num= Math.floor(num / 10)

// }

// console.log(sum)


// let a= 10;

// let b=30;

// [a, b] = [b, a];


// console.log(a)


// console.log(b)



// let year= 1985

// const leap= year % 400=== 0  || (year % 4===0 && year % 100 !==0)

// if(leap){

//     console.log(year,"is a leap year")
    
// }

// else{

//     console.log(year, "in snot a leap year")
// }



// let a= 30
// let b=45
// let c=70

// let largerst= a

// if(b > largerst)

//     largerst=b

//     if( c > largerst)
//         largerst=c

//     console.log(largerst)


// const n=8

// if (n % 2===0)
// {

//     console.log("even")
// }
// else{
//     console.log("odd")
// }


// let a= 0
// let b=1

// let c

// for(let i=1;i<10;i++){

//     c= a + b
//     console.log(c)

//     a=b
//     b=c
// }


// let s= "madam"


// // let rev= s.split("").reverse().join("")

// // console.log(rev)

// let rev= [...s].reverse().join("")

// if(s ===  rev){

//     console.log("polindrum")

// }

//     else {
//         console.log("not")
//     }


// let str= "this is venkat"

// let count=0

// for(const ch of str.toLocaleLowerCase()){

//     if("aeiou".includes(ch))
//     {
//         count++
//     }
// }

// console.log(count)


// let str= "this is javascript"

// let res= str.split(" ").map((w) => w[0].toUpperCase() + w.slice(1)).join()

// console.log(res)


// function fact(n)
// {

//     if(n<=1)
//     {
//         return 1
//     }
//     return n * fact(n - 1)
// }

// console.log(fact(5))


// let num= [2,3,4,5,6,8,,99,77,88]


// let count=0
// for(let i=0;i<=num.length;i++){


//    if(num[i] % 2 ===0)
   
//     {

// count++
// }
// }

// console.log(count)


// let str= "this is js"

// let count=0

// for(let char of str)
// {

//     if(char >="a" && char <= "z" && !"aeiou".includes(char))
//         count++
// }

// console.log(count)


// let str="javascriptj"

// let res= [... new Set(str)].join("")

// console.log(res)

// let str = "programming";
// let result = {};

// for (let char of str) {
//     result[char] = (result[char] || 0) + 1;
// }

// console.log(result )


// for (let char in result) {
//     if (result[char] > 1) {
//         console.log(char, result[char]);
//     }
// }


// let str = "programming";
// let seen = new Set();

// for (let char of str) {
//     if (seen.has(char)) {
//         console.log(char);
//         break;
//     }

//     seen.add(char);
// }


// let str= "java"

// let res= str.charAt(0).toUpperCase()+ str.slice(1)


// console.log(res)

// let str = "I love JavaScript";

// let result = str.split(" ").reverse().join(" ");

// console.log(result);

// let res= str.split(" ").map((w) => w.split("").reverse().join("")).join(" ")


// console.log(res)


// let str="venkata reddy"

// let res= str.replace(/\s/g,"")

// console.log(res)

// let str= " this is venkat reddy p "

// let res= str.split(/\s+/).length

// console.log(res)


// let str= "i love javascript programming"


// let words= str.split(" ")

// let longest=""

// for(let word of words)
// {

//     if(word.length > longest.length)
//     {

//         longest=word
//     }
// }

// console.log(longest)


// let str= "i love java script"


// let words= str.split(" ")


//     let shortest= words[0]

//     for(let word of words)
//     {

//         if(word.length < shortest.length){

//             shortest=word
//         }
//     }

//     console.log(shortest)


//let str= "venkat"


// let count=0

// let target= "a"

// for(let char of str)
// {

//     if(char === target)
//     {
// count++

//     }
// }


// console.log(count)

// let str="3456venkat@344$%"


// let res=str.replaceAll(/[^0-9]/g,"")

// console.log(res)


// let str= "venkatareddy this "

// const res=str.split("").filter((Value,indes) => str.indexOf(Value) === indes).join("")
// console.log(res)

// let str= "thisisjava"
// let result=""

// for(let i=0;i<str.length;i++)
// {

//     if(!result.includes(str[i]))
//     {
//         result=result + str[i]
//     }
// }

// console.log(result)

// for(let char of str){

//     if(!result.includes(char))
// result=result +char
// }

// console.log(result)



// let str= "this is javascript"

// for(let i=0;i<str.length;i++)

//     {

//     for(let j=i+1;j<str.length;j++){
// if(str[i] === str[j])
// {
//     console.log(str[i])
//     break
// }

//     }
//     }


// let str = "programming";
// let charCount = {};

// for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
// }

// for (let char in charCount) {
//     if (charCount[char] > 1) {
//         console.log(char, "=", charCount[char]);
//     }
// }



// let x=10

// if(true)
// {
//     let x=20;
//     console.log(x)
// }

// console.log(x)


// for(let i=1;i<=3;i++)
// {

//     console.log(i)
// }


// const arr=[1,2,3]

// console.log(arr.push(4))

// console.log(arr)


// console.log(1 + "2"+ 3)

// console.log(1+2+"3")


let arr=[10,20,30,40,50,-4,0]

// let num=30


// let res= arr.filter(n => n > num)

// console.log(res)


// let pos=0
// let neg=0
// let zero=0


// for(let i=0;i<arr.length;i++){


//     if(arr[i] > 0)
//     {
//         pos++
//     }
//     else if  
//         (arr[i] < 0){
//         neg++

//     }
//     else
//     {
//         zero++
//     }
// }


// console.log(pos)
// console.log(neg)

// console.log(zero)


// let frutis=["banana","apple"]

// frutis.forEach((fruit,inde)=>{

//     console.log(inde,fruit)
// })


let arr2=[1,2,3,4]
// arr2.forEach((num) =>{

//     console.log(num + 5)
// })



// arr2.forEach((num,ind,arr) =>{

//     arr[ind]=num * 5;
// })

// console.log(arr2)


// arr2.map((num) =>{

//     console.log(num *5)
// } )


// const user = {
//     name: "Venkat",
//     age: 25,
//     city: "Hyderabad"
// };


// for(const u in user){


//     console.log(u,user[u])
// }



// let arr1= [1,2,3,4,6,9]

// let n=arr1.length -1

// let sum=0
// let expsum= (n *(n + 1)) / 2

// for(let c of arr1)
// {
//     sum= sum  + c
// }
// console.log("Sum"+ sum)
// let missingNum= expsum - sum


// console.log(missingNum)

// let arr1 = [1, 2, 3, 4,5,8];

// for (let i = 1; i <= arr1.length + 1; i++) {
//   if (!arr.includes(i)) {
//     console.log("Missing Number:", i);
//     break;
//   }
// }

// let arr1 = [ 2, 4, 100];
// let max = Math.max(...arr1);
// console.log(max)
// let missing = [];

// for (let i = 1; i <= max; i++) {
//   if (!arr1.includes(i)) {
//     missing.push(i);
//   }
// }

// console.log("Missing Numbers:", missing);
// //normal function
// function add (num1:number,num2:number):number{
//     return num1+num2
// }

// add(2,2)

// //default parameter
// function add1 (num1:number,num2:number=40):number{
//     return num1+num2
// }

// add1(2)

// //arrow function

// const addNumber=(num1:number,num2:number):number=>num1+num2;

// const arr=[1,4,6];
// const newArr=arr.map((num:number)=>num*num)

// //spread operator

// const myFriends=["chandler","joey","rachel"];
// const newFriends=["max","sam","hanks"];
// myFriends.push(...newFriends);
// //console.log(myFriends);

// //---rest parameter


// /* const greetFriends=(friend1:string,friend2:string,friend3:string):void=>
// console.log(`hi ${friend1}/n hi ${friend2}/n hi ${friend3}`);

// greetFriends("rahim","kashem","abul"); */

// const greetFriends=(...friends:String[]):void=> friends.forEach((friend)=>
// console.log(`hi ${friend}`));

// greetFriends("rahim","kashem","abul","labib");


// //array and object destructuring

// const [BestFriends]=myFriends;

// const myBestFriends ={
//     name:"abul kashem",
//     age:34
// }

// const {name:fullName}=myBestFriends;//name alias=> name:fullName

// console.log(fullName);

// //object in function
// const person:{
//     name:string,
//     age:number,
//     balance:number,
//     getBalance(ele:number):void//:string//:number 
// }={
//     name:"nuzhat",
//     age:25,
//     balance:5,
//     getBalance(ele:number){
//           // return this.balance+ele; // for number return type
//          // return`my balance is ${this.balance+ele}`;//for string return type
//          console.log(`my balance is ${this.balance+ele}`);
//     },

// }
"use strict";
// //typeof guard
// type alphaNumeric=string|number;
// function add(param1:alphaNumeric,param2:alphaNumeric):alphaNumeric{
//     if(typeof param1==="number"&& typeof param2==="number"){
//         return param1+param2;
//     }
//     else{
//         return param1.toString()+param2.toString()
//     }
// }
// add("1","2");
// add(1,2)
// //type in guard
// type normalUser={
//     name:string
// }
// type adminUser={
//     name:string,
//     role:"admin"
// }
// function getUser(user:normalUser|adminUser):string{
//  if("role" in user){
//     return `iam a adminUser and my role is ${user.role}`
//  }
//  else{
//     return`iam a normalUser`;
//  }
// }
// const normalUser1:normalUser={name:"Mr Allu"};
// const adminUser1:adminUser={name:"Mr GAllu",role:"admin"};
// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));
// //instance of guard
// class animal{
//     name:string;
//     species:string;
//     constructor(  name:string,species:string){
//         this.name=name;
//         this.species=species;
//     }
//     makeSound(){
//         console.log("iam making sound");
//     }
// }
// class dog extends animal{
//     constructor(  name:string,species:string){
//       super(name,species)
//     }
//     makeBark(){
//         console.log("iam barking");
//     }
// }
// class cat extends animal{
//     constructor(  name:string,species:string){
//       super(name,species)
//     }
//     makeMew(){
//         console.log("iam mewing");
//     }
// }
// //isDog
// function isDog(Animal:animal):Animal is dog{
//  return Animal instanceof dog
// }
// //isCat
// function isCat(Animal:animal):Animal is cat{
//  return Animal instanceof cat
// }
// //getAnimal
// function getAnimal(Animal:animal){
//     if(isDog(Animal)){
//         Animal.makeBark()
//     }
//     else if(isCat(Animal)){
//       Animal.makeMew()
//     }
//     else{
//         Animal.makeSound()
//     }
// }
// const animal1= new dog("german bhai","dog");
// const animal2= new cat("persian bhai","cat");
// getAnimal(animal2);//call

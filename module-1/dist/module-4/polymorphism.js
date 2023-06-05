"use strict";
// class person{
//     takeNap():void{
//         console.log("iam sleeping about 8 hrs per day");
//     }
// }
// class student extends person {
//     takeNap():void{
//         console.log("iam sleeping about 10 hrs per day");
//     }
// }
// class developer extends person {
//     takeNap():void{
//         console.log("iam sleeping about 5 hrs per day");
//     }
// }
// function getTakeSleep(param:person){
//    param.takeNap()
// }
// const person1 = new person();
// const person2 = new student();
// const person3 = new developer();
// getTakeSleep(person1)
// getTakeSleep(person2)
// getTakeSleep(person3)
// //---------------2----------------
// class shape {
//     getArea():number{
//      return 0;
//     }
// }
// class circle extends shape{
//     radius:number;
//     constructor( radius:number){
//         super();
//         this.radius=radius;
//     }
//     getArea(): number {
//         return Math.PI*this.radius*this.radius;
//     }
// }
// class rectangular extends shape{
//     height:number;
//     width:number;
//     constructor(height:number,width:number ){
//         super();
//         this.height=height;
//         this.width=width;
//     }
//     getArea(): number {
//         return this.height*this.width;
//     }
// }
// function getAreaShape(param:shape){
//    console.log( param.getArea());
// }
// getAreaShape(new circle(2));
// getAreaShape(new rectangular(5,5));

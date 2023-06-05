"use strict";
// //type alias
// type CrushType={
//     name:string,
//     age?:number,
//     profession:string,
//     address:string
// }
// const crush1:CrushType={
//   name:"jannat",
//   age:22,
//   profession:"business",
//   address:"mexico"
// }
// const crush2:CrushType={
//   name:"lamima",
//   profession:"housewife",
//   address:"spain"
// }
// type IsMarriedType=boolean;
// const isMarried:IsMarriedType=false;
// type CourseType =string;
// const courseName:CourseType="Next Level Course";
// //function operation type
// type OperationType=(x:number,y:number)=>number;
// const calculate=(num1:number,  //10
//                  num2:number,  //20
//                  operation:OperationType   //(x:number,y:number)=>number //(10,20)=>(10+20)=30
//                   )=>{
//                     operation(num1,num2)
//                   }
//             calculate(10,20,(x,y)=>x+y);      
//             calculate(10,20,(x,y)=>x-y);      
//             calculate(10,20,(x,y)=>x*y);      
//             calculate(10,20,(x,y)=>x/y);      
//             console.log(calculate);

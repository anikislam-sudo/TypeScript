// //--conditional

// type a1 = string;
// type a3 = undefined;
// type a4 = number;


// type a2 = a1 extends string ? string : null;

// ///---nested conditional

// type d = a1 extends null 
//     ? null
//     : a3 extends string
//     ? string
//     : a4 extends null
//     ? null
//     : never 

//     type sheikh ={
//         wife1:string,
//         wife2: string
//     }
//     //type A = keyof sheikh;// wife1|wife2
//                             // "wife3" extends "wife1"|"wife2"
//     type checkProperty <T,K>=K extends keyof T ? true:false

//     type checkWife = checkProperty<sheikh,"wife2">

//     //check korbe ei sheikh type a wife3 ase ki nh ? true : false

//     //matha kharap example

//     type bandhubi = "rachel"|"mitu"|"sporshia"

//     type removeBandhubi<T,K> = T extends K ? never :T;

//     type currentBandhubi = removeBandhubi<bandhubi,"sporshia">


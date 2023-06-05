// interface Person {
//  name:string,
//  email:string,
//  contactNo:number
// }

// //pick

//  type Contact = Pick <Person,"email"|"name">

//  //omit

//  type Name = Omit <Person,"email"|"contactNo">

//  //partial & required
//  type optional = Partial <Person>

// type requiredProps = Required<Person>

// const person:Person={
// name:"cfvf",
//  email:"adfv@gmail.com",
//  contactNo:134344
// }

// //record type

// //index  signature
// // type myObj ={
// //  [key:string]:string
// // }

// // record

// type myObj=Record<"a"|"b"|"c",string>
// const obj:myObj={
//     a:"1",
//     b:"2",
//     c:"3"
// }


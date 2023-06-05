// /////nullable--------/////

// const searchName=(value:string|null)=>{
//     if(value===null){
//         console.log("there is no exist");
//     }
//     else{
//         console.log("searching...");
//     }
// }

// searchName(null);

// ////-----unknown type----------////
// const speedMyCar=(speed:unknown)=>{
//     if(typeof speed ==="number"){
//      const convertedSpeed=(speed*1000)/3600;
//      console.log(`my speed is ${convertedSpeed}`);
//     }
//     else if(typeof speed ==="string"){
//         const[value,unit]=speed.split(' ');
//         const convertedSpeed=(parseFloat(value)*1000)/3600;
//         console.log(`my speed is ${convertedSpeed}`);
//     }
//     else{
//         console.log("there is wrong type");
//     }
// }


// speedMyCar(10);
// speedMyCar("10 kmh^-1")
// speedMyCar(true);


// /////----never--------////////


// function throwError (message:string):never{
//     throw new Error (message);
    
// }

// throwError("error hoise");

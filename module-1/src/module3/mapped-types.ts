type areaNumber ={
    height:number,
    width:number
}
type volume ={
    height:number,
    width:number,
    depth:number
}
type Area<T>={
   // [key in keyof volume ]:volume[key]//volume[height]=>number//loop
   readonly[key in keyof T]:T[key]//we cant change=>readonly
}

const area1:Area<{height:string;width:string}> = ({height:"persian",width:"rahim"})
 area1.height

 type areaString={
    height:string,
    width:string
}
type readOnlyArea ={
    readonly height:number,
    readonly width:number
}

const reactangularArea : readOnlyArea={
    height:10,
    width:12
}
reactangularArea.width;

type A = areaNumber["height"];//lookup types
type b = keyof areaNumber;

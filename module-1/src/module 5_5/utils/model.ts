//properties
interface Model<Tdata,Tmethods>{
data:Tdata,
methods:Tmethods
}
interface IUser{
    firstName:string,
    lastName:string
}
//methods
interface IMethods{
   fullName():string;
}

type model=Model<IUser,IMethods>

class Person implements model{
    data:IUser;
    methods: IMethods;
    constructor(firstName:string,lastName:string){
        this.data={firstName,lastName}
       this.methods={ 
            fullName: ()=>`${firstName} ${lastName}`
        
    }
}
}

const Person1=new Person("abul","hossain");
console.log( Person1.methods.fullName());
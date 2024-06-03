
// class User {
//     public email: string 
//     private name : string 
//     readonly city : string = 'jaipur'
//     constructor(email:string , name: string ){
//         this.email  = email;
//         this.name  = name ;
    
//     }
// }



class User {
    protected _courseCount = 1;

    readonly city : string = 'jaipur'
    constructor(public email:string ,
        public name: string ,
    ){
    }

    private deleteToken(){
        console.log("token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }


    // setter cannot have a type for a this method
    set courseCount(courseNum) {
        if(courseNum<=1){
            throw new Error('coure count SHould bemroe than one')
        }
        this._courseCount = courseNum
    }

}



const hitesh = new User( "sdfd" , "dfdfdf" )



// protected variable used in the class defined and any other class which inherits the other class

class SubUser extends User {
    isFamily : boolean = true 
    changeCoursCount(){
        this._courseCount = 4
    }
}


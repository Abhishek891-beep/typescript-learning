"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'jaipur';
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter cannot have a type for a this method
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('coure count SHould bemroe than one');
        }
        this._courseCount = courseNum;
    }
}
const hitesh = new User("sdfd", "dfdfdf");
// protected variable used in the class defined and any other class which inherits the other class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCoursCount() {
        this._courseCount = 4;
    }
}

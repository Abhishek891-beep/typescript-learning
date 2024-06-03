// const User = {
//     name : "hitesh" ,
//     email : "slkjd@sldl.com" ,
//     isActive : true 
// }
// function createUser({name : string , isPaid : boolean ,}){
// }
// let newUser = {name : "hitesh" , isPaid:false  , email:"dlkl@lkd.com"}
// createUser(newUser)








// type User = {
//     name : String ;
//     email: String ;
//     isActive : Boolean;
// }

// function createUserr(user : User): User{
//     return {name : "" , email: "" ,isActive: true}
// }

// createUserr({name : "dlkd" , email: "dllkdj" , isActive : true})

// ==========================================


type User = {
    readonly _id : String
    name : String; 
    email : String ;
    isActive : Boolean ;
    creditCardDetails?: number
}

let myUser : User = {
    _id : "23444",
    name : "h",
    email :"ldkd",
    isActive :  false
}


type cardNumber = {
    cardnumber :string 
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardDate & cardNumber & {
    cvv : number 
}


myUser.email = "hddk"
// myUser._id = 'ldkflk'











export {}

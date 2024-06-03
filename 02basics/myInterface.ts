
interface  User{
    readonly dbId ?: number
    email: String ,
    userId : number,
    googleId?: string ,
    // startTrial : ()=> string
    startTrial(): string ,
    getCoupon(name : String  , value :number ):number

}

interface Admin extends User {
    role : "admin" | "ta" | "learner"
}




// Reopening of interface 
interface User {
    github : string 
}



const user : User = {email : "Lkd" , userId : 34344 , 
    startTrial: ()=> {return 'trailstarted' } , github : "ld" , getCoupon: (name : "hitesh")=> {return 10}}


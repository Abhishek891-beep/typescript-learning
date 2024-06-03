
let score:number|string = 33 

score = 44
score = "55"

type User = {
    name : string ;
    id : number 
}

type Admin = {
    username : string ;
    id : number 
}

let hitesh :User | Admin = {name : 'hitesh' , id : 90 , }

hitesh = {username : "hc" ,id:90}

const data3 : (string | number | boolean)[] = ["1","2", 3 , true]

// let pi:3.14 = 3.14 

let seatAllotment : "aisle" | "middle" | "window"


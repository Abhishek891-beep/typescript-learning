
// function addTwo(num:number){
//     return "hello"
// }

// // typescript 


// function getUpper(val:string){
//     return val.toUpperCase()
// }

// function signUpUser(name:string , email:string ,isPaid:boolean){


// }


// signUpUser("sdlk" ,"343" , true)

// let logginUser = (email:string , name:string , isPaid:boolean= false)=>{}


// logginUser("hites" ,"ss@.com")

// getUpper("hitesh")
// addTwo(4)


function getValue(myVal: number){
    if (myVal > 5 ){
        return true
    }
    return "200 OK"
}

const getHello = ( s: string):string => {
    return ""
}


const heros = ['thor' , 'spiderman', 'ironman' ]

heros.map((hero)=> {
    return `hero is ${hero}`
})

// here inferences is happening


const heross = [1 ,2 , 3 ]

heross.map((hero): string => {
    return `hero is ${hero}`
})
// better syntax 

function cosnsoleError(errMsg:string):void{
    console.log(errMsg);
    return ;
}

function handleError(errMsg:string):never{
    throw new Error(errMsg)
}












export {}
// whole idea is to stricter type so that errors would be very less
// any is a problem here , inference in function is not gud
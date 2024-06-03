interface TakePhoto {
    cameraMode : string ,
    filter : string , 
    burst : number 
}

interface story {

    createStory():void
        
    
}

class Instagram implements TakePhoto   , story{
    public cameraMode: string ;
    public filter: string ;
    public burst: number


    constructor(cameraMode: string, filter: string, burst: number){
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }

    createStory(): void {
        console.log('hello world');
    }


}


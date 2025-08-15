interface Particle{
    px:number,
    py:number,
    iSize:number,
    size:number,
    iLife:number,
    life:number,
    dir:number,
    iSpeed:number,
    speed:number,
}
class ParticleSystem{
    can:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    particleSizeRange:[min:number,max:number]=[7,10];
    particleLifeRange:[min:number,max:number]=[2,5];
    particleSpeedRange:[min:number,max:number]=[5,10];
    particleDirRange:[min:number,max:number]=[0,45];

    constructor(can:HTMLCanvasElement,ctx:CanvasRenderingContext2D){
        this.can=can;
        this.ctx=ctx;
    }

    reset(){
        this.initParticles();
    }

    initParticles(){

    }

    render(){

    }

    update(){

    }

}
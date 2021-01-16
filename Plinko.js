class Plinko {
    constructor(x,y){
        
        this.body = Bodies.circle(x,y,10,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        circle(pos.x,pos.y,20);
    }
}
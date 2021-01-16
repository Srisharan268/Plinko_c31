class Particle {
    constructor(x,y,radius){
      var options = {
        restitution:0.3
      }
        
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(this.color);
        circle(pos.x,pos.y,20);
    }
}
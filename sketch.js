const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,20);

  for(var i=0;i<=width;i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
  }

  for(var i=40;i<width;i=i+50){
    plinkos.push(new Plinko(i,75));
  }

  for(var i=15;i<width;i=i+50){
    plinkos.push(new Plinko(i,175));
  }

  for(var i=40;i<width;i=i+50){
    plinkos.push(new Plinko(i,275));
  }

  for(var i=15;i<width;i=i+50){
    plinkos.push(new Plinko(i,375));
  }

  

}

function draw() {
  background("lightBlue");  
  Engine.update(engine);

  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }


  ground.display();

  drawSprites();
}
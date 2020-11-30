const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, object;
var paperball,ground,dustbin;

function setup() {
    createCanvas(1400, 300);
    engine = Engine.create();
    world = engine.world;
   

    paperball=new paper(50,0,15);
   ground=new Ground(700,280,1400,10);

    dustbin1 = new dustbinclass(1300,270,170,13);	
	dustbin2 = new dustbinclass(1390,240,12,72);
	dustbin3 = new dustbinclass(1210,240,15,72);	
    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background(0);
    
    paperball.display();
    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
}

function keyPressed(){

   if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:14.8,y:-10})
   }
}
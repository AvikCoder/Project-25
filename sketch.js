
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,600,70,70)
    ground = new Ground(400,670,800,20)
    dust1 = new Dustbin(650,650,150,20)

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  dust1.display()
 
}

function keyPressed(){
  if (keyCode == UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-90});
  }
}


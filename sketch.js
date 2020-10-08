
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var trash1,bin1,bin2,bin3;
var platform;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
   
    bin1 = new Bin(920,50,30,160);
    bin2 = new Bin(720,120,30,160);
    bin3 = new Bin(820,120,180,30);
   
    trash1= new Trash(200,350,30,30);
   
    
    //slingshot = new Slingshot(bird.body,{x:300,y:100});
}

function draw(){
   background("black");
    Engine.update(engine);
 

    bin1.display();
    bin2.display();
    bin3.display();
    trash1.display();
    ground.display();

   Keypressed();

	Engine.run(engine);
  
}

function Keypressed(){
    if(keyCode === UP_ARROW)  {
 //  Matter.Body.applyForce(trash1.body,trash1.body.position,{x:20,y:-20});
   Matter.Body.setPosition(trash1.body, {x: mouseX , y: mouseY});
     }
    

    
}
//Namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

//Create: (1) Engine (2) World (3) Bodies
var engine, world,box1;

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world=engine.world;

  box1=new Box(200,300, 50, 50); 
  box2=new Box(240, 100, 50,70);
  ground=new Ground(200,350,400,20);

}
function draw()
{
  background("skyblue");
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}

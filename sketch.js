
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2
}

var options={
	isStatic:true,
	restitution:0,
	friction:1,
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  
  drawSprites();
 
}

function keyPressed(){
	if (keycode ===32){
		Matter.Bdy.setPosition(stoneobj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}


mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();



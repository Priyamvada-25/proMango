
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var gameState="onSling";

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1= new mango(1100,100,30);
	mango2= new mango(1200,130,30);
    mango3= new mango(1140,170,30);
	mango4= new mango(1225,200,30);
	mango5= new mango(1050,170,30);
	mango6= new mango(1020,80,30);
	mango7= new mango(950,190,30);
	
	stoneObj= new stone(220,420,30);

	launcherObject= new elastic(stoneObj.body,{x:240,y:420}); 

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneObj.display();

  launcherObject.display();

  groundObject.display();
}

function mouseDragged(){
  if(gameState==="onSling"){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
  }
}


function mouseReleased(){
  launcherObject.fly();
  gameState="launched";
}


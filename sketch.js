const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine;
var world;

var ball;
var rope;


function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600, 1200, 20);

  block1 = new Block(900,100,70,70);
  block2 = new Block(900,100,70,70);
  block3 = new Block(900,100,70,70);
  block4 = new Block(900,100,70,70);
  block5 = new Block(900,100,70,70);
  block6 = new Block(900,100,70,70);
 // block7 = new Block(800,100,70,70);
  //block8 = new Block(800,100,70,70);
  //block9 = new Block(800,100,70,70);
  //block10 = new Block(800,100,70,70);
  //block11 = new Block(800,100,70,70);

  ball = new Ball(200,200,80,80);

  rope = new Rope(ball.body,{x:500, y:50});
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  //block7.display();
  //block8.display();
  //block9.display();
  //block10.display();
  //block11.display();

  ball.display();

  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y: mouseY});
}
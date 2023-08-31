
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var btn1;
var btn3;
var btn4;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  btn1 = createImg('setadireita (1).png')
  btn1.position(150,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);


  btn3 = createImg('setaesquerda.png')
  btn3.position(50,30);
  btn3.size(50,50);
  btn3.mouseClicked(Force);

  btn4 = createImg('downarrow1_83845.png')
  btn4.position(250,30);
  btn4.size(50,50);
  btn4.mouseClicked(Bas);







  ground1 = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  


  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20)  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}


function hForce()
{
  //plic for
  //matter.boody
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});


}

function Force()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
}

function Bas()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}
  
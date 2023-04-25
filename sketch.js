const Engine = Matter.Engine;//usado para criar o motor de física 
const World = Matter.World;//é usado para criar um mundo físico e para adcionar objetos a ele
const Bodies = Matter.Bodies;// usado para criar os objetos físicos que habitam o mundo 
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var wall;


function setup() {
  createCanvas (400,400);
  engine = Engine.create();
  world = engine.world;


  //propiedade de uma bola 
   var ball_options = {
    restitution: 0.95,  //o quão saltitante ou elastica a bola é
   
    frictionAir: 0.01 // o atrito do ar

   }

   var ops = {// para sprite estaticos
   isStatic:true
   };

   var ground_options = {
    isStatic:true 
   };
  
   ball = Bodies.circle(100,10,20,ball_options);
   World.add(world,ball);

   wedge = Bodies.rectangle(100,200,100,20,ops);
   World.add(world,wedge);

ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

wall = Bodies.rectangle(300,150,70,10,ground_options);
World.add(world,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background(51);
 Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20);

 Matter.Body.rotate(wedge,angle)
 push();
translate(wedge.position.x,wedge.position.y);
rotate(angle);
rect(0,0,100,20);
pop();
angle +=0.4;

rect(ground.position.x,ground.position.y,400,20);
rect(wall.position.x,wall.position.y,70,20);
  
}


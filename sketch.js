
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{ 
	
}

function setup() {
	createCanvas(750, 620);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var options = {
		isStatic: true
	  }

	  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
	  World.add(world, ground);

	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
    World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	var block1_options= {
		restitution:5,
		friction:5,
		frictionAir:5
	}

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");

  Engine.update(engine);
  
 ellipse(block1.position.x,block1.position.y);
 ellipse(block2.position.x,block2.position.y);
 ellipse(block3.position.x,block3.position.y);

 rect(ground.position.x, ground.position.y, width * 2, 1);
 push();
 pop();
}




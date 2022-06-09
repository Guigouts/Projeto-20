const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var solo;
var circulo;
var retangulo;
var quadrado;

function setup() {
	createCanvas(500, 535);


	engine = Engine.create();
	world = engine.world;

	solo_options = {
		isStatic : true
	}

	circulo_options = {
		restitution:0.5, 
		friction:0.02, 
		frictionAir:0	
	}

	retangulo_options = {
		restitution:0.7, 
		friction:0.01, 
		frictionAir:0.1
	}

	quadrado_options = {
		restitution:0.01, 
		friction:1, 
		frictionAir:0.3
	}


	solo = Bodies.rectangle(250, 530, 550, 3, solo_options);
	World.add(world,solo);

	circulo = Bodies.circle(220,10,15,circulo_options);
	World.add(world,circulo);

	retangulo = Bodies.rectangle(110, 50, 50, 30, retangulo_options);
	World.add(world,retangulo);

	quadrado = Bodies.rectangle(350, 50, 30, 30, quadrado_options);
	World.add(world,quadrado);



	Engine.run(engine);
	
	fill(rgb(220,20,60));
	ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(rgb(0,250,154));
  
  rect(solo.position.x, solo.position.y, 550, 3);
  rect(retangulo.position.x, retangulo.position.y, 50, 30);
  rect(quadrado.position.x, quadrado.position.y, 30, 30);
  ellipse(circulo.position.x, circulo.position.y, 15);

  Engine.update(engine);

  drawSprites();
  
}




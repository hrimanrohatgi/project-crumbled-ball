  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  var ground;
  var white1,white2,white3;
  var ball;

  function setup() {          
  createCanvas(400, 400);
  
  engine = Engine.create();
  world = engine.world
   Engine.run(engine);

  ball = new paper(20,280,20,20)

  ground = createSprite(200,370,500,20)
  ground.shapeColor = "yellow";

  white1 =  createSprite(225,370,90,15)
  white1.shapeColor = "white";

  white2 = createSprite(180,343,15,70)
  white2.shapeColor = "white";

  white3 = createSprite(270,343,15,70)
  white3.shapeColor = "white";
  
  }
  function draw() { 
   background("blue");
  drawSprites();
  ball.display();
  ellipseMode(RADIUS);
  ellipse(50,180,20,10);
  }
  function keyPressed(){
    if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position, {x:85,y:-85});
     }
    }
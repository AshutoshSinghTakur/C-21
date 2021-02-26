function setup() {
  createCanvas(800,400);
 

  movingRect =  createSprite(400, 400, 50, 50);
  movingRect.shapeColor = "green";

  
  
  fixedRect =  createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  ball2 =  createSprite(400, 300, 50, 50);
  ball2.shapeColor = "green";

  ball3 =  createSprite(500, 100, 50, 50);
  ball3.shapeColor = "pink";
  ball3.velocityX = -3;
  ball4 =  createSprite(100, 100, 50, 50);
  ball4.shapeColor = "blue";
  ball4.velocityX = 3;
}

function draw() {
  
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(myOwnisTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  else if(myOwnisTouching(movingRect, ball2)){
    movingRect.shapeColor = "red"
    ball2.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green";
    ball2.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(ball3, ball4);
  
  drawSprites();
}



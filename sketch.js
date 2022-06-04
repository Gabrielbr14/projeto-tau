var  ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,150,150,130);
}

function draw() 
{
  if (keyDown("up")){
    background("red");
  }
   drawSprites();
}





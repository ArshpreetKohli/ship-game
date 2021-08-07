var ship,ship_sailing,edges,sea_image,sea
function preload(){
ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_image=loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
  ship=createSprite(200,200,30,50)
  ship.addAnimation("sailing",ship_sailing)
  edges=createEdgeSprites()

  ship.scale=1
  ship.x=50
  sea=createSprites(590,300,20,20)
  sea=addImage(sea_image)
}

function draw() {
  background("blue");
 sea.velocityX=3
 console.log(ship.y)
   if(keyDown("space")){
  ship.velocityY = -10;
}

ship.velocityY = ship.velocityY + 0.5;
if(sea.x<0){
sea.x=300
}
//stop trex from falling down
ship.collide(sea)
drawSprites();
}
}
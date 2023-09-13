function preload(){
  fridgeImg = loadImage("animations/fridge-img.png")
  oggyAnimation = loadAnimation("animations/oggy1.png","animations/oggy2.png")
  oggyWalkAnimation = loadAnimation("animations/oggy-w1.png","animations/oggy-w2.png","animations/oggy-w3.png","animations/oggy-w4.png")
}

function setup() {
  createCanvas(1000,700);


  fridge=createSprite(500,350,50,50);
  //fridge.shapeColor="mediumvioletred";
  fridge.addImage("fr",fridgeImg)
  fridge.scale=0.17

  oggy=createSprite(0,0,50,50);
  //oggy.shapeColor="deepskyblue";
  oggy.addAnimation("standing",oggyAnimation)
  oggy.addAnimation("walking",oggyWalkAnimation)
  oggy.scale=2
  edges=createEdgeSprites();
  
  joey=createSprite(70,502,50,50);
  joey.shapeColor="fuchsia";
  edges=createEdgeSprites();

  marky=createSprite(51,520,50,50);
  marky.shapeColor="gainsboro";
  edges=createEdgeSprites();

  deedee=createSprite(40,510,50,50);
  deedee.shapeColor="lightsteelblue";
  edges=createEdgeSprites();

}


function draw() {
  background(238,130,238);  
  if(keyDown(UP_ARROW)){
    oggy.velocityY=-10;
  }
  else if(keyDown(DOWN_ARROW)){
    oggy.velocityY=+10;
  }
  else{
    oggy.velocityY=0;
  }

  if(keyDown(RIGHT_ARROW)){
    oggy.velocityX=+10;
  }
  else if(keyDown(LEFT_ARROW)){
    oggy.velocityX=-10;
  }
  else{
    oggy.velocityX=0;
  }
  oggy.collide(edges);

  if(oggy.velocityX!=0 || oggy.velocityY!=0){
    oggy.changeAnimation("walking")
    if(oggy.velocityX<0){
      oggy.mirrorX(-1)
    }
    else{
      oggy.mirrorX(1)
    }
  }
  else{
    oggy.changeAnimation("standing")
  }
  drawSprites();
}
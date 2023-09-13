function setup() {
  createCanvas(1000,700);


  fridge=createSprite(500,350,50,50);
  fridge.shapeColor="mediumvioletred";

  oggy=createSprite(0,0,50,50);
  oggy.shapeColor="deepskyblue";
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

  drawSprites();
}
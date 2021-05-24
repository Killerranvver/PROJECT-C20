var bgImg;
var cat,mouse;
var mouseimg1,mouseimg2;
var catimg1,catimg2;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,200,20,20);
    cat.scale=0.2;
    cat.addImage("CatStanding",catimg1);
   // mouse.addImage("Mousedb",mouseimg2)
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width-mouse.width)/2){
        cat.changeAnimation(mouseimg1)
        mouse.changeAnimation(catimg1)
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
  
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
}

var cat, mouse;
var catImage, mouseImage;
var catRunning, catLastImage;
var mouseCheese, mouseStanding;
var mouseGlass;
var garden, gardenImage;

function preload() {
    //load the images here
    catImage = loadAnimation("images/cat1.png");
    catRunning = loadAnimation("images/cat2.png", "images/cat3.png",);
    catLastImage = loadAnimation("images/cat4.png");

    mouseCheese = loadAnimation("images/mouse1.png");
    mouseStanding = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseGlass = loadAnimation("images/mouse4.png");
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
  
    //create tom and jerry sprites here
    cat = createSprite(870,660,10,10);
    cat.addAnimation('cat1', catImage);
    cat.scale = 0.2;
    mouse =  createSprite(140,700,10,10);
    mouse.addAnimation("mouse1", mouseCheese);  
    mouse.scale = 0.1;
  }

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width -mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("catLast",catLastImage);
    cat.changeAnimation("catLast");
    mouse.addAnimation("mouseLast",mouseGlass);
    mouse.changeAnimation("mouseLast");
  }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catRun", catRunning)
    cat.changeAnimation("catRun")
    mouse.addAnimation("mouseTease", mouseStanding)
    mouse.changeAnimation("mouseTease")
  }

}

var garden, gardenImage;
var cat1, cat1Image;
var mouse1, mouse1Image;
var cat2, cat2Image;

function preload() {
    //all the images are loaded here 
    gardenImage = loadImage("images/garden.png");
    cat2Image = loadImage("images/cat2.png");
    mouse1Image = loadImage("images/mouse1.png");
}

function setup(){

    //creating canvas

    createCanvas(850,550);

    //creating the garden sprite

    garden = createSprite(400,200,1500,400);
    garden.addImage(gardenImage);
    
    //creating the cat2 sprite

   cat2 = createSprite(800,500,20,10)
   cat2.addImage(cat2Image);
   cat2.scale = 0.1;

//creating the mouse sprite

    mouse1 = createSprite(300,500,40,60)
    mouse1.addImage(mouse1Image);
    mouse1.scale = 0.1; 
}

function draw() {
    //giving the background as 0
    background(0);
      
    drawSprites();  
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        Mouse1.addAnimation("mouseTeasing", mouse2Image);
        mouse1.changeAnimation("mouseTeasing");
        mouse1.frameDelay = 2;       
    }

    if(keyCode === LEFT_ARROW){
       mouse1.addAnimation("mouseTeasing", mouse2Image);
       mouse1.changeAnimation("mouseTeasing");
       mouse1.frameDelay = 2;
    }
      
 }
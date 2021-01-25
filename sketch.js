var canvas;
var music;
var surface1, surface2, surafce3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas = createCanvas(800,600);

    surface1 = createSprite(100,580,200,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(305,580,200,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(510,580,200,20);
    surface3.shapeColor = "green";

    surface4 = createSprite(715,580,200,20);
    surface4.shapeColor = "red";

    box = createSprite(random(20,750));
    box.shapeColor = "white";
    box.velocityY = 6;
    box.scale = 0.3;
    
   

    
}

function draw() {

background("black");




  if(surface1.isTouching(box)&& box.bounceOff(surface1)){
      surface1.shapeColor = "red";
  }

  if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    surface2.shapeColor = "purple";
}

if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    surface3.shapeColor = "yellow";
}

if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    surface4.shapeColor = "white";
}


drawSprites();
}

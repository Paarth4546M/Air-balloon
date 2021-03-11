var balloon;
var balloonImg1,balloonImg2,balloonImg3;
var backgroundImg;
var pos,database;

function preload(){
  balloonImg1 = loadImage("Hot Air Ballon-02.png")
  balloonImg2 = loadImage("Hot Air Ballon-03.png")
  balloonImg3 = loadImage("Hot Air Ballon-04.png")

  backgroundImg = loadImage("Hot Air Ballon-01.png")

  balloon_ani = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}



function setup() {
  database = firebase.database()
  createCanvas(500,500);
 balloon = createSprite(250,250,20,20)
 balloon.addAnimation("ani",balloon_ani)

 var  balloonpos = database.ref("Balloon/position");
 balloonpos.on("value",readpos)
}

function draw() {
  background(backgroundImg);
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10
  }
  else if(keyDown(UP_ARROW)){
   // balloon.y = balloon.y - 10
    balloon.scale -= 0.3
  }
  else if(keyDown(DOWN_ARROW)){
   // balloon.y = balloon.y + 10
    balloon.scale += 0.3
  }
  
drawSprites();
}
function readpos(data){

  pos = data.val();

  balloon.x = pos.x
  balloon.y = pos.y
}

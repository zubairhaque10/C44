var backgroundImage,  catImage, monkeyImage
var cat, bg
var edges


function preload(){
  backgroundImage = loadImage("images/background4.png")
  catImage = loadImage("images/cat.png")
  monkeyImage = loadImage("images/monkey.png")
  
  }
function setup() {
  createCanvas(800, 500);
  bg = createSprite(450, 250, 600, 500)
  bg.addImage(backgroundImage)
bg.scale = 1.3
bg.velocityX = -1
bg.x = bg.width/2
  cat = createSprite(100, 450, 50, 50)
  cat.addImage(catImage)
  cat.scale = 0.3
 // edges = createEdgeSprites()
 ground = createSprite(400, 505, 800, 20)
 ground.visible = false
}


function draw() {
  background("black");

if(bg.x < 330){
  bg.x = bg.width/2
}
cat.velocityY = cat.velocityY + 0.3
if(keyDown(UP_ARROW)){
  cat.velocityY = -7
}

spawnMonkey()
cat.collide(ground)


  drawSprites();
}
function spawnMonkey(){
  var monkey = createSprite(750, 470, 50, 50)
  monkey.scale = 0.5
  monkey.addImage(monkeyImage)
}
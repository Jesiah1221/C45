var ship, shipImage
var backgroundImage
var enemyship, enemyshipImage 

function preload() {
  shipImage = loadImage("Images/ship.png")
  backgroundImage = loadImage("Images/ocean.jpg")
  enemyshipImage = loadImage("Images/enemy2.jpg") 

}

function setup() {
  createCanvas(800,800);
  ship = createSprite(100, 400, 50, 50);
  ship.addImage(shipImage)
  ship.scale = 0.4;

  
}

function draw() {
  background(backgroundImage);  
  spawnships();
  drawSprites();
}

function spawnships(){
  if(frameCount% 60 === 0){
    var r = Math.round(random(100,600));
    enemyship = createSprite(700,r,50,50);
    enemyship.addImage(enemyshipImage)
    enemyship.scale = 0.2;
  }
}
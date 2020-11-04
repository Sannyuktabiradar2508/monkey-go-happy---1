var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground
var FoodGroup, obstacleGroup

var gameover
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
monkey=createSprite (80,315,20,20);
monkey.addAnimation("running",monkey_running);
ground = createSprite(400,390,900,10);

  ground.velocityX = -2;
  
 score = 0;  

}


function draw() {
background("white")
if(keyDown("space")){
monkey.velocityY = -12;}

monkey.velocityY= monkey.velocityY+0.8;
monkey.scale = 0.1; 
  
monkey.collide(ground);

if(ground.x<0){
ground.x = ground.width/2;
}
 
obstaclesGroup = new Group();
FoodGroup = new Group();
  

    if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: player.scale=0.12;
                break;
        case 20: player.scale=0.14;
                break;
        case 30: player.scale=0.16;
                break;
        case 40: player.scale=0.18;
                break;
        default: break;
    }
  
  if(obstaclesGroup.isTouching(monkey)){ 
        monkey.scale = 0.8;
     // score=score-2;
    }
  
  text("Score: "+ score, 500,50);
  textSize(20);
  
  spawnObstacles();
  spawnFood();

drawSprites();
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
     obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
   
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.y = random(200,250);    
    
    banana.scale = 0.05;
    banana.velocityX = -5;
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}








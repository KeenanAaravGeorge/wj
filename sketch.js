var label1 = 0;
var label2 = 0;
var road,bomb,treasure,coin,man;
var roadImg,bombImg,treasureImg,coinImg,manImg; 
var coinG,bombG,treasureG;
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
    roadImg = loadImage("Road.png");
    bombImg = loadImage("Bomb.png");
    treasureImg = loadImage("treasure.png");
    coinImg = loadImage("coin.png");
    manImg = loadAnimation("run1.png","run2.png");
    endImage = loadImage("gameover.png");
}

function setup() {
    createCanvas(400,600);

    road = createSprite(200,200);
    road.addImage(roadImg);
    road.velocityY = 4;

    man = createSprite(70,580,20,20);
    man.addAnimation("JakeRunning",manImg);
    man.scale = 0.08;

    //coinG = newGroup();
    //treasureG = newGroup();
    //bombG = newGroup();

}


function draw() {
   if (gameState == PLAY) {
    background(0);
    man.x = World.mouseX;

    edges = creatEdgeSprite();
    man.collide(edges);

    if (road.y > 400) {
       road.y = height/2; 
    }

    createCoin();
    createTreasure();
    createBomb();

    if (coinG.isTouching(boy)) {
      coinG.destroyEach();
      label1 = label1+1  
    }else if (treasureG.isTouching(boy)) {
        treasureG.destroyEach();
        label2 = label2+1  
      }else if(bombG.isTouching(man)) {
          gameState=END;
          
          man.addAnimation("SahilRunning",endImg);
          man.x=200;
          man.y=300;
          man.scale=0.6;
          
          coinG.destroyEach();
          treasureG.destroyEach();
          bombG.destroyEach();
          
          coinG.setVelocityYEach(0);
          treasureG.setVelocityYEach(0);
          bombG.setVelocityYEach(0);
       
      }
      drawSprites();
      textSize(20);
      fill(255);
    text(" Coin: "+ label1,1,30);

    textSize(20);
    fill(255);
    text(" Treasure: "+ label2,250,30);

}
}

function createCoin() {
    if (World.frameCount % 320 == 0) {
    var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin.addImage(coinImg);
    coin.scale=0.03;
    coin.velocityY = 3;
    coin.lifetime = 150;
    coinG.add(coin);
  }
  }
  function createTreasure() {
    if (World.frameCount % 320 == 0) {
    var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
    treasure.addImage(treasureImg);
    treasure.scale=0.03;
    treasure.velocityY = 3;
    treasure.lifetime = 150;
    treasureG.add(treasure);
  }
  } 
  function createBomb(){
    if (World.frameCount % 530 == 0) {
    var bomb = createSprite(Math.round(random(50, 350),40, 10, 10));
    bomb.addImage(bombImg);
    bomb.scale=0.1;
    bomb.velocityY = 3;
    bomb.lifetime = 150;
    bombG.add(bomb);
    }
  }    

var officeImage, officeSprite;
var sherlockImage,sherlockSprite;
var telephoneImage, telephoneSprite;
var buttonSprite, buttonImage;
var textBoxSprite, textBoxImage;
var phoneRingSprite, phoneRingImage;
var damagedHouseSprite, damagedHouseImage;
var gamestate = "office";
var scaredGirlSprite, scaredGirlImage;
var carImage, carSprite;
var textBoxHseImage;
var insideHouseImage;
var deadBodyImage, deadBodySprite;
var knifeImage, knifeSprite;
var clothImage, clothSprite;
var textBox2;
var rodImage, rodSprite;
var gunImage, gunSprite;
var axeImage, axeSprite;
var popUpImage, popUpSprite;
var textboxSprite3;
var okSprite, okImage;

function preload(){

  officeImage = loadImage("images/office.jpeg");
  sherlockImage = loadImage("images/William Gillette - Wikipedia (1).png");
  telephoneImage = loadImage("images/telephone.png");
  buttonImage = loadImage("images/button.png");
  textBoxImage = loadImage("images/text box.png");
  phoneRingImage = loadImage("images/phoneRing.png");
  damagedHouseImage = loadImage("images/damaged house.png");
  scaredGirlImage = loadImage("images/scared girl diana.png");
  carImage = loadImage("images/cid car.png");
  textBoxHseImage = loadImage("images/ text box house.png");
  insideHouseImage = loadImage("images/old-broken-house-inside-hd-wallpaper-1536x2048.jpg");
  deadBodyImage = loadImage("images/dead body.png");
  knifeImage = loadImage("images/knife.png");
  clothImage = loadImage("images/cloth .png");
  textBox2 = loadImage("images/textBox3.png");
  rodImage = loadImage("images/murder weapon 2.png");
  gunImage = loadImage("images/gun murder weapon 3.png");
  axeImage = loadImage("images/murder weapon 4 .png");
  popUpImage = loadImage("images/ popup.png");
  okImage = loadImage("images/ok .png");
}

function setup(){

  createCanvas(1001, 800);
  officeSprite = createSprite(width/2, height/2, width, height);
  officeSprite.addImage("office", officeImage);
  officeSprite.scale = 1.18;

  

  telephoneSprite = createSprite(450, 405);
  telephoneSprite.addImage("telephone", telephoneImage);
  telephoneSprite.scale = 0.09;

  buttonSprite = createSprite(940, 80);
  buttonSprite.addImage("button", buttonImage);
  buttonSprite.scale = 0.2;

  

  phoneRingSprite = createSprite(width/2 - 145, 190);
  phoneRingSprite.addImage("phone", phoneRingImage);
  phoneRingSprite.scale = 0.3;

  damagedHouseSprite = createSprite(width/2, height/2, width, height);
  damagedHouseSprite.addImage("house", damagedHouseImage);
  damagedHouseSprite.addImage("insidehouse", insideHouseImage);
  damagedHouseSprite.visible = false;
  damagedHouseSprite.scale = 2.2;

  textBoxSprite = createSprite(width/2, 200);
  textBoxSprite.addImage("text", textBoxImage);
  textBoxSprite.addImage("texthouse", textBoxHseImage);
  //textBoxSprite.addImage("textbox", textBox2);
  textBoxSprite.scale = 0.8;


  sherlockSprite = createSprite(945, 500);
  sherlockSprite.addImage("sherlock", sherlockImage);
  sherlockSprite.scale = 1;


  scaredGirlSprite = createSprite(width/2 - 150, height - 100);
  scaredGirlSprite.addImage("girl", scaredGirlImage);
  scaredGirlSprite.visible = false;
  scaredGirlSprite.scale = 0.5;

  carSprite = createSprite(width/2 + 350, height - 100);
  carSprite.addImage("car",carImage);
  carSprite.visible = false;
  carSprite.scale = 1.5;

  deadBodySprite = createSprite(width/2 + 100, height/2 + 250);
  deadBodySprite.addImage("body", deadBodyImage);
  deadBodySprite.visible = false;
  deadBodySprite.scale = 0.8;

  knifeSprite = createSprite(width/2 + 300, height/2 + 250);
  knifeSprite.addImage("knife", knifeImage);
  knifeSprite.visible = false;
  knifeSprite.scale = 0.2;

  clothSprite = createSprite(width/2 - 200, height/2 + 200);
  clothSprite.addImage("cloth", clothImage);
  clothSprite.visible = false;
  clothSprite.scale = 0.07;

  rodSprite = createSprite(width/2 - 100, height/2 + 200);
  rodSprite.addImage("rod", rodImage);
  rodSprite.visible = false;
  rodSprite.scale = 0.3;

  gunSprite = createSprite(width/2 + 260, height/2 + 300);
  gunSprite.addImage("gun", gunImage);
  gunSprite.visible = false;
  gunSprite.scale = 0.3;

  textboxSprite3 = createSprite(sherlockSprite.x - 200, height/2 - 200);
  textboxSprite3.addImage("box", textBox2);
  textboxSprite3.visible = false;
  textboxSprite3.scale = 0.5;


}

function draw(){

  background("black");
  
    
  
  if(mousePressedOver(buttonSprite)){
    gamestate = "house";
    
   
  }

  if(gamestate === "house"){
    destroySprites();

    damagedHouseSprite.visible = true;
    scaredGirlSprite.visible = true;
    carSprite.visible = true;
    sherlockSprite.visible = true;
    sherlockSprite.x = scaredGirlSprite.x + 100;
    sherlockSprite.y = scaredGirlSprite.y;
    sherlockSprite.scale = 0.5;
    textBoxSprite.visible = true;
    textBoxSprite.changeImage("texthouse");
    textBoxSprite.y = height/2 + 100;
    textBoxSprite.x = width/2 - 100;
    textBoxSprite.scale = 0.5;
  


    textSize(10);
    fill("black");
    text("Diana", scaredGirlSprite.x, textBoxSprite.y);

    if(mousePressedOver(textBoxSprite)){
      gamestate = "insidehouse";
      textBoxSprite.destroy();
    }
    if(gamestate === "insidehouse"){

        damagedHouseSprite.changeImage("insidehouse");
        damagedHouseSprite.scale = 1;
        damagedHouseSprite.y = height/2 - 200;
        //sherlockSprite.destroy();
        //scaredGirlSprite.destroy();
        sherlockSprite.x = width - 100;
        scaredGirlSprite.x = 400;
        sherlockSprite.y = height - 300;
        scaredGirlSprite.y = height - 450;
        sherlockSprite.scale = 1;
        scaredGirlSprite.scale = 0.8;
        carSprite.destroy();
        //textBoxSprite.changeImage("textbox");
        //textBoxSprite.x = sherlockSprite.x - 200;
        //textBoxSprite.y = height/2 - 200;
        textboxSprite3.visible = true;        
        deadBodySprite.visible = true;
        knifeSprite.visible = true;
        clothSprite.visible = true;
        rodSprite.visible = true;
        gunSprite.visible = true;
        //axeSprite.visible = true;
        axeSprite = createSprite(width/2 - 100, height/2 + 300);
        axeSprite.addImage("axe", axeImage);
        axeSprite.visile = false;
        axeSprite.scale = 0.3;


        
        
        popUpSprite = createSprite(width/2 + 150, height/2);
        popUpSprite.addImage("popup", popUpImage);
        //popUpSprite.visible = true;
        popUpSprite.scale = 2;
        
        
        okSprite = createSprite(width/2 + 140, height/2 + 180);
        okSprite.addImage("ok", okImage);
        okSprite.scale = 0.2;

        if(mousePressedOver(okSprite)){
          gamestate = "weapon"

        }

        if(gamestate === "weapon"){
          okSprite.destroy();
          popUpSprite.destroy();

        }
    }

  }








  drawSprites();
  if(gamestate === "office"){

  textSize(15);
  fill("white");
  text("Speaker : ", textBoxSprite.x - 55, textBoxSprite.y - 30);

  text("hello, i am diana and i am talking", textBoxSprite.x - 65, textBoxSprite.y + 2);
  text("from manchesters lane.", textBoxSprite.x - 65, textBoxSprite.y + 20);
  text("There is a murder in my neighbour...", textBoxSprite.x - 75, textBoxSprite.y + 40);
  text("hhh..house no. 3", textBoxSprite.x - 75, textBoxSprite.y + 60);
}
}
function destroySprites(){


  officeSprite.destroy();
  sherlockSprite.visible = false;
  telephoneSprite.destroy();
  buttonSprite.destroy();
  textBoxSprite.visible = false;
  phoneRingSprite.destroy();


}
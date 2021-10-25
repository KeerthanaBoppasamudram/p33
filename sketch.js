var backgroundImg;
var snow;
var snow_img,snow2_img ;

function preload() {
  backgroundImg=loadImage("snow3.jpg");
  snow_img = loadImage("snow4.webp");
  snow2_img = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


}

function draw() {
  background(backgroundImg);
  snow.display();
  drawSprites();

 
}

//VARIABLES
var light1
var light2
var dancer, dancerImg;

//PRELOAD IMAGES
function preload()
{
  ppl = loadImage('assets/ppl.png');
  floor = loadImage('assets/floor.png');
  curt = loadImage('assets/curt.png');
  light = loadImage('assets/light.png');
  dancerImg = loadImage('assets/dancer.png');
}

function setup() {
  createCanvas(500, 500);  
  
  //SPRITES
  //lights
  light1 = new Sprite(110, 100, 'static');
  light1.img = light;
  light1.scale = 0.2;
  light1.visible = false;
  light2 = new Sprite(390, 100, 'static');
  light2.img = light;
  light2.scale = 0.2;
  light2.visible = false;
  //dancer
  dancer = new Sprite(-50, 190, 'k');
  dancer.img = dancerImg;
  dancer.scale = 0.4
}

function draw() {
  //BACKGROUND
  //wall
  fill('black');
  rect(0, 0, 500, 500);
  //stage 
  fill('#452508');
  rect(0, 250, 500, 200);

  //INSTRUCTIONS
  textFont('Georgia');
  textAlign('center');
  fill('white');
  textSize(15);
  text('1. press space', 250, 50);
  text('2. press right', 250, 70);

  //INPUTS
  //lights
  if(kb.presses('space'))
  {
    light1.visible = true;
    light2.visible = true;
  }    
  //keeps lights behind
  image(ppl, -30, 290, 570, 330);
  image(curt, -15, -20, 530, 310);
  //dancer
  dancer.speed = 3;
  if (kb.pressing('right'))
  {
    dancer.direction = 0;
  }
  else
  {
    dancer.speed = 0;
  }
  //MESSAGE
  if(dancer.x >= 300)
  {
    textSize(23);
    text('HAPPY BIRTHDAY!', 180, 145);
    textSize(20);
    text('to my favorite dancer 💗', 80, 160, 200, 200);
  }
}
let height = 500;
let width = 500;
let stalker;

function setup() {
  createCanvas(height, width);
  stalker = new Stalker(250, 250);
}

function draw() {
  background(220);
  stalker.init();
  stalker.follow();
}

class Stalker {
  centerX;
  centerY;
  x;
  y;

  constructor(x, y){
    this.centerX = x;
    this.centerY = y;
    this.x = x;
    this.y = y;
  }

  init(){
    fill('white');
    circle(this.centerX, this.centerY, 175);
    fill('blue');
    circle(this.x, this.y, 60);
  }

  follow(){
    this.x = map(mouseX, 0, width, 225, 275, true);
    this.y = map(mouseY, 0, width, 210, 280, true);
  }
}
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
  x
  y

  constructor(x, y){
    this.centerX = x;
    this.centerY = y;
    this.x = x;
    this.y = y;
  }

  init(){
    fill('white')
    circle(this.centerX, this.centerY, 175);
    fill('blue');
    circle(this.x, this.y, 60);
  }

  follow(){
    this.x = mouseX;
    if (this.x >= this.centerX + 60) { this.x = this.centerX + 60 }
    if (this.x <= this.centerX - 60) { this.x = this.centerX - 60 }
    this.y = mouseY;
    if (this.y >= this.centerY + 60) { this.y = this.centerY + 60 }
    if (this.y <= this.centerY - 60) { this.y = this.centerY - 60 }
  }
}
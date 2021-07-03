let width = 400
let height = 400

let eyeballList = [];

function setup() {
  createCanvas(height, width);
  for (let i = 0; i <= width; i+=40) {
    for (let ii = 0; ii <= height; ii+=40) {
      let eyeball = new Eye(i, ii);
      eyeballList.push(eyeball)
    }
  }
  console.log({ eyeballList })
}

function draw() {
  background(220);
  eyeballList.forEach(eyeball => {
    eyeball.draw();
    eyeball.wiggle();
  });
  // noLoop();
}

function randomFill(){
  r = random(100);
  g = random(255);
  b = random(255);
  return { r, g, b, a: 200}
}

class Eye {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.centerX = x;
    this.centerY = y;
    this.color = randomFill();
  }

  wiggle(){
    this.x = this.x + random(-1.5, 1.5);
    if (this.x > this.centerX + 4){ this.x = this.centerX + 4 }
    if (this.x < this.centerX - 4){ this.x = this.centerX - 4 }
    this.y = this.y + random(-1.5, 1.5);
    if (this.y > this.centerY + 4){ this.y = this.centerY + 4 }
    if (this.y < this.centerY - 4){ this.y = this.centerY - 4 }
  }

  draw(){
    fill('white')
    ellipse(this.centerX, this.centerY, 30, 24);
    fill(this.color.r, this.color.g, this.color.b);
    circle(this.x , this.y, 10);
  }
}
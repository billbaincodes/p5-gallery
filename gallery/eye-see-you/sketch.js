let width = 400
let height = 400

function setup() {
  createCanvas(height, width);
}

function draw() {
  background(220);




  for (let i = 0; i <= width; i+=40) {
    for (let ii = 0; ii <= height; ii+=40) {
        fill('white')
        ellipse(i, ii, 30, 24);
        randomFill();
        let xOff = random(-4, 4)
        let yOff = random(-4, 4)
        circle(i + xOff, ii + yOff, 10)
    }
  }
  noLoop();
}

function randomFill(){
    r = random(100);
    g = random(255);
    b = random(255);
    return fill(r,g,b,200);
}
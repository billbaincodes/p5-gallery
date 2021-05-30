console.log('heyo');

function setup() {
  createCanvas(400, 400);
  background(220);
}

function getNum() {
  return Math.random() * (400 - 0) + 0;
}

let round = 0

function draw() {
  if (round > 300) {
    return
  } else {
    let x = getNum()
    let y = getNum()
    fill(x, 1, y)
    circle(x, y, random(55, 25))
    round++ 
  }
}
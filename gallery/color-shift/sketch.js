let height = 500;
let width = 500;

function setup() {
  createCanvas(height, width);
}

let r = 0.0;
let g = 0.0;
let b = 0.0;

function draw() {
  let bgR = noise(r) * 255;
  let bgG = noise(g) * 255;
  let bgB = noise(b) * 255
  r += 0.005
  g += 0.005
  g += 0.005
  console.log({ bgR });
  background(bgR, bgG, bgB);
  fill(bgG, bgB, bgR);
  circle(250, 250, noise(r)* 700)
  rectMode(CENTER);
  fill(bgB, bgR, bgG);
  rect(250, 250, noise(r)* 350)
}

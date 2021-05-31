
function setup(){
  createCanvas(500, 500);
  pixelDensity(1);
}

// graph one dimensional Perlin noise

// let start = 0;
// let inc = 0.01;
// function draw(){
//   background(100);
//   stroke(255);
//   noFill();
//   let xOff = start;
//   beginShape();
//   for (let x = 0; x < 500; x++){
//     let y = noise(xOff) * width
//     vertex(x, y);
//     xOff += inc;
//   }
//   endShape();
//   start += inc;
// }

let start = 0;
let inc = 0.01;

// graph two dimensional Perlin noise

function draw(){
  let yOff = start;
  loadPixels();
  for (let y = 0; y < 500; y++){
    let xOff = start;
    for (let x = 0; x < 500; x++){
      let index = (x + y * 500) * 4;
      let perlin = noise(xOff, yOff) * 255
      pixels[index] = perlin;
      pixels[index+1] = perlin;
      pixels[index+2] = perlin;
      pixels[index+3] = 255;

      xOff += inc;
    }
    yOff += inc;
  }
  // move over the noise
  // start -= 0.01;
  updatePixels();
  noLoop();
}




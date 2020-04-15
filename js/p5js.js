let bg;
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  bg = loadImage('assets/bg.jpg');
}

function draw() {
  background(bg, 0);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
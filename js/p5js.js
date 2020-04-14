let englishFont;

function preload() {
  englishFont = loadFont('assets/Girassol-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(englishFont);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('p5.js', 0, 0);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
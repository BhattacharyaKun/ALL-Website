let englishFont;

function preload() {
  englishFont = loadFont('assets/Girassol-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
	translate(-width, -height);
  let time = millis();
  rotateZ(time / 1234);
  textFont(englishFont);
  text('A', 0, 0);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
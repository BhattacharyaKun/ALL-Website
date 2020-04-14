let englishFont;

function preload() {
  englishFont = loadFont('assets/Girassol-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	translate(-width/2, -height/2);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
	
  let time = millis();
  rotateZ(time / 1234);
  textFont(englishFont);
  text('A', 0, 0);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
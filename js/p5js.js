let englishFont;
let russianFont;

function preload() {
  englishFont = loadFont('assets/Girassol-Regular.ttf');
	russianFont = loadFont('assets/kremlin.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(50);
}

function draw() {
  background(0);
	
  let time = millis();
  rotateZ(time / 1234);
  textFont(englishFont);
  text('A', -10, 10);
	//textFont(russianFont);
	 rotateZ(time / 1000);
  text('C', -30, 70);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
let englishFont;
let hebrewFont;

function preload() {
  englishFont = loadFont('assets/Girassol-Regular.ttf');
	hebrewFont = loadFont('assets/Tinos-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(50);
  //textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
	
  let time = millis();
  rotateZ(time / 1234);
  textFont(englishFont);
  text('A', -10, 10);
	textFont(englishFont);
	 rotateZ(time / 1000);
  text('א', -30, 70);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
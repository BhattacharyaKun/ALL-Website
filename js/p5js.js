let englishFont;
let russianFont;
let hebrewFont;
let hindiFont;
let copticFont;
let greekFont;
let japaneseFont;
let ethiopicFont;
let cunei;
let phone;

function preload() {
  englishFont = loadFont('assets/Girassol-Regular.ttf');
	russianFont = loadFont('assets/cyberv2.ttf');
  hebrewFont = loadFont('assets/Tinos-Bold.ttf');
  hindiFont = loadFont('assets/Mangal-Regular.ttf');
  copticFont = loadFont('assets/Antonious-Bold.ttf');
  japaneseFont = loadFont('assets/NotoSansJP.otf');
  greekFont = loadFont('assets/Rob.ttf');
  ethiopicFont = loadFont('assets/Ethiopic.ttf');
  cunei = loadFont('assets/Cun.ttf');
  phone = loadFont('assets/phone.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
	
  let time = millis();
  
  push();
  rotateZ(time / 1234);
  textFont(englishFont);
  text('A', 0, 0);
  pop();
  
  push();
  textFont(russianFont);
  rotateZ(time / 500);
  text('x', 0, 20);
  pop();
  
  push();
  textFont(hebrewFont);
  rotateZ(-(time / 1000));
  text('א', 0, 45);
  pop();
  
  push();
  textFont(hindiFont);
  rotateZ(-(time / 777));
  text('क', 0, 65);
  pop();
  
  push();
  textFont(copticFont);
  rotateZ((time / 777));
  text('a', 0, 90);
  pop();
  
  push();
  textFont(japaneseFont);
  rotateZ((time / 900));
  text('あ', 0, 120);
  pop();
  
  push();
  textFont(greekFont);
  rotateZ(-(time / 900));
  text('α', 0, 145);
  pop();
  
  push();
  textFont(ethiopicFont);
  rotateZ(-(time / 1400));
  text('ግ', 0, 170);
  pop();
  
   push();
  textFont(japaneseFont);
  rotateZ((time / 696));
  text('文', 0, 200);
  pop();
  
   push();
  textFont(cunei);
  rotateZ(-(time / 800));
  text('𒅴', 0, 225);
  pop();
  
   push();
  textFont(phone);
  rotateZ((time / 900));
  text('𐤀', 0, 260);
  pop();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
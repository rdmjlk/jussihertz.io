
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255,0);
  stroke(255);
  strokeWeight(0.5);
  frameRate(8);
  blendMode(EXCLUSION);
  }

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
}

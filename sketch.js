
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255,0);
  stroke(0);
  strokeWeight(0.5);
  frameRate(8);
  blendMode(OVERLAY);
  }

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
}

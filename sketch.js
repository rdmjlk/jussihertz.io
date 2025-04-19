
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(0.5);
  frameRate(8);
  blendMode(OVERLAY);
  }

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
}

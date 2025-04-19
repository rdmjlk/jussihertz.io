function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255,0);
  stroke(0);
  frameRate(4);
  }

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
}

var canvas;

function setup() {
  canvas= createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-9');
  stroke(0);
  strokeWeight(0.5);
  frameRate(8);
  blendMode(DIFFERENCE);
  }

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
}

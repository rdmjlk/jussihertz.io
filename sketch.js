var canvas;

function setup() {
  background('#faf8f8');
  canvas= createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  stroke(0);
  strokeWeight(0.5);
  frameRate(8);
  }

function draw() {
  line(mouseX,mouseY,pmouseX,pmouseY);
}

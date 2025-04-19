var canvas;

function setup() {
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight*1.5);
}

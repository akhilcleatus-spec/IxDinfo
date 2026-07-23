let shape;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  shape = buildGeometry(createShape);
}

function draw() {
  background(18, 24, 35);
  orbitControl();

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  model(shape);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createShape() {
  cone(140, 260);
}
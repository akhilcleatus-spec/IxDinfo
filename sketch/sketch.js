function setup() {
  createCanvas(1080, 720);
}

function draw() {
  background(220);
}// Click and drag the mouse to view the scene from different angles.

let shape;

function setup() {
  createCanvas(100, 100, WEBGL);

  // Create the p5.Geometry object.
  shape = buildGeometry(createShape);

  describe('A white cone drawn on a gray background.');
}

function draw() {
  background(200);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the p5.Geometry object.
  model(shape);
}

// Create p5.Geometry object from a single cone.
function createShape() {
  cone();
}
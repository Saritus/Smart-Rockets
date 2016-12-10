var rocket;

function setup() {
  createCanvas(500, 500);
  rocket = new Rocket();
}

function draw() {
  background(0);
  rocket.show();
}

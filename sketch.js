var population;
var lifespan = 1000;
var count = 0;
var target;
var obstacles = [];

var rx = 200;
var ry = 200;
var rw = 100;
var rh = 10;

function setup() {
  createCanvas(500, 500);
  background(0);
  population = new Population();
  target = createVector(width-10, 10);

  for (var i = 0; i < 200; i++) {
    obstacles[i] = new Obstacle();
  }
}

function draw() {
  background(0, 50);

  var alive = population.run();
  if (count == lifespan || alive == 0) {
    population.evaluate();
    population.selection();
    //population = new Population();
    console.log(count, alive);
    count = 0;
  }

  count++;

  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
  }

  push();
  ellipseMode(RADIUS);
  fill(255, 50, 50, 200);
  ellipse(target.x, target.y, 5, 5);
  pop();
}

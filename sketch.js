var population;
var lifespan = 500;
var count = 0;
var target;

var rx = 200;
var ry = 200;
var rw = 100;
var rh = 10;

function setup() {
  createCanvas(500, 500);
  population = new Population();
  target = createVector(random(0.25*width, 0.75*width), 50);
}

function draw() {
  background(0);
  population.run();

  if (count == lifespan) {
    population.evaluate();
    population.selection();
    //population = new Population();
    count = 0;
  }

  count++;

  rect(rx, ry, rw, rh);

  ellipse(target.x, target.y, 20, 20);
}

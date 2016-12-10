var population;
var lifespan = 200;
var count = 0;
var target;

function setup() {
  createCanvas(500, 500);
  population = new Population();
  target = createVector(width/2, 50);
}

function draw() {
  background(0);
  population.run();

  if (count == lifespan) {
    population = new Population();
    count = 0;
  }

  count++;

  ellipse(target.x, target.y, 20, 20);
}

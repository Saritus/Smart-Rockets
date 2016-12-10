var population;
var lifespan = 200;
var count = 0;

function setup() {
  createCanvas(500, 500);
  population = new Population();
}

function draw() {
  background(0);
  population.run();
  count++;
}

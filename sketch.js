var population;

function setup() {
  createCanvas(500, 500);
  population = new Population();
}

function draw() {
  background(0);
  population.run();
}

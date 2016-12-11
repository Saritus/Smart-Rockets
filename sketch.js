var population;
var lifespan;
var count = 0;
var env;
var generation = 1;
var start;

var rx = 200;
var ry = 200;
var rw = 100;
var rh = 10;

function setup() {
  createCanvas(500, 800);
  background(0);
  lifespan = height;
  population = new Population(200);
  env = new Environment();
  var xende = env.createSquares(200);
}

function draw() {
  background(0, 50);

  var alive = population.run();
  if (count == lifespan || alive < 50 || population.completed > 50) {
    var avgfitness = population.evaluate();
    population.selection();
    console.log(count, alive, floor(avgfitness));
    count = 0;
    generation++;
    population.completed = 0;
  }

  count++;

  env.show();
}

function mousePressed() {
  //start = createVector(mouseX, mouseY);
  //print(start);
}

function mouseReleased() {
  //env.add(start.x, start.y, mouseX-start.x, mouseY-start.y);
  //print(obstacles.length);
}

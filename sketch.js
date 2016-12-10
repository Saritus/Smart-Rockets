var population;
var lifespan = 500;
var count = 0;
var target;
var obstacles = [];
var generation = 1;
var start;

var rx = 200;
var ry = 200;
var rw = 100;
var rh = 10;

function setup() {
  createCanvas(500, 500);
  background(0);
  population = new Population(200);
  target = createVector(random(0.25*width, 0.75*width), 25);

  for (var i = 0; i < 0; i++) {
    obstacles[i] = new Obstacle();
  }
}

function draw() {
  background(0, 50);

  var alive = population.run();
  if (count == lifespan || alive == 0 || population.completed) {
    var avgfitness = population.evaluate();
    population.selection();
    console.log(count, alive, floor(avgfitness));
    count = 0;
    generation++;
    population.completed = false;
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

function mousePressed() {
  start = createVector(mouseX, mouseY);
  print(start);
}

function mouseReleased() {
  obstacles[obstacles.length] = new Obstacle(start.x, start.y, mouseX-start.x, mouseY-start.y);
  //print(obstacles.length);
}

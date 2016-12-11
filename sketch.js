// Objects
var population;
var env;
// Used informations
var lifespan = 500;
var count = 0;
var generation = 1;
// Output
var printout;

function setup() {
  createCanvas(500, 800);
  background(0);
  population = new Population(200);
  env = new Environment();
  var xende = env.createBoxes(20, 1);
  printout = createP();
}

function draw() {
  background(0, 50);

  var alive = population.run();
  if (count == lifespan || alive == 0) {
    var avgfitness = population.evaluate();
    population.selection();
    printout.html('Generation: ' + generation + '<br>Lifespan: ' + count + '<br>Alive: ' + alive + '<br>Avg. fitness: ' + floor(avgfitness));
    count = 0;
    generation++;
  }

  count++;

  env.show();
}

Array.prototype.contains = function(v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}

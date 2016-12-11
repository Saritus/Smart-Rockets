// Objects
var population;
var env;
// Used informations
var lifespan = 500;
var count = 0;
var generation = 1;
// Output
var printout;
var avgfitness = 0;
var alive;

function setup() {
  createCanvas(500, 800);
  background(0);
  population = new Population(200);
  env = new Environment();
  var xende = env.createStripes(20);
  printout = createP();
}

function draw() {
  background(0, 50);
  printout.html('Generation: ' + generation + '<br>Lifespan: ' + count + ' / ' + lifespan + '<br>Alive: ' + alive + '<br>Avg. fitness: ' + floor(avgfitness * 10));

  alive = population.run();
  if (count == lifespan || alive == 0) {
    avgfitness = population.evaluate();
    population.selection();
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

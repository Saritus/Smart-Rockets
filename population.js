function Population(size) {
  this.rockets = [];
  if (size) {
    this.popsize = size;
  }
  else {
    this.popsize = 100;
  }
  this.matingpool = [];

  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  this.run = function() {
    var alive = 0;
    for (var i = 0; i < this.popsize; i++) {
      alive += this.rockets[i].update();
      this.rockets[i].show();
    }
    return alive;  }

  this.evaluate = function() {
    var maxfitness = 0;

    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxfitness) {
        maxfitness = this.rockets[i].fitness;
      }
    }

    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfitness;
    }

    this.matingpool = [];
    for (var i = 0; i < this.popsize; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
    //console.log(this.matingpool.length);
    return maxfitness;
  }

  this.selection = function() {
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
  }
}

function Population(size) {
  this.rockets = [];
  this.popsize = size || 100; // If size is 0, it creates 100;
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
    return alive;
  }

  this.evaluate = function() {
    var maxfitness = 0;
    var sumfitness = 0;
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
      sumfitness += this.rockets[i].fitness;
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
    return sumfitness / this.popsize;
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

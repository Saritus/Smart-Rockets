function Population() {
  this.rockets = [];
  this.popsize = 100;

  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }

  this.evaluate = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
    }
  }
}

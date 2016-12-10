function Population() {
  this.rocket = [];
  this.popsize = 100;

  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }
}

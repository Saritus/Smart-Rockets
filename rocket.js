function Rocket() {
  this.pos = createVector();
  this.vel = createVector();
  this.acc = createVector();

  this.applyForce = function(force) {
    this.acc.add(force);
  }
}

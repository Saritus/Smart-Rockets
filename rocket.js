function Rocket() {
  this.pos = createVector();
  this.vel = createVector();
  this.acc = createVector();

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(acc);
    this.pos.add(vel);
    this.acc.mult(0);
  }
}

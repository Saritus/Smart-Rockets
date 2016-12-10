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

  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 10, 50);
    pop();
  }
}

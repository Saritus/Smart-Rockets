function Rocket(dna) {
  this.pos = createVector(width/2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.fitness = 0;
  this.completed = 0;
  this.crashed = 0;

  if (dna) {
    this.dna = dna;
  }
  else {
    this.dna = new DNA();
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {

    if (!this.completed && !this.crashed) {

      var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      if (d < 10) {
        this.completed = count;
        this.pos = target.copy();
      }

      // Crashed at obstacle
      if (this.pos.x > rx && this.pos.x < rx+rw && this.pos.y > ry && this.pos.y < ry+rh) {
        this.crashed = count;
      }

      // Crashed at borders
      if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0) {
        this.crashed = count;
      }

      this.applyForce(this.dna.genes[count]);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  }

  this.show = function() {
    push();
    noStroke();
    fill(255, 150);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 25, 5);
    pop();
  }

  this.calcFitness = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = map(d, 0, width, width, 0);

    if(this.completed) {
      this.fitness *= map(this.completed, 0, lifespan, lifespan, 1);
    }
    if(this.crashed) {
      this.fitness /= map(this.crashed, 0, lifespan, lifespan, 1);
    }
  }
}

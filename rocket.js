function Rocket(dna) {
  this.pos = createVector(width / 2, height - 25);
  this.vel = createVector();
  this.acc = createVector();
  this.maxVel = 2;
  this.fitness = 0;
  this.hits = [];
  this.crashed = 0;

  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {

    if (!this.completed && !this.crashed) {

      /*var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      if (d < 10) {
        this.completed = count;
        population.completed++;
        this.pos = target.copy();
      }*/

      // Hit a target
      var hitindex;
      if (hitindex = env.hit(this.pos)) {
        this.hits.push(hitindex);
      }

      // Crashed at environment
      if (env.crashed(this.pos)) {
        this.crashed = count;
      }

      // Crashed at borders
      if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
        this.crashed = count;
      }

      this.applyForce(this.dna.genes[count]);
      this.vel.add(this.acc);
      this.vel.limit(this.maxVel);
      this.pos.add(this.vel);
      this.acc.mult(0);

      return 1;
    }
    return 0;
  }

  this.show = function() {
    push();
    noStroke();
    fill(255, 150);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 15, 3);
    pop();
  }

  this.calcFitness = function() {
    this.fitness = pow(this.hits.unique().length + 1, 2);

    if (this.crashed) {
      this.fitness = sqrt(this.fitness);
    }
  }
}

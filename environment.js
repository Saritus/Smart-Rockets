function Environment() {
  this.obstacles = [];
  this.targets = []

  // OBSTACLES
  this.addObstacle = function(obstacle) {
    this.obstacles[this.obstacles.length] = obstacle;
  }

  this.createObstacle = function(x, y, width, height) {
    this.addObstacle(new Obstacle(x, y, width, height));
  }

  this.crashed = function(pos) {
    for (var i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].crashed(pos)) {
        return true;
      }
    }
    return false;
  }

  // TARGETS
  this.addTarget = function(target) {
    this.targets[this.targets.length] = target;
  }

  this.createTarget = function(x, y, width, height) {
    this.addTarget(new Target(x, y, width, height));
  }

  this.hit = function(pos) {
    for (var i = 0; i < this.targets.length; i++) {
      if (this.targets[i].hit(pos)) {
        return i;
      }
    }
  }

  // DISPLAY
  this.show = function() {
    for (var i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].show();
    }
    for (var i = 0; i < this.targets.length; i++) {
      this.targets[i].show();
    }
  }

  // CREATE ENVIRONMENTS
  this.createSquares = function(amountObstacles, amountTargets) {
    for(var i = 0; i < amountObstacles; i++) {
      this.createObstacle();
    }
    for(var i = 0; i < amountTargets; i++) {
      this.createTarget();
    }
  }

  this.createStripes = function(sections) {
    var openwidth = 75;
    var openstart = (width/2) - (openwidth/2);
    for(var i = sections-1; i > 0; i--) {
      this.createObstacle(1, 1 + height/sections*i, openstart, 5); // LEFT
      this.createTarget(openstart+openwidth/4, 1 + height/sections*i, openwidth/2, 5); // OPENING
      this.createObstacle(openstart+openwidth, 1 + height/sections*i, width-openstart-openwidth, 5); // RIGHT
      openstart += random(-(height/sections)-(openwidth/4), (height/sections)+(openwidth/4));
    }
    return openstart + (openwidth/2);
  }

}

function Environment() {
  this.obstacles = [];
  this.targets = []

  this.size = function() {
    return this.obstacles.length;
  }

  this.add = function(obstacle) {
    this.obstacles[this.obstacles.length] = obstacle;
  }

  this.createObstacle = function(x, y, width, height) {
    this.add(new Obstacle(x, y, width, height));
  }

  this.crashed = function(pos) {
    for (var i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].crashed(pos)) {
        return true;
      }
    }
    return false;
  }

  this.show = function() {
    for (var i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].show();
    }
  }

  this.createSquares = function(amount) {
    for(var i = 0; i < amount; i++) {
      this.createObstacle();
    }
  }

  this.createStripes = function(sections) {
    var openwidth = 75;
    var openstart = (width/2) - (openwidth/2);
    for(var i = sections-1; i > 0; i--) {
      this.createObstacle(1, 1 + height/sections*i, openstart, 5); // LEFT
      this.createObstacle(openstart+openwidth, 1 + height/sections*i, width-openstart-openwidth, 5); // RIGHT
      openstart += random(-(height/sections), (height/sections));
    }
    return openstart + (openwidth/2);
  }

}

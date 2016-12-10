function Environment() {
  this.obstacles = [];

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
    for(var i = 1; i <= sections; i++) {
      var opening = random(width/2);
      // LEFT
      this.createObstacle(1, 1 + height/sections*i, opening, 5);
      // RIGHT
      this.createObstacle(opening+100, 1 + height/sections*i, width-opening-100, 5);
    }
  }


}

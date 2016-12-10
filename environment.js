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

  this.createRandomSquares = function(amount) {
    for(var i = 0; i < amount; i++) {
      this.createObstacle();
    }
  }


}

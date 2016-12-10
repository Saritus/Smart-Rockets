function Obstacle() {
  this.width = random(20, 50);
  this.height = random(20, 50);
  this.x = random(0, width-this.width);
  this.y = random(0, height-this.height);

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  this.crashed = function(pos) {
    return (pos.x > obstacle.x &&
            pos.x < obstacle.x+obstacle.width &&
            pos.y > obstacle.y &&
            pos.y < obstacle.y+obstacle.height)
  }

}

function Obstacle() {
  this.width = random(10, 20);
  this.height = random(10, 20);
  this.x = random(0, width-this.width);
  this.y = random(0, height-this.height);

  this.show = function() {
    push()
    fill(255, 128);
    rect(this.x, this.y, this.width, this.height);
    pop()
  }

  this.crashed = function(pos) {
    return (pos.x > this.x &&
            pos.x < this.x+this.width &&
            pos.y > this.y &&
            pos.y < this.y+this.height)
  }

}

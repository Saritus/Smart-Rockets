function Obstacle(x, y) {
  var border = 10;
  this.width = random(10, 20);
  this.height = random(10, 20);
  if (x) {
    this.x = x;
  }
  else {
    this.x = random(border, width - this.width - border);
  }
  if (x) {
    this.y = y;
  }
  else {
    this.y = random(border, height - this.height - border);
  }

  this.show = function() {
    push()
    fill(255, 255, 0, 128);
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

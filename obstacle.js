function Obstacle() {
  this.x = width/2;
  this.y = height/2;
  this.width = random(10);
  this.height = random(10);

  this.draw = function() {
    rect(this.x, this.y, this.width, this.height);
  }

}

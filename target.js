function Target(x, y, rwidth, rheight) {
  var border = 10;

  this.width = abs(rwidth) || random(10, 20);
  this.height = abs(rheight) || random(10, 20);
  if (rwidth < 0) {
    this.x = x - this.width || random(border, width - this.width - border);
  } else {
    this.x = x || random(border, width - this.width - border);
  }
  if (rheight < 0) {
    this.y = y - this.height || random(border, height - this.height - border);
  } else {
    this.y = y || random(border, height - this.height - border);
  }

  this.show = function() {
    push()
    noStroke();
    fill(255, 0, 0, 128);
    rect(this.x, this.y, this.width, this.height);
    pop()
  }

  this.hit = function(pos) {
    return (pos.x > this.x &&
      pos.x < this.x + this.width &&
      pos.y > this.y &&
      pos.y < this.y + this.height)
  }

}

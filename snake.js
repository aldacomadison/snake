function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 50) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  // this.death = function() {
  //   for (var i = 0; i < this.tail.length; i++) {
  //     var pos = this.tail[i];
  //     var d = dist(this.x, this.y, pos.x, pos.y);
  //     if (d < 1) {
  //       this.total = 0;
  //       this.tail = [];
  //     }
  //   }
  // }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    //fill(random(255),random(255),random(255));
    for (var i = 0; i < this.tail.length; i++) {
      //rect(this.tail[i].x, this.tail[i].y, scl, scl);
      fill(0);
      noStroke();
      triangle(this.tail[i].x-11, this.tail[i].y, this.tail[i].x, this.tail[i].y+15, this.tail[i].x+11, this.tail[i].y);
      ellipse(this.tail[i].x-5,this.tail[i].y,scl/2,scl/2);
      ellipse(this.tail[i].x+5,this.tail[i].y,scl/2,scl/2);
    }
    fill(random(255),random(255),random(255));
    ellipse(this.x, this.y, scl*2, scl*2);
    fill(0);
    ellipse(this.x-7, this.y-2, scl/2, scl/2);
    ellipse(this.x+7, this.y-2, scl/2, scl/2);


  }
}

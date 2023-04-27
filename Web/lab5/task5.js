function Bomb(time) {
    this.time = time;
  }
  
  Bomb.prototype.start = function() {
    console.log("Bomb set for " + this.time + " seconds");
    var self = this;
    setTimeout(function() {
      console.log("Boom!");
    }, this.time * 1000);
  }
  
  var myBomb = new Bomb(10);
  myBomb.start(); // will explode after 10 seconds
  
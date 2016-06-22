(function() {

    var Problem = function(x, y) {
        this.x = x;
        this.y = y;
    }

    Problem.prototype.operations =  {
      '+': function(x,y){ return x + y; },
      '-': function(x,y){ return x - y; }
    };

    Problem.prototype.calculate = function(operation){
      return this.operations[operation](this.x, this.y);
    };

    console.log(new Problem(4,5).calculate('+'));

})();

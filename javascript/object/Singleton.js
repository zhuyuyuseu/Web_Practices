//literal syntax to create a singleton
var obj = {
  a: 'a'
};

//the constructor with static variable,
//note the instance property is public
function Singleton() {
  if (typeof Singleton.instance === 'object') {
    return Singleton.instance;
  }
  this.start_time = 0;
  this.bang = "big bang";
  Singleton.instance = this;
}

var SingletonClosure = function() {
  var instance = this;
  this.start_time = 0;
  this.bang = 'bang';

  SingletonClosure = function() {
    return instance;
  };
};

var instance1 = new SingletonClosure();
var instance2 = new SingletonClosure();
console.log(instance1 === instance2);


var Universe;
(function() {
  var instance;
  Universe = function Universe() {
    if (instance) {
      return instance;
    }
    instance = this;
    // all the functionality
    this.start_time = 0;
    this.bang = "Big";
  };
}());


/**
 * function Universe() {
// the cached instance
var instance;
// rewrite the constructor
Universe = function Universe() {
return instance;
};
// carry over the prototype properties
Universe.prototype = this;
// the instance
instance = new Universe();
// reset the constructor pointer
instance.constructor = Universe;
// all the functionality
instance.start_time = 0;
instance.bang = "Big";
return instance;
}
 */

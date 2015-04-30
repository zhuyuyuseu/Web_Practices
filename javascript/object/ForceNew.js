/**
 * force new in constructor in case we forgot new
 */
function Waffle() {
  this.tests = "yummy";
}

//a new object
var good_morning = new Waffle();
console.log(typeof good_morning);
console.log(good_morning.tastes);

//if we forget new, bad_morning will be undefined because the constructor returns undefined
var bad_morning = Waffle();
console.log(typeof bad_morning);
console.log(global.tests);

//solution 1
function Waffle1() {
  var that = {};
  that.tests = "yummy";
  return that;
}

//solution 2
function Waffle2() {
  return {
    tests: "yummy"
  };
}

//but the prototype will be lost, better sollution3
function BetterWaffle() {
  //or if(!(this instanceof arguments.callee()))
  if(!(this instanceof BetterWaffle)) {
    return new BetterWaffle();
  }
  this.tests = "yummy";
}

BetterWaffle.prototype.wantAnother = true;
BetterWaffle.prototype.toString = function() {
  return "[object BetterWaffle]";
};

var firstWaffle = new BetterWaffle(),
    secondWaffle = BetterWaffle();

console.log("first tests: %s, second tests: %s", firstWaffle.tests, secondWaffle.tests);
console.log(BetterWaffle.prototype.toString.call(firstWaffle));

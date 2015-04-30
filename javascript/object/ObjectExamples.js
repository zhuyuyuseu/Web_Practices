/**
 * define a blank object, Even the simplest
 *  {} object already has properties and methods inherited from
 * Object.prototype. By “empty” we’ll understand an object that has no
 * own properties other than the inherited ones.
 * 在ie中最后一个property后面不要加逗号，否则在IE中会出错
 */
var blankObj = {};
blankObj.name = 'blank';
blankObj.getName = function() {
 return blankObj.name;
};
delete blankObj.getName;

/**
 * another example to define object with literal
 */
var student = {
  name: 'student',
  getName: function(){
    return this.name;
  }
};

/**
 * define man following literal syntax
 * @type {Object}
 */
var man = {
  a: "1",
  b: "2"
};

if(typeof Object.prototype.sayHello === 'undefined'){
  Object.prototype.sayHello = function(){};
}

console.log("for in loop...");
for(var i in man){
  console.log(i);
}

console.log("print properties filtered by hasOwnProperty...");
for(var i in man) {
  if(man.hasOwnProperty(i)){
    console.log(i);
  }
}

/**
 * The prototype chain is live, which means all objects
automatically get access to the new method, sayHello
 * @type {Object}
 */
var anotherMan = {
  a: "2"
};
for(var i in anotherMan){
  console.log(i);
}

/**
 * when augument prototype by adding functions add check logic
 */
if(typeof Object.prototype.fly !== 'function'){
  Object.prototype.fly = function() {
    console.log("fly...");
  };
}

/**
 * Objects from constructors
 */
// var car = new Object();
// car.goes = "far";

var today = new Date();

/**
 * delegate to other constructors like Number, String, Boolean
 */
// var aNumber = new Object(1);
// console.log(o.constructor === Number);

// var aString = new Object('String');
// console.log(aString.constructor === String);

// var aBoolean = new Object(true);
// console.log(aBoolean.constructor === Boolean);

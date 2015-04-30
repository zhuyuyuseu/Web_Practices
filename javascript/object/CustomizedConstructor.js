/**
 * custom constructor example: Person
 */
var Person = function(name) {
  this.name = name;
  this.say = function() {
    console.log(this.name);
  };
};

var jack = new Person('jack');
jack.say();


/**
 * improved version of Person constructor by defining
 * resuable properties in prototype
 */
var ImprovedPerson = function(name){
  this.name = name;
};

ImprovedPerson.prototype.say = function() {
  console.log(this.name);
};





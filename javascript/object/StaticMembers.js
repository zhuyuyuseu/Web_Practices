/**
 * public static member
 */
function Gadget(name) {
  this.name = name;
}

//public static member
Gadget.count = 0;

//public static method
Gadget.isShiny = function() {
  return "you bet!";
};

// a normal method added to the prototype
Gadget.prototype.setPrice = function(price) {
  this.price = price;
};
//typeof Gadget.setPrice; // "undefined"
//typeof iphone.isShiny; // "undefined"

//private static members
//Shared by all the objects created with the same constructor function
//Not accessible outside the constructor
var Gadget = (function() {
  // static variable/property
  var counter = 0;
  // returning the new implementation
  // of the constructor
  return function() {
    console.log(counter += 1);
  };
}()); // execute immediately


// constructor
var Gadget2 = (function() {
  // static variable/property
  var counter = 0,
    NewGadget;
  // this will become the
  // new constructor implementation
  NewGadget = function() {
    counter += 1;
  };
  // a privileged method
  NewGadget.prototype.getLastId = function() {
    return counter;
  };
  // overwrite the constructor
  return NewGadget;
}()); // execute immediately

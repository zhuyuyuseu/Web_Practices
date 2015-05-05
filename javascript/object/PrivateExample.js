/**
 * Your constructor functions create a closure and any
 * variables that are part of the closure scope are not exposed outside the constructor
 */
function Gadget() {
  //private member
  var name = 'iPod',
    count = 0,
    specs = {
      a: 'a',
      b: 1
    };

  this.getName = function() {
    return name + count++;
  };

  this.getSpec = function() {

  };
}

var toy = new Gadget();
console.log(toy.getName());
var toy2 = new Gadget();
console.log(toy.getName());

/**
 * another way of privacy via immediate function
 */
var myObject;
(function() {
  var name = 'ac';
  myObject = {
    getName: function() {
      return name;
    }
  };
}());

var myObject2 = (function() {
  var name = 'ac';
  return {
    getName: function() {
      return name;
    }
  };
}());


//move common property to prototype
Gadget.prototype = (function() {
  // private member
  var browser = "Mobile Webkit";
  // public prototype members
  return {
    getBrowser: function() {
      return browser;
    }
  };
}());

var toy3 = new Gadget();
var toy4 = new Gadget();
console.log(toy3.getBrowser === toy4.getBrowser);

//one more example
var myarray;
(function() {
  var astr = "[object Array]",
    toString = Object.prototype.toString;

  function isArray(a) {
    return toString.call(a) === astr;
  }

  function indexOf(haystack, needle) {
    var i = 0,
      max = haystack.length;
    for (; i < max; i += 1) {
      if (haystack[i] === needle) {
        return i;
      }
    }
    return -1;
  }
  myarray = {
    isArray: isArray,
    indexOf: indexOf,
    inArray: indexOf
  };
}());

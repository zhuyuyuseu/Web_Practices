//classic inheritance
//drawback: 该继承方法继承了Parent()instantce的所有属性，
//一般只需在prototype中设置可重用的属性，而且该构造函数不支持参数
function Parent(name) {
  this.toys = ['a', 'b'];
  this.name = name;
}

Parent.prototype.say = function() {
  return this.name;
};

function classicInherit(C, P) {
  //prototype should point to an object
  C.prototype = new P('name of parent');
  //what about C.prototype = P.prototype; ???
}

function Child(name) {}

classicInherit(Child, Parent);

var c = new Child('a');
console.log(Child.prototype.constructor);
console.log(c instanceof Child);
console.log(c instanceof Parent);
console.log("Classic child name: %s", c.say());

c.name = 'Child';
console.log("Classic child name after set property: %s", c.say());

delete(c.name);
console.log("Classic child name after delete child's name property: %s", c.say());

c.toys.pop();
console.log("Classic child changed parents toys: " + c.toys);

//improve by borrow parent constructor
function NewChild(name) {
    Parent.apply(this, arguments);
  }
  //note if we don't define prototype, the NewChild's prototype will be empty object
NewChild.prototype = Parent.prototype;
// NewChild.prototype.constructor = NewChild;

var newChild = new NewChild('child');
console.log("New child say" + newChild.say());
console.log(newChild.hasOwnProperty('name'));
delete(newChild.name);
console.log("New child say after delete name: " + newChild.say());

//yes we can borrow
function AnotherParent(age) {
  this.age = age || 1;
}

AnotherParent.prototype.getAge = function() {
  return this.age;
};

function ChildWithMultiParents(name, age) {
    Parent.apply(this, [name]);
    AnotherParent.apply(this, [age]);
  }
  //nothing from the prototype gets inherited
var anotherChild = new ChildWithMultiParents('child with multi parents', 11);
console.log("Child with multi parents: [name: %s, age: %d]", anotherChild.name, anotherChild.age);
console.log(ChildWithMultiParents.protoype);

//temporary constructor
function inheritanceWithTempConstructor(C, P) {
  var F = function() {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}

function Kid() {}

inheritanceWithTempConstructor(Kid, Parent);
var kid = new Kid();
console.log("Kid's constructor " + Kid.prototype.constructor);
console.log(kid.say());


//mordern prototypal inheritance
//In the prototypal inheritance pattern, your parent doesn’t need to be created with the
// literal notation (although that is probably the more common way). You can have constructor
// functions create the parent.
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function Person() {
  this.name = "Person";
}

Person.prototype.getName = function() {
  return this.name;
};

var papa = new Person();
var kid2 = object(papa);
//what if kid2 = object(Person.prototype); ?
console.log("prototypal inheritance's child name: %s", kid2.getName());

//use ECMAScript5 的标准做法
var kid3 = Object.create(papa);
console.log(kid3.hasOwnProperty('name'));
console.log(kid3.getName());

var kid4 = Object.create(papa, {
  name: {
    value: 'kid4'
  }
});
console.log(kid4.hasOwnProperty('name'));


//inheritance by copy
function extend(parent, child) {
  var i;
  child = child || {};
  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      child[i] = parent[i];
    }
  }
  return child;
}

var dad = {
  name: "Adam"
};
var kid = extend(dad);
console.log(kid.name);

function extendDeep(parent, child) {
    var i,
      toStr = Object.prototype.toString,
      astr = "[object Array]";
    child = child || {};
    for (i in parent) {
      if (parent.hasOwnProperty(i)) {
        if (typeof parent[i] === "object") {
          child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
          extendDeep(parent[i], child[i]);
        } else {
          child[i] = parent[i];
        }
      }
    }
    return child;
  }
  //the angular.copy, jquery.extend implement the same function

//the node way
//https://nodejs.org/api/all.html#all_util_inherits_constructor_superconstructor
/**
 * var inherits = function (ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false
        }
    });
};
 * @type {[type]}
 */
var util = require('util');

function Foo() {
  this.name = 'foo';
}
util.inherits(Foo, Person);

var foo = new Foo();
console.log(foo.getName());


//bind method
if (typeof Function.prototype.bind === "undefined") {
  Function.prototype.bind = function(thisArg) {
    var fn = this,
      slice = Array.prototype.slice,
      args = slice.call(arguments, 1);
    return function() {
      return fn.apply(thisArg, args.concat(slice.call(arguments)));
    };
  };
}

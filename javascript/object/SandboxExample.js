/**
 * a global constructor
 */
function Sandbox() {
  var args = Array.prototype.slice.call(arguments),
    callback = args.pop(),
    modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
    i;
  //in case Sandbox(...)
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  // now add modules to the core `this` object
  // no modules or "*" both mean "use all modules"
  if (!modules || modules === '*') {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }
  // initialize the required modules
  for (i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }
  // call the callback
  if(typeof callback === 'function'){
    callback(this);
  }
}

Sandbox.modules = {};
Sandbox.modules.dom = function(box) {
  box.getElement = function() {};
  box.getStyle = function() {};
  box.foo = "bar";
};
Sandbox.modules.event = function(box) {
  // access to the Sandbox prototype if needed:
  // box.constructor.prototype.m = "mmm";
  box.attachEvent = function() {};
  box.dettachEvent = function() {};
};
Sandbox.modules.ajax = function(box) {
  box.makeRequest = function() {};
  box.getResponse = function() {};
};
// any prototype properties as needed
Sandbox.prototype = {
  name: "My Application",
  version: "1.0",
  getName: function() {
    return this.name;
  }
};

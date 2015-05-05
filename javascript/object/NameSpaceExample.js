/**
 * name space pattern
 * 1. create a global object for the application and library
 * 2. add functionality to the object.
 */
var PORTAL = PORTAL || {};
//or
// if(typeof PORTAL === 'undefined') {
//   PORTAL = {};
// }
//define a constructor
PORTAL.Blog = function(title, author) {
  this.title = title;
  this.author = author;
};

//define a variable
PORTAL.version = '1.0.0';

//sub-modules
PORTAL.modules = {};
PORTAL.modules.module1 = {a: 1, b: 2};

//define a common function to check name collisions
var namespace = function(ns, ns_string){
  var global = this;
  if(typeof(ns) === 'string'){
    global[ns] = global[ns] || {};
    if(typeof(ns_string) === 'string') {
      var parts = ns_string.split('.'),
          parent = global[ns];
      if(parts[0] === ns){
        parts = parts.sclice(1);
      }
      for(i = 0, length = parts.length; i < length; i++) {
        var part = parts[i];
        if(typeof parent[parts[i]] === 'undefined'){
          parent[part] = {};
        }
        parent = parent[part];
      }
      return parent;
    }
  } else {
    return null;
  }
};

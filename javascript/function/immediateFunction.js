/**
 * define a module with immediate function,
 * normally in front we use this
 * @param  {[type]} global [description]
 * @return {[type]}        [description]
 */
(function(global) {
  var version =  "1.0.0";

  global.ui = {
    version : version
  };
})(this);

console.log(this.ui.version);

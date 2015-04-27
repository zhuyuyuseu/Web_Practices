var add = function(x,y) {
  if(typeof y == "undefined"){
    return function(y){
      return x + y;
    }
  }
  return x + y;
};

var simpleAdd = function(x, y){
  return x + y;
};

function schonfinkelize(fn) {
  var slice = Array.prototype.slice,
  stored_args = slice.call(arguments, 1);
  return function () {
    var new_args = slice.call(arguments),
    args = stored_args.concat(new_args);
    return fn.apply(null, args);
  };
}

console.log(add(10)(20));

console.log(schonfinkelize(simpleAdd, 1, 2)());

console.log(schonfinkelize(simpleAdd, 1)(2));

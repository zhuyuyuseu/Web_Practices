var memo = function(param) {
  var f = arguments.callee,
      key = JSON.stringify(param),
      result = null;
  if(!f.cache[key]){
    console.log("do calc.....");
    result = "value of param " + param;
    f.cache[key] = result;
  }
  return f.cache[key];

}

memo.cache = {};

console.log(memo('a'));
console.log(memo('a'));

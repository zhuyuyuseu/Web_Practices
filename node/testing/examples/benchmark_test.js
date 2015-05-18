var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var arr = [1, 2, 3, 4, 5];

var callback = function (item) {
  return item;
};

suite.add('nativeMap', function () {
  return arr.map(callback);
}).add('customMap', function() {
  var ret = [];
  for(var i = 0, length = arr.length; i < length; i++){
    ret.push(callback(arr[i]));
  }
  return ret;
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
}).run({'async':true});

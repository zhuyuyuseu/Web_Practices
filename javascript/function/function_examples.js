/**
 * define a function
 * @param {[type]} x [description]
 * @param {[type]} y [description]
 */
function add(x, y) {
	return x + y;
}

/**
 * create a function object
 * @type {Function}
 * 1. can be used to construct a functino dynamically
 * 2. but a new object will be created each time it's called.
 */
var functionObject = new Function("x", "y", "return x + y;");

/**
 * create a funcation variable, anonymous function
 */
var add = function(x, y) {
	return x + y;
};

/**
 * create a function with a function expression, a named one
 */
var subtract = function subtract(a, b) {
	return a - b;
}

console.log("function add without function name %s", add.name);
console.log("function substract is named with %s", subtract.name);

/** pass function as parameter */
var a = [1, 2, 3];
a.sort(function(a, b) { return b - a ;});

/** run a function immediately after it's defined*/
var square = (function(x) {
	return x * x;
})(10);
console.log("%d", square);
console.log(typeof add);
console.log(add instanceof Function);



/**
 * use functions to implement strateges
 */
var operators = {
	add : function(x, y){
		console.log("required number of arguments: %d", arguments.callee.length);
		console.log("actual number of arguments: %d", arguments.length);
		return x + y;
	},
	subtract: function(x, y){
		return x - y;
	}
};

function op(operator, args){
	if(operator && typeof(operators[operator]) === 'function') {
		return operators[operator].apply(null, args);
	}else{
		return null;
	}
};

console.log(op('add', [1, 2]));

/** 
 *  another example of call
 */
console.log(op.call(null, 'subtract', [2,1]));

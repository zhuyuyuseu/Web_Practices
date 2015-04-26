var a = {
	c: "c in a",
	d: "d in a"
};

/**
 * with will push a to the first level of scope chain so local c will be hidden
 * @return {[type]} [description]
 */
function testWith() {
	var c = "local c";
	with(a) {
		console.log(c);
		console.log(d);
	}
	console.log(c);
}

/** scope chain changed with eval */
function scopeChangeWithEval(code) {
	eval(code);
	var b = a;
	console.log(b);
}

testWith();
scopeChangeWithEval('var a = "evaled a"');

/**
 * this example shows the scope means
 */
function testScope() {
	var a = 1;
	if (a == 1) {
		var a = 2;
		console.log(a);
	}
	console.log("out of if the a is " + a);
}
testScope();


// antipattern
// for illustration only
// global functions function foo() {

function foo() {
console.log('global foo'); 
}


function bar() {
	console.log('global bar');
}

function hoistMe() {
	console.log(typeof foo); // "function"
	console.log(typeof bar); // "undefined"
	foo(); // "local foo"
	bar(); // TypeError: bar is not a function
	// function declaration:
	// variable 'foo' and its implementation both get hoisted￼￼￼
	function foo() {
			console.log('local foo');
		}
		// function expression:
		// only variable 'bar' gets hoisted // not the implementation
	var bar = function() {
		console.log('local bar');
	};
}
hoistMe();
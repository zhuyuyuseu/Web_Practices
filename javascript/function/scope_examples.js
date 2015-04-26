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
	with(a){
		console.log(c);
		console.log(d);
	}
	console.log(c);
}

/** scope chain changed with eval */
function scopeChangeWithEval(code){
	eval(code);
	var b = a;
	console.log(b);
}

testWith();
scopeChangeWithEval('var a = "evaled a"');
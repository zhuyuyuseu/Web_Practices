 /**
  * closure examples
  */
 
 function a() {
 	var i = 0;
 	return function() {
 		i++;
 		console.log("i in function a %d", i);
 	}
 };

 var increaseA = a();
 increaseA();
 increaseA();
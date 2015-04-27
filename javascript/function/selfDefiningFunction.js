var scareMe = function(){
  console.log("Boo");
  scareMe = function () {
    console.log("Double boo!");
  }
}



scareMe.property = "property";

var prank = scareMe;
var spooky = {
  boo : scareMe
};

prank();
console.log("after prank scareMe " + scareMe.property);
prank = scareMe;
prank();
console.log("reassigned prank property %s", prank.property);

spooky.boo();
spooky.boo();

console.log("spooky property %s", spooky.boo.property);

scareMe();
scareMe();
console.log("scareMe " + scareMe.property);

/**
 * Bundle constructor
 */
function Bundle(title, parameters) {
  this.title = title || '';
  this.parameters = parameters || [];
}

//export the constructor as whole module
module.exports = Bundle;

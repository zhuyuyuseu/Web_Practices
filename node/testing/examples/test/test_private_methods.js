var rewire =  require('rewire');
var should = require('should');

describe('#test private methods with rewire', function () {
  var lib = rewire('../lib/a_module_with_private_methods.js');
  var limit = lib.__get__('limit');
  limit(10).should.be.equal(10);
});

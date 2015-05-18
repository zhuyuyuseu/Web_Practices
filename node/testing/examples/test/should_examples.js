var should = require('should');
var user = {
  name: 'tj',
  pets: ['tobi', 'loki']
};

describe('test with should', function(){
  describe('# Test property', function(){
    it('should have property name', function(){
      user.should.have.property('name','tj');
    });
  });
});

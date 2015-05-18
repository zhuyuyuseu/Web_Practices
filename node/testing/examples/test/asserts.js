var assert = require('assert');
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
    });
    it('should return 0 when the value is present at index 0', function(){
      assert.equal(0, [1,2,3].indexOf(1));
    });
  });
  describe('#test deep euqal', function(){
    it('test deep equal', function(){
      var a = [1, 2, 3];
      var b = [1, 2, 3];
      assert.deepEqual(a, b);
    });
  });
});

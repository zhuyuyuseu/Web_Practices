var should = require('should');

beforeEach(function(){
  console.log('before hooks out of describe');
});

describe("describe test hooks", function() {
  before(function(){
    console.log("before hook in describe");
  });
  beforeEach(function(){
    console.log("before each hook in describe");
  });
  after(function(){
    console.log("after hook in describe");
  });
  afterEach(function() {
    console.log("after each hook in describe");
  });
  it('# test indexOf() of Array', function(){
      [1, 2].indexOf(1).should.equal(0);
  });
  it('# test slice() of Array', function(){
      [1, 2].slice(1).should.be.an.instanceOf(Array);
  });

});

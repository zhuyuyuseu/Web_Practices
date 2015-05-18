var muk = require('muk');
var fs = require('fs');
var should = require('should');

describe('test fs with mock', function() {
  beforeEach(function(){
    muk(fs, 'readFile', function(path, encoding, callback) {
      process.nextTick(function(){
        callback(new Error("mock read file with muk"));
      });
    });
  });

  it("test muck read file", function(done) {
    fs.readFile('./path', 'utf8', function(err, data){
      err.should.be.instanceof(Error);
      done();
    });
  });

  afterEach(function() {
    muk.restore();
  });

});

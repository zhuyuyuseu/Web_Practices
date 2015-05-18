var readBundle = require('../bundle_parser.js').readBundle;
var should = require('should');

describe('read bundle should be ok', function(done) {
  it('read bundle should be ok', function(done){
    readBundle('./bundle_parser.js', function(err,data){
      if(err) return done(err);
      (data.length).should.be.type('number');
      done();
    });
  });
});

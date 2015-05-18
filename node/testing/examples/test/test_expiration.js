describe('test aync with time out', function(){
  this.timeout(500);

  it('time out call', function(){
    setTimeout(function(){
      console.log("time out");
    }, 1000);
  });
});

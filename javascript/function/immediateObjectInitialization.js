({
 startServer: function() {
  console.log("start server....");
 },
 init: function(){
  console.log("init ...");
  this.startServer();
  console.log("more steps....");
 }
}).init();

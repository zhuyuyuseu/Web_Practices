//import a built-in module
var fs = require('fs');
var Bundle = require('./lib/bundle.js');
var utils = require('vanguard-utils')();

// var bundle = new Bundle('bundle',[]);
// console.log(bundle.title);

// console.log(utils.array.isArray([]));
var options = {
  encoding: 'utf-8'
};
fs.readFile('./UDSDocuments.html', options, function(err, data){
  if(err){
    console.log("Read failed: %s", err.code);
  }else{
    var bundles = [], matchResult = null, regexSectionPattern = /<class\="title">\s*<h2>/gm;
    while((matchResult = regexSectionPattern.exec(data)) !== null){
      console.log(matchResult[0]);
    }
    // console.log(data);
  }
});

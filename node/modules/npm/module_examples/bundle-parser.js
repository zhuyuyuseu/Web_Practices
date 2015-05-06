//import a built-in module
var fs = require('fs');
var Bundle = require('./lib/bundle.js');
//var utils = require('vanguard-utils')();

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
    var bundles = [], matchResult = null, regexSectionPattern = /<div\s+class\="title">[\w\W]*?<\/table>/gm,
        bundleSection = null;
    while((matchResult = regexSectionPattern.exec(data)) !== null){
      bundleSection = matchResult[0];
      if(bundleSection){
        var firstIndex = bundleSection.indexOf('<h2>'), endIndex = bundleSection.indexOf('</h2>');
        console.log(bundleSection.substr(firstIndex + 4, endIndex - firstIndex - 4));
        break;
      }
    }
    // console.log(data);
  }
});

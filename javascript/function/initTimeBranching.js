/**
 * attach plataform dependent utils with Init-Time-Branching
 * use this pattern 适用针对不同平台做不同的初始化
 * @type {[type]}
 */
var os = require('os');
var platform = os.platform();
console.log(os.platform());

var utils = {
  copyFile: null
}

if(platform === 'win32'){
  utils.copyFile = function(){
    console.log("it's windows");
  }
}else{
  utils.copyFile = function() {
    console.log("no windows!");
  }
}

utils.copyFile();


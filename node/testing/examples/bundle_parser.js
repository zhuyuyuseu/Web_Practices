var fs = require('fs');

var readBundle = function (path, callback) {
  fs.readFile(path, { encoding: 'utf8'}, function (err, data){
    if(err){
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.readBundle = readBundle;

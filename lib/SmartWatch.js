// ### Smart Watch

// This class inherits from the Watch class and the Tablet class.

// The constructor should invoke the Watch class constructor.
let Watch = require('./Watch.js');
let Tablet = require('./Tablet.js');


function SmartWatch(){
  Watch.call(this);
}

function exportFunction(destination, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}

exportFunction(SmartWatch.prototype, Watch.prototype);
exportFunction(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;
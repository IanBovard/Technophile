
// ### Smart Phone

// This class inherits from the Phone class, Tablet class, Game Console class, and the Web Browser class.

// The constructor should accept a single argument `phoneNumber` and invoke the Phone class constructor passing in `phoneNumber`, and invoke the Game Console class constructor with the hard coded constructor argument `'Smart Phone'`


let Phone = require('./Phone.js');
let Tablet = require('./Tablet.js');
let GameConsole = require('./GameConsole.js');
let WebBrowser = require('./WebBrowser.js');


function SmartPhone(phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}

function exportFunction(destination, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}

exportFunction(SmartPhone.prototype, Phone.prototype);
exportFunction(SmartPhone.prototype, Tablet.prototype);
exportFunction(SmartPhone.prototype, GameConsole.prototype);
exportFunction(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;
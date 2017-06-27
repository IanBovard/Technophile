// ### Nintendo DS

// This class inherits from the Game Console class and the Web Browser class.

// The constructor should invoke the Game Console class constructor with the hard coded constructor argument `'Nintendo DS'`
let GameConsole = require('./GameConsole.js');
let WebBrowser = require('./WebBrowser.js');


function NintendoDS(){
  GameConsole.call(this, 'Nintendo DS');
}

function exportFunction(destination, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}

exportFunction(NintendoDS.prototype, GameConsole.prototype);
exportFunction(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;
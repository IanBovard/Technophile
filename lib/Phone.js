// ### Phone

// The constructor should accept a single argument `phoneNumber`, and set a public variable `phoneNumber` to the value of that constructor argument.

// The class should define a `callPhone` method that accepts a single argument `phoneNumber` and return a status message. status message should be in the format: '`this phone number` calls `other phone number`'
// example: `5555555 calls 4444444`
  function Phone (phoneNumber){
    this.phoneNumber = phoneNumber;
  }
  Phone.prototype.callPhone = function (phoneNumber){
    let message = this.phoneNumber + ' calls ' + phoneNumber;
    return message;
  };
module.exports = Phone;
// ### Watch

// The constructor should set a public variable `bodyPart` to no value.

// The class should have an `wear` method that accepts a single argument `bodyPart` and assign the value of that argument to `this.bodyPart`

function Watch(){
  this.bodyPart = null;
}
Watch.prototype.wear = function (bodyPart){
  this.bodyPart = bodyPart;
};

module.exports = Watch;
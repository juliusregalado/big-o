Array.prototype.toSet = function () {
  var set = {};

  this.forEach(function (e) {
    set[e] = true;
  });

  return set;
};

Array.prototype.withoutIndex = function (i) {
  return this.slice(0, i).concat(this.slice(i + 1));
};

Array.prototype.sum = function () {
  var adder = function (a, b) { return a + b }
  return this.reduce(adder, 0);
};

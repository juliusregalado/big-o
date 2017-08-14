// generalized two-sum, three-sum, four-sum, etc
Array.prototype.kSum = function (sum, k) {
  var i, prev, elem;
  var set = this.toSet(); // defined in helpers.js

  if(k === 1) {
    return set[sum] ? [sum] : null;
  }

  for(i = 0; i < this.length; i ++) {
    elem = this[i];
    subArray = this.withoutIndex(i); // remove element from array to not count twice. (defined in helpers.js)
    prev = subArray.kSum(sum - elem, k - 1);
    if (prev) {
      return [elem].concat(prev);
    }
  }

  return null;
};


var arr = [2, 3, 6, 7, 9, 17];
arr.kSum(10, 2); // => [3, 7]
arr.kSum(20, 2); // => [3, 17]
arr.kSum(20, 3); // => null
arr.kSum(20, 4); // => [2, 3, 6, 9]
arr.kSum(20, 5); // => null

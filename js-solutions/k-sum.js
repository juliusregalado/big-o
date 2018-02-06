// two-sum
Array.prototype.twoSum = function (sum) {
  var elem, diff;
  var set = this.toSet();

  for(var i = 0; i < this.length; i++) {
    elem = this[i];
    diff = sum - elem;
    if (set[diff]) {
      return [elem, diff]
    }
  }

  return null;
};

// generalized two-sum, three-sum, four-sum, etc
Array.prototype.kSum = function (sum, k) {
  var i, prev, elem;

  if(k === 2) {
    return this.twoSum(sum);
  }

  for(i = 0; i < this.length; i ++) {
    elem = this[i];
    prev = this.kSum(sum - elem, k - 1);
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

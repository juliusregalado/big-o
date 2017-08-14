// there are algorithms with better run-times than these
// but these have very small code-complexity
// find a solution that is poly-time and will a million dollars !

// SOLUTION 1 (using kSum)
Array.prototype.subsetSum = function () {
  for(var i = 1; i <= this.length; i++){
    var result = this.kSum(0, i); // find set of size i that sums to zero
    if(result) { return result; }
  }

  return null;
};

// SOLUTION 2
Array.prototype.subsetSum = function () {
  var subsets = this.subsets(); // defined in subsets.js
  var len = subsets.length;
  var i, subset;

  for(i = 0; i < len; i ++) {
    subset = subsets[i];
    if(subset.length > 0 && subset.sum() === 0) { // sum defined in helpers.js
      return subset;
    }
  };
};

[-12, -10, -2, 3, 5, 6, 11, 13].subsetSum(); //=> [11, 3, -2, -12]

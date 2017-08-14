
// SEE https://git.generalassemb.ly/wdi-nyc-delorean/LECTURE_U02_D03_Recursion/blob/solution/problems/11_subsets.js
Array.prototype.subsets = function () {
  if (this.length === 0) { return [[]]; }

  var first = this[0];
  var allButFirst = this.slice(1); // all but first element
  var prev = allButFirst.subsets();

  var result = prev.slice(); // copy prev into result
  var setWithFirst;

  prev.forEach(function (subset) {
    setWithFirst = subset.concat([first]);
    result.push(setWithFirst); // push in the set with `first` included
  });

  return result;
};

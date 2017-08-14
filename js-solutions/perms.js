var perms = function (n) {
  if(n === 0) { return [[]]; }

  var prev = perms(n - 1);
  var result = [];

  prev.forEach(function (perm) {
    result.push([0].concat(perm));
    result.push([1].concat(perm));
  });

  return result;
};

perms(0); // => [[]]
perms(1); // => [[0], [1]]
perms(2); // => [[0, 0], [0, 1], [1, 0], [1, 1]] (order does not matter)
perms(3); // => [ [0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1],
          //      [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1] ] (order does not matter)

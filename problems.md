## Run-time practice

**Fun!**

For each problem:

* What do we _think_ would be the best run-time for an algorithm that solves it?  Why?
* It is similar to some other problem we know the run-time of?
* Would we be able to write the pseudocode?
* Would we be able to write the code? (In JS, for example)
* You _may_ start the _pseudo_-code if it helps but you do not need to.
* Do NOT write any _code_-code.  That's not the point of this exercise.


### Find element in unsorted array

`contains?(arr, elem)` checks if an unsorted array `arr` has a given element `elem`


### Count a given element in unsorted array

`count(arr, elem)` counts the number of times some element `elem` appears in an array `arr`.


### Bookends

`bookends?(arr)` checks to see if the first and last element of `arr` are equal


### Permutations

`perms(size)` gives all possible arrays of length `size` containing the numbers 0 and 1

**ex**: `perms(0)` => `[[]]`

**ex**: `perms(1)` => `[[0], [1]]`

**ex**: `perms(2)` => `[[0, 0], [0, 1], [1, 0], [1, 1]]`

**ex**: `perms(3)` => `[[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]]`


### Three-sum

Yes the name is funny but this is a real problem

`three_sum(arr, num)` is similar to [Two-sum][two-sum] but with a set of **three** numbers in `arr` that sum to some given input `num`.

> "Big-O !! Three-sum !! hahaha ROFL do you get it ??"

> Yes, stacey I get it. Please calm down and do your work.

### K-sum

What about `four_sum(arr, num)`? `five_sum(arr, num)`? `k_sum(arr, num, k)`?


### Subset-sum

Given an array of numbers, find any (non-empty) subset that sum to 0

**ex**: `subset_sum([-13, -7, -2, 1, 3, 8])` => `[-7, -2, 1, 8]` _(-7 + -2 + 1 + 8 = 0)_

**ex**: `subset_sum([-9, -4, 2, 3, 5, 12])` => `zilch` _(no subset sums to 0)_

Pretty straight-forward right?  Well, **find a poly-time solution and win a million dollars!!**

> Seriously. Solving this or any [NP-complete problem](https://en.wikipedia.org/wiki/NP-completeness#NP-complete_problems) in poly-time proves the [P vs NP problem](https://git.generalassemb.ly/wdi-nyc-delorean/LECTURE_U03_D05_ES6-Big-O#super-advanced-resources) and [earns you 1 million dollars](https://en.wikipedia.org/wiki/Millennium_Prize_Problems)


### Subsets

return all subsets of an array

**ex**:
```javascript
subsets([]);        // => [[]]
subsets([1]);       // => [[], [1]]
subsets([1, 2]);    // => [[], [1], [2], [1, 2]]
subsets([1, 2, 3]); // => [[], [1], [2], [1, 2], [3], [2, 3], [1, 2, 3]]
```



[two-sum]: https://git.generalassemb.ly/wdi-nyc-delorean/LECTURE_U03_D05_ES6-Big-O#two-sum

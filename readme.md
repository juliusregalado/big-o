# Time complexity and Big O

## What is Big O?

From [interview cake](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)

> Big O notation is the language we use for articulating how long an algorithm takes to run. It's how we compare the efficiency of different approaches to a problem.

> With big O notation we express the runtime in terms of—brace yourself—how quickly it grows relative to the input, as the input gets arbitrarily large.

A Formal definition can be found [here](https://en.wikipedia.org/wiki/Big_O_notation#Formal_definition).  (This is very math-y)

## Examples

### Matching key-val

Given an object `obj`, a key `key`, and a value `val`, check to see if there is a key in `obj` with value `val`.

#### Algorithm 1:
```
func check_pair(obj, key, val):
  return obj.has_key?(key) && obj[key] == val
```

No matter how large our `obj` is, it takes the same amount of time to check to see if it has a key and check that 2 values match.  (We accept this as given.)  Therefore, this is algorithm runs in `constant time`.  In Big-O notation this is `O(1)`.

#### Algorithm 2:

```
func check_pair(obj, key, val):
  for_each_key k in obj:
    if(k == key && obj[k] == val):
      return true
  return false
```

Here we have to loop over each key in `obj`.  Inside of the loop we just do a quick operation (that we will accept as constant time).  If there are 5 pairs, we will have to iterate 5 times.  If there are 6, then 6.  If 7, then 7...

We call this `linear` or `O(n)` (where `n` is the size of our object).  With an object of size `n` we will have about `n` operations.

> So which algorithm is "better"?  Which has a smaller run-time?

### Find the largest element in a list

Create a function `largest_element` that take an array `arr` and returns the largest element.

#### Algorithm 1:
```
func largest_element(arr):
  for_each_element x in arr:
    return x if is_largest?(x, arr)


func is_largest?(x, arr):
  for_each_element y in arr:
    return false if y > x

  return true
```

First let's figure out the run-time of `is_largest?`.  Assume our `arr` has length 5.  Then in the worst case we will have to iterate over 5 elements.  If there are 6, then 6...

We saw this pattern above.  This is `linear` or `O(n)`.  (Where `n` is the length of `arr`).

Now let's figure out the run-time of `largest_element`.  Again, assume our `arr` has length 5.  Then in the worst case we will have to iterate over 5 elements.  For each of those, we have to check `is_largest?(x, arr)`.  As shown above, this has a run-time of `O(n)`.  This means we will have to do 5 operations for every 5 elements in `arr`.

If `arr` is of length **5**, we will have to do **5 * 5 = 5² = 25** operations.

If `arr` is of length **6**, we will have to do **6 * 6 = 6² = 36** operations.

If `arr` is of length **7**, we will have to do **7 * 7 = 7² = 49** operations.

We call this `O(n²)`.

#### Algorithm 2:
```
func largest_element(arr):
  max = arr[0]

  for_each_element x in arr:
    if x > max:
      max = x

  return max
```

In the worst case scenario we will have to iterate over every element in array and compare it to just 1 other element.  For an array of length 5, this is 5 operations.  For an array of length 6, it is 6.  For `n` it is `n`.  Thus the run-time of our whole algorithm is `O(n)`.

### Possible palindrome

Given a word `word`, determine if it is possible to re-arrange the characters such that they would form a palindrome.

**Ex:** `poss_pal?("cracera")` is `true` because `"racecar"` is a palindrome.

**Ex:** `poss_pal?("stacey")` is `false` because there is no anagram that would yield a palindrome.

Let's assume we already have an `all_anagrams` function.

#### Algorithm 1

```
func poss_pal?(word):
  for w in all_anagrams(word):
    if is_pal?(w):
      return true

  return false

func is_pal?(word):
  return word.reverse() == word
```

For a word of length 5, how many anagrams are there? 5 choices for the first letter, 4 for the second, three for the third... or **5 * 4 * 3 * 2 * 1 = 5!** anagrams.  If the word had length 6, there would be **6!** anagrams.  For a word of length `n`, there are `n!` anagrams.

This means we have `n!` iterations of our loop.  In each loop we have to check `is_pal?(w)`.  For a word of length `n`, we would have `n` characters to reverse so the run-time of `is_pal?` is `O(n)`.

Thus, the over-all run-time is `O(n * n!)`.  Yuck.

#### Algorithm 2

Hm.  Is there a way we can do better?  What do all anagrams have in common?

Let us try to pseudocode an algorithm with a smaller run time.



### Resources

* [Big O cheatsheet](http://bigocheatsheet.com/)
  - The complexity chart is a good visual to understand common run times
  - Good information about run time of algorithms in data structures (interesting but you don't *need* to know this)
  - Different run times of sorting algorithms is also interesting but you certainly don't need to know them all.  You probably *should* know that sorting can be done in `O(n⋅log(n))` time.


* [A concise article on Big O](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)
  - More example algorithms
  - Also discusses big O in terms of *space* complexity


* [Formal definition of Big O](https://en.wikipedia.org/wiki/Big_O_notation#Formal_definition)
  - Very technical
  - You definitely don't need to understand or even know this definition.  Most people don't.  Understanding how Big O works is much more important


* [A refresher on logarithms](https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/a/intro-to-logarithms)
  - A basic understanding of logarithms may give you a better grasp of `O(log(n))` and `O(n⋅log(n))`

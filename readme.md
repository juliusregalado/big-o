---
title: Time complexity and Big O
type: lesson
duration: "2:30"
creator:
    name: Ari Brenner
    city: NY
competencies: Programming
---

# Time complexity and Big O

### Objectives
*After this lesson, students will be able to:*
- Describe the concept of time and space-complexity
- Compare/contrast [common run-times](https://git.generalassemb.ly/wdi-nyc-delorean/LECTURE_U03_D05_ES6-Big-O#common-run-times) in Big-O notation
- Recognize patterns between algorithms and their run-times

### Preparation
*Before this lesson, students should:*
- Be comfortable reading and writing pseudocode
- Have practice with iterating over arrays and objects
- Have a willingness to touch [some mathematics](https://git.generalassemb.ly/gist/ari/4ae9e8b95ec160192c878d9d33f6186d)!

## Why are we learning this?

Many reasons.  Here are the big ones

* For **yourself**
  - Be able to quantify and improve your algorithms.
  - You will better understand code (include your own)
  - You will better be able to talk about your code.
* For **interviews**
  - If you whiteboard during an interview you probably be asked what the run-time of your algorithm is.
  - If not, tell them anyway!
* For the **money** and for **the world**
  - Learn this stuff and you could [win a million dollars and change the world over night](https://git.generalassemb.ly/wdi-nyc-delorean/LECTURE_U03_D05_ES6-Big-O#super-advanced-resources)
  - (This is a stretch-goal)

## What is time complexity?

Time complexity is a measure how long an algorithm takes to run given the size of its inputs.  Big-O the most common notation for quantifying the complexity.

![o](imgs/o.jpg)


## Introducing Big-O

From [interview cake](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)

> Big O notation is the language we use for articulating how long an algorithm takes to run. It's how we compare the efficiency of different approaches to a problem.

> With big O notation we express the runtime in terms of—brace yourself—how quickly it grows relative to the input, as the input gets arbitrarily large.

In other words, Big-O represents the (time) complexity of an algorithm as the input size grows.  With Big-O, we always consider **worst-case-scenario**.

The formal definition is very math-y.  Let us instead practice understanding run-time with _examples_.

## Examples

### Matching key-val

Given an object `obj`, a key `key`, and a value `val`, check to see if there is a key in `obj` with value `val`.

#### Algorithm 1
```
func check_pair(obj, key, val):
  return obj.has_key?(key) && obj[key] == val
```

No matter how large our `obj` is, it takes the same amount of time to check to see if it has a key and check that 2 values match.  (We accept this as given.)  Therefore, this is algorithm runs in `constant time`.  In Big-O notation this is `O(1)`.

#### Algorithm 2

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

---

### Find the largest element in a list

Create a function `largest_element` that take an array `arr` and returns the largest element.

#### Algorithm 1
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

#### Algorithm 2
```
func largest_element(arr):
  max = arr[0]

  for_each_element x in arr:
    if x > max:
      max = x

  return max
```

In the worst case scenario we will have to iterate over every element in array and compare it to just 1 other element.  For an array of length 5, this is 5 operations.  For an array of length 6, it is 6.  For `n` it is `n`.  Thus the run-time of our whole algorithm is `O(n)`.

---

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

Thus, the over-all run-time is `O(n⋅n!)`.  Yuck.

> We actually drop the first `n` because it is dwarfed by the `n!` leaving us with `O(n!)`

#### Algorithm 2

Hm.  Is there a way we can do better?  What do all anagrams have in common?

Let us try to pseudocode an algorithm with a smaller run time.

---

### Check for element in sorted list

Assume we have a sorted array `sorted` of numbers.  Write a function `contains?(sorted, num)` to check if some `num` is in sorted.

**Ex:** `contains?([2,3,5,7,11,13,17], 13)` is `true`

**Ex:** `contains?([4,8,15,16,23,42], 21)` is `false`


#### Algorithm 1
```
func contains?(sorted, num):
  forEach n in sorted:
    if n == num:
      return true

  return false
```

What is the run-time of this algorithm?  Can we do even better?

#### Algorithm 2
```
func contains?(sorted, num):
  leftIdx = 0
  rightIdx = sorted.length - 1

  while(leftIdx <= rightIdx):
    midIdx = (leftIdx + rightIdx) / 2
    midElem = sorted[midIdx]

    if num < midElem:
      rightIdx = midIdx
    else_if num > midElem:
      leftIdx = midIdx
    else
      return true

  return false
```

Hm.

Introducing a sexy new run-time: `O(log n)`.  It is even slimmer than `O(n)`.  It grows very, very slowly.  (The base of the log does not matter as these all differ by a constant).

> This is a famous algorithm called [binary search](http://www.geeksforgeeks.org/binary-search/).  It can be adapted to return the _index_ of the element searched for.  It can also be done with recursion!  (Check out the Python solutions for both)

---

### Two-sum

Given an array `arr` and number `num`, return a pair of numbers summing to `num`.

#### Algorithm 1

```
func two_sum(arr, num):
  for_each n in arr:
    if includes?(arr, num - n)
      return true

  return false


func includes?(arr, elem):
  for_each e in arr:
    return true if e == elem

  return false
```

What do we think the run time is?  Can we do better?

#### Algorithm 2

```
func two_sum(arr, num):
  set = build_set(arr)
  for_each n in arr:
    if set[num - n]:
      return true

  return false


func build_set(arr):
  set = {}
  for_each e in arr:
    set[e] = true

  return set
```

What is the run-time of this algorithm?

---

![oprah](imgs/oprah.png)

## Common run-times

Here are some common run-times from **small/fast/good** to **large/slow/bad**

**Polynomial**

* `O(1)` - **constant**. Size of input does not matter. Can't do better than this
* `O(log n)` - **logarithmic**. Very fast.  Just slower than constant time.  See [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm)
* `O(n)` - **linear**.  This is often one or more isolated loops.
* `O(n⋅log n)` - Best case scenario for [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm)
* `O(n²)` - **quadric (polynomial)**.  This is often a loop within a loop.
* `O(n³)` - **cubic (polynomial)**. This is often a loop within a loop within a loop.
* `O(n⁴)`, `O(n⁵)`... **polynomial**

**Super-polynomial**

* `O(2ⁿ)` - **exponential**.  The number of subsets of a set of size `n`
* `O(3ⁿ)`, `O(4ⁿ)`... **exponential**
* `O(n!)`- **factorial**.  The number of ways you can permute something of size `n`

## Dropping the insignificant stuff

With Big-O, we drop constants and anything smaller than the leading term.

Examples:

* `O(2n)` => `O(n)`
* `O(5n² + 3n + 1)` => `O(n²)`
* `O(n! + 100n²)` => `O(n!)`

_Why?_ We only care about a general idea of how this grows over time as our input gets very large.  When the input is large enough, the constants/other terms just don't mean as much in comparison.

> There is a mathematical justification for dropping these.  Look at the formal definition if you are really interested.

## Things to remember

* Big-O can also be used to represent _space_-complexity.
  - This is how much extra memory, not time, is needed to run the algorithm
* An algorithm with a smaller run-time is not always "better"
  - Other things to consider are code complexity, space-complexity, etc
* Two algorithms can have the same run-time with one being a lot faster
  - For example, one algorithm may require `10n` operations while another requires only `2n` of the same operations.  The latter is faster but both are `O(n)`

## Conclusion
- Why do we care about time and space complexity an algorithm?
- Why do we use Big-O notation?  What does it tell us?
- How can we read an algorithm and boil it down to it's run-time in Big-O?

## Resources

Things to make you less confused.

* [Math refresher](https://git.generalassemb.ly/gist/ari/4ae9e8b95ec160192c878d9d33f6186d)
* [Big O basics](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)
  - More example algorithms
  - Also discusses Big O in terms of *space* complexity
* [Beginner's guide to Big O](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
  - **Great** explanation and examples of common run-times
* [Big O cheatsheet](http://bigocheatsheet.com/)
  - The complexity chart is a good visual to understand common run times
  - Good information about run time of algorithms in data structures (don't *need* to know this)
  - Different run times of sorting algorithms is also interesting but you certainly don't need to know them all.  You probably *should* know that sorting can be done in `O(n⋅log(n))` time.
* [Intro to Big-O video](https://www.youtube.com/watch?v=v4cd1O4zkGw)
  - From the author of [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/) (see below)

## **Advanced** Resources

Things to make you more confused.

* [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)
  - This book will help you get a job. _Bigly_. This is a _fabulous_ resource for practicing these problems.  Just fabulous.  You look at other books - they're terrible.  Just terrible. They're a disaster. Total disaster. They're _losers_. This is the number one book. It's terrific. Everyone agrees.
* [Formal definition of Big O](https://en.wikipedia.org/wiki/Big_O_notation#Formal_definition)
  - This is very technical and you do not need to know it.  Most developers don't.

## **Super Advanced** Resources

* [P vs NP problem](https://en.wikipedia.org/wiki/P_versus_NP_problem)
  - One of the most famous problems in Mathematics and Computer Science
  - Simply find a single poly-time algorithm for any [NP-complete problem](https://en.wikipedia.org/wiki/NP-completeness#NP-complete_problems)
  - Find one and **literally [win 1 million dollars](https://en.wikipedia.org/wiki/Millennium_Prize_Problems)** (probably more)
  - Find one and **literally [change the world](https://en.wikipedia.org/wiki/P_versus_NP_problem#Consequences_of_solution)**

---

![the-big-o](imgs/the-big-o.png)

# Time complexity and Big O

## What is Big O?

From [interview cake](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)

> Big O notation is the language we use for articulating how long an algorithm takes to run. It's how we compare the efficiency of different approaches to a problem.

> With big O notation we express the runtime in terms of—brace yourself—how quickly it grows relative to the input, as the input gets arbitrarily large.

A Formal definition can be found [here](https://en.wikipedia.org/wiki/Big_O_notation#Formal_definition).  (This is very math-y)

### Examples

#### Find the largest element in a list

Algorithm 1:
```
func largest_element(arr):
  for_each_element x in arr:
    return x if is_largest?(x, arr)


func is_largest?(x, arr):
  for_each_element y in arr:
    return false if y > x

  return true
```

Algorithm 2:
```
func largest_element(arr):
  max = arr[0]

  for_each_element x in arr:
    if x > max:
      max = x

  return max
```

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

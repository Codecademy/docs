---
Title: 'Big-O Notation'
Description: 'Big-O notation is a form of measuring the algorithmic time/space complexity of a function in worst-case scenario.'
Subjects:
  - 'Code Foundation'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

**Big-O notation** is a form of measuring the algorithmic complexity of a [function](https://www.codecademy.com/resources/docs/general/function) or [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) in the worst-case scenario. This can either analyze the maximum amount of possible time or memory space needed to solve a particular problem. Solutions can be refactored or reworked to achieve a more efficient time/space complexity with the help of Big-O notation.

## Common Runtimes

Here are some common runtimes:

![Graph of the different kinds of Big-O notation](https://raw.githubusercontent.com/Codecademy/docs/main/media/big-o-graph.png)

|  Runtime   |                Name                | Description                                                                    | Use Case(s)                                                                                                                                                                 |
| :--------: | :--------------------------------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $O(n^{2})$ | Polynomial/quadratic time (in red) | The time needed is the input size, `n`, multiplied by itself.                  | [Bubble sort](https://www.codecademy.com/learn/sorting-algorithms-java/modules/bubble-sort-java/cheatsheet) has quadratic time complexity.                                  |
|   $O(n)$   |       Linear time (in blue)        | The time needed is proportional to the input size `n`.                         | Traversing an [array](https://www.codecademy.com/resources/docs/general/array) of `n`-size.                                                                                 |
| $O(ln(n))$ |    Logarithmic time (in green)     | The time is a logarithmic function `ln()` of the input size `n`.               | Analyzing the [binary search algorithm](https://www.codecademy.com/learn/fscp-22-search-graph-search-algorithms/modules/wdcp-22-binary-search-and-search-trees/cheatsheet). |
|   $O(1)$   |     Constant time (in purple)      | If the time needed by the algorithm is the same, regardless of the input size. | Accessing an element in an array.                                                                                                                                           |

## Simplifying Big-O Expressions

When determining an expression that characterizes the time or space complexity of an algorithm, an expression may contain multiple terms ( e.g., $O(n) + O(ln(n))$ ). In this situation, it is best practice to drop all of the lower order terms so the big-O notation would simplify into just O(n).

## Python Big-O Practice

The following Python example analyzes the time/space complexity of the `foo()` function:

```py
def foo(list1, list2):
  for item in list1:
    print(f"Outer loop: {item}")
    for item2 in list2:
      print(f"Inner loop: {item2}")

foo(["Hello", "World"], ["Code", "Ninjas"])
```

For each item of `list1` in the outer loop, each item in `list2` is traversed in an inner loop. The Big-O notation for the `foo()` function would be $O(n^{2})$.

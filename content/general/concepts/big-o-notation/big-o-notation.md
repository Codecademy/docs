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

![Graph of the different kinds of Big-O notation](https://raw.githubusercontent.com/Codecademy/docs/main/media/big-o-graph-extended.png)

|  Runtime   |                 Name                  | Description                                                       | Use Case(s)                                                                                                                                                                 |
| :--------: | :-----------------------------------: | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   _O(1)_   |        Constant time (in blue)        | The time needed is the same, regardless of the input size.        | Accessing an element in an array.                                                                                                                                           |
| _O(ln(n))_ |       Logarithmic time (in red)       | The time is a logarithmic function `ln()` of the input size `n`.  | Analyzing the [binary search algorithm](https://www.codecademy.com/learn/fscp-22-search-graph-search-algorithms/modules/wdcp-22-binary-search-and-search-trees/cheatsheet). |
|   _O(n)_   |        Linear time (in green)         | The time needed is proportional to the input size `n`.            | Traversing an [array](https://www.codecademy.com/resources/docs/general/data-structures/array) of `n`-size.                                                                 |
|  _O(n^2)_  | Polynomial/quadratic time (in purple) | The time needed is the input size, `n`, multiplied by itself.     | [Bubble sort](https://www.codecademy.com/learn/sorting-algorithms-java/modules/bubble-sort-java/cheatsheet) has quadratic time complexity.                                  |
|  _O(2^n)_  |     Exponential time (in orange)      | The time needed doubles for every new element added to the input. | The Fibonacci Series.                                                                                                                                                       |
|  _O(n!)_   |       Factorial time (in cyan)        | The time needed is equivalent to the factorial of the input size. | The Traveling Salesman problem.                                                                                                                                             |

## Simplifying Big-O Expressions

When determining an expression that characterizes the time or space complexity of an algorithm, an expression may contain multiple terms ( e.g., _O(n) + O(ln(n))_ ). In the context of Big-O, the focus is on the relative change as the input gets large. And as the input gets larger (approaches infinity), the higher-order terms take precedence over the lower-order terms, which is why the Big-O notation would simplify to just _O(n)_.

## Python Big-O Practice

The following Python example analyzes the time/space complexity of the `foo()` function:

```py
def foo(list1, list2):
  for item in list1:
    print(f"Outer loop: {item}")
    for item2 in list2:
      print(f"Inner loop: {item2}")

foo(["Hello", "World"], ["Spam", "Eggs"])
```

The inner loop is equivalent to _O(n)_, and the outer loop will execute the inner loop _n_ times. Therefore, the Big-O notation for the `foo()` function would be _n \* O(n) = O(n^2)_.

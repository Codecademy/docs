---
Title: 'Big-O Notation'
Description: 'Big-O notation is a form of measuring the algorithmic time/space complexity of a function in worst-case scenario.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Algorithms'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

**Big-O notation** is a form of measuring the complexity of an algorithm. This can take the form of a time complexity analysis or a space complexity analysis. At times, an algorithm can be refactored or reworked to achieve a more efficient time and space complexity. To describe the time or space complexity, two different notations are used: big omega notation and big-O. Big omega describes the best running case scenario while big-O describes the worst case scenario.

## Common Runtimes

Here are some common runtimes:

![graft of the different kinds of big O notation](https://raw.githubusercontent.com/Codecademy/docs/main/media/bigo-graph.png)

- Polynomial time (red) $O(n^{2})$: If the time is a power of the input size.
  - Bubble sort has quadratic time complexity.
- Linear time (blue) $O(n)$: If the time is proportional to the input size.
  - The traverse of a list.
- Logarithmic time (green) $O(ln(n))$: If the time is a logarithmic function of the input size.
  - Binary search algorithm.
- Constant time (purple) $O(1)$: If the time needed by the algorithm is the same, regardless of the input size.
  - An access to an array element.

## Simplifying Big-O Expressions

When determining an expression that characterizes the time or space complexity of an algorithm, an expression may contain multiple terms. For example: O(n) + O(ln(n)). In this situation, it is best practice to drop all of the lower order terms so the big-O notation would simplify into just O(n).

## Python Big-O Practice

```
# Example function
def foo(list1, list2):
    for item in list1:
        for item2 in list2:
            print("*")
```

Big-O Notation: $O(n^{2})$

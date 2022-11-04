---
Title: 'Algorithm'
Description: 'An algorithm is a formal process used to solve a problem. They can be represented in several formats but are usually represented in pseudocode in order to communicate the process by which the algorithms solve the problems they were created to tackle.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Algorithms'
  - 'Sort'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

An **algorithm** is a formal process used to solve a problem. Algorithms can be represented in several formats but are usually represented in pseudocode in order to communicate the process by which the algorithms solve the problems they were created to tackle. Ultimately algorithms are implemented in programming languages that allow them to manipulate data in the ways that the algorithms are intended to. Algorithms are measured in "Big O notation".

The word algorithm comes from "Algorismus" which is a Latinized name of the influential 10th-century polymath Muhammad ibn Musa al-Khwarizmi.

There are many ways to classify algorithms but one of the best ways to do so is by analysis of their complexity.

## Time Complexities

Algorithms can be categorized by their time complexities:

- Exponential time: If the time is an exponential function of the input size.
  - Brute-force search.
- Polynomial time: If the time is a power of the input size.
  - Bubble sort has quadratic time complexity.
- Linear time: If the time is proportional to the input size.
  - The traverse of a list.
- Logarithmic time: If the time is a logarithmic function of the input size.
  - Binary search algorithm.
- Constant time: If the time needed by the algorithm is the same, regardless of the input size.
  - An access to an array element.

## Example of an Algorithm

This is a sorting algorithm implemented in Python:

```py
# Python implementation of Bubble Sort

def bubbleSort(_array):
  n = len(_array)

  for i in range(n-1):
    for j in range(0, n-i-1):
      if _array[j] > _array[j + 1]:
        _array[j], _array[j + 1] = _array[j + 1], _array[j]

_array = [3, 9, 12, 12, 100, 90]

bubbleSort(_array)

print ("Print sorted data:")

for i in range(len(_array)):
  print("% d" % _array[i]),
```

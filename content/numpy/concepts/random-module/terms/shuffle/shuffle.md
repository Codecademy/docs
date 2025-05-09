---
Title: 'np.random.shuffle()'
Description: 'A method in the NumPy random module for randomizing array elements'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Numpy random module, the **`.shuffle()`** is used to randomly reorder the elements in an array or sequence. It modifies the original array in place, meaning that the original data will be altered after the shuffle.

## Syntax

The general syntax for \*\*`.shuffle()` is:

```pseudo
np.random.shuffle(array)
```

## Example

In this example, the `np.random.shuffle()` randomly permutates elements oof an array, enabling shuffling of data in-place :

```py
# Import NumPy
import numpy as np

# Create an array of integers
arr = np.array([1, 2, 3, 4, 5])
print("Original Array:", arr)

# Shuffle the array in-place
np.random.shuffle(arr)
print("Shuffled Array:", arr)
```

We will get the following output:

```shell
Original Array: [1 2 3 4 5]
Shuffled Array: [3 1 5 2 4]
```

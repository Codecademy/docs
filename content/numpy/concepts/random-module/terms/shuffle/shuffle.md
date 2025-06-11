---
Title: '.shuffle()'
Description: 'Randomly rearranges the elements of an array in-place along the first axis, modifying the original array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Numpy random module, the **`.shuffle()`** function randomly rearranges the elements of an array or sequence. It modifies the original array in place, altering its contents directly.

## Syntax

The general syntax for `.shuffle()` is:

```pseudo
np.random.shuffle(x)
```

**Parameters:**

- `x`: The input array or sequence to be shuffled.
  - For 1D arrays, the entire array is shuffled.
  - For multi-dimensional arrays, only the first axis is shuffled (e.g., rows in a 2D array).

**Return value:**

- This function modifies the input array in place and does not return a new array.

## Example 1: Shuffling a 1D Array

In this example, the `np.random.shuffle()` randomly permutates elements of an array, enabling shuffling of data in-place:

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

This could could result in the following possible output:

```shell
Original Array: [1 2 3 4 5]
Shuffled Array: [3 1 5 2 4]
```

> **Note:** The output differs with each execution, as the elements are shuffled randomly in-place.

## Example 2: Shuffling a 2D Array (Rows Only)

In this example, `np.random.shuffle()` randomly reorders the rows of a 2D array, modifying it in place. Note that only the rows (first axis) are shuffled, not the individual elements within each row:

```py
import numpy as np

# Create a 2D array
arr_2d = np.array([[10, 20], [30, 40], [50, 60]])
print("Original 2D Array:\n", arr_2d)

# Shuffle rows in-place
np.random.shuffle(arr_2d)
print("Shuffled 2D Array:\n", arr_2d)
```

A possible output of this code can be:

```shell
Original 2D Array:
 [[10 20]
 [30 40]
 [50 60]]
Shuffled 2D Array:
 [[50 60]
 [10 20]
 [30 40]]
```

> **Note:** The order of rows will differ each time the code is executed, as the shuffling is random and in-place.

## Codebyte Example: Shuffling Survey Responses and Questions

In this example, a survey system uses `np.random.shuffle()` to randomize both survey responses (1D array) and questions (2D array) to avoid bias in responses:

```codebyte/python
import numpy as np

# 1D array: Survey responses
responses = np.array(['Yes', 'No', 'Maybe', 'Definitely', 'Not sure'])
print("Original Responses:", responses)

# Shuffle the responses
np.random.shuffle(responses)
print("Shuffled Responses:", responses)

# 2D array: Survey questions
questions = np.array([['What is your age?', 'Under 18', '18-24', '25-34'],
                      ['Do you prefer coffee or tea?', 'Coffee', 'Tea'],
                      ['Do you exercise regularly?', 'Yes', 'No', 'Sometimes']])
print("\nOriginal Questions:\n", questions)

# Shuffle the questions
np.random.shuffle(questions)
print("Shuffled Questions:\n", questions)
```

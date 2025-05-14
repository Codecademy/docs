---
Title: '.where()'
Description: 'Returns elements from arrays depending on a condition.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Numpy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.where()`** function is a built-in method in NumPy used for conditional selection of elements in arrays. It returns elements based on a condition:

- When only the condition is provided, `.where()` returns the indices where the condition is `True`.
- When all three arguments are provided i.e. condition, x, and y, it returns an array where elements from `x` are selected where the condition is `True`, and elements from `y` are selected where the condition is `False`.

## Syntax

```pseudo
numpy.where(condition[, x, y])
```

**Parameters:**

- `condition`: A boolean array or condition expression. Elements that evaluate to `True` will take values from `x`, and elements that evaluate to `False` will take values from `y`.
- `x` (optional): The array or value to be selected when the condition is `True`.
- `y` (optional): The array or value to be selected when the condition is `False`.

**Return value:**

- When all three arguments are provided, it returns an array with elements taken from `x` where the condition is `True`, and elements taken from `y` where the condition is `False`.
- When only the condition is provided, it returns the indices where the condition is `True`.

## Example

The following example demonstrates how to use the `.where()` function with the parameters:

```py
import numpy as np

arr = np.array([10, 15, 20, 25, 30])

# Get the indices where elements are greater than 20
indices = np.where(arr > 20)
print(indices)

# Use condition to select values from two arrays
result = np.where(arr > 20, "big", "small")
print(result)
```

This example results in the following output:

```shell
(array([3, 4]),)
['small' 'small' 'small' 'big' 'big']
```

## Codebyte example

Run the following codebyte example better to understand the `.where()` function:

```codebyte/python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Replace elements less than 3 with 0, others with 1
result = np.where(arr < 3, 0, 1)

print("Original array:", arr)
print("Transformed array:", result)
```

In this example, elements less than `3` are replaced with `0`, and others with `1`.

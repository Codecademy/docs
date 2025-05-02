---
title: '.where()'
description: 'Returns elements from arrays depending on a condition'
Subjects: 'Computer Science, Data Science'
Tags: 'Arrays, Functions, Numpy'
contentType: 'term'
CatalogContent: 'learn-python-3, paths/data-science'
---

## Introduction

The **.where()** function is a built-in method in NumPy used for conditional selection of elements in arrays. It returns elements chosen from one of two options, depending on whether a specified condition is `True` or `False`.

When only the condition is provided, `.where()` returns the indices where the condition is `True`. When all three arguments are provided—`condition`, `x`, and `y`—it returns an array built from `x` and `y`, depending on the condition.

## Syntax

```python
numpy.where(condition[, x, y])
```

- condition: An array-like structure of boolean values.

- x: Optional. Values from which to choose when condition is True.

- y: Optional. Values from which to choose when condition is False.

If only the condition is provided, the indices where the condition is True are returned.

## Example

The following example demonstrates how to use the .where() function with the parameters:

```
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

```
(array([3, 4]),)
['small' 'small' 'small' 'big' 'big']
```

## Codebyte example

Run the following codebyte example to better understand the .where() function:

```
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# Replace elements less than 3 with 0, others with 1
result = np.where(arr < 3, 0, 1)

print("Original array:", arr)
print("Transformed array:", result)
```

In this example, elements less than 3 are replaced with 0, and others with 1. This is a common pattern in data preprocessing and transformation.

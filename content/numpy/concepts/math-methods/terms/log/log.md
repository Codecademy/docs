---
Title: '.log()'
Description: 'Calculates the natural logarithm of each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Methods'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

In NumPy, the **`.log()`** method is used to calculate the natural logarithm (base-e) of each element in an array. It is widely used in scientific computations, data analysis, and mathematical applications where logarithmic scaling is essential.

## Syntax

```pseudo
numpy.log(array, out=None, where=True)
```

- `array`: An array-like structure containing the elements for which the natural logarithm will be applied.
- `out` (Optional): An array where the resulting logarithms are stored. If not provided, a new array is created to hold the results.
- `where` (Optional): An array of boolean values that determines which elements undergo logarithm computation:
  - For elements where the condition is `True`, the natural logarithm is calculated.
  - For elements where the condition is `False`, the original element remains unchanged.
  - If `where` is not specified, the natural logarithm is computed for all elements in the input.

## Example

The below example demonstrates the use of the `.log()` method:

```py
import numpy as np

arr = np.array([1, np.e, 10, 100])
result = np.log(arr)

print(result)
```

The code above will generate the following output:

```shell
[0.         1.         2.30258509 4.60517019]
```

## Codebyte Example

In this codebyte example, the `.log()` method only computes the natural logarithm of positive elements in the array:

```codebyte/python
import numpy as np

arr = np.array([1, 0.1, 1000, -10])
result = np.copy(arr)

np.log(arr, out=result, where=arr > 0)

print(result)
```

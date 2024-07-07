---
Title: '.log()'
Description: 'Calculates the natural logarithm (base-e) of each element in an array.'
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
---

In NumPy, the **`.log()`** method is used to calculate the natural logarithm (base-e) of each element in an array. It is widely used in scientific computations, data analysis, and mathematical applications where logarithmic scaling is essential.

## Syntax

```pseudo
numpy.log(array, out=None, where=True)
```

- `array`: An array-like structure containing the elements for which the base-10 algorithm will be applied.
- `out` (Optional): The array where the result is to be stored. If not provided, a new array is created to store the results.
- `where` (Optional): The condition (array of boolean values) that determines which elements the method will be applied on.
  - If the condition is `True` for a particular element, the logarithm is computed for that element.
  - If the condition is `False` for a particular element, the logarithm is not computed for that element and the original element is retained.
  - If not provided, the logarithm is computed for all elements.

## Example

The below example demonstrates the use of the `.log()` method:

```py
import numpy as np

result = np.log([1, np.e, 10, 100])

print(result)
```

The code above will generate the following output:

```shell
[0.         1.         2.30258509 4.60517019]
```

> **Note:** Running the above code will result in a `RuntimeWarning` due to attempting to calculate the logarithm of a negative number, which is not a valid operation.

## Codebyte Example

In this codebyte example, the `.log10()` method only computes the natural logarithm of positive elements in the array:

```codebyte/python
import numpy as np

result = np.log([1, 0.1, 1000], where=np.array([1, 0.1, 1000]) > 0)

print(result)
```
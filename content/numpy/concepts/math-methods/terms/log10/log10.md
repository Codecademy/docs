---
Title: '.log10()'
Description: 'Calculates the base 10 logarithm of each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.log10()`** method is used to calculate the base 10 logarithm of each element in an array. It is primarily used in scientific computations and mathematical applications where logarithmic scaling is required.

## Syntax

```pseudo
numpy.log10(array, out=None, where=True)
```

- `array`: An array-like structure containing the elements for which the base 10 algorithm will be applied.
- `out` (Optional): The array where the result is to be stored. If not provided, a new array is created to store the results.
- `where` (Optional): The condition (array of boolean values) that determines which elements will the method be applied on.
  - If the condition is `True` for a particular element, the logarithm is computed for that element.
  - If the condition is `False` for a particular element, the logarithm is not computed for that element and the original element is retained.
  - If not provided, the logarithm is computed for all elements.

## Example

The below example demonstrates the use of the `.log10()` function:

```py
import numpy as np

result = np.log10([1e-15, -3., 10, 100])

print(result)
```

The output of the above code is shown below:

```shell
[-15.  nan   1.   2.]
```

> **Note:** Running the above code will result in a `RuntimeWarning` due to attempting to calculate the logarithm of a negative number, which is not a valid operation.

## Codebyte Example

In this codebyte example, the `.log10()` method only computes the base 10 logarithm of positive elements in the array:

```codebyte/python
import numpy as np

result = np.log10([1, 0.1, 1000], where=np.array([1, 0.1, 1000]) > 0)

print(result)
```

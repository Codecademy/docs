---
Title: 'max()'
Description: 'Returns the maximum value in a NumPy array, optionally along a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Array'
  - 'Data'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`ndarray.max()`** method returns the largest element in a NumPy array. The operation can run on the entire flattened array or along a chosen axis, and supports optional parameters for masking, output arrays, and dimension preservation.

## Syntax

```pseudo
ndarray.max(axis=None, out=None, keepdims=False, initial=<no value>, where=True)
```

**Parameters:**

- `axis` (optional): Axis along which the maximum is computed.
  - `None`: searches the entire array
  - `0`: column-wise
  - `1`: row-wise
- `out` (optional): Output array that receives the result.
- `keepdims` (optional): Preserves reduced axes with length 1, keeping the array's dimensionality.
- `initial` (optional): A default value to compare against when the array is empty.
- `where` (optional): Boolean mask indicating which elements to include in the comparison.

**Return value:**

The maximum value as a scalar or array, depending on the axis and output parameters.

## Example 1: Maximum Value in a 1D Array

In this example, the array is scanned for its largest value, and the maximum element is returned:

```py
import numpy as np

arr = np.array([4, 12, 7, 19, 3])
result = arr.max()
print(result)
```

The output of this code is:

```shell
19
```

## Example 2: Maximum Values Along Columns

In this example, `max()` is applied along axis 0, producing one maximum value per column in the 2D array:

```py
import numpy as np

arr = np.array([[2, 8, 5],
                [9, 3, 7]])

result = arr.max(axis=0)
print(result)
```

The output of this code is:

```shell
[9 8 7]
```

## Codebyte Example

In this example, the `max()` method is used to compute the global maximum, row-wise maximums, and a masked maximum using both where and initial to avoid reduction errors:

```codebyte/python
import numpy as np

arr = np.array([[10, 4, 6],
                [3, 15, 2],
                [8, 1, 9]])

global_max = arr.max()
row_max = arr.max(axis=1)

masked_max = arr.max(where=arr > 5, initial=-np.inf)

print("Maximum in entire array:", global_max)
print("Maximum in each row:", row_max)
print("Maximum among values greater than 5:", masked_max)
```

## Frequently Asked Questions

### 1. What is Max NumPy in Python?

In NumPy, `max()` is a method that returns the largest value within an array or along a chosen axis. The operation relies on efficient vectorized comparisons, making it significantly faster than manual iteration over Python lists.

### 2. What is Max in NumPy select?

In the context of `numpy.select`, `max()` often appears as a reduction step to extract the highest value from conditional outputs. Although `select()` focuses on choosing values based on conditions, `max()` can be applied afterward to determine the largest result from the selected set.

### 3. Can you use `max()` on a list?

Python’s built-in `max()` function works on lists and returns their largest element. This behavior is independent of NumPy; however, NumPy arrays also integrate their own optimized `ndarray.max()` method for numerical operations.

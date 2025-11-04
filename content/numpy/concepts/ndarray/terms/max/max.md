---
Title: 'max()'
Description: 'Returns the maximum value of elements along a specified axis or the largest element in the entire NumPy array.'
Subjects:
  - 'Python'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`max()`** function in NumPy returns the maximum value of elements along a specified axis in an array. If no axis is provided, it returns a single scalar value representing the most significant element in the entire array. NumPy arrays support efficient element-wise operations, and max() quickly identifies the maximum value across dimensions or within specific rows and columns.

When `axis=0`, the function returns a **one-dimensional array containing the maximum values from each column**.  
When `axis=1`, it returns a **one-dimensional array containing the maximum values from each row**.

## Syntax

```pseudo
numpy.ndarray.max(axis=None, out=None, keepdims=False, initial=<no value>, where=True)
```

**Parameters:**

- `axis` *(int or None)* — Axis or axes along which to operate.  
  - `0` **:** Operates vertically, comparing elements column by column. The result is a one-dimensional array containing the maximum values from each column.  
  - `1` **:** Operates horizontally, comparing elements row by row. The result is a one-dimensional array containing the maximum values from each row.  
  - `None` **:** Computes the maximum value over the entire array, regardless of dimensions, and returns a single scalar value representing the largest element.  

- `out` *(ndarray or None, optional)* — Output array where results will be stored.  
  - If an array (`ndarray`) is provided, the result of the `max()` operation is written directly into that array instead of creating and returning a new one.  
  - The provided array must have a shape and data type compatible with the result of the operation.  
  - If the shapes do not match or the array is not writable, NumPy raises a `ValueError`.  
  - Using `out` is memory-efficient, as it prevents allocating new arrays when performing large computations.  
  - If `None` (default), NumPy creates and returns a new array containing the result.  

- `keepdims` *(bool, optional)* — Determines whether the reduced dimensions are retained as dimensions of size one in the result.  
  - `True` **:** Keeps the reduced dimensions as size one, preserving the original array’s dimensionality. This is useful for maintaining compatibility during broadcasting or further operations.  
  - `False` *(default)* **:** Removes the reduced dimensions from the result, producing a smaller array.  

- `initial` *(scalar, optional)* **:** The minimum value used to start comparisons when computing the maximum.  
  - Acts as a baseline comparison value for the reduction operation.  
  - Ensures that even if all array elements are smaller than the `initial` value, the result will still be at least equal to `initial`.  
  - If `initial` is smaller than the largest element in the array, the actual maximum value is returned.  

- `where` *(array_like of bool, optional)* **:** Condition that selects which elements to include in the comparison.  
  - Only elements corresponding to `True` values in the `where` mask are considered when computing the maximum.  
  - Elements where the condition is `False` are ignored in the comparison.  
  - If `where` is not provided, all elements are included by default.  

**Returns:**

- *(ndarray or scalar)*, The return type depends on the input array and the value of the `axis` parameter.  
  - If an `axis` is specified (`0` or `1`), the method returns a **NumPy array (`ndarray`)** containing the maximum values computed along the specified axis.  
    - For `axis=0`, the result is a one-dimensional array of maximum values from each column.  
    - For `axis=1`, the result is a one-dimensional array of maximum values from each row.  
    - When `keepdims=True`, the reduced dimension is retained with size one, so the output maintains the same number of dimensions as the original array.  
  - If `axis=None`, the method flattens the array and returns a **single scalar value** representing the largest element in the entire array.  
  - If an `out` array is provided, the result is also stored directly in that array, and a reference to it is returned.  

> **Note:** When no axis is specified, the `max()` method returns a scalar value representing the overall maximum element in the array.  
> **Note:** The `max()` functionality can also be accessed using the top-level NumPy function `np.max(array, axis=None)`. Both approaches produce the same result, but `ndarray.max()` is the object-oriented method version, while `np.max()` is the functional interface that can operate on array-like objects.


## Examples

Below are focused examples that demonstrate how each parameter of `ndarray.max()` works, followed by combinations and common pitfalls.

### Single-Parameter Examples

#### A) `axis`
###### a. Overall maximum (no axis).
```py
import numpy as np

arr = np.array([[2, 8, 5],
                [4, 1, 9]])

# Computes the maximum value over the entire array,
# regardless of dimensions, and returns a single scalar value 
# representing the largest element.
print(arr.max())

# or

print(arr.max(axis=None))
```
Both produces same results and are equivalent.
This example results in the following output:

```shell
9
```
<br/>

###### b. Column-wise maxima (axis=0).
```py
# Operates vertically, comparing elements column by column.
# The result is a one-dimensional array containing the maximum values
# from each column.
print(arr.max(axis=0))
```
This example results in the following output:

```shell
[ 4 8 9 ]
```

<br/>

###### c. Row-wise maxima (axis=1).

```py
# Computes the maximum value over the entire array, 
# regardless of dimensions, and returns a 
# single scalar value representing the largest element.
print(arr.max(axis=1))
```

This example results in the following output:

```shell
[ 8 9 ]
```

<br/>

#### B) `out`
###### a. Preallocate output buffer for column-wise maxima.
```py

import numpy as np

arr = np.array([[2, 5, 8],
                [3, 7, 1]])

out_arr = np.empty(3, dtype=arr.dtype)
arr.max(axis=0, out=out_arr)

print(out_arr)
```
This example results in the following output:

```shell
[ 3 7 8 ]
```

<br/>

###### b. Reuse the same buffer for multiple arrays
```py
import numpy as np

arr1 = np.array([[2, 8, 5],
                 [4, 1, 9]])
arr2 = np.array([[3, 7, 6],
                 [2, 10, 4]])

out_buf = np.empty(1, dtype=arr1.dtype)

arr1.max(out=out_buf)
print("Max arr1:", out_buf)

arr2.max(out=out_buf)
print("Max arr2:", out_buf)
```

This example results in the following output:

```shell
Max arr1: [9]
Max arr2: [10]
```

<br/>

###### c. Safe dtype choice: store integer max into a float buffer
```py
import numpy as np

arr = np.array([[1, 4, 3],
                [6, 2, 5]], dtype=np.int32)

# Float buffer is safe for storing an integer maximum.
out_float = np.empty(1, dtype=np.float64)
arr.max(out=out_float)

print(out_float)
```
This example results in the following output:

```shell
[6.]
```

<br/>

###### d. In-place overwrite: prefill buffer, then write the result
```py
import numpy as np

arr = np.array([[5, 3, 9],
                [2, 7, 1]])

out_arr = np.array([-999], dtype=arr.dtype)  # Prefilled sentinel.

arr.max(out=out_arr)  # Overwrites in place.
print(out_arr)
```

This example results in the following output:

```shell
[9]
```

<br/>

###### e. Functional form: np.max with out (equivalent to ndarray.max)
```py
import numpy as np

arr = np.array([[2, 11, 4],
                [3,  7, 6]])

out_arr = np.empty(1, dtype=arr.dtype)

# Top-level function also supports 'out'.
np.max(arr, out=out_arr)

print(out_arr)
```

This example results in the following output:

```shell
[11]
```

<br/>

#### C) `keepdims`
###### a. Default behavior — `keepdims=False`
```py
import numpy as np

arr = np.array([[2, 8, 5],
                [4, 1, 9]])

# Default: keepdims=False
result = arr.max(keepdims=False)

print(result)
print("Shape:", np.shape(result))
```

This example results in the following output:

```shell
9
Shape: ()
```
By default, `keepdims=False` removes reduced dimensions, returning a scalar since the array was flattened.

<br/>

###### b. Preserve dimensionality: keepdims=True
```py
import numpy as np

arr = np.array([[2, 8, 5],
                [4, 1, 9]])

# Retains reduced dimensions as size-one dimensions.
result = arr.max(keepdims=True)

print(result)
print("Shape:", result.shape)
```

This example results in the following output:

```shell
[[9]]
Shape: (1, 1)
```

Setting `keepdims=True` preserves the array’s dimensionality,
the output keeps two dimensions with size 1 for each reduced axis

<br/>

###### c. Compare shapes with and without keepdims
```py
import numpy as np

arr = np.array([[3, 5, 7],
                [2, 9, 1]])

res_default = arr.max()             # keepdims=False (default)
res_keepdims = arr.max(keepdims=True)

print("Without keepdims:", res_default, "Shape:", np.shape(res_default))
print("With keepdims:   ", res_keepdims, "Shape:", res_keepdims.shape)
```

This example results in the following output:

```shell
Without keepdims: 9 Shape: ()
With keepdims:    [[9]] Shape: (1, 1)
```
The result value is the same, but `keepdims=True` retains an extra dimension, making it compatible for broadcasting with the original array.

<br/>

#### D) `where`
###### a. Basic use: include only elements satisfying a condition
```py
import numpy as np

arr = np.array([[2, 8, 5],
                [4, 1, 9]])

# Consider only elements greater than 5
mask = arr > 5

result = arr.max(where=mask)

print(result)
```

This example results in the following output:

```shell
9
```
Only elements satisfying `arr > 5` are compared.
The global maximum among these values is 9.

<br/>

###### b. Using 'where' with a threshold condition
```py
import numpy as np

arr = np.array([[3, 7, 2],
                [5, 1, 9]])

# Include only elements that are odd numbers
mask = arr % 2 == 1

result = arr.max(where=mask)

print(result)
```

This example results in the following output:

```shell
9
```

The method ignores even numbers and computes the maximum only among odd numbers.

<br/>

###### c. Boolean mask from another array
```py
import numpy as np

data = np.array([[10, 20, 30],
                 [40, 50, 60]])

mask = np.array([[True, False, True],
                 [False, True, False]])

# Compare only where mask is True
result = data.max(where=mask)

print(result)
```

This example results in the following output:

```shell
50
```
`where` can take a separate Boolean array of the same shape,
only positions marked `True` are used in the comparison.

<br/>

###### d. Chained condition in where
```py
import numpy as np

arr = np.arange(1, 11)

# Include elements that are multiples of 3 or 5
mask = (arr % 3 == 0) | (arr % 5 == 0)

result = arr.max(where=mask)

print(result)
```

This example results in the following output:

```shell
# 10
```
The mask selects elements {3, 5, 6, 9, 10} and returns the maximum (10).

<br/>

###### e. Using a full True mask
```py
import numpy as np

arr = np.array([4, 7, 2])

mask = np.array([True, True, True])

result = arr.max(where=mask)

print(result)
```

This example results in the following output:

```shell
7
```
When all mask elements are True, the result is identical to arr.max().

<br/>

###### f. All False mask
```py
import numpy as np

arr = np.array([[3, 5, 7],
                [2, 4, 6]])

mask = np.zeros_like(arr, dtype=bool)  # all False

# Since all are excluded, NumPy returns the smallest possible value of dtype
result = arr.max(where=mask)

print(result)
```

This example results in the following output:

```shell
6
```
NumPy ignores all elements when mask is all False,
it still returns the overall dtype’s lowest initialized value (for ints, the last seen value or minimum).
To control this safely, initial should be used, but that’s beyond this scope.

<br/>


###### g. Using a runtime-generated condition
```py
import numpy as np

arr = np.array([10, 5, 3, 7, 9])

# Mask depends on a variable threshold
threshold = 6
mask = arr > threshold

result = arr.max(where=mask)

print("Threshold:", threshold)
print("Mask:", mask)
print("Max where condition met:", result)
```

This example results in the following output:

```shell
Threshold: 6
Mask: [ True False False  True  True]
Max where condition met: 10
```

The mask can be created dynamically at runtime using variables or computed expressions.

<br/>

###### h. Mask with computed comparison
```py
import numpy as np

arr = np.array([[2, 8, 5],
                [4, 10, 1]])

# Compare using another array as a threshold
thresholds = np.array([[3, 5, 0],
                       [2, 7, 1]])

mask = arr > thresholds
result = arr.max(where=mask)

print("Mask:\n", mask)
print("Max where condition met:", result)
```

This example results in the following output:

```shell
Mask:
 [[False  True  True]
 [ True  True False]]
Max where condition met: 10
```

The mask can come from elementwise comparisons between arrays of the same shape.

<br/>


###### i. Masked selection on flattened array
```py
import numpy as np

arr = np.arange(12).reshape(3, 4)

# Only include values greater than 7
mask = arr > 7

result = arr.max(where=mask)

print("Flattened mask result:", result)
```

This example results in the following output:

```shell
11
```

When no axis is provided, NumPy flattens both the array and mask before applying the condition.

<br/>

#### E) `initial`
###### a. Default behavior — no `initial` provided
```py
import numpy as np

arr = np.array([4, 7, 2])

# Default max operation
result = arr.max()

print(result)
```

This example results in the following output:

```shell
7
```

Without an `initial` value, `max()` compares only the array’s elements and returns the true maximum.

<br/>

###### b. Providing an "initial" value larger than all elements
```py
import numpy as np

arr = np.array([4, 7, 2])

# Baseline value is larger than all elements
result = arr.max(initial=10)

print(result)
```

This example results in the following output:

```shell
10
```

When `initial` is greater than every element, it becomes the maximum itself, because comparisons start from `10`.

<br/>

###### c. Providing an initial value smaller than all elements
```py
import numpy as np

arr = np.array([4, 7, 2])

# Baseline value is smaller than all elements
result = arr.max(initial=0)

print(result)
```

This example results in the following output:

```shell
7
```
If the `initial` value is smaller, it doesn’t affect the outcome,
the true maximum from the array is still returned.

<br/>

###### d. initial with negative values
```py
import numpy as np

arr = np.array([-8, -4, -6])

# Use an initial value smaller than all elements
result = arr.max(initial=-10)

print(result)
```

This example results in the following output:

```shell
-4
```
The initial value acts as a baseline for comparison. Since all array values are greater than `-10`, the maximum value `-4` is returned.

<br/>

###### e. Empty array with initial
```py
import numpy as np

arr = np.array([])

# Works only when initial is provided
result = arr.max(initial=5)

print(result)
```

This example results in the following output:

```shell
5
```
When the array is empty, the `initial` value is returned.
Without `initial`, an empty array would cause a `ValueError`.

<br/>

###### f. Using initial to define a safe fallback
```py
import numpy as np

arr = np.array([-3, -9, -1])

# Use initial to ensure at least 0 is returned, even if all are negative
result = arr.max(initial=0)

print(result)
```

This example results in the following output:

```shell
0
```
Even though all elements are negative, `initial=0` ensures a non-negative fallback result
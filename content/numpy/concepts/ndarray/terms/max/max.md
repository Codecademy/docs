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

---

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

---

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

---

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

---

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

<br/>

---

### Multi-Parameter Examples
#### A) `axis` + `out` Together
###### a. 2D array — `axis=0` (column-wise) into a 1-D buffer
```py
import numpy as np

arr = np.array([[2, 8, 5],
                [4, 1, 9]])

# Result shape for axis=0 is (3,)
out_cols = np.empty(3, dtype=arr.dtype)

arr.max(axis=0, out=out_cols)
print(out_cols)
```

This example results in the following output:

```shell
[4 8 9]
```
Computes column-wise maxima and writes them directly into a 1-D buffer `out_cols`.

<br/>

###### b. 2D array — `axis=1` (row-wise) into a 1-D buffer
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
out_rows = np.empty(2, dtype=arr.dtype)
arr.max(axis=1, out=out_rows)
print(out_rows)
```

This example results in the following output:

```shell
[8 9]
```
Finds the maximum of each row and stores results in `out_rows`.

<br/>

###### c. 2D array — `axis=None` into a 1-element buffer
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
out_scalar = np.empty(1, dtype=arr.dtype)
arr.max(axis=None, out=out_scalar)
print(out_scalar)
```

This example results in the following output:

```shell
[9]
```
Flattens the array and writes the global maximum into a single-element buffer.

<br/>

###### d. 2D array — negative axis (`axis=-1` equals last axis) into a 1-D buffer
```py
import numpy as np
arr = np.array([[3, 1, 7],
                [2, 9, 4]])
out_last = np.empty(2, dtype=arr.dtype)
arr.max(axis=-1, out=out_last)
print(out_last)
```

This example results in the following output:

```shell
[7 9]
```
Uses `axis=-1` (last axis) to compute per-row maxima, identical to `axis=1`.

<br/>

###### e. 3D array — `axis=0` into a 2-D buffer
```py
import numpy as np

arr = np.arange(24).reshape(2, 3, 4)   # Shape (2, 3, 4)

# Reducing axis=0 on (2,3,4) -> result shape is (3,4)
out_0 = np.empty((3, 4), dtype=arr.dtype)

arr.max(axis=0, out=out_0)
print("Shape:", out_0.shape)
print(out_0)
```

This example results in the following output:

```shell
Shape: (3, 4)
[[12 13 14 15]
 [16 17 18 19]
 [20 21 22 23]]
```

Reduces the first dimension; maxima are taken across layers and written to a 2-D buffer.

<br/>

###### f. 3D array — `axis=1` into a 2-D buffer
```py
import numpy as np

arr = np.arange(24).reshape(2, 3, 4)   # Shape (2, 3, 4)

# Reducing axis=1 -> result shape is (2,4)
out_1 = np.empty((2, 4), dtype=arr.dtype)

arr.max(axis=1, out=out_1)
print("Shape:", out_1.shape)
print(out_1)
```

This example results in the following output:

```shell
Shape: (2, 4)
[[ 8  9 10 11]
 [20 21 22 23]]
```
Finds maxima along the middle axis for each 3-D block and stores them in out_1.

<br/>

###### g. 3D array — `axis=2` (or `axis=-1`) into a 2-D buffer
```py
import numpy as np

arr = np.arange(24).reshape(2, 3, 4)   # Shape (2, 3, 4)

# Reducing axis=2 -> result shape is (2,3)
out_2 = np.empty((2, 3), dtype=arr.dtype)

arr.max(axis=2, out=out_2)
print("Shape:", out_2.shape)
print(out_2)
```

This example results in the following output:

```shell
Shape: (2, 3)
[[ 3  7 11]
 [15 19 23]]
```

Reduces the last dimension; each row of `out_2` contains maxima from one 2-D slice.

<br/>

###### h. Reusing the same buffer across calls with the same result shape
```py
import numpy as np

arr1 = np.array([[2, 8, 5],
                 [4, 1, 9]])
arr2 = np.array([[3, 7, 6],
                 [2, 10, 4]])

# For axis=0 on a 2x3 array, result shape is (3,)
buf = np.empty(3, dtype=arr1.dtype)

arr1.max(axis=0, out=buf)
print("arr1 col max:", buf)

arr2.max(axis=0, out=buf)
print("arr2 col max:", buf)
```

This example results in the following output:

```shell
arr1 col max: [ 4 8 9]
arr2 col max: [ 3 10 6]
```

Reuses one output buffer for multiple arrays with identical result shapes.

<br/>

###### i. Using a reshaped view as out (same memory, matching shape)
```py
import numpy as np

arr = np.arange(24).reshape(2, 3, 4)

# Prepare a flat buffer and reshape it to match the expected result shape (3,4) for axis=0
flat = np.empty(12, dtype=arr.dtype)
out_view = flat.reshape(3, 4)

arr.max(axis=0, out=out_view)
print("Flat buffer (reshaped) received result:\n", out_view)
```

This example results in the following output:

```shell
Flat buffer (reshaped) received result:
 [[12 13 14 15]
  [16 17 18 19]
  [20 21 22 23]]
```

Writes results into a reshaped view of a flat buffer, efficiently reusing memory.

<br/>

---

#### B) `axis` and `keepdims` Together
###### a. 2D — `axis=None`, `keepdims=False` (default)
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])

res = arr.max(keepdims=False)
print(res, np.shape(res))
```

This example results in the following output:

```shell
9 ()
```

Computes the global maximum and returns a scalar (shape `()`).

<br/>

###### b. 2D — `axis=None`, `keepdims=True`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])

res = arr.max(keepdims=True)
print(res, res.shape)
```

This example results in the following output:

```shell
[[9]] (1, 1)
```
Reduces over all axes but preserves dimensionality, returning a `(1, 1)` result.

<br/>

###### c. 2D — `axis=0`, `keepdims=False`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])

res = arr.max(axis=0, keepdims=False)
print(res, res.shape)
```

This example results in the following output:

```shell
[4 8 9] (3,)
```

Takes column-wise maxima; reduced axis is removed, returning a 1-D array.

<br/>

###### d. `axis=0`, `keepdims=True`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])

res = arr.max(axis=0, keepdims=True)
print(res, res.shape)
```

This example results in the following output:

```shell
[[4 8 9]] (1, 3)
```
Column-wise maxima with shape preserved; reduced axis kept as size one.

<br/>

###### f. 2D — `axis=1`, `keepdims=False`
```py
import numpy as np
arr = np.array([[10, 3, 7],
                [4, 8, 2]])

res = arr.max(axis=1, keepdims=False)
print(res, res.shape)
```

This example results in the following output:

```shell
[10  8] (2,)
```
Computes row-wise maxima; result is a 1-D array of length equal to rows.

<br/>

###### g. 2D — `axis=1`, `keepdims=True`
```py
import numpy as np
arr = np.array([[10, 3, 7],
                [4, 8, 2]])

res = arr.max(axis=1, keepdims=True)
print(res, res.shape)
```

This example results in the following output:

```shell
[[10]
 [ 8]] (2, 1)
```

Row-wise maxima keeping the reduced axis as size one for broadcasting.

<br/>

###### h. 2D — `axis=-1` (last axis), `keepdims=True`
```py
import numpy as np
arr = np.array([[3, 1, 7],
                [2, 9, 4]])

res = arr.max(axis=-1, keepdims=True)
print(res, res.shape)
```

This example results in the following output:

```shell
[[7]
 [9]] (2, 1)
```

Negative axis targets the last dimension; equivalent to axis=1 here.

<br/>

###### i. `axis=0`, `keepdims=False`
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(axis=0, keepdims=False)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(3, 4)
[[12 13 14 15]
 [16 17 18 19]
 [20 21 22 23]]
```

Reduces the first dimension; result shape is the remaining `(3, 4)`.

<br/>

###### j. 3D — axis=0, keepdims=True
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(axis=0, keepdims=True)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(1, 3, 4)
[[[12 13 14 15]
  [16 17 18 19]
  [20 21 22 23]]]
```

Same reduction but preserves the reduced axis as size one.

<br/>

###### k. `3D — axis=1`, `keepdims=False`
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(axis=1, keepdims=False)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(2, 4)
[[ 8  9 10 11]
 [20 21 22 23]]
```

Reduces the middle axis; keeps outer and last dimensions.

<br/>

###### l. 3D — `axis=1`, `keepdims=True`

```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(axis=1, keepdims=True)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(2, 1, 4)
[[[ 8  9 10 11]]

 [[20 21 22 23]]]
```
Preserves the reduced middle axis as size one for easier broadcasting.

<br/>

###### m. 3D — `axis=2`, `keepdims=False`
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(axis=2, keepdims=False)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(2, 3)
[[ 3  7 11]
 [15 19 23]]
```

Reduces the last axis; result holds per-row maxima for each slice.

<br/>

###### n. 3D — `axis=2`, `keepdims=True`
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(axis=2, keepdims=True)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(2, 3, 1)
[[[ 3]
  [ 7]
  [11]]

 [[15]
  [19]
  [23]]]
```

Keeps the last axis as size one, maintaining 3-D shape for broadcasting.

<br/>

###### o. 1D array — `axis=None`, `keepdims=False`
```py
import numpy as np
arr = np.array([3, 8, 5])
res = arr.max(axis=None, keepdims=False)
print(res, res.shape)
```

This example results in the following output:

```shell
8 ()
```

Computes the global maximum over the 1-D array; returns a scalar.

<br/>

---

#### C) `axis` and `where` Together

###### a. 2D — `axis=0` with value mask
```py
import numpy as np
arr = np.array([[6, 2, 5],
                [4, 9, 7]])
mask = arr > 5                 # Ensure at least one True per column.
res = arr.max(axis=0, where=mask)
print(res)
```

This example results in the following output:

```shell
[6 9 7]
```

Compares column-wise but only where values exceed 5; each column has at least one candidate.

<br/>

###### b. 2D — axis=1 with odd-number mask
```py
import numpy as np
arr = np.array([[3, 8, 5],
                [4, 7, 2]])
mask = (arr % 2) == 1          # Odds only.
res = arr.max(axis=1, where=mask)
print(res)
```

This example results in the following output:

```shell
[5 7]
```

Reduces row-wise considering only odd entries; each row retains at least one odd.

<br/>

###### c. 2D — `axis=-1` (last axis) with multiples-of-n mask
```py
import numpy as np
arr = np.array([[3, 6, 1],
                [5, 9, 7]])
n = 3          # here n can be randomized
mask = (arr % n) == 0
res = arr.max(axis=-1, where=mask)
print(res)
```

This example results in the following output:

```shell
[6 9]
```

Uses the last axis; only entries divisible by three are considered per row.

<br/>

###### d. 2D — `axis=0` with broadcast row mask `(2,1)`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
row_mask = np.array([[True],
                     [False]])   # Select only first row across all columns.
res = arr.max(axis=0, where=row_mask)
print(res)
```

This example results in the following output:

```shell
[2 8 5]
```

Broadcasts a row mask; column-wise reduction considers only the first row.

<br/>

###### e. 2D — `axis=1` with broadcast column mask `(1,3)`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
col_mask = np.array([[True, False, True],
                     [False, True, True]])   # Ensure at least one True per row.
res = arr.max(axis=1, where=col_mask)
print(res)
```

This example results in the following output:

```shell
[5 9]
```

Broadcasts a column mask; row-wise reduction compares only permitted columns.

<br/>

###### f. 2D — `axis=None` (global) with condition
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
mask = arr > 5
res = arr.max(axis=None, where=mask)
print(res)
```

This example results in the following output:

```shell
9
```

Flattens array and finds the maximum among elements greater than five.

<br/>

###### g. 2D — `axis=-1` with comparison-based mask
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 6, 9]])
thr = np.array([[1, 9, 0],
                [4, 5, 8]])
mask = arr > thr
res = arr.max(axis=-1, where=mask)
print(res)
```

This example results in the following output:

```shell
[5 9]
```

Creates a mask from pairwise comparison; reduces along the last axis per row.

<br/>

###### h. 3D — `axis=0` with layer-select mask
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)          # Values 0..23
mask = np.array([True, False])[:, None, None] # Use only first layer.
res = arr.max(axis=0, where=mask)
print(res)
```

This example results in the following output:

```shell
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]
```

Reduces across the first dimension while selecting only layer 0.

<br/>

###### i. 3D — `axis=1` with guaranteed-one-True mask

```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
mask = np.zeros_like(arr, dtype=bool)
mask[:, 0, :] = True           # Ensure one True along axis=1.
res = arr.max(axis=1, where=mask)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(2, 4)
[[ 0  1  2  3]
 [12 13 14 15]]
```

Row-of-slices mask ensures each (batch, col) position has a candidate; result equals the first slice.

<br/>

###### j. 3D — `axis=2` with periodic mask on last axis
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
mask = np.array([True, False, True, False])[None, None, :]  # Pick indices 0 and 2.
res = arr.max(axis=2, where=mask)
print(res.shape)
print(res)
```

This example results in the following output:

```shell
(2, 3)
[[ 2  6 10]
 [14 18 22]]
```

Reduces over the last axis considering positions 0 and 2 only; values increase with index, so index 2 dominates.

<br/>

###### k. 1D — axis=0 with threshold mask
```py
import numpy as np
arr = np.array([3, 9, 1, 7])
mask = arr > 5
res = arr.max(axis=0, where=mask)
print(res)
```

This example results in the following output:

```shell
9
```

Reduces a 1-D array with a same-shape mask; picks the max among elements greater than five.

<br/>

###### l. 1D — `axis=None` (global) with even-number mask
```py
import numpy as np
arr = np.array([2, 11, 4, 7, 10])
mask = (arr % 2) == 0
res = arr.max(axis=None, where=mask)
print(res)
```

This example results in the following output:

```shell
10
```

Flattens (trivial for 1-D) and selects only even elements before computing the maximum.

<br/>

###### m. 2D — `axis=0` with broadcast column mask `(1, n)`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
col_mask = np.array([[True, False, True]])  # Broadcast over rows.
res = arr.max(axis=0, where=col_mask)
print(res)
```

This example results in the following output:

```shell
[4 1 9]
```

Reduces by column but only considers selected columns across all rows via a (1, n) mask.

<br/>

###### n. 2D — `axis=1` with scalar comparison mask (broadcast)
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 6, 9]])
mask = arr >= 6      # Broadcasted scalar threshold.
res = arr.max(axis=1, where=mask)
print(res)
```

This example results in the following output:

```shell
[8 9]
```

Row-wise maxima considering only values ≥ 6 in each row.

<br/>

###### o. 3D — `axis=1` with mask shape `(b, 1, c)` (broadcast middle axis)
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)      # (2,3,4)
mask = np.array([[True, False, True, False],
                 [False, True, True, False]])[:, None, :]  # (2,1,4)
res = arr.max(axis=1, where=mask)
print(res.shape); print(res)
```

This example results in the following output:

```shell
(2, 4)
[[ 8  9 10 11]
 [20 21 22 23]]
```
Broadcasts mask over the middle axis; per batch/column, at least one True ensures a valid candidate.

<br/>

###### p. 3D — `axis=2` with mask shape `(1, m, 1)` (pick rows across depth)
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)   # (2,3,4)
row_pick = np.array([[True],[False],[True]])[None, :, :]   # (1,3,1)
res = arr.max(axis=2, where=row_pick)
print(res.shape); print(res)
```

This example results in the following output:

```shell
(2, 3)
[[ 3  7 11]
 [15 19 23]]
```

Selects rows 0 and 2 across the last axis, then reduces over depth for those rows only.

<br/>

###### q. 3D — `axis=None` (global) with composite condition
```py
import numpy as np
arr = np.arange(1, 13).reshape(3, 4)
mask = (arr % 2 == 0) | (arr > 9)
res = arr.max(axis=None, where=mask)
print(res)
```

This example results in the following output:

```shell
12
```

Flattens and compares only elements that are even or greater than nine, returning the global maximum.

<br/>

---

#### D) `axis` and `initial` Together

###### a. 1D — `axis=0`, `initial` larger than all
```py
import numpy as np
arr = np.array([4, 7, 2])
res = arr.max(axis=0, initial=10)
print(res)
```
This example results in the following output:
```shell
10
```
`initial` is compared with all elements; since 10 exceeds the array max, it becomes the result.

<br/>

###### b. 1D — `axis=0`, `initial` smaller than max
```py
import numpy as np
arr = np.array([4, 7, 2])
res = arr.max(axis=0, initial=3)
print(res)
```
This example results in the following output:
```shell
7
```
initial is a baseline; the true maximum (7) dominates when greater than initial.

<br/>

###### c. 1D (empty) — `axis=0` with `initial`
```py
import numpy as np
arr = np.array([], dtype=int)
res = arr.max(axis=0, initial=5)
print(res)
```
This example results in the following output:
```shell
5
```
For an empty array, the reduction returns the provided initial as a safe fallback.

<br/>

###### d. 2D — `axis=0`, column-wise with baseline
```py
import numpy as np
arr = np.array([[1, 4, 6],
                [7, 2, 3]])
res = arr.max(axis=0, initial=5)
print(res)
```
This example results in the following output:
```shell
[7 5 6]
```
Per column, the result is max(column_max, initial); only the second column is lifted to 5.

<br/>

###### e. 2D — `axis=1`, row-wise with higher baseline
```py
import numpy as np
arr = np.array([[1, 4, 6],
                [7, 2, 3]])
res = arr.max(axis=1, initial=8)
print(res)
```
This example results in the following output:
```shell
[8 8]
```
Each row’s maximum is compared with 8; both rows are raised to the baseline.

<br/>

###### f. 2D — `axis=-1` (last axis), moderate baseline
```py
import numpy as np
arr = np.array([[2, 9, 5],
                [4, 6, 3]])
res = arr.max(axis=-1, initial=6)
print(res)
```
This example results in the following output:
```shell
[9 6]
```
Reduces across the last axis; each row’s result is max(row_max, 6).

<br/>

###### g. 2D — `axis=None`, global reduction with high baseline
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
res = arr.max(axis=None, initial=12)
print(res)
```
This example results in the following output:
```shell
12
```
Flattens the array; the global maximum is compared with `initial`, so 12 wins.

<br/>

###### h. 3D — `axis=0`, baseline affecting smaller positions
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
res = arr.max(axis=0, initial=15)
print(res.shape); print(res)
```
This example results in the following output:
```shell
(3, 4)
[[15 15 15 15]
 [16 17 18 19]
 [20 21 22 23]]
```
Across layers, each (row, col) takes `max(layer_max, 15)`; low positions are lifted to 15.

<br/>

###### i. 3D — `axis=2` (last), per-row baseline
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
res = arr.max(axis=2, initial=5)
print(res.shape); print(res)
```
This example results in the following output:
```shell
(2, 3)
[[ 5  7 11]
 [15 19 23]]
```
For each row across depth, the result is `max(row_max, 5)`; only smaller rows are raised.

<br/>

---

#### E) `out` and `keepdims` Together

###### a. 2D — Default shape match (`keepdims=False`)
```py
import numpy as np
arr = np.array([[2, 5, 8],
                [3, 7, 1]])

out_arr = np.empty(3, dtype=int)
arr.max(axis=0, out=out_arr, keepdims=False)

print(out_arr)
```
This example results in the following output:
```shell
[3 7 8]
```
Writes column-wise maxima directly into `out_arr`. Since `keepdims=False`, the output shape `(3,)` matches the column count.

<br/>

###### b. 2D — Preserve dimensions (keepdims=True)
```py
import numpy as np
arr = np.array([[2, 5, 8],
                [3, 7, 1]])

out_arr = np.empty((1, 3), dtype=int)
arr.max(axis=0, out=out_arr, keepdims=True)

print(out_arr)
```
This example results in the following output:
```shell
[[3 7 8]]
```
Keeps reduced dimension as size one; result fits into a `(1, 3)` output array.

<br/>

###### c. 2D — Row-wise reduction (`axis=1`, `keepdims=False`)
```py
import numpy as np
arr = np.array([[4, 1, 9],
                [3, 7, 5]])

out_arr = np.empty(2, dtype=int)
arr.max(axis=1, out=out_arr, keepdims=False)

print(out_arr)
```
This example results in the following output:
```shell
[9 7]
```
Stores the maximum of each row directly in a 1D array `(2,)`.

<br/>

###### d. 2D — Row-wise with dimension retained (`keepdims=True`)
```py
import numpy as np
arr = np.array([[4, 1, 9],
                [3, 7, 5]])

out_arr = np.empty((2, 1), dtype=int)
arr.max(axis=1, out=out_arr, keepdims=True)

print(out_arr)
```
This example results in the following output:
```shell
[[9]
 [7]]
```
Keeps the reduced axis as size one, so the output shape `(2, 1)` aligns with broadcasting rules.

<br/>

###### e. 3D — Layer reduction (`axis=0`, `keepdims=False`)
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
out_arr = np.empty((3, 4), dtype=int)

arr.max(axis=0, out=out_arr, keepdims=False)
print(out_arr)
```
This example results in the following output:
```shell
[[12 13 14 15]
 [16 17 18 19]
 [20 21 22 23]]
```
Reduces across the first axis; results stored in `(3, 4)` array matching the reduced shape.

<br/>

###### f. 3D — Layer reduction with dimension retained (`keepdims=True`)
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
out_arr = np.empty((1, 3, 4), dtype=int)

arr.max(axis=0, out=out_arr, keepdims=True)
print(out_arr.shape)
```
This example results in the following output:
```shell
(1, 3, 4)
```
Preserves the first axis as a singleton; output retains full dimensionality for broadcasting.

<br/>

###### g. 2D — Global maximum (`axis=None`, `keepdims=False`)
```py
import numpy as np
arr = np.array([[2, 5, 8],
                [3, 7, 1]])

out_arr = np.empty((), dtype=int)
arr.max(axis=None, out=out_arr, keepdims=False)

print(out_arr)
```
This example results in the following output:
```shell
8
```
Stores a single scalar maximum (global) in a zero-dimensional array container.

<br/>

###### h. 2D — Global maximum with dimension retained (`keepdims=True`)
```py
import numpy as np
arr = np.array([[2, 5, 8],
                [3, 7, 1]])

out_arr = np.empty((1, 1), dtype=int)
arr.max(axis=None, out=out_arr, keepdims=True)

print(out_arr)
```
This example results in the following output:
```shell
[[8]]
```
Retains 2D shape `(1, 1)` while computing the overall maximum; useful for dimensional consistency.

<br/>

---

#### F) `out` and `where` Together

###### a. Basic mask to select values

```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
mask = arr > 5
out0 = np.empty((), dtype=arr.dtype)
arr.max(where=mask, out=out0)
print(out0)
```

This example results in the following output:

```shell
9
```
Compares only elements greater than 5 and writes the global maximum into a 0-D output.

<br/>

######  b. Full-True mask (equivalent to normal max)
```py
import numpy as np
arr = np.array([[1, 3],
                [2, 4]])
mask = np.ones_like(arr, dtype=bool)
out0 = np.empty((), dtype=arr.dtype)
arr.max(where=mask, out=out0)
print(out0)
```
This example results in the following output:
```shell
4
```
A full-True mask behaves like no mask; the overall maximum is stored into `out0`.

<br/>

###### c. Buffer reuse across arrays
```py
import numpy as np
arr1 = np.array([[2, 8, 5],
                 [4, 1, 9]])
arr2 = np.array([[3, 7, 6],
                 [2,10, 4]])
mask1 = arr1 > 5
mask2 = arr2 % 2 == 0
out0 = np.empty((), dtype=int)
arr1.max(where=mask1, out=out0); print("arr1:", out0)
arr2.max(where=mask2, out=out0); print("arr2:", out0)
```
This example results in the following output:
```shell
arr1: 9
arr2: 10
```
Reuses the same 0-D buffer for different arrays and masks.

<br/>

###### d. Broadcast row mask on 2×3, global reduction
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
row_mask = np.array([[True],[False]])   # Use only first row.
out0 = np.empty((), dtype=arr.dtype)
arr.max(where=row_mask, out=out0)
print(out0)
```
This example results in the following output:
```shell
8
```
Broadcasts a (2,1) mask; the global maximum is taken from the first row only.

<br/>

###### e. Mask from pairwise comparison with another array
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 6, 9]])
thr = np.array([[1, 9, 0],
                [3, 5,10]])
mask = arr > thr
out0 = np.empty((), dtype=arr.dtype)
arr.max(where=mask, out=out0)
print(out0)
```
This example results in the following output:
```shell
6
```
Builds a mask by comparing two arrays elementwise; writes the maximum of permitted positions.

<br/>

###### f. Sparse mask (pick specific coordinates)
```py
import numpy as np
arr = np.array([[10, 20, 30],
                [40, 50, 60]])
mask = np.zeros_like(arr, dtype=bool)
mask[0,2] = True; mask[1,1] = True
out0 = np.empty((), dtype=arr.dtype)
arr.max(where=mask, out=out0)
print(out0)
```
This example results in the following output:
```shell
50
```
Selects only positions (0,2) and (1,1); the maximum among those is written to out0.

<br/>

###### g. 1-D array with even-number mask; 1-element out
```py
import numpy as np
arr = np.array([2, 11, 4, 7, 10])
mask = (arr % 2) == 0
out1 = np.empty(1, dtype=arr.dtype)
arr.max(where=mask, out=out1)
print(out1)
```
This example results in the following output:
```shell
[10]
```
Stores the masked global maximum into a 1-element output vector.

<br/>

###### h. 3-D array; mask selects large values only
```py
import numpy as np
arr = np.arange(24).reshape(2,3,4)
mask = arr >= 20
out0 = np.empty((), dtype=arr.dtype)
arr.max(where=mask, out=out0)
print(out0)
```
This example results in the following output:
```shell
23
```
Flattens under the hood and compares only elements ≥20; writes the overall maximum.

<br/>

###### i. Safe dtype upcast in out
```py
import numpy as np
arr = np.array([[1, 4, 3],
                [6, 2, 5]], dtype=np.int32)
mask = arr >= 4
outf = np.empty((), dtype=np.float64)
arr.max(where=mask, out=outf)
print(outf)
```
This example results in the following output:
```shell
6.0
```
Stores an integer result into a float output using safe upcasting.

<br/>

###### j. Overwriting a prefilled 0-D buffer
```py
import numpy as np
arr = np.array([[5, 3, 9],
                [2, 7, 1]])
mask = arr > 4
out0 = np.array(-999, dtype=arr.dtype)   # Prefilled sentinel.
arr.max(where=mask, out=out0)
print(out0)
```
This example results in the following output:
```shell
9
```
The masked maximum overwrites the prefilled scalar buffer in place.

<br/>

---

#### G) `out` and `initial` Together
###### a. Basic: `initial` smaller than the true max
```py
import numpy as np
arr = np.array([4, 7, 2])
out0 = np.empty((), dtype=arr.dtype)
arr.max(initial=3, out=out0)
print(out0)
```
This example results in the following output:
```shell
7
```
`initial` is a baseline; the array’s real maximum (7) wins and is written into `out0`.

<br/>

###### b. Baseline dominates: `initial` larger than all elements
```py
import numpy as np
arr = np.array([4, 7, 2])
out0 = np.empty((), dtype=arr.dtype)
arr.max(initial=10, out=out0)
print(out0)
```
This example results in the following output:
```shell
10
```
Because `initial` exceeds every element, it becomes the result stored in `out0`.

<br/>

###### c. Empty array with `initial`
```py
import numpy as np
arr = np.array([], dtype=int)
out0 = np.empty((), dtype=arr.dtype)
arr.max(initial=5, out=out0)
print(out0)
```
This example results in the following output:
```shell
5
```
For empty input, the reduction returns the provided `initial`, safely written to `out0`.

<br/>

###### d. Reusing the same buffer across calls
```py
import numpy as np
a = np.array([2, 9, 1])
b = np.array([3, 5, 7])
out0 = np.empty((), dtype=int)

a.max(initial=0, out=out0); print("a:", out0)
b.max(initial=10, out=out0); print("b:", out0)
```
This example results in the following output:
```shell
a: 9
b: 10
```
One 0-D buffer is reused: first returns the true max of `a`, then `initial` dominates for `b`.

<br/>

###### e. Safe upcast: int array → float `out`, float `initial`
```py
import numpy as np
arr = np.array([1, 6, 3], dtype=np.int32)
outf = np.empty((), dtype=np.float64)
arr.max(initial=4.5, out=outf)
print(outf)
```
This example results in the following output:
```shell
6.0
```
Result is safely stored as float; `initial=4.5` doesn’t exceed the array maximum.

<br/>

###### f. Float array, float `out`, high `initial`
```py
import numpy as np
arr = np.array([1.2, 3.4, 2.8])
outf = np.empty((), dtype=arr.dtype)
arr.max(initial=5.0, out=outf)
print(outf)
```
This example results in the following output:
```shell
5.0
```
`initial` defines a higher floor than all elements, so the result is the baseline.

<br/>

###### g. Prefilled buffer overwritten in place
```py
import numpy as np
arr = np.array([5, 3, 9])
out0 = np.array(-999, dtype=arr.dtype)  # Sentinel value.
arr.max(initial=0, out=out0)
print(out0)
```
This example results in the following output:
```shell
9
```
The computed maximum overwrites the prefilled scalar buffer.

<br/>

###### h. Larger baseline for nonnegative guarantee
```py
import numpy as np
arr = np.array([-4, -2, -7])
out0 = np.empty((), dtype=arr.dtype)
arr.max(initial=0, out=out0)
print(out0)
```
This example results in the following output:
```shell
0
```
Even though all values are negative, `initial=0` guarantees a nonnegative result.

<br/>

###### i. Functional form: np.max with out and initial
```py
import numpy as np
arr = np.array([2, 11, 4])
out0 = np.empty((), dtype=arr.dtype)
np.max(arr, initial=8, out=out0)
print(out0)
```
This example results in the following output:
```shell
11
```
`np.max` mirrors `ndarray.max`; with `initial=8`, the true max (11) still wins.

<br/>

---

#### H) `keepdims` and `where` Together
###### a. Basic 2D array with conditional mask, `keepdims=False` (default)
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
mask = arr > 5
res = arr.max(where=mask, keepdims=False)
print(res, res.shape)
```

This example results in the following output:
```shell
9 ()
```
The global maximum is computed only where `arr > 5`; reduced to a scalar because `keepdims=False`.

<br/>

###### b. Same mask but `keepdims=True`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
mask = arr > 5
res = arr.max(where=mask, keepdims=True)
print(res, res.shape)
```
This example results in the following output:
```shell
[[9]] (1, 1)
```
Keeps the original 2D dimensionality as (1,1) while still computing the same masked maximum.

<br/>

###### c. Full-True mask, `keepdims=False`
```py
import numpy as np
arr = np.array([[1, 3, 5],
                [2, 6, 4]])
mask = np.ones_like(arr, dtype=bool)
res = arr.max(where=mask, keepdims=False)
print(res, res.shape)
```
This example results in the following output:
```shell
6 ()
```
All elements are valid; behave the same as a normal global `max()`.

<br/>

###### d. Full-True mask, `keepdims=True`
```py
import numpy as np
arr = np.array([[1, 3, 5],
                [2, 6, 4]])
mask = np.ones_like(arr, dtype=bool)
res = arr.max(where=mask, keepdims=True)
print(res, res.shape)
```
This example results in the following output:
```shell
[[6]] (1, 1)
```
Keeps reduced dimensions of size one, producing a 2D array that mirrors the original layout.

<br/>

###### e. Sparse mask — pick only top-right elements, `keepdims=False`
```py
import numpy as np
arr = np.array([[10, 2, 30],
                [5, 8, 9]])
mask = np.zeros_like(arr, dtype=bool)
mask[0, 2] = True
mask[1, 1] = True
res = arr.max(where=mask, keepdims=False)
print(res, res.shape)
```
This example results in the following output:
```shell
30 ()
```
Only considers positions `(0,2)` and `(1,1)`; returns the largest of those as a scalar.

<br/>

###### f. Sparse mask with same positions, `keepdims=True`
```py
import numpy as np
arr = np.array([[10, 2, 30],
                [5, 8, 9]])
mask = np.zeros_like(arr, dtype=bool)
mask[0, 2] = True
mask[1, 1] = True
res = arr.max(where=mask, keepdims=True)
print(res, res.shape)
```
This example results in the following output:
```shell
[[30]] (1, 1)
```
Same elements are considered, but dimensionality is preserved for broadcasting.

<br/>

###### g. 3D array, selective mask, `keepdims=False`
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
mask = arr >= 20
res = arr.max(where=mask, keepdims=False)
print(res, res.shape)
```
This example results in the following output:
```shell
23 ()
```
Flattens the 3D array and computes the maximum only where `arr >= 20`; result is scalar.

<br/>

###### h. 3D array, selective mask, `keepdims=True`
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
mask = arr >= 20
res = arr.max(where=mask, keepdims=True)
print(res, res.shape)
```
This example results in the following output:
```shell
[[[23]]] (1, 1, 1)
```
Keeps the 3D structure (size-one dims), useful for aligning shapes during later broadcasting.

<br/>

###### i. 1D array, partial mask, `keepdims=False`
```py
import numpy as np
arr = np.array([3, 8, 2, 9, 1])
mask = arr > 5
res = arr.max(where=mask, keepdims=False)
print(res, res.shape)
```

This example results in the following output:

```shell
9 ()
```
Only elements greater than 5 are compared; result is scalar since `keepdims=False`.

<br/>

###### j. 1D array, same mask, `keepdims=True`
```py
import numpy as np
arr = np.array([3, 8, 2, 9, 1])
mask = arr > 5
res = arr.max(where=mask, keepdims=True)
print(res, res.shape)
```
This example results in the following output:
```shell
[9] (1,)
```
Keeps one dimension as size one (`(1,)`) while performing the same masked reduction.

<br/>

---

#### I) `keepdims` and `initial` Together
###### a. 2D — `keepdims=False` (default), baseline below true max
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])

res = arr.max(keepdims=False, initial=3)
print(res, np.shape(res))
```
This example results in the following output:
```shell
9 ()
```
Compares all elements against `initial=3`; true maximum (9) wins and returns a scalar.

<br/>

###### b. 2D — keepdims=True, baseline below true max
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])

res = arr.max(keepdims=True, initial=0)
print(res, res.shape)
```
This example results in the following output:
```shell
[[9]] (1, 1)
```
Global reduction keeps dimensions as `(1, 1)` while returning the same maximum value.

<br/>

###### c. 2D — `keepdims=False`, baseline above all elements
```py
import numpy as np
arr = np.array([[1, 4, 6],
                [7, 2, 3]])

res = arr.max(keepdims=False, initial=10)
print(res, np.shape(res))
```
This example results in the following output:
```shell
10 ()
```
Since `initial=10` exceeds every element, it becomes the result (scalar).

<br/>

###### d. 2D — `keepdims=True`, baseline above all elements
```py
import numpy as np
arr = np.array([[1, 4, 6],
                [7, 2, 3]])

res = arr.max(keepdims=True, initial=10)
print(res, res.shape)
```
This example results in the following output:
```shell
[[10]] (1, 1)
```
Returns the baseline while preserving dimensionality for broadcasting.

<br/>

###### e. 1D — `keepdims=False`, baseline smaller than max
```py
import numpy as np
arr = np.array([4, 7, 2])

res = arr.max(keepdims=False, initial=5)
print(res, np.shape(res))
```
This example results in the following output:
```shell
7 ()
```
True maximum (7) beats the baseline and returns a scalar.

<br/>

###### f. 1D — `keepdims=True`, baseline larger than all
```py
import numpy as np
arr = np.array([4, 7, 2])

res = arr.max(keepdims=True, initial=10)
print(res, res.shape)
```
This example results in the following output:
```shell
[10] (1,)
```
Keeps one dimension of size one; baseline dominates.

<br/>

###### g. 3D — `keepdims=False`, moderate baseline
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(keepdims=False, initial=5)
print(res, np.shape(res))
```
This example results in the following output:
```shell
23 ()
```
Flattens under the hood; the array’s global maximum (23) exceeds the baseline.

<br/>

###### h. 3D — `keepdims=True`, high baseline
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)

res = arr.max(keepdims=True, initial=30)
print(res, res.shape)
```
This example results in the following output:
```shell
[[[30]]] (1, 1, 1)
```
All elements are below 30, so baseline is returned with dimensions preserved.

<br/>

###### i. Empty array — `keepdims=False` with baseline
```py
import numpy as np
arr = np.array([])

res = arr.max(keepdims=False, initial=5)
print(res, np.shape(res))
```
This example results in the following output:
```shell
5 ()
```
For empty input, the baseline provides a safe scalar result.

<br/>

###### j. Float array — `keepdims=True`, baseline below true max
```py
import numpy as np
arr = np.array([1.2, 3.4, 2.8])

res = arr.max(keepdims=True, initial=2.5)
print(res, res.shape)
```
This example results in the following output:
```shell
[3.4] (1,)
```
Preserves a `(1,)` shape while selecting the larger of the array max and the baseline.

<br/>

---

#### J) `where` and `initial` Together
###### a. Basic mask (no fallback needed)
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
mask = arr > 5
res = arr.max(where=mask)
print(res)
```
This example results in the following output:
```shell
9
```
Considers only elements greater than 5; at least one match exists, so no baseline is needed.

<br/>

###### b. Full-True mask with low baseline (ignored)
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
mask = np.ones_like(arr, dtype=bool)
res = arr.max(where=mask, initial=3)
print(res)
```
This example results in the following output:
```shell
9
```
All elements are valid; the array’s true maximum beats the baseline 3.

<br/>

###### c. Full-True mask with high baseline (dominates)
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
mask = np.ones_like(arr, dtype=bool)
res = arr.max(where=mask, initial=12)
print(res)
```
This example results in the following output:
```shell
12
```
Because the baseline exceeds every element, the result is the baseline.

<br/>

###### d. Sparse mask (select specific positions)
```py
import numpy as np
arr = np.array([[10, 20, 30],
                [40, 50, 60]])
mask = np.zeros_like(arr, dtype=bool)
mask[0, 2] = True; mask[1, 1] = True
res = arr.max(where=mask)
print(res)
```
This example results in the following output:
```shell
50
```
Only positions (0,2) and (1,1) are compared; 50 is the maximum among selected entries.

<br/>

###### e. All-False mask with safe fallback
```py
import numpy as np
arr = np.array([[3, 5],
                [2, 4]])
mask = np.zeros_like(arr, dtype=bool)   # No positions selected
res = arr.max(where=mask, initial=-1)
print(res)
```
This example results in the following output:
```shell
-1
```
No elements are eligible; the baseline supplies a safe, explicit fallback result.

<br/>

###### f. 1D array with condition and baseline
```py
import numpy as np
arr = np.array([2, 11, 4, 7, 10])
mask = (arr % 2) == 0                 # Evens only
res = arr.max(where=mask, initial=0)
print(res)
```
This example results in the following output:
```shell
10
```
Compares only even numbers; 10 wins over the baseline 0.

<br/>

###### g. Comparison-based mask from another array
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 6, 9]])
thr = np.array([[3, 7, 1],
                [5, 0, 8]])
mask = arr > thr
res = arr.max(where=mask, initial=0)
print(res)
```
This example results in the following output:
```shell
9
```
Mask is built by `arr > thr`; the maximum over permitted positions is 9, exceeding the baseline.

<br/>

###### h. 3D array with thresholded mask
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)   # 0..23
mask = arr >= 20
res = arr.max(where=mask, initial=0)
print(res)
```
This example results in the following output:
```shell
23
```
Only values ≥ 20 are considered; the maximum among them is 23.

<br/>

###### i. Negative inputs with nonnegative floor
```py
import numpy as np
arr = np.array([-8, -4, -6])
mask = arr > -7                      # Select -4 and -6
res = arr.max(where=mask, initial=0)
print(res)
```
This example results in the following output:
```shell
0
```
The baseline 0 exceeds all selected negatives, ensuring a nonnegative result.

<br/>

###### j. Float array with float baseline
```py
import numpy as np
arr = np.array([1.2, 3.4, 2.8])
mask = arr > 2.0
res = arr.max(where=mask, initial=2.5)
print(res)
```
This example results in the following output:
```shell
3.4
```
Considers values greater than 2.0; 3.4 beats the baseline 2.5.

<br/>

###### k. Runtime threshold baseline pattern
```py
import numpy as np
arr = np.array([3, 5, 9, 1, 7])
threshold = 6
mask = arr > threshold
res = arr.max(where=mask, initial=threshold)
print(res)
```
This example results in the following output:
```shell
9
```
A common pattern: use the same threshold for both masking and fallback.

<br/>

###### l. Broadcast row mask (2×3) with baseline
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
row_mask = np.array([[True],
                     [False]])       # Use only first row
res = arr.max(where=row_mask, initial=-1)
print(res)
```
This example results in the following output:
```shell
8
```
Broadcasts a (2,1) mask across columns; the result is the maximum from the first row, compared against the baseline.

<br/>

###### m. Empty array with `initial`
```py
import numpy as np
arr = np.array([], dtype=int)
res = arr.max(where=True, initial=7)
print(res)
```
This example results in the following output:
```shell
7
```
For empty arrays, `initial` provides the only valid result, avoiding errors.

<br/>

###### n. Baseline equal to the true maximum
```py
import numpy as np
arr = np.array([3, 7, 2])
mask = np.ones_like(arr, dtype=bool)
res = arr.max(where=mask, initial=7)
print(res)
```
This example results in the following output:
```shell
7
```
If `initial` equals the actual maximum, the result remains unchanged but still validated.

<br/>

###### o. Scalar broadcast mask (`where=True`/`where=False`)
```py
import numpy as np
arr = np.array([2, 4, 6])
res_true = arr.max(where=True, initial=0)
res_false = arr.max(where=False, initial=-5)
print(res_true, res_false)
```
This example results in the following output:
```shell
6 -5
```
A scalar `True` includes all elements; scalar `False` excludes all, so baseline alone is returned.

<br/>

---

#### K) `axis` + `out` + `keepdims` (No Errors)
###### a. 1D — `axis=0`, keep dimension, write to 1-D buffer
```py
import numpy as np
arr = np.array([3, 9, 2])
out_keep = np.empty((1,), dtype=arr.dtype)
arr.max(axis=0, keepdims=True, out=out_keep)
print(out_keep, out_keep.shape)
```
This example results in the following output:
```shell
[9] (1,)
```
Row is reduced but dimension is preserved; result goes into a `(1,)` buffer.

<br/>

###### b. 1D — axis=None, keep dimension, write to 1-D buffer
```py
import numpy as np
arr = np.array([4, 1, 7])
out_keep = np.empty((1,), dtype=arr.dtype)
arr.max(axis=None, keepdims=True, out=out_keep)
print(out_keep, out_keep.shape)
```
This example results in the following output:
```shell
[7] (1,)
```
Global maximum with `keepdims=True`; NumPy returns a `(1,)` result that fits the buffer.

<br/>

###### c. 2D — Global max with dims kept; write to `(1,1)` buffer
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
out_11 = np.empty((1, 1), dtype=arr.dtype)
arr.max(axis=None, keepdims=True, out=out_11)
print(out_11, out_11.shape)
```
This example results in the following output:
```shell
[[9]] (1, 1)
```
Flattens conceptually, but returns a `(1,1)` array because `keepdims=True`.

<br/>

###### d. 2D — `axis=-1` (last axis), keepdims; write to `(2,1)` buffer
```py
import numpy as np
arr = np.array([[3, 1, 7],
                [2, 9, 4]])
out_21 = np.empty((2, 1), dtype=arr.dtype)
arr.max(axis=-1, keepdims=True, out=out_21)
print(out_21, out_21.shape)
```
This example results in the following output:
```shell
[[7]
 [9]] (2, 1)
```
Per-row maxima using negative axis; reduced axis kept as size one.

<br/>

###### e. 3D — `axis=1`, no keepdims; write to `(2,4)` buffer
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)   # (2,3,4)
out_24 = np.empty((2, 4), dtype=arr.dtype)
arr.max(axis=1, keepdims=False, out=out_24)
print(out_24.shape); print(out_24)
```
This example results in the following output:
```shell
(2, 4)
[[ 8  9 10 11]
 [20 21 22 23]]
```
Reduces the middle axis; results stored directly in a `(2,4)` buffer.

<br/>

###### f. 3D — `axis=2`, keepdims; write to `(2,3,1)` buffer
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
out_231 = np.empty((2, 3, 1), dtype=arr.dtype)
arr.max(axis=2, keepdims=True, out=out_231)
print(out_231.shape); print(out_231)
```
This example results in the following output:
```shell
(2, 3, 1)
[[[ 3]
  [ 7]
  [11]]

 [[15]
  [19]
  [23]]]
```
Reduces the last axis and preserves it as length-1 for easy broadcasting.

<br/>

###### g. 3D — `axis=1`, keepdims; write to `(2,1,4)` buffer
```py
import numpy as np
arr = np.arange(24).reshape(2, 3, 4)
out_214 = np.empty((2, 1, 4), dtype=arr.dtype)
arr.max(axis=1, keepdims=True, out=out_214)
print(out_214.shape); print(out_214)
```
This example results in the following output:
```shell
(2, 1, 4)
[[[ 8  9 10 11]]

 [[20 21 22 23]]]
```
Keeps the reduced middle axis as size one; buffer matches the preserved shape.

<br/>

###### h. 2D — `axis=0`, keepdims; write into a reshaped view buffer
```py
import numpy as np
arr = np.array([[4, 6, 1],
                [2, 9, 7]])
flat = np.empty(3, dtype=arr.dtype)
out_view = flat.reshape(1, 3)          # view with kept dim
arr.max(axis=0, keepdims=True, out=out_view)
print(out_view, out_view.shape)
```
This example results in the following output:
```shell
[[4 9 7]] (1, 3)
```
Stores column maxima into a reshaped view; demonstrates memory reuse with a kept dimension.

<br/>

###### i. 2D — Global max, `keepdims=False`, float out from int array
```py
import numpy as np
arr = np.array([[2, 11, 4],
                [3,  7, 6]], dtype=np.int32)
out_scalar = np.empty((), dtype=np.float64)
arr.max(axis=None, keepdims=False, out=out_scalar)
print(out_scalar, out_scalar.shape)
```
This example results in the following output:
```shell
11.0 ()
```
Global max written to a 0-D float buffer; safe upcast from int to float.


---

###### Quick pointers
- For `axis=None` with `keepdims=True`, match `out` to `(1,)*arr.ndim` (e.g., `(1,)`, `(1,1)`, `(1,1,1)`).
- For `keepdims=False`, match `out` to the reduced shape (e.g., `(n,)`, `(m,n)`, or `()` for scalars).

---

<br/>

#### `axis` + `out` + `where` (No Errors)
###### a. 1D — `axis=0` with even mask → scalar in 0-D `out`
```py
import numpy as np
arr = np.array([3, 10, 7, 12])
mask = (arr % 2) == 0
out0 = np.empty((), dtype=arr.dtype)     # 0-D buffer for scalar result
arr.max(axis=0, where=mask, out=out0)
print(out0, out0.shape)
```
This example results in the following output:
```shell
12 ()
```
Reduces a 1-D array along axis 0, comparing only even entries, and writes the scalar maximum to a 0-D buffer.

<br/>

###### b. 2D — `axis=0` with row broadcast mask `(2,1)`; result into `(ncols,)`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
row_mask = np.array([[True],[False]])    # Use only first row across all columns
out_cols = np.empty(3, dtype=arr.dtype)  # shape matches (ncols,)
arr.max(axis=0, where=row_mask, out=out_cols)
print(out_cols)
```
This example results in the following output:
```shell
[2 8 5]
```
Column-wise reduction that considers only the first row via broadcasting; results go directly into a 1-D buffer.

<br/>

###### c. 2D — `axis=1` with column mask `(1,n)`; result into `(nrows,)`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 1, 9]])
col_mask = np.array([[True, False, True]])  # choose columns 0 and 2
out_rows = np.empty(2, dtype=arr.dtype)     # shape matches (nrows,)
arr.max(axis=1, where=col_mask, out=out_rows)
print(out_rows)
```
This example results in the following output:
```shell
[5 9]
```
Row-wise reduction that ignores masked-off columns; one maximum per row written to `out_rows`.

<br/>

###### d. 2D — `axis=-1` (last axis) with pairwise comparison mask; result into `(nrows,)`
```py
import numpy as np
arr = np.array([[2, 8, 5],
                [4, 6, 9]])
thr = np.array([[1, 9, 0],
                [4, 5, 8]])
mask = arr > thr
out_rows = np.empty(arr.shape[0], dtype=arr.dtype)
arr.max(axis=-1, where=mask, out=out_rows)
print(out_rows)
```
This example results in the following output:
```shell
[5 9]
```
Compares each row only where `arr > thr`, then writes each row’s maximum to a 1-D output buffer.

<br/>

###### e. 3D — `axis=0` with layer-select mask `(2,1,1)`; result into `(3,4)`
```py
import numpy as np
arr = np.arange(24).reshape(2,3,4)               # (layers, rows, cols)
mask = np.array([True, False])[:, None, None]     # take only first layer
out_034 = np.empty((3,4), dtype=arr.dtype)
arr.max(axis=0, where=mask, out=out_034)
print(out_034.shape); print(out_034)
```
This example results in the following output:
```shell
(3, 4)
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]
```
Reduces across layers using a broadcast mask that selects only layer 0; writes the 2-D result into `(3,4)`.

<br/>

###### f. 3D — `axis=1` with “at least one True per (batch,col)” mask; result into `(2,4)`
```py
import numpy as np
arr = np.arange(24).reshape(2,3,4)
mask = np.zeros_like(arr, dtype=bool)
mask[:, 0, :] = True                      # ensure a valid candidate along axis=1
out_24 = np.empty((2,4), dtype=arr.dtype)
arr.max(axis=1, where=mask, out=out_24)
print(out_24.shape); print(out_24)
```
This example results in the following output:
```shell
(2, 4)
[[ 0  1  2  3]
 [12 13 14 15]]
```
For each batch/column, at least one True ensures a defined maximum; results saved into `(2,4)`.

<br/>

###### g. 3D — `axis=2` with periodic mask `(1,1,4)`; result into `(2,3)`
```py
import numpy as np
arr = np.arange(24).reshape(2,3,4)
mask = np.array([True, False, True, False])[None, None, :]  # select indices 0 and 2
out_23 = np.empty((2,3), dtype=arr.dtype)
arr.max(axis=2, where=mask, out=out_23)
print(out_23.shape); print(out_23)
```
This example results in the following output:
```shell
(2, 3)
[[ 2  6 10]
 [14 18 22]]
```
Reduces over the last axis considering only positions 0 and 2; writes per-row maxima to `(2,3)`.

<br/>

###### h. 2D — `axis=0` with reshaped view as `out` and broadcast row mask
```py
import numpy as np
arr = np.array([[4, 6, 1],
                [2, 9, 7]])
row_mask = np.array([[True],[False]])       # first row only
flat = np.empty(3, dtype=arr.dtype)         # flat storage
out_view = flat.reshape(3)                   # view shaped for (ncols,)
arr.max(axis=0, where=row_mask, out=out_view)
print(out_view)                              # backed by the same memory as 'flat'
```
This example results in the following output:
```shell
[4 6 1]
```
Stores column-wise masked maxima into a reshaped view, demonstrating safe memory reuse.

<br/>

###### i. 1D — `axis=0` with float `out` upcast and threshold mask
```py
import numpy as np
arr = np.array([1, 6, 3], dtype=np.int32)
mask = arr >= 3
out0f = np.empty((), dtype=np.float64)   # 0-D float buffer
arr.max(axis=0, where=mask, out=out0f)
print(out0f, out0f.shape)
```
This example results in the following output:
```shell
6.0 ()
```
Computes the masked scalar max and writes it to a 0-D float buffer, exercising safe dtype upcasting.

<br/>

---


**Tip:** For scalar results (1-D with `axis=0`, or any shape with `axis=None`), use a **0-D** `out` buffer (`np.empty((), ...)`). For non-scalar results, match `out.shape` to the **reduced** shape.

---

<br/>

#### `axis` + `out` + `initial` (No Errors)
###### a. 1D — `axis=0`, scalar `out`, baseline dominates
```py
import numpy as np
arr = np.array([3, 5, 1])
out0 = np.empty((), dtype=arr.dtype)
arr.max(axis=0, initial=10, out=out0)
print(out0, out0.shape)
```
This example results in the following output:
```shell
10 ()
```
Reduces along the only axis; since `initial=10` > array max, the baseline is written to a 0-D buffer.

<br/>

###### b. 1D — `axis=0`, scalar `out`, baseline below true max
```py
import numpy as np
arr = np.array([3, 5, 1])
out0 = np.empty((), dtype=arr.dtype)
arr.max(axis=0, initial=2, out=out0)
print(out0)
```
This example results in the following output:
```shell
5
```
The true maximum (5) beats the baseline and is stored in-place.

<br/>

###### c. 2D — `axis=0` (columns), 1-D `out`, per-column baseline
```py
import numpy as np
arr = np.array([[1, 4, 6],
                [7, 2, 3]])
# Column maxima are [7,4,6]; baseline lifts only columns below 5
out_cols = np.empty(3, dtype=arr.dtype)
arr.max(axis=0, initial=5, out=out_cols)
print(out_cols)
```
This example results in the following output:
```shell
[7 5 6]
```
Writes column-wise results; each entry is `max(column_max, 5)`.

<br/>

###### d. 2D — `axis=1` (rows), 1-D `out`, high baseline
```py
import numpy as np
arr = np.array([[1, 4, 6],
                [7, 2, 3]])
out_rows = np.empty(2, dtype=arr.dtype)
arr.max(axis=1, initial=8, out=out_rows)
print(out_rows)
```
This example results in the following output:
```shell
[8 8]
```
Each row’s maximum is compared with 8; both rows are raised to the baseline.

<br/>

###### e. 2D — `axis=-1` (last axis), 1-D `out`, moderate baseline
```py
import numpy as np
arr = np.array([[2, 9, 5],
                [4, 6, 3]])
out_rows = np.empty(2, dtype=arr.dtype)
arr.max(axis=-1, initial=6, out=out_rows)
print(out_rows)
```
This example results in the following output:
```shell
[9 6]
```
Row maxima are compared with 6; the second row is lifted to 6.

<br/>

###### f. 3D — `axis=0` (across layers), 2-D `out`, baseline fills low cells
```py
import numpy as np
arr = np.arange(24).reshape(2,3,4)  # (layers, rows, cols)
out_2d = np.empty((3,4), dtype=arr.dtype)
arr.max(axis=0, initial=15, out=out_2d)
print(out_2d)
```
This example results in the following output:
```shell
[[15 15 15 15]
 [16 17 18 19]
 [20 21 22 23]]
```
For each (row,col), result is `max(max_over_layers, 15)`; only early positions are lifted

<br/>
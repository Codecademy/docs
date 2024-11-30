---
Title: '.prod()'
Description: 'Calculates the product of array elements over a specified axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'Math'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`numpy.prod()`** function computes the product of all elements in an array or along a specified axis.

This method is particularly useful in scenarios like determining factorial-like operations, calculating probabilities in statistics, or finding cumulative product results in multidimensional datasets.

By specifying the axis, the function can target specific rows or columns in multidimensional arrays, making it versatile for matrix or tensor operations.

## Syntax

```pseudo
numpy.prod(a, axis=None, dtype=None, out=None, keepdims=<no value>)
```

- `a`: Input array for which the product is calculated.
- `axis`(Optional): The axis along which the product is computed. If not specified, the product of all elements in the array is returned.
- `dtype`(Optional): The data type of the returned product.
- `out`(Optional): A location where the result is stored. If not specified, a new array is returned.
- `keepdims`(Optional): If `True`, the reduced axes are retained as dimensions with size 1.

> **Note**: If the input array is large or contains high-value elements, the `dtype` parameter can prevent overflow by specifying a larger data type.

## Examples

Here's how we can compute the product of all elements in a one-dimensional array:

```py
import numpy as np

# Example array
arr = np.array([1, 2, 3, 4])

# Calculate product
result = np.prod(arr)
print(result)
```

The output will be as follows:

```shell
24
```

For multidimensional arrays, `.prod()` can compute the product along rows or columns using the `axis` parameter:

```py
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

# Product along rows (axis 1)
row_product = np.prod(arr, axis=1)
print(row_product)

# Product along columns (axis 0)
col_product = np.prod(arr, axis=0)
print(col_product)
```

The output will be as follows:

```shell
[  6 120]
[ 4 10 18]
```

The calculation will be like this:

- **Row-wise product**: [1×2×3, 4×5×6] = [6, 120]
- **Column-wise product**: [1×4, 2×5, 3×6] = [4, 10, 18]

The `dtype` parameter can handle scenarios where array values are large, preventing overflow by converting results to a larger data type as follows:

```py
arr = np.array([1000, 2000, 3000], dtype=np.int32)

# Default dtype (may overflow)
default_result = np.prod(arr)

# Specifying dtype to prevent overflow
safe_result = np.prod(arr, dtype=np.int64)

print("Default:", default_result)
print("Safe:", safe_result)
```

The output will be as follows:

```shell
Default: 1294967296
Safe: 6000000000
```

## Codebyte Example

Suppose a store tracks the daily sales (number of items sold) for multiple departments over a week. `.prod()` can calculate the total items sold for each department or the total across all days.

```codebyte/python
import numpy as np

# Sales data: rows represent departments, columns represent days
sales = np.array([
    [5, 10, 2],  # Department 1: sales for 3 days
    [8, 12, 3],  # Department 2: sales for 3 days
    [4, 6, 1]    # Department 3: sales for 3 days
])

# Calculate total sales for each department (product along rows)
dept_sales = np.prod(sales, axis=1)
print(f"Total sales per department: {dept_sales}")

# Calculate total sales across all departments and days (product of all elements)
total_sales = np.prod(sales)
print(f"Total sales across all departments and days: {total_sales}")
```

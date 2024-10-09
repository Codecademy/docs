---

Title: 'numpy.diff'  
Description: 'Computes the n-th discrete difference along the specified axis of an array.'  
Subjects:  
  - 'Data Science'  
  - 'Python'  
  - 'Mathematics'  
Tags:  
  - 'NumPy'  
  - 'Python'  
  - 'Arrays'  
  - 'Differentiation'  
CatalogContent:  
  - 'learn-python-3'  
  - 'paths/data-science'

---

**`numpy.diff()`** is a function in the NumPy library that calculates the n-th discrete difference between adjacent elements of an array along a specified axis. It is commonly used to analyze changes or deltas between consecutive elements in a dataset, such as computing the difference between values in time series data.

## Syntax

```python
numpy.diff(a, n=1, axis=-1, prepend=<no value>, append=<no value>)
```

### Parameters:
- **a**: _array-like_
  - Input array on which the discrete differences are to be calculated.
- **n**: _int, optional_
  - The number of times values are differenced. Default is `n=1`.
- **axis**: _int, optional_
  - The axis along which the difference is calculated. Default is `-1` (the last axis).
- **prepend**: _array-like, optional_
  - Values to prepend to the array along the axis before performing the difference.
- **append**: _array-like, optional_
  - Values to append to the array along the axis before performing the difference.

## Example

Let's take an array and calculate its first and second differences.

```python
import numpy as np

# Create an array
arr = np.array([1, 3, 6, 10, 15])

# First difference
diff_1 = np.diff(arr)
print(diff_1)  # Output: [2, 3, 4, 5]

# Second difference
diff_2 = np.diff(arr, n=2)
print(diff_2)  # Output: [1, 1, 1]
```

## Codebyte Example

```codebyte/python
import numpy as np

# Create an array
arr = np.array([5, 15, 25, 35, 45])

# First difference
diff_1 = np.diff(arr)
print(diff_1)  # Output: [10, 10, 10, 10]

# Second difference
diff_2 = np.diff(arr, n=2)
print(diff_2)  # Output: [0, 0, 0]
```

The `numpy.diff()` function is useful for analyzing trends and understanding changes in numerical data by calculating successive differences between elements of an array.


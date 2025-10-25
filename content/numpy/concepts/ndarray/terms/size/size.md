---
Title: size
Description: The `size` attribute in NumPy returns the total number of elements in a NumPy array.
Subjects:
  - "Data Science"
Tags:
  - "NumPy"
  - "Arrays"
  - "Python"
CatalogContent:
  - "learn-numpy"
  - "numpy-array-basics"
---

# `size`

The **`size`** attribute of a NumPy `ndarray` returns the **total number of elements** present in the array.  
It counts every element across all dimensions, making it useful for quickly checking how large an array is, especially for multidimensional data.

Unlike methods such as `.shape`, which provide the size of each dimension, `.size` returns a single integer representing the **total count of elements** in the array.

---

## Syntax

```python
numpy.ndarray.size
```

## Example
```py
import numpy as np

# Create a 2D NumPy array
arr = np.array([[1, 2, 3],
                [4, 5, 6]])

print("Array:")
print(arr)

# Get the total number of elements
print("Total elements:", arr.size)
```
## Output:
```
Array:
[[1 2 3]
 [4 5 6]]
Total elements: 6
```

## Codebyte
```py
import numpy as np

# Creating a 3D array
arr = np.array([[[1, 2], [3, 4]],
                [[5, 6], [7, 8]]])

# Display array and its size
print("Array shape:", arr.shape)
print("Total elements:", arr.size)
```
```
Array shape: (2, 2, 2)
Total elements: 8
```



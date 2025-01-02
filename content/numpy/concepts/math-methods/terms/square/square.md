---
Title: '.square()'
Description: 'Calculates the square of each element in an array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Discrete Math'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In NumPy, the **`.square()`** method computes the square of a number or the square of the elements in an array. It is commonly used in mathematical calculations, machine learning, data analysis, engineering, and graphics.

## Syntax

```pseudo
numpy.square(x, out = None, where = True, dtype = None)
```

- `x`: The input data, which can be a number, an array, or a multidimensional array.
- `out` (Optional): A location where the result is stored. If provided, it must have the same shape as the expected output.
- `where` (Optional): A boolean array specifying which elements to compute. The result is only computed for elements where `where` is `True`.
- `dtype` (Optional): The desired data type for the output array. If not specified, it defaults to the data type of x.

## Examples

### Modifying the output array

The output array for NumPy operations cannot be a Python [list](https://www.codecademy.com/resources/docs/python/built-in-functions/list) because lists are not optimized for numerical computations. NumPy arrays are composed of contiguous blocks of memory, which enhances performance. Therefore, the array passed for the out parameter must be a NumPy array initialized with the `numpy.array` function:

```py
import numpy as np

output_array = np.array([0, 0, 0, 0, 0])
```

This array can then be used as the `out` parameter in the `numpy.square()` function:

```py
import numpy as np

output_array = np.array([0, 0, 0, 0, 0])

array = [1, 2, 3, 4, 5]
np.square(array, out = output_array)
print(output_array)
```

This generates the output as follows:

```shell
[1, 4, 9, 16, 25]
```

### Operating conditionally

Using the `where` parameter, the function will execute conditionally. The `where` parameter specifies where to apply the operation, based on a condition. If the condition is `True` at a particular index, the corresponding element in the array will be squared. If the condition is `False`, the element will remain unchanged. For instance:

```py
import numpy as np

array = np.array([1, 2, 3, 4, 5])
conditions = np.array([False, True, True, False, True])

result = np.square(array, where=conditions)
print(result)
```

Output:

```shell
array([1, 4, 9, 4, 25])
```

The `where` parameter takes a boolean array or condition. It determines where the squaring operation will take place:

- True at an index: The element at that index will be squared.
- False at an index: The element at that index will remain unchanged.

If the `where` parameter is set to a single boolean value (either `True` or `False`), the entire array is either squared (if `True`) or left unchanged (if `False`).

### Changing types

Sometimes, it is important to increase or decrease the size of the datatype of the output array. This can be done by setting the `dtype` parameter to an np datatype, like:

```py
import numpy as np
array = np.array([1, 2, 3, 4, 5])  # Ensuring it's a numpy array
result = np.square(array, dtype=np.float32)

# Print the result
print(result)
```

Output generated will be as follows:

```shell
array([ 1.,  4.,  9., 16., 25.], dtype=float32)
```

## Codebyte Example

Run the following example to understand how the `.square()` method works:

```codebyte/python
import numpy as np

# Create a NumPy array
array = np.array([1, 2, 3, 4, 5])

# Create an output array initialized with zeros
output_array = np.zeros_like(array)

# Set the condition for the 'where' parameter (square values where condition is True)
conditions = np.array([False, True, True, False, True])

# Use numpy.square() with all parameters
result = np.square(array, out=output_array, where=conditions)

# Print the result
print("Squared values with conditions:", result)
```

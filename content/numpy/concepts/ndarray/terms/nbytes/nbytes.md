---
Title: '.nbytes'
Description: 'The total number of bytes consumed by the elements of the array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Attributes'
  - 'Arrays'
  - 'Memory'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.nbytes`** attribute returns the total number of bytes consumed by the elements of a NumPy array. This value is calculated as the product of the number of elements in the array (given by **`.size`**) and the number of bytes per element (given by **`.itemsize`**).

## Syntax

```pseudo
ndarray.nbytes
````

  - `ndarray`: The NumPy array whose memory consumption is to be determined.
  - `.nbytes` is an **attribute**, not a method, so it does not take any arguments or require parentheses.

-----

## Example

In this example, we create a one-dimensional NumPy array `arr` with 12 elements. We then use the `.nbytes` attribute to determine the total bytes consumed by the array's elements. Assuming a standard 64-bit system where the default integer type (`int64`) uses 8 bytes per element: $12 \text{ elements} \times 8 \text{ bytes}/\text{element} = 96 \text{ bytes}$.

```py
# Import NumPy
import numpy as np

# Create a NumPy array with 12 elements (default type is usually int64, or 8 bytes per item)
arr = np.arange(12)

# Use the '.nbytes' attribute
total_bytes_nbytes = arr.nbytes

print(f"Array: {arr}")
print(f"Bytes per element (.itemsize): {arr.itemsize}")
print(f"Total number of elements (.size): {arr.size}")
print(f"Total bytes consumed (.nbytes): {total_bytes_nbytes}")
```

We will get a result similar to the following (the value of `arr.itemsize` might vary based on system architecture):

```shell
Array: [ 0  1  2  3  4  5  6  7  8  9 10 11]
Bytes per element (.itemsize): 8
Total number of elements (.size): 12
Total bytes consumed (.nbytes): 96
```

-----

## Codebyte Example

In the following codebyte example, a two-dimensional NumPy array `arr` is created with a specified data type (`float32`), and then the `.nbytes` attribute is used to report its memory consumption. Since `float32` uses 4 bytes per element, and the array has $2 \times 3 = 6$ elements, the total memory consumed is $6 \times 4 = 24$ bytes.

```codebyte/python
import numpy as np

# Create a 2x3 array of type float32 (4 bytes per element)
arr = np.array([[1.0, 2.0, 3.0], [4.0, 5.0, 6.0]], dtype=np.float32)

print(f"Array shape: {arr.shape}")
print(f"Array data type: {arr.dtype}")
print(f"Bytes per element (.itemsize): {arr.itemsize}")
print(f"Bytes consumed by elements (.nbytes): {arr.nbytes}")
```


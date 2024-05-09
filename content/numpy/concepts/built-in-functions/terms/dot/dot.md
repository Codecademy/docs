---
Title: '.dot()'
Description: 'Computes the dot product of two arrays.' 
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'Arrays'
  - 'Data Structures'
  - 'Functions'
  - 'Linear Algebra'
  - 'NumPy'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'  
---

In NumPy, the **`.dot()`** method computes the dot product of two arrays. For 1-D arrays, it provides a scalar value. When both arrays are 2-D, it performs matrix multiplication, resulting in a new 2-D array. Further details about various scenarios, including arrays with more than two dimensions, can be found in the NumPy [`.dot()` documentation](https://numpy.org/doc/stable/reference/generated/numpy.dot.html). This method is widely utilized in linear algebra and numerical computations.

## Syntax

```pseudo
numpy.dot(a, b, out=None)
```

- `a`: The first array, which could be 1-D, 2-D, or higher dimensional.
- `b`: The second array, having compatible dimensions with `a`, and also could be 1-D, 2-D, or higher dimensional.
- `out`: Optional parameter that specifies the output array where the result is stored. If not provided, a new array is created.

## Example

The usage of the .dot() method is demonstrated in the following example:

```py
import numpy as np

# defining 2 arrays
array_a = [3,4,5]
array_b = [1,2,3]

# computing and printing the product
print(np.dot(array_a, array_b))
```

This produces the following output:

```shell
26
```

## Codebyte Example

```codebyte/python
import numpy as np

m = [[3, 5], [1, 4], [5, 4]] 
n = [[7, 3, 1], [2, 7, 2]] 
print("Matrix m :") 
print(m) 
print("Matrix n :") 
print(n) 
  
result = np.dot(m, n) 
  
print("The dot product of matrix m and n is :") 
print(result) 
```

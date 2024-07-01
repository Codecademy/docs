---
Title: '.fiil()' 
Description: 'Fills the NumPy array with a specified scalar value.' 
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
  - 'Machine Learning'
Tags: 
  - 'NumPy'
  - 'Methods'
  - 'Sets'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.fill()`** method in Python is used to fill a NumPy array with a scalar value.

## Syntax

```pseudo
ndarray.fill(value)
```

- `value`: The scalar value to assign to all elements of the array.

## Example 

In this example, the `.fill()` method sets all elements of the one-dimensional array `nf` to 2798:

```py
# import NumPy 
import numpy as a

# Create an array 
nf = a.arange(12)
  
# Use fill() method
nf.fill(2798)

print(nf)
```

We will get the following result:

```shell
[2798 2798 2798 2798 2798 2798 2798 2798 2798 2798 2798 2798]
```

## Codebyte Example

In the following code, a two-dimensional NumPy array `nf` is created with specified values and filled entirely with 985, then printed:

```codebyte/python
import numpy as np
nf = np.array([[5,6], [7,8]])
nf.fill(985)
print (nf)
```

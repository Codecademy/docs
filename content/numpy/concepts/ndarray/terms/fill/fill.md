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
  - 'Functions'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.fill()`** method in Python is used to fill a NumPy array with a scalar value.

## Syntax
```pseudo
ndarray.fill(value)
```

- `value`: The scalar value to assign to all elements of the array


## Example 1

In this example, the `.fill()` method sets all elements of the one-dimensional array `nf` to 27980:

```py
# import NumPy 
import numpy as a

# Create array 
nf = a.arange(12)
  
# Use fill() method
nf.fill(2798)

print(nf)
```

we will get the following result;
```shell
[2798 2798 2798 2798 2798 2798 2798 2798 2798 2798 2798 2798]
```

## Codebyte Example

import numpy as np
nf = np.array([[5,6], [7,8]])
nf.fill(985)
print (nf)

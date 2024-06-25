---
Title: '.fiil()' 
Description: 'Fill the NumPy array with a scalar value.' 
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

The **`ndarray.fill()`** method in Python is used to fill the NumPy array with a scalar value.

## Syntax
```pseudo
ndarray.fill(value)
```
## Parameters

value : *scalar* All elements of array are assigned this value.


## Example 1

- assuming we imported `numpy` and created one dimenson `numpy` array with the following code snippet:

```py
# import NumPy 
import numpy as a

# Create array 
nf = a.arange(12)
  
# Use fill() method
nf.fill(100)

print(nf)
```

we will get the following result;
```shell
[100 100 100 100 100 100 100 100 100 100 100 100]
```

## Example 2
-  We can also create a NumPy array for 2 dimensions as show below;

```py
import numpy as a

# For two dimension array
nf = a.array([[5,6], [7,8]])

print (nf)
```

and the following outcome will be printed;
```shell
[[5 6]
[7 8]]
```
 
 ## Example 3

- Then to fill all the array with the same value, this is where `.fill()` comes into picture as in shown below

```py
import numpy as a

nf = a.array([[5,6], [7,8]])

nf.fill(985)

print(nf)
```

The following result will be shown.
```shell
[[985 985]
[985 985]]
```


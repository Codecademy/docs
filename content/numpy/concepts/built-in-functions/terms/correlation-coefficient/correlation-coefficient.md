---
Title: 'numpy.corrcoef()' 
Description: 'Calculates the correlation coefficient between 2 one dimentional data points.' 
Subjects: 
  - 'Data Science'
  - 'Computer Science'
Tags:  
  - 'Data'
  - 'Statistics'
  - 'Data Structures'
  - 'NumPy'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The `numpy.corrcoef()` function returns a two dimentional array of Pearson correlation coefficients. 

## Syntax

```psuedo
numpy.corrcoef(arr1, arr2, mode = 'valid')
```

The `numpy.corrcoef()` accepts 3 parameters.  arr1 and arr2 represent the 2 mandatory arrays necessary for calculating the matrix coefficient. Mode is an optional parameter that represents the convolution that happens during the calculation of coefficient variables.  By default it is sent to 'valid', but has 2 other modes of 'same' and 'full'.

## Example

To find the correlation coefficient between 2 arrays:

## Codebyte Example 

```py
import numpy as np

# Importing NumPy Library
import numpy as np

# Input array 1
arr1 = np.arange(17,54)

# input array 2
arr2 = np.array([6,14,28,33,54,47,19,43,77,96])

# Using the NumPy corrcoeff() function
# To calculate Pearson's correlation coefficient
x = np.corrcoef(arr1,arr2)

# Printing the correlation coefficients:
print(x)




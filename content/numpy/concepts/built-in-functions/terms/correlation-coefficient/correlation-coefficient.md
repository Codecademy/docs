---
Title: 'numpy.correcoef()' 
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

The `numpy.correcoef()` function returns a two dimentional array of Pearson correlation coefficients. 

## Syntax

```psuedo
numpy.correcoef(arr1, arr2, mode = 'valid')
```

The `numpy.correcoef()` accepts 3 parameters.  arr1 and arr2 represent the 2 mandatory arrays necessary for calculating the matrix coefficient. Mode is an optional parameter that represents the convolution that happens during the calculation of coefficient variables.  By default it is sent to 'valid', but has 2 other modes of 'same' and 'full'.

## Codebyte Example 

```py
from numpy import correcoef
cor = correcoef(x, y)
```

Where x and y are two numpy array.  Where cor is an array of 4 values containing correlation coefficients between x and y.





---
Title: '.std()'
Description: 'Calculates the standard deviation of given data along a specified axis'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Functions'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.std()`** function returns the standard deviation of the array elements. The standard deviation is calculated for the flattened array by default, otherwise over the specified axis.

A standard deviation is a statistical measure indicating the spread of a distribution of data, represented by an array, along a specified axis.

## Syntax

```pseudo
numpy.std(a, axis, dtype, out, ddof, keepdims, where)
```

## Parameters:

- `a` : The array of elements with which to calculate the std.

- `axis`: The axis that the std will be calculated. The default will consider the array to be flattened, works on any axis.

    - **axis = 0**: Calculates the std along the vertical axis.

    - **axis = 1**: Calculates the std along the horizontal axis.

    - **tuple of ints**: Calculates the std along multiple axes.

- `dtype`: This is the type of data the std will calculate.
 
    - Interger arrays will have the default type of float64.

    - Float arrays will be the same as the array type.

- `out`: This dictates the array in which the results will be outputted to. The array must be of the same type as the original array.

- `ddof`: Means **Delta Degrees of Freedom**. The divisor used in calculations is *N - ddof*, where N represents the number of elements.

    - The default for this parameter = 0

- `keepdims`: If *True* the reduced axes are kept in the result as dimensions of size one. This ensures the result will translate correctly against the input array.

If the value is default, `keepdims` will not be passed. Any non-default value will pass thorugh the sub-classes of ndarray. 

An execption will be raised if the sub-classes method doesn't implement `keepdims`.

- `where`: Elements to include in the standard deviation.

**Returns:** 
- `standard_deviation` : If `out` = None, return a new array containing the standard deviation, otherwise return result to the output array.

## Note

The average squared deviation is calculated as **x.sum() / N**, where **N = len(x)**. If `ddof` is specified, the divisor **N - ddof** is used instead. 

- **ddof=1** provides an unbiased estimate of the variance of the infinite population. 

- **ddof=0** provides a maximum estimate of the variance for normally distributed variables. 

However, even with **ddof = 1** it will not be a completely unbiased estimate of the standard deviation due to std being the square root of the estimated variance of the array.

## Note 

For complex numbers, `std` takes the absolute value before squaring, so that the result is always real and non-negative.

For float arrays the std is calculated with equal precision to the input. Hence, the result can be inaccurate. In particular for float32. To improve this, use the `dtype` parameter and specify a higher-accuracy accumulator.

## Examples

The following shows examples using `.std()` with differing parameters.


**Example 1:**

```py

import numpy as np 
    
# 1D array  
arr = [23, 54, 19, 45, 34] 
  
print("arr : ", arr)  
print("std of arr : ", np.std(arr)) 
  
print ("\nMore precision with float32") 
print("std of arr : ", np.std(arr, dtype = np.float32)) 
  
print ("\nMore accuracy with float64") 
print("std of arr : ", np.std(arr, dtype = np.float64)) 

```

**Output:**

```shell
arr :  [23, 54, 19, 45, 34]
std of arr :  13.130118049735882

More precision with float32
std of arr :  13.130117

More accuracy with float64
std of arr :  13.130118049735882
```

**Example 2:**

```py
import numpy as np 
    
  
# 2D array  
arr = [[8, 8, 8, 8, 8],   
       [15, 10, 32, 9, 8],  
       [27, 6, 63, 4, 8, ],  
       [23, 54, 41, 9, 8]]  
  
    
# std of the flattened array  
print("\nstd of arr, axis = None : ", np.std(arr))  
    
# std along the axis = 0  
print("\nstd of arr, axis = 0 : ", np.std(arr, axis = 0))  
   
# std along the axis = 1  
print("\nstd of arr, axis = 1 : ", np.std(arr, axis = 1)) 
```

**Output:**

```shell
std of arr, axis = None :  16.62310139534738

std of arr, axis = 0 :  [ 7.32717544 19.96872555 19.71040334  2.06155281  0.        ]

std of arr, axis = 1 :  [ 0.          8.93084542 22.27644496 18.03330253]
```
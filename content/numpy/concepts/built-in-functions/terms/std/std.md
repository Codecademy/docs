---
Title: '.std()'
Description: 'Calculates the standard deviation of given data along a specified axis.'
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

- `a`: Array of elements used to find the standard deviation.

### Optional Parameters

- `axis`: Specifies the axis along which the standard deviation will be computed. By default, the array is flattened before computation.

  - **axis = 0**: Calculates the standard deviation along the vertical axis.

  - **axis = 1**: Calculates the standard deviation along the horizontal axis.

  - **tuple of ints**: Calculates the standard deviation along multiple specified axes.

- `dtype`: Type used in computing the standard deviation, if specified. By default, for arrays of integer type, it is float64, while for arrays of float types, it matches the array type.

  > **Note** For floating-point inputs, the standard deviation is calculated with the same precision as the input data. This may cause inaccuracies, especially with `np.float32` data type.

- `out`: Specifies an alternative output array to contain the result. This array must have the same shape as the expected output.

- `ddof`: It stands for _Delta Degrees of Freedom_. It helps adjust the calculation of standard deviation for samples.

- `keepdims`: It accepts a boolean value and is used to determine whether to retain the dimensions of the input array in the output. By default, it is set to `False`.

- `where`: It accepts boolean arrays or conditions where `True` values indicate the indices, or elements within the array for which the standard deviation should be calculated.

If the `out` parameter is `None`, the `.std()` function returns a new array containing the standard deviation. Otherwise, it assigns the result to the specified output array and returns its reference.

> **Note** For complex numbers, `std` takes the absolute value before squaring for a real, nonnegative result.

## Example

The following examples demonstrate the use of `.std()` with different parameters.

```py
import numpy as np 
    
arr = np.array([23, 54, 19, 45, 34])

print("arr : ", arr)

print("\nStandard deviation of arr : ", np.std(arr))

print("\nStandard deviation of arr (float32) : ", np.std(arr, dtype=np.float32))

print("\nStandard deviation of arr (float64) : ", np.std(arr, dtype=np.float64))
```

Given below is the output for the above code block:

```shell
arr :  [23, 54, 19, 45, 34]

Standard deviation of arr : 13.130118049735882

Standard deviation of arr (float32) : 13.130117

Standard deviation of arr (float64) : 13.130118049735882
```

## Codebyte Example

Run the below codebyte to better understand the `.std()` function:

```codebyte/python
import numpy as np 
    
arr = [[8, 8, 8, 8, 8],   
       [15, 10, 32, 9, 8],  
       [27, 6, 63, 4, 8, ],  
       [23, 54, 41, 9, 8]]  
    
# flattened array  
print("\nStandard deviation of arr, when axis = None : ", np.std(arr))  
    
# along the axis = 0  
print("\nStandard deviation of arr, when axis = 0 : ", np.std(arr, axis = 0))  
   
# along the axis = 1  
print("\nStandard deviation of arr, when axis = 1 : ", np.std(arr, axis = 1)) 
```
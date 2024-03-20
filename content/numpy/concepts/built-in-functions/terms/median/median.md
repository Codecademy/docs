The numpy.median() statistical function computes the middle element of a sorted array (dataset).

### Syntax of numpy.median() function
numpy.median(array, axis = None, out = None, overwrite_input = False, keepdims = <no value>)
The array argument is required and represents the elements to find the median. All other arguments are optional. 

#### The meaning of the numpy.median() method arguments:
+ array - dataset of numbers whose median we need to compute.
+ axis (optional) - axis or axes along which the medians are computed (int or tuple of int)
+ out (optional) - output array in which to place the result (ndarray)
+ override_input (optional) - bool value that determines if intermediate calculations can modify an array
+ keepdims (optional) - specifies whether to preserve the shape of the original array (bool)
##### Notes:
The default values of numpy.median() have the following implications:
+ axis = None - the median of the entire array is taken.
+ By default, keepdims will not be passed.
#### Returned Values:
The numpy.median() function returns the median of the array (it will return a scalar value if the axis is None) or an array with median values along the specified axis.

### Steps used to calculate the Median
Given some dataset with N>0 number of elements as Input:
1. Arrange elements in an ascending order.
2. If N is an odd number, then median will be calculated as Median = middle term
4. If N is an even number, then median will be calculated as Median = Average of the terms in the middle

### Example: (working with a 3-dimensional array)

import numpy as np 
array = [[1, 17, 19, 33, 49], [14, 6, 87, 8, 19], [34, 2, 54, 4, 7]] 

###### alculating median along the axis = None (horrizontal 1-d array)
print("\nThe median of array when axis = None : ")
print(np.median(array)) 

###### alculating median along the axis = 0 (vertical direstion across 5 rows)
print("\nThe median of array when axis = 0 : ")
print(np.median(array, axis = 0)) 

###### calculating median along the axis = 1 (horizontal direction across 3 columns)
print("\nThe median of array when axis = 1 : ")
print(np.median(array, axis = 1)) 

##### Output
The median of array when axis = None : 
17.0

The median of array when axis = 0 :
[14. 6. 54. 8. 19.]

The median of array when axis = 1 :
[19. 14. 7.]
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
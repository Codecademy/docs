---
Title: 'round' 
Description: 'Converts the numpy array elements into the specific number of decimal places.'
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
  - 'Elements'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/computer-science'
---


The `.round()` method in NumPy serves to convert array elements to the nearest whole number or a specified number of decimal places. When rounding to the nearest whole number, values with a decimal component of 0.5 or greater are rounded up to the next larger whole number.

## Syntax

### 1. Round off to the nearest whole number
```pseudo
numpy.round(ndarray)
```

#### Parameters
- `ndarray` : Refers to the numpy array

#### Return value
The function returns a numpy array with float datatype and maintains the same length as input array.

### 2. Round off to `n` number of decimal places
```pseudo
numpy.round(ndarray, decimals=n)
```

#### Parameters
- `ndarray` : Refers to the numpy array
-  `decimals` : Refers to the number of decimal places 

#### Return value
The function returns a numpy array with float datatype and maintains the same length as input array.

## Example 1: Rounding off the numpy arrays into the nearest whole number

In this example, we round off all the elements of numpy arrays into their nearest whole number.

```py
import numpy as np

ndarray = np.array([1.34566, 4.55, 7.788, 2.09, 9.45])
nearest_whole_number = np.round(ndarray)

print(nearest_whole_number)
```

This produces the following output:

```shell
[1. 5. 8. 2. 9.]
```

## Example 2: Rounding off the numpy arrays into the n decimal places

In this example, we round off all the elements of numpy arrays into 2 decimal places.

```py
import numpy as np

ndarray = np.array([1.34566, 4.55, 7.788, 2.09, 9.45])
two_decimal_places = np.round(ndarray, decimals=2)

print(two_decimal_places)
```

This produces the following output:

```shell
[1.35 4.55 7.79 2.09 9.45]
```

## Codebyte Example

Run the following codebyte example to understand the usage of the `.round()` method:

```codebyte/python
import numpy as np

ndarray = np.array([1.34566, 4.55, 7.788, 2.09, 9.45])

# Round off to the nearest whole number
nearest_whole_number = np.round(ndarray)
print(nearest_whole_number)

# Round off to 2 decimal places
two_decimal_places = np.round(ndarray, decimals=2)
print(two_decimal_places)

```
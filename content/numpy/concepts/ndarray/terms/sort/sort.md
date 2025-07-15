---
Title: '.sort()'
Description: 'sort a NumPy array with a specified order(ascending/descending).'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'NumPy'
  - 'Methods'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.sort()`** method is used to sort a NumPy array with a specified order(ascending/descending). sort method sorts the array/list ascending by default. You can also make a function to decide the sorting criteria(s)

## Syntax

```pseudo
ndarray.sort(reverse=True|False, key=myFunc)
```

- `ndarray`: The NumPy array to be filled.
- `reverse`: Optional. reverse=True will sort the list descending. Default is reverse=False.
- `key`: Optional. A function to specify the sorting criteria(s)

## Example

In this example, the `.sort()` method is used to sort the NumPy array `nf` in descending order:

```py
# Import NumPy
import numpy as a

# Create a NumPy array
nf = a.array['aaa', 'xxx', 'ddd', 'sss']

# Use the '.sort()' method
nf.sort(reverse=True)

print(nf)
```

We will get the following result:

```shell
['xxx' 'sss' 'ddd' 'aaa']
```

## Codebyte Example

In the following codebyte example, a NumPy array `nf` is created with with different length of text and then sort it with length ascending order:

```codebyte/python
import numpy as np

nf = np.array('aaa', 'cccc', 'xxxxx', 'bb', 'yyyyyyy', 'p')

# A function that returns the length of the value:
def myFunc(e):
  return len(e)

nf.sort(reverse=True, key=myFunc) 

print(nf)

```

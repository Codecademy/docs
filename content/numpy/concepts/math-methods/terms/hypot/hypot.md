Title: 'math.hypos()'

## *Description:* 'The hypot function returns the Euclidean distance between two points.'

Subjects:
  - 'Computer Science'
  - 'Data Science'

Tags:
  - 'Functions'
  - 'Math'
  - 'Trigonometry'
  - 'Values'

CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'

The `hypot` function in NumPy calculates the Euclidean norm, or the straight-line distance, between two points in a 2D plane. It takes two arguments, `x` and `y`, and returns the length of the hypotenuse of a right triangle with legs of length `x` and `y`.

## *Syntax*

numpy.hypot(x, y)


- `x` and `y` are arrays or scalars.

## *Example*  ```py


import numpy as np

x = 3
y = 4

result = np.hypot(x, y)
print(result)

*Output:*

5.0


## *Codebyte Example*  ```py


import numpy as np

x = np.array([3, 4, 5])
y = np.array([4, 5, 6])

result = np.hypot(x, y)
print(result)


*Output:*

[ 5.  6.4807407  7.81024968]
```

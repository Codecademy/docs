
Title: 'numpy.ndarray.nonzero()'
Description: 'Returns the indices of array elements that are non-zero.'
Subjects:
  - 'Python'
  - 'NumPy'
Tags:
  - 'Array Methods'
  - 'ndarray'
  - 'Indexing'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`numpy.ndarray.nonzero()`** method (or its equivalent function `numpy.nonzero()`) returns the indices of all non-zero elements in a NumPy array. It is often used to locate the positions of non-zero values, filter data, or extract coordinates for further processing.

## Syntax

```python
numpy.nonzero(a)

or as an ndarray method:

a.nonzero()

Parameters

Parameter	Type	Description
a	array_like	The input array for which to return the indices of non-zero elements.

Returns

Return Type	Description
tuple of ndarrays	A tuple of arrays, one for each dimension of a, containing the indices of the non-zero elements.


⸻

Example 1

import numpy as np

arr = np.array([[0, 2, 0],
                [3, 0, 4]])

indices = np.nonzero(arr)
print(indices)

Output:

(array([0, 1, 1]), array([1, 0, 2]))

Explanation:
	•	The first array [0, 1, 1] contains the row indices.
	•	The second array [1, 0, 2] contains the column indices.
	•	This means the non-zero elements are:
	•	arr[0, 1] = 2
	•	arr[1, 0] = 3
	•	arr[1, 2] = 4

⸻

Example 2 — Using with Boolean Indexing

You can also use the indices returned by nonzero() to directly access or manipulate non-zero values:

import numpy as np

arr = np.array([10, 0, 25, 0, 5])
indices = np.nonzero(arr)

# Access non-zero elements
print(arr[indices])

Output:

[10 25  5]


⸻

Codebyte Example

import numpy as np

# Create an array with some zeros
arr = np.array([0, 7, 0, 2, 9])

# Get indices of non-zero elements
indices = np.nonzero(arr)

# Display results
print("Indices:", indices)
print("Non-zero elements:", arr[indices])

Expected Output:

Indices: (array([1, 3, 4]),)
Non-zero elements: [7 2 9]


⸻

Notes
	•	a.nonzero() is equivalent to calling np.nonzero(a).
	•	Works on arrays of any dimension — for 2D and higher arrays, each array in the returned tuple corresponds to one dimension.
	•	Often used in combination with conditional expressions like:

np.nonzero(arr > 5)

which returns indices where elements are greater than 5.

	•	The method ignores zeros but not NaN or inf values.

⸻

Related Methods
	•	numpy.where(): A more flexible method for conditional indexing and selection.
	•	numpy.flatnonzero(): Returns flattened indices of non-zero elements.
	•	numpy.count_nonzero(): Returns the count of non-zero elements.



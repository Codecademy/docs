---
Title: '.norm()'
Description: 'Computes the magnitude of a matrix, either across the entire array or along a specified axis.'
Subjects:
- 'Computer Science'
- 'Data Science'
Tags:
>>>>>>> 7da0ffe91207dc4e72811838cf35584a5f2ee387
- 'Arrays'
- 'Functions'
- 'NumPy'
CatalogContent:
- 'learn-python-3'
- 'paths/data-science'
---
 
<<<<<<< HEAD
# .norm( )

Description:'The **.norm( )** function in NumPy measures the size of a matrix, aiding in understanding its magnitude. It helps identify differences between matrices, pinpoint predictive errors, manage model complexity, and validate numerical algorithms.'
=======
>>>>>>> 7da0ffe91207dc4e72811838cf35584a5f2ee387

## Syntax

```pseudo
numpy.linalg.norm(a, ord=None, axis=None, keepdims=False)
```
<<<<<<< HEAD
### Parameters


- `a`: The input array for which the norm is computed.
- `ord=None` (Optional) Specifies the order of the norm to compute. Default is `None`, which computes the Frobenius norm.
- `axis=None` (Optional) Specifies the axis or axes along which to compute the norm. Default is `None`, which computes the norm over the entire array.
- `keepdims=False` (Optional) Specifies whether to keep the dimensions of the original array in the result. Default is `False`.

## Example

The following example demonstrates a straightforward usage of `numpy.linalg.norm` to compute the Frobenius norm of a matrix:

=======

### Parameters

- `a`: The input array for which the norm is computed.
- `ord=None` (Optional): Specifies the order of the norm to compute. Default is `None`, which computes the _Frobenius norm_ for matrices and _2-norm_ for vectors.
- `axis=None` (Optional): Specifies the axis or axes along which to compute the norm. Default is `None`, which computes the norm over the entire array.
- `keepdims=False` (Optional): Specifies whether to keep the dimensions of the original array in the result. Default is `False`.

## Example

The following example demonstrates a straightforward usage of the `numpy.linalg.norm()` method to compute the Frobenius norm of a matrix:
>>>>>>> 7da0ffe91207dc4e72811838cf35584a5f2ee387

```shell
import numpy as np

matrix = np.array([[1, 2], [3, 4]])

frobenius_norm = np.linalg.norm(matrix)

print("Frobenius norm of the matrix:", frobenius_norm)
```
This produces the following output:

```shell
Frobenius norm of the matrix: 5.477225575051661
```

## Codebyte Example
<<<<<<< HEAD
The following example computes different norms for a vector using `numpy.linalg.norm()` method with various values of the `ord` parameter, including L1 (Manhattan), L2 (Euclidean), and infinity norms.
=======

The following example computes different norms for a vector using `numpy.linalg.norm()` method with various values of the `ord` parameter, including 1-norm (Manhattan), 2-norm (Euclidean), and infinity norm.
>>>>>>> 7da0ffe91207dc4e72811838cf35584a5f2ee387

```codebyte/python
import numpy as np

# Define a sample vector
vector = np.array([3, -4, 5])

<<<<<<< HEAD
# Compute the 1-norm (Manhattan) norm of the vector
l1_norm = np.linalg.norm(vector, ord=1)

# Compute the 2-norm (Euclidean) norm of the vector
=======
# Compute the 1-norm of the vector
l1_norm = np.linalg.norm(vector, ord=1)

# Compute the 2-norm of the vector
>>>>>>> 7da0ffe91207dc4e72811838cf35584a5f2ee387
l2_norm = np.linalg.norm(vector, ord=2)

# Compute the infinity norm of the vector
infinity_norm = np.linalg.norm(vector, ord=np.inf)

print("1-norm of the vector:", l1_norm)
print("2-norm of the vector:", l2_norm)
print("Infinity norm of the vector:", infinity_norm)
```

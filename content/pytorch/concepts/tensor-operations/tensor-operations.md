---
Title: 'Tensor Operations'
Description: 'Operations that can be performed on tensors to manipulate and transform their values.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Arithmetic'
  - 'Arrays'
  - 'Deep Learning'
  - 'TensorFlow'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, **tensor operations** are fundamentals for performing various tensor computations. Tensors are multi-dimensional arrays that can be manipulated using a wide range of operations.

## Fundamental Tensor Operations

Here are the fundamental operations that can be performed on tensors:

- `.expand()`: Expands the tensor along specified dimensions, creating a larger tensor with repeated values.
- `.permute()`: Reorders the dimensions of the tensor according to a specified order.
- `.tolist()`: Converts the tensor to a [Python list](https://www.codecademy.com/resources/docs/python/lists) or nested list.
- `.narrow()`: Returns a tensor that is a narrowed view of the original tensor based on specified dimensions.
- `.where()`: Returns a new tensor by applying a condition to the original tensor.

## Arithmetic Operations

PyTorch provides a set of arithmetic operations that can be performed on tensors. These operations include:

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division

## Element-wise Operations

Element-wise operations are operations that are applied to each element of a tensor individually. Some of these operations are as follows:

- `torch.pow()`: Computes the power of each element in the tensor, raising them to the specified exponent.
- `torch.sqrt()`: Calculates the square root of each element in the tensor.
- `torch.abs()`: Returns the absolute value of each element in the tensor.

## Reduction Operations

Reduction operations compute a single result from multiple tensor elements. These operations include:

- `.sum()`: Calculates the sum of all elements.
- `.mean()`: Computes the mean of all elements.
- `.max()`: Finds the maximum value among all elements.
- `.min()`: Finds the minimum value among all elements.

## Advanced Operations

Advanced tensor operations include the following:

- _Matrix Multiplication_: Performed using the `torch.mm()` method or the `@` operator.
- _Transposition_: Flips the dimensions of a tensor. For 2D tensors, it exchanges rows and columns. Achieved using `torch.t()`.
- _Reshaping_: Changes the shape of a tensor while preserving its data. This can be done using `torch.reshape()` or `.view()`.
- _Concatenation_: Joins two or more tensors along a specified dimension. This can be performed using `torch.cat()`.

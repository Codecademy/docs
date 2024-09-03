---
Title: 'Tensor Operations'
Description: 'Operations that can be performed on tensors to manipulate and transform their values.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'TensorFlow'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, **Tensor Operations** are fundamentals for performing various tensor computations. Tensors are multi-dimensional arrays that can be manipulated using a wide range of operations.

## Fundamental Tensor Operations

- `expand()`: Expands the tensor along specified dimensions, creating a larger tensor with repeated values. 
- `permute()`: Reorders the dimensions of the tensor according to a specified order.
- `tolist()`: Converts the tensor to a Python list or nested list.
- `narrow()`: Returns a tensor that is a narrowed view of the original tensor based on specified dimensions.
- `where()`: Returns a new tensor by applying a condition to the existing tensor.

## Arithmetic Operations

PyTorch provides a set of arithmetic operations that can be performed on tensors. These operations include:

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division

## Element-wise Operations

Element-wise operations are operations that are applied to each element of a tensor individually. These operations include `exponentiation`, `square root`, `absolute value`, among others as follows:
- `torch.pow`: Computes the power of each element in the tensor, raising each element to the specified exponent.
- `torch.sqrt`: Calculates the square root of each element in the tensor.
- `torch.abs`: Returns the absolute value of each element in the tensor.

## Reduction Operations

Reduction operations compute a single result from multiple tensor elements. These operations include:
- `sum()`: Calculates the sum of all elements.
- `mean()`: Computes the mean of elements.
- `max()`: Finds the maximum value.
- `min()`: Finds the minimum value.

## Advanced Operations

Advanced tensor operations include the following:
- **Matrix Multiplication**:  Performed using `torch.mm()` or the `@` operator.
- **Transposition**: Flips the dimensions of a tensor. For 2D tensors, it exchanges rows and columns. Achieved using `torch.t()`.
- **Reshaping**: Changes the shape of a tensor while preserving its data. This can be done using `torch.reshape()` or the `.view()` method.
- **Concatenation**: Joins two or more tensors along a specified dimension. This can be performed using `torch.cat()`.

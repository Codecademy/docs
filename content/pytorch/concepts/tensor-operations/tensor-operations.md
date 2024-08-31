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

Element-wise operations are operations that are applied to each element of a tensor individually. These operations include `exponentiation`, `square root`, `absolute value`, among others.

## Reduction Operations

Reduction operations compute a single result from multiple tensor elements. These operations include:
- `sum()`: Calculates the sum of all elements.
- `mean()`: Computes the mean of elements.
- `max()`: Finds the maximum value.
- `min()`: Finds the minimum value.

## Advanced Operations

Advanced tensor operations include `matrix multiplication`, `transposition`, `reshaping`, and `concatenation` that basically deals with 2D tensors.

### Matrix Multiplication

We can perform Matrix multiplication using the `torch.mm()` function or the `@` operator.

### Transposition

Transposition in tensor operations is the process of flipping the axes of a tensor. It involves exchanging the rows and columns of a 2D tensor or more generally, the axes of a tensor of any dimension.

We can perform Transposition using the `torch.t()` function.

### Reshaping

Reshaping in tensor operations is the process of changing the shape or dimensions of a tensor while preserving its underlying data. It involves rearranging the elements of a tensor to fit a new shape, without changing the total number of elements.

We can perform Reshaping using the `torch.reshape()` function or the `.view()` method.

### Concatenation

Concatenation in tensor operations is the process of joining two or more tensors along a specific dimension to form a larger tensor. The resulting tensor has a new dimension that is the concatenation of the original dimensions of the input tensors.

It can be performed using the `torch.cat()` function.

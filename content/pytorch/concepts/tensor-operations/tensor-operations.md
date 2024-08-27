---
Title: 'PyTorch Tensor Operations'
Description: 'Operations that can be performed on tensors to manipulate and transform their values.'
Subjects:
  - 'Artificial Intelligence'
  - 'Deep Learning'
Tags:
  - 'Deep Learning'
  - 'TensorFlow'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
  - 'paths/data-science'
---

**Pytorch Tensor Operations** are fundamentals for performing various computations on tensors. Tensors are multi-dimensional arrays that can be manipulated using a wide range of operations.

## Some Base Operations

The `expand()` operation is used to expand the tensor into a number of tensors, a number of rows in tensors, and a number of columns in tensors.

The `permute()` operation is used to reorder the tensor using row and column.

The `tolist()` method is used to return a list or nested list from the given tensor.

This `narrow()` function is used to narrow the tensor. in other words, it will extend the tensor based on the input dimensions.

The `where()` function is used to return the new tensor by checking the existing tensors conditionally.

## Arithmetic Operations

PyTorch provides a set of arithmetic operations that can be performed on tensors. These operations include:

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division

## Element-wise Operations

Element-wise operations are operations that are applied to each element of a tensor individually. These operations include `exponentiation`, `square root`, `absolute value`, among others.

## Reduction Operations

Reduction operations are operations that reduce the number of elements in a tensor by performing a computation across the tensor. These operations include `sum`, `mean`, `maximum`, `minimum`, among others. 

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

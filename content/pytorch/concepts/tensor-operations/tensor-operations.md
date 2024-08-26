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

Element-wise operations are operations that are applied to each element of a tensor individually. These operations include exponentiation, square root, absolute value, among others. Here are some examples:

```python
import torch

# Create a tensor
a = torch.tensor([1, 2, 3])

# Exponentiation
b = torch.exp(a)
print(b)  # Output: tensor([2.7183, 7.3891, 20.0855])

# Square root
c = torch.sqrt(a)
print(c)  # Output: tensor([1.0000, 1.4142, 1.7321])

# Absolute value
d = torch.abs(a)
print(d)  # Output: tensor([1, 2, 3])
```

## Reduction Operations

Reduction operations are operations that reduce the number of elements in a tensor by performing a computation across the tensor. These operations include sum, mean, maximum, minimum, among others. Here are some examples:

```python
import torch

# Create a tensor
a = torch.tensor([1, 2, 3])

# Sum
b = torch.sum(a)
print(b)  # Output: tensor(6)

# Mean
c = torch.mean(a)
print(c)  # Output: tensor(2)

# Maximum
d = torch.max(a)
print(d)  # Output: tensor(3)

# Minimum
e = torch.min(a)
print(e)  # Output: tensor(1)
```

## Advanced Operations

Advanced tensor operations include matrix multiplication, transposition, reshaping, and concatenation that basically deals with 2D tensors.

### Matrix Multiplication

We can perform Matrix multiplication using the `torch.mm()` function or the `@` operator:

```python
# create two 2D tensors
A = torch.tensor([[1, 2], [3, 4]])
B = torch.tensor([[5, 6], [7, 8]])

# perform matrix multiplication using torch.mm() function
C = torch.mm(A, B)

# we can use the @ operator for matrix multiplication
D = A @ B
print(C)
print(D)
```

### Transposition

Transposition in tensor operations is the process of flipping the axes of a tensor. It involves exchanging the rows and columns of a 2D tensor or more generally, the axes of a tensor of any dimension.

We can perform Transposition using the `torch.t()` function:

```python
# create a 2D tensor
E = torch.tensor([[1, 2], [3, 4], [5, 6]])

# transpose the tensor using torch.t() function
F = torch.t(E)
print(E)
print(F)
```

### Reshaping

Reshaping in tensor operations is the process of changing the shape or dimensions of a tensor while preserving its underlying data. It involves rearranging the elements of a tensor to fit a new shape, without changing the total number of elements.

We can perform Reshaping using the `torch.reshape()` function or the `.view()` method:

```python
# create a 2D tensor
G = torch.tensor([[1, 2, 3], [4, 5, 6]])

# reshape the tensor using torch.reshape() function
H = torch.reshape(G, (3, 2))

# reshape the tensor using the .view() method
I = G.view(3, 2)
```

### Concatenation

Concatenation in tensor operations is the process of joining two or more tensors along a specific dimension to form a larger tensor. The resulting tensor has a new dimension that is the concatenation of the original dimensions of the input tensors.

It can be performed using the `torch.cat()` function:

```python
# create two tensors
J = torch.tensor([[1, 2], [3, 4]])
K = torch.tensor([[5, 6]])

# concatenate the tensors along the first axis
L = torch.cat((J, K), dim=0)
print(J)
print(K)
print(L)
```

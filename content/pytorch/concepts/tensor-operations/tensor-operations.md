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

### Example of `expand()` operation

```python
# import module 
import torch 

# create a tensor with 2 data 
# in 3 three elements each 
data = torch.tensor([[10, 20, 30], 
                     [45, 67, 89]]) 

# display 
print(data) 

# expand the tensor into 4 tensors , 2 
# rows and 3 columns in each tensor 
print(data.expand(4, 2, 3))
```

The `permute()` operation is used to reorder the tensor using row and column.

### Example of `permute()` operation

```python
# import module 
import torch 

# create a tensor with 2 data 
# in 3 three elements each 
data = torch.tensor([[[10, 20, 30], 
                      [45, 67, 89]]]) 

# display 
print(data) 

# permute the tensor first by row 
print(data.permute(1, 2, 0)) 

# permute the tensor first by column 
print(data.permute(2, 1, 0)) 
```

The `tolist()` method is used to return a list or nested list from the given tensor.

### Example of `tolist()` operation

```python
# import module 
import torch 

# create a tensor with 2 data in 
# 3 three elements each 
data = torch.tensor([[[10, 20, 30], 
                      [45, 67, 89]]]) 

# display 
print(data) 

# convert the tensor to list 
print(data.tolist())
```

This `narrow()` function is used to narrow the tensor. in other words, it will extend the tensor based on the input dimensions.

### Example

```python
# import module 
import torch 

# create a tensor with 2 data in 
# 3 three elements each 
data = torch.tensor([[10, 20, 30], 
                     [45, 67, 89], 
                     [23, 45, 67]]) 

# display 
print(data) 

# narrow the tensor 
# with 1 dimension 
# starting from 1 st index 
# length of each dimension is 2 
print(torch.narrow(data, 1, 1, 2)) 

# narrow the tensor 
# with 1 dimension 
# starting from 0 th index 
# length of each dimension is 2 
print(torch.narrow(data, 1, 0, 2))
```

The `where()` function is used to return the new tensor by checking the existing tensors conditionally.

### Example of `where()` operation

```python
# import module 
import torch 

# create a tensor with 3 data in 
# 3 three elements each 
data = torch.tensor([[[10, 20, 30], 
                      [45, 67, 89], 
                      [23, 45, 67]]]) 

# display 
print(data) 

# set the number 100 when the 
# number in greater than 45 
# otherwise 50 
print(torch.where(data > 45, 100, 50)) 

# set the number 100 when the 
# number in less than 45 
# otherwise 50 
print(torch.where(data < 45, 100, 50)) 

# set the number 100 when the number in 
# equal to 23 otherwise 50 
print(torch.where(data == 23, 100, 50)) 
```

## Arithmetic Operations

PyTorch provides a set of arithmetic operations that can be performed on tensors. These operations include:

- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division

### Example

```python
import torch

# Create two tensors
a = torch.tensor([1, 2, 3])
b = torch.tensor([4, 5, 6])

# Addition
c = a + b
print(c)  # Output: tensor([5, 7, 9])

# Subtraction
d = a - b
print(d)  # Output: tensor([-3, -3, -3])

# Multiplication
e = a * b
print(e)  # Output: tensor([4, 10, 18])

# Division
f = a / b
print(f)  # Output: tensor([0.25, 0.4, 0.5])
```

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

We can perform Matrix multiplication using the `torch.mm()` function or the `@` operator.

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

---
Title: '.logical_or()'
Description: 'Computes the element-wise logical OR between two tensors.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Booleans'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.logical_or()`** function performs an element-wise logical OR operation between two [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). Each input value is converted to a Boolean value (zero → `False`, non-zero → `True`) before the operation. The output is a Boolean tensor where each element is `True` if at least one of the corresponding input elements is `True`.

## Syntax

```pseudo
torch.logical_or(input, other, out)
```

**Parameters:**

- `input`: A tensor whose elements are treated as Boolean.
- `other`: A tensor broadcastable with input.
- `out` (optional): A tensor to store the result.

**Return value:**

Returns a Boolean tensor where each element is `True` if at least one of the corresponding input elements is `True`.

## Example 1

In this example, `.logical_or()` evaluates pairs of values from two 2-D tensors and returns a Boolean matrix showing which positions satisfy the OR condition:

```py
import torch

a = torch.tensor([[0, 1], [2, 0]])
b = torch.tensor([[3, 0], [0, 5]])

result = torch.logical_or(a, b)

print("Tensor A:\n", a)
print("\nTensor B:\n", b)
print("\nA OR B:\n", result)
```

The output of this code is:

```shell
Tensor A:
 tensor([[0, 1],
        [2, 0]])

Tensor B:
 tensor([[3, 0],
        [0, 5]])

A OR B:
 tensor([[True, True],
        [True, True]])
```

## Example 2

In this example, a 1-D tensor is combined with a scalar using broadcasting to show how `.logical_or()` can apply a Boolean condition efficiently across all elements:

```py
import torch

x = torch.tensor([0, 4, 0, 7])
y = torch.tensor(1)  # scalar

result = torch.logical_or(x, y)

print(result)
```

The output of this code is:

```shell
tensor([True, True, True, True])
```

## Frequently Asked Questions

### 1. What are the tensor operations in PyTorch?

Tensor operations in PyTorch include arithmetic, logical operations, reductions, reshaping, indexing, broadcasting, and matrix operations. These operations run efficiently on CPU or GPU and form the core building blocks of neural network workflows.

### 2. Why use tensor instead of NumPy?

Tensors support automatic differentiation and execute seamlessly on GPUs, which makes them suited for deep learning workloads. They also integrate tightly with PyTorch's computation graph, while NumPy arrays operate only on the CPU and lack gradient support.

### 3. What does cpu() do in PyTorch?

The `.cpu()` method moves a tensor or model from a GPU device to the system’s CPU. This is useful for running operations on hardware without CUDA support or preparing data for libraries that operate only on CPU-based arrays.

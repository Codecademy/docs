---
Title: '.reshape_as()'
Description: 'Returns a tensor with the same shape as the input tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Python'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'Pytorch for Classification'
---

In PyTorch, The **`.reshape_as()`** method reshapes a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) to match the shape of the input tensor. If possible, it returns a view of the original tensor; otherwise, it returns a new tensor with copied data. This method is equivalent to [`.reshape()`](https://www.codecademy.com/resources/docs/pytorch/tensors/reshape).

## Syntax

```pseudo
Tensor.reshape_as(other)
```

**Parameters:**

- `other`: The tensor whose shape will be used to reshape the calling tensor.

**Return value:**

- `Tensor`: A new tensor with the same shape as `other`, containing the same data as the original tensor (either as a view or with copied data if needed).

## Example 1: Reshape 1D Tensor to 2D with `.reshape_as()`

This example demonstrates the usage of the `.reshape_as()` method:

```py
import torch

# Source tensor
# 1D tensor with values [0, 1, 2, 3, 4, 5]
tensor_a = torch.arange(6)

# Other tensor
# 2D tensor with shape (2, 3)
tensor_b = torch.zeros(2, 3)

# Reshape tensor_a to the shape of tensor_b
reshaped_tensor = tensor_a.reshape_as(tensor_b)

print("Original tensor_a:", tensor_a)
print("Shape of tensor_a:", tensor_a.shape)
print("Reference tensor_b:", tensor_b)
print("Shape of tensor_b:", tensor_b.shape)
print("Reshaped tensor:", reshaped_tensor)
print("Shape after reshape_as:", reshaped_tensor.shape)
```

The code will produce this output:

```shell
Original tensor_a: tensor([0, 1, 2, 3, 4, 5])
Shape of tensor_a: torch.Size([6])
Reference tensor_b: tensor([[0., 0., 0.],
                             [0., 0., 0.]])
Shape of tensor_b: torch.Size([2, 3])
Reshaped tensor: tensor([[0, 1, 2],
                         [3, 4, 5]])
Shape after reshape_as: torch.Size([2, 3])
```

This code reshapes the source tensor from a 1D tensor containing numbers 0 to 5 into a 2D tensor with shape `(2, 3)`, preserving the data.

## Example 2: Convert 1D Tensor to 4x2 Matrix Using `.reshape_as()`

```py
import torch

# Create a 1D tensor with 8 elements
tensor_a = torch.arange(8)

# Create a new reference tensor with a different shape (4x2)
tensor_b = torch.zeros(4, 2)

# Reshape tensor_a to match the shape of tensor_b
reshaped_tensor = tensor_a.reshape_as(tensor_b)

print("Original tensor_a:", tensor_a)
print("Shape of tensor_a:", tensor_a.shape)
print("Reference tensor_b:", tensor_b)
print("Shape of tensor_b:", tensor_b.shape)
print("Reshaped tensor:", reshaped_tensor)
print("Shape after reshape_as:", reshaped_tensor.shape)
```

The code will produce this output:

```shell
Original tensor_a: tensor([0, 1, 2, 3, 4, 5, 6, 7])
Shape of tensor_a: torch.Size([8])
Reference tensor_b: tensor([[0., 0.],
                             [0., 0.],
                             [0., 0.],
                             [0., 0.]])
Shape of tensor_b: torch.Size([4, 2])
Reshaped tensor: tensor([[0, 1],
                         [2, 3],
                         [4, 5],
                         [6, 7]])
Shape after reshape_as: torch.Size([4, 2])
```

In this example, the code reshapes `tensor_a` from a 1D vector to match `tensor_b`, a 4-row, 2-column matrix, preserving the original data.

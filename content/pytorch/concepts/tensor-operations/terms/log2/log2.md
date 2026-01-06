---
Title: '.log2()'
Description: 'Computes the base-2 logarithm of each element in the input tensor and returns a new tensor with the results.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Elements'
  - 'Methods'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.log2()`** method in PyTorch returns a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) by computing the logarithm base 2 of each element in the input tensor. This operation is useful in numerous data-science and machine-learning workflows where values are interpreted on a log scale (e.g., information theory, binary magnitude comparisons).

## Syntax

```pseudo
torch.log2(input, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): The tensor whose elements are to be transformed by base-2 logarithm.
- `out` (Tensor, optional): A tensor to store the output; must have the same shape as input if provided.

**Return value:**

Returns a new tensor of the same shape as `input` where each element is `log₂(input[i])`.

## Example 1: Basic Usage of `.log2()`

In this example, the base-2 logarithm is computed for a tensor containing powers of 2:

```py
import torch

# Define a tensor
input_tensor = torch.tensor([2.0, 4.0, 8.0, 16.0, 32.0])

# Compute base-2 logarithm
output_tensor = torch.log2(input_tensor)

print(output_tensor)
```

The output of this code is:

```shell
tensor([1., 2., 3., 4., 5.])
```

## Example 2: Applying `.log2()` on Random Values

In this example, a tensor with random positive values is transformed using base-2 logarithm to analyze data on a log scale:

```py
import torch

# Generate a tensor of random positive values
data = torch.rand(5) * 10 + 1

# Apply log2 transformation
log_tensor = torch.log2(data)

print(data)
print(log_tensor)
```

The output of this code is:

```shell
tensor([10.5500,  9.2777, 10.9371,  1.3551,  5.2609])
tensor([3.3992, 3.2138, 3.4512, 0.4384, 2.3953])
```

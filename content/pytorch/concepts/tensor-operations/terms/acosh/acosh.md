---
Title: '.acosh()'
Description: 'Computes the inverse hyperbolic cosine of elements in a tensor in PyTorch.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.acosh()`** method in PyTorch computes the inverse hyperbolic cosine of each element in a tensor. This operation is element-wise and is commonly used in scientific computations involving hyperbolic functions.

## Syntax

```pseudo
torch.acosh(input, *, out=None) → Tensor
```

The `torch.acosh` function applies the inverse hyperbolic cosine to the elements of the input tensor. The input values must be greater than or equal to 1.

## Example

This example shows how to use `.acosh()` to compute the inverse hyperbolic cosine of a tensor:

```py
import torch

# Define a tensor with values >= 1
input_tensor = torch.tensor([1.0, 2.0, 3.0, 10.0])

# Compute the inverse hyperbolic cosine
output_tensor = torch.acosh(input_tensor)

print("Input Tensor:")
print(input_tensor)

print("\nOutput Tensor:")
print(output_tensor)
```

This example results in the following output:

```shell
Input Tensor:
tensor([ 1.,  2.,  3., 10.])

Output Tensor:
tensor([0.0000, 1.3169, 1.7627, 2.9932])
```

In this example:

- **Input Tensor**: Contains values greater than or equal to 1.
- **Output Tensor**: Represents the inverse hyperbolic cosine of each element in the input tensor.
---
Title: '.adjoint()'
Description: 'Computes the adjoint of a 2D complex-valued tensor in PyTorch.'
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

The **`.adjoint()`** method in PyTorch calculates the adjoint (conjugate transpose) of a 2D complex-valued tensor. This operation involves transposing the tensor and computing the complex conjugate of each element. The adjoint operation is commonly used in applications like quantum computing, signal processing, and complex linear algebra.

## Syntax

```pseudo
tensor.adjoint()
```

The `.adjoint()` method returns a tensor that is the adjoint (conjugate transpose) of the input tensor.

## Example

This example shows how to use `.adjoint()` to find the adjoint of a _2x2_ complex tensor:

```py
import torch

# Define a 2x2 complex tensor
tensor = torch.tensor([[1 + 2j, 3 + 4j], [5 + 6j, 7 + 8j]])

# Compute the adjoint of the tensor
adjoint_tensor = tensor.adjoint()

print("Original Tensor:")
print(tensor)

print("\nAdjoint Tensor:")
print(adjoint_tensor)
```

This example results in the following output:

```shell
Original Tensor:
tensor([[1.+2.j, 3.+4.j],
        [5.+6.j, 7.+8.j]])

Adjoint Tensor:
tensor([[1.-2.j, 5.-6.j],
        [3.-4.j, 7.-8.j]])
```

In this example:

- **Original Tensor**: Contains complex numbers.
- **Adjoint Tensor**: Transposes the tensor (swaps rows and columns) and computes the complex conjugate for each element (reverses the sign of the imaginary part).

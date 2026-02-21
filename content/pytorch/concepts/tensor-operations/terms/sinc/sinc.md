---
Title: '.sinc()'
Description: 'Computes the normalized sinc function of each element in a PyTorch tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'Integers'
  - 'Math'
  - 'Python'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.sinc()`** function in PyTorch computes the normalized sinc function of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). The operation is applied element-wise and is defined as:

$$
\[
\text{sinc}(x) =
\begin{cases}
\dfrac{\sin(\pi x)}{\pi x}, & x \neq 0 \\
1, & x = 0
\end{cases}
\]
$$

This function is widely used in signal processing, interpolation, and numerical analysis.

## Syntax

```pseudo
torch.sinc(input, *, out=None) → Tensor
```

**Parameters:**

- `input`: A tensor containing the input values.
- `out` (optional): A tensor to store the output. If provided, the result is written into this tensor.

**Return value:**

Returns a new tensor where each element is the normalized sinc of the corresponding value in the input tensor.

## Example 1: Basic Usage of `.sinc()` with 1D Tensor

This example shows how `.sinc()` behaves for zero and non-zero values:

```py
import torch

x = torch.tensor([-2.0, -1.0, 0.0, 1.0, 2.0])

result = torch.sinc(x)

print("Input:", x)
print("sinc(x):", result)
```

The output of this code is:

```shell
Input: tensor([-2., -1.,  0.,  1.,  2.])
sinc(x): tensor([ 2.7828e-08, -2.7828e-08,  1.0000e+00, -2.7828e-08,  2.7828e-08])
```

## Example 2: Applying `.sinc()` to a 2D Tensor

This example demonstrates element-wise application of `.sinc()` on a 2D tensor:

```py
import torch

values = torch.tensor([[0.0, 0.25],
                        [0.5, 0.75]])

result = torch.sinc(values)

print("Input tensor:")
print(values)
print("\nSinc of tensor:")
print(result)
```

The output of this code is as follows:

```shell
Input tensor:
tensor([[0.0000, 0.2500],
        [0.5000, 0.7500]])

Sinc of tensor:
tensor([[1.0000, 0.9003],
        [0.6366, 0.3001]])
```

The `.sinc()` function preserves the shape of the input tensor and computes values using the normalized definition based on `π`.

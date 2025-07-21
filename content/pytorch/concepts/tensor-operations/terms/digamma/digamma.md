---
Title: '.digamma()'
Description: 'Computes the digamma function, which is the logarithmic derivative of the gamma function.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.digamma()`** function computes the digamma function, the logarithmic derivative of the gamma function. It is often used in statistical modeling, especially in variational inference and probabilistic programming.

## Syntax

```pseudo
torch.digamma(input, *, out=None)
```

**Parameters:**

- `input` (Tensor): the input tensor.
- `out` (Tensor, optional): the output tensor to store results. Must be the same shape as `input`.

## Example

The following example demonstrates the usage of the `.digamma()` function:

```py
import torch

# Create a tensor
x = torch.tensor([1.0, 2.0, 3.0])

# Compute the digamma function
y = x.digamma()

print(y)
```

The above code produces the following output:

```shell
tensor([-0.5772,  0.4228,  0.9228])
```

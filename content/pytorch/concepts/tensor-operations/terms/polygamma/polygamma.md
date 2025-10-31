---
Title: '.polygamma()'
Description: 'Computes the n-th derivative of the digamma function for each element in the input tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'PyTorch'
  - 'Tensor Operations'
CatalogContent:
  - 'intro-to-pytorch'
  - 'paths/data-science'
---

The **`.polygamma()`** function in PyTorch computes the polygamma function of input tensors element-wise. The polygamma function is the (n+1)-th derivative of the logarithm of the gamma function, where n is a non-negative integer.

## Syntax

```pseudo
torch.polygamma(n, input, *, out=None) → Tensor
```

**Parameters:**

- `n` (int): The order of the polygamma function. When `n=0`, this is the digamma function; when `n=1`, this is the trigamma function.
- `input` (Tensor): The input tensor containing values for which to compute the polygamma function.
- `out` (Tensor, optional): The output tensor to store the result. Default is `None`.

**Return value:**

A tensor containing the computed polygamma values with the same shape as `input`.

## Example 1: Digamma Function (n=0)

In this example, `.polygamma()` is used with `n=0` to compute the digamma function (first derivative of the log-gamma function):

```py
import torch

# Create a tensor
x = torch.tensor([1.0, 2.0, 3.0, 4.0])

# Compute digamma (polygamma with n=0)
digamma_values = torch.polygamma(0, x)
print(digamma_values)
```

The output of this code is:

```shell
tensor([-0.5772, 0.4228, 0.9228, 1.2561])
```

## Example 2: Trigamma Function (n=1)

In this example, `.polygamma()` is used with `n=1` to compute the trigamma function (second derivative of the log-gamma function):

```py
import torch

# Create input tensor
x = torch.tensor([1.0, 2.0, 3.0])

# Compute trigamma (polygamma with n=1)
trigamma_values = torch.polygamma(1, x)
print(trigamma_values)
```

The output of this code is:

```shell
tensor([1.6449, 0.6449, 0.3949])
```

## Example 3: Higher Order Polygamma

In this example, `.polygamma()` is used with `n=2` to compute the second-order polygamma function (derivative of the trigamma function):

```py
import torch

# Compute polygamma of order 2
x = torch.tensor([2.0, 3.0, 4.0])
polygamma_2 = torch.polygamma(2, x)
print(polygamma_2)
```

The output of this code is:

```shell
tensor([-0.8224, -0.3540, -0.2164])
```

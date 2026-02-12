---
Title: '.trunc()'
Description: 'Removes the fractional part of each element by truncating toward zero.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Arrays'
  - 'Data Structures'
  - 'Deep Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, **`.trunc()`** removes the fractional component of each element in a tensor by truncating values toward zero. If the input tensor has an integer dtype, the values remain unchanged.

## Syntax

```pseudo
torch.trunc(input, out=None)
```

Alternative tensor method:

```pseudo
tensor.trunc()
```

**Parameters:**

- `input`: The input tensor.
- `out` (optional): Output tensor to write results into.

**Return value:**

Returns a tensor of the same dtype as `input`, with fractional parts removed (toward zero). Floating-point tensors are truncated, while integer tensors are unaffected.

## Example 1: Basic truncation on 1D tensor

In this example, `torch.trunc()` removes the fractional parts of values in a 1D tensor, truncating each number toward zero:

```py
import torch

x = torch.tensor([1.9, -2.1, 0.0, 3.5])
y = torch.trunc(x)

print(y)
```

The above code will result in the following output:

```shell
tensor([ 1., -2.,  0.,  3.])
```

## Example 2: Using the `out` parameter

In this example, `torch.trunc()` uses the `out` parameter to store the truncated results in a preallocated tensor:

```py
import torch

a = torch.tensor([3.4742, 0.5466, -0.8008, -0.9079])
out = torch.empty_like(a)
torch.trunc(a, out=out)

print(out)
```

A sample output might be:

```shell
tensor([ 3.,  0., -0., -0.])
```

## Example 3: Method form on a 2D tensor

In this example, the `.trunc()` tensor method truncates all elements of a 2D tensor toward zero:

```py
import torch

m = torch.tensor([[ 2.8, -1.2,  0.4],
                  [-3.9,  7.1, -0.5]])
n = m.trunc()
print(n)
```

The above code will result in the following output:

```shell
tensor([[ 2., -1.,  0.],
        [-3.,  7., -0.]])
```

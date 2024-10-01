---
Title: '.tensor()'
Description: 'Creates a tensor of a given shape and given values.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Data Types'
  - 'Deep Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.tensor()`** function in PyTorch creates a tensor from a given data input.

## Syntax

```pseudo
torch.tensor(data, dtype=None, device=None, requires_grad=False)
```

- `data`: This required parameter represents the input data for the tensor. The data must be array-like (e.g., list, tuple) or scalar.
- `dtype`: This optional parameter specifies the desired type for the returned tensor. If not provided, the data type is inferred from the `data`.
- `device`: This optional parameter specifies the desired device of the returned tensor. Common values are `'cpu'` or `'cuda'`. If not specified, the tensor is created on the default device.
- `requires_grad`: This optional parameter determines if autograd should record the operations on the returned tensor. The default value is `False`.

## Example

The following example shows how to use the `.tensor()` function:

```py
import torch

t1 = torch.tensor(3)
print(t1, '\n')

t2 = torch.tensor([[1.0, 3.0, 5.0], [2.0, 6.0, 0.0]])
print(t2)
```

The code above generates the following output:

```shell
tensor(3)

tensor([[1., 3., 5.],
        [2., 6., 0.]])
```

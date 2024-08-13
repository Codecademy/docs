---
Title: '.tensors()'
Description: 'Creates a tensor of a given shape, and given values.'
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

The **`.tensor()`** function creates a tensor from given data input.

## Syntax

```pseudo
torch.tensor(data, dtype=None, device=None, requires_grad=False, pin_memory=False)
```

- `data`: This parameter is the input data for the tensor. The data must be array-like or scalar.
- `dtype`: This optional parameter denotes the desired type for the returned tensor. The default value is `None`.
- `device`: This optional parameter specifies the desired device of the returned tensor (e.g., `torch.device('cpu')` or `torch.device('cuda')`). The default value is `None`.
- `requires_grad`: This optional parameter determines if autograd should record the operations on the returned tensor. The default value is `False`.
- `pin_memory`: This optional parameter puts the output tensor in the allocated pinned memory. It only works for CPU tensors. The default value is `False`.

## Example

The following example shows how to use the `.tensors()` function:

```py
import torch

t1 = torch.tensor(3)
print(t1)

t2 = torch.tensor([1.0, 3.0, 5.0], [2.0, 6.0, 0.0])
print(t2)
```

The code above generates the following output:

```shell
tensor(3)

tensor([[1.0, 3.0, 5.0],
        [2.0, 6.0, 0.0]])
```

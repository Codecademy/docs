---
Title: '.ones()'
Description: 'Creates a tensor of a given shape, where every element is set to 1.'
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
  - 'py-torch-for-classification'
---

The **`.ones()`** function in PyTorch creates a tensor of a specified shape, where each element is initialized to the scalar value 1. It is used in machine learning and deep learning for tasks such as preparing data, creating masks, or starting with default values for neural network weights. Knowing how to use `.ones()` is valuable for building models and handling data efficiently.

## Syntax

```pseudo
torch.ones(size, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

- `size`: This required parameter specifies the tensor shape.
- `out`: This optional parameter is the output tensor. The default value is `None`.
- `dtype`: This optional parameter denotes the desired type for the returned tensor. The default value is `None`.
- `layout`: This optional parameter designates the layout desired for the returned tensor. The default value is `torch.strided`.
- `device`: This optional parameter specifies the desired device of the returned tensor (e.g., `torch.device('cpu')` or `torch.device('cuda')`). The default value is `None`.
- `requires_grad`: This optional parameter determines if autograd should record the operations on the returned tensor. The default value is `False`.

## Example

The following example shows how to use the `.ones()` function:

```py
import torch

tensor_simple = torch.ones(3)
print(tensor_simple)

tensor_sizes = torch.ones((2,5))
print(tensor_sizes)
```

The code above generates the following output:

```shell
tensor([1., 1., 1.])

tensor([[1., 1., 1., 1., 1.],
 [1., 1., 1., 1., 1.]])
```

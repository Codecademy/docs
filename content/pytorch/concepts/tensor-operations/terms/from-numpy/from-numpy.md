---
Title: '.from_numpy()'
Description: 'Converts a NumPy array into a PyTorch tensor, sharing memory between both and changes to one affect the other.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'NumPy'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.from_numpy()`** function in PyTorch creates a tensor from a NumPy array. The returned tensor shares the same memory as the original NumPy array, so changes made to one will affect the other.

## Syntax

```python
torch.from_numpy(ndarray)
```

- `memory sharing`: The tensor shares the same memory with the NumPy array, so they are not copies. This is efficient in memory, but changes to one will affect the other.
- `dtype`: The tensor will have the same `dtype` as the NumPy array. For example, if the array is `float64`, the tensor will be `torch.float64`.
- `device`: The tensor is created on the CPU, as NumPy arrays are on the CPU. To move the tensor to a GPU or other device, use the `.to()` method after conversion.
- `requires_grad`: The default value is `False`. To create a tensor that tracks gradients, set `requires_grad=True`.

## Example

The following example uses the `.from_numpy()` function to convert a NumPy array into a PyTorch tensor:
```
import numpy as np
import torch

np_array = np.array([1, 2, 3, 4])

tensor = torch.from_numpy(np_array)

print(tensor)
```
```
The output is:
```
```
tensor([1, 2, 3, 4])
```

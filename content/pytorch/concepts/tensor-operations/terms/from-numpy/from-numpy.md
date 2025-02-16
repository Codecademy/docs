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

The **`.from_numpy()`** function in PyTorch creates a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) from a NumPy array, sharing the underlying memory. Changes to the NumPy array will affect the tensor. However, only in-place operations on the tensor will affect the NumPy array, while operations that create new tensors will not.

## Syntax

```pseudo
torch.from_numpy(ndarray)
```

- `ndarray`: A NumPy array to be converted into a PyTorch tensor. It must be a NumPy array with a supported dtype (e.g., `float32`, `int64`).

## Example

The following example uses the `.from_numpy()` function to convert a NumPy array into a PyTorch tensor:

```py
import numpy as np
import torch

# Create a NumPy array
np_array = np.array([1, 2, 3, 4])

# Convert NumPy array to a PyTorch tensor (shared memory)
tensor = torch.from_numpy(np_array)
print(tensor)
```

The output is:

```shell
tensor([1, 2, 3, 4])
```

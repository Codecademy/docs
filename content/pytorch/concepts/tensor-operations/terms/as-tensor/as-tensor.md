---
Title: '.as_tensor()'
Description: 'Converts input data into a PyTorch tensor, sharing memory when possible.'
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

In PyTorch, the **`.as_tensor()`** function converts various data types, including NumPy arrays, into PyTorch [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). When possible, it avoids copying data by sharing memory with the original array. This means that if a NumPy array is modified, the corresponding PyTorch tensor will also reflect those changes. However, if the NumPy array is not in a compatible format, PyTorch may create a copy instead.

## Syntax

The syntax for the `.as_tensor()` function is as follows:

```pseudo
torch.as_tensor(data, dtype=None, device=None)
```

- `data`: The input data to be converted into a PyTorch tensor. It can be a NumPy array, PyTorch tensor, CuPy array, or Python list.
- `dtype`: The data type of the output tensor. If `None`, the data type is inferred from the input data.
- `device`: The device on which the output tensor will be stored (e.g., `'cpu'` or `'cuda'`). If `None`:
  - If `data` is a CuPy array, the tensor remains on the same GPU.
  - Otherwise, the tensor is placed on the CPU by default.

## Example

In the following example, a NumPy array is converted into a PyTorch tensor using `.as_tensor()`, allowing both to share memory when possible:

```py
import torch
import numpy as np

# Create a NumPy array
arr = np.array([1, 2, 3])

# Convert the NumPy array into a PyTorch tensor
tensor = torch.as_tensor(arr)

print(tensor)
```

It produces an output as follows:

```shell
tensor([1, 2, 3])
```

In this example, a NumPy array `arr` with values `[1, 2, 3]` is first created and then converted into a PyTorch tensor using the `.as_tensor()` function. The resulting tensor `tensor` shares memory with the original NumPy array when possible.

## Additional Notes

- The `.as_tensor()` function helps avoid unnecessary data copies when converting a NumPy array into a PyTorch tensor, which can save memory and improve performance, especially with large datasets.
- The resulting PyTorch tensor shares memory with the original NumPy array when possible, meaning that modifying one affects the other.
- To create a separate copy of the data, `.tensor()` can be used, which always creates a new tensor with independent memory.

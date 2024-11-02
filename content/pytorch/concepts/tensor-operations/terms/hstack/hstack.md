---
Title: '.hstack()'
Description: 'Concatenates two or more tensors along the horizontal axis (column-wise).'
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

In PyTorch, **`.hstack()`** (short for horizontal stack) is a function used to concatenate two or more [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) along the horizontal axis (`axis=1`). This operation is helpful in combining data with the same number of rows but differing in the number of columns. It acts similarly to **`np.hstack()`** in [NumPy](https://www.codecademy.com/resources/docs/numpy) and is particularly handy for data that needs to be concatenated side by side before being fed into a model for training or inference.

## Syntax

```pseudo
torch.hstack(tensors) -> Tensor
```

- `tensors`: A sequence of tensors with the same number of rows. All tensors must have the same number of dimensions and the same size in all dimensions except for the dimension corresponding to the horizontal stacking.

The function returns a new tensor containing the horizontal concatenation of the input tensors.

## Example

Here's an example demonstrating how `.hstack()` can be used to concatenate tensors:

```py
import torch

# Create two tensors
a = torch.tensor([[1, 2],[3, 4]])
b = torch.tensor([[5, 6],[7, 8]])

# Stack the tensors horizontally
c = torch.hstack((a, b))

print(c)
```

The above code produces the following output:

```shell
tensor([[1, 2, 5, 6],
        [3, 4, 7, 8]])
```

This example demonstrates concatenating two 2x2 tensors horizontally resulting in 2x4 tensor.

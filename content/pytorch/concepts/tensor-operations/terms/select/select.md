---
Title: '.select()'
Description: 'Selects a specific slice along the given dimension in a tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Machine Learning'
  - 'Methods'
  - 'Python'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

The **`.select()`** method in PyTorch returns a specific slice of a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) along a specified dimension, reducing the dimensionality of the output tensor by one compared to the input tensor.

## Syntax

```pseudo
torch.select(input, dim, index)
```

- `input`: The input tensor.
- `dim`: The dimension along which to select.
- `index`: The index of the slice to select along the specified dimension.

## Example

The following example illustrates the usage of `.select()` method:

```py
import torch

# 2D tensor
tensor = torch.tensor([[10, 20], [30, 40], [50, 60]])
print("Input Tensor: ", tensor)

# Select a row (dim=0)
row = torch.select(tensor, 0, 1)
print("\nSelected Row (dim=0, index=1):", row)

# Select a column (dim=1)
col = torch.select(tensor, 1, 0)
print("\nSelected Column (dim=1, index=0):", col)
```

The above code gives the following output:

```shell
Input Tensor:  tensor([[10, 20],
        [30, 40],
        [50, 60]])

Selected Row (dim=0, index=1): tensor([30, 40])

Selected Column (dim=1, index=0): tensor([10, 30, 50])
```

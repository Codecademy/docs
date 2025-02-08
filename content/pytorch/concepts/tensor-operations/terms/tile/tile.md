---
Title: '.tile()'
Description: 'Creates a new tensor by repeating the elements of an existing tensor along specified dimensions.'
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

In PyTorch, the **`torch.tile()`** function generates a new [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) by repeating the elements of an existing tensor along specified dimensions. This function is available in the torch module and allows element-wise repetition along multiple dimensions.

## Syntax

```pseudo
torch.tile(input, dims)
```

- `input`: The input tensor to be repeated.
- `dims`: A tuple specifying the number of times the tensor is to be repeated along each dimension. The length of `dims` must match the number of dimensions in `input`.

## Example

The following example demonstrates the usage of the `.tile()` function:

```py
import torch

# Define a tensor
ten = torch.tensor([13, 24, 35, 46])

# Repeat the tensor 2 times along the first dimension and 3 times along the second dimension
res = torch.tile(ten, (2, 3))

# Print the result
print(res)
```

The above code produces the following output:

```shell
tensor([[13, 24, 35, 46, 13, 24, 35, 46, 13, 24, 35, 46],
        [13, 24, 35, 46, 13, 24, 35, 46, 13, 24, 35, 46]])
```

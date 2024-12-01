---
Title: '.dsplit()'
Description: 'Splits a given tensor with three or more dimensions into given number of sub-tensors depthwise.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Functions'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, the **`.dsplit()`** function splits a given tensor with three or more dimensions into given number of sub-tensors depthwise or along the third axis.

## Syntax

```pseudo
torch.dsplit(input, sections)
```

- `input`: The tensor to be split.
- `sections`: The number of sub-tensors that the input tensor is to be split into. The number should evenly divide the dimensions of the input tensor, otherwise it results in a runtime error.

## Example

The following example demonstrates the usage of the `.dsplit()` function:

```py
import torch

# Create a 3D tensor
ten = torch.tensor([[[1, 2, 3],
                     [4, 5, 6]],
                    [[7, 8, 9],
                     [8, 7, 6]]])

# Split the tensor into three sub-tensors
res = torch.dsplit(ten, 3)

print(res)
```

The above code produces the following output:

```shell
(tensor([[[1],
         [4]],

        [[7],
         [8]]]), tensor([[[2],
         [5]],

        [[8],
         [7]]]), tensor([[[3],
         [6]],

        [[9],
         [6]]]))
```

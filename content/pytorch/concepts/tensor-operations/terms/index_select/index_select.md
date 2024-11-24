---
Title: '.index_select()'
Description: 'Extracts specific elements from a tensor to return a new tensor.'
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

**Index_select()** is used to extract specific elements (rows, columns) from the tensor to return a new tensor. 

## Syntax

```pseudo
torch.index_select(input,dim,index,out)
```

- `input`: The input tensor
- `dim`: The dimension to index (0 for rows, 1 for columns)
- `index`: The 1-D tensor containing the indices to select
- `out` (optional): The output tensor (optional)

## Example

The following example demonstrates the usage of `.index_select()`:

```py
import torch

#Define a tensor
ten = torch.tensor([[1, 2, 3, -8],
                    [4, 3, 8, 0],
                    [-1, 7, 6, 3],
                    [5, 6, 9, 0]])

indices = torch.tensor([0, 2])

#Define a new tensor using index_select 
r = torch.index_select(ten, 0, indices)
print(r)

#Define a new tensor using index_select 
c = torch.index_select(ten, 1, indices)
print(c)
```

```shell
tensor([[1, 2, 3, -8],
        [-1, 7, 6, 3]])
tensor([[1, 4, -1, 5],
        [3, 8, 6, 9]])
```
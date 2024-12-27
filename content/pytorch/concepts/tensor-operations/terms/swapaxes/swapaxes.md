---
Title: '.swapaxes()'
Description: 'Alias for torch.transpose(). This function is equivalent to NumPy’s swapaxes function.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
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

In PyTorch, the **`.swapaxes()`** function swaps two specified axes (dimensions) of a tensor.

## Syntax

```pseudo
torch.swapaxes(input, axis0, axis1)
```

- `input`: The tensor input array.
- `axis0`: First axis of the tensor.
- `axis1`: Second axis of the tensor.

## Example

The following example demonstrates the usage of the `.swapaxes()` function:

```py
import torch

# Create a tensor
x = torch.tensor([[[0,1],[2,3]],[[4,5],[6,7]]])

# Swap the axes
torch.swapaxes(x, 0, 1)

# Swap the axes
torch.swapaxes(x, 0, 2)
```

In the above example, the order the value of the tensor is:

- Before the swap
  ```
  tensor([
            [
                [0, 1],
                [2, 3]
            ],
            [   
                [4, 5],
                [6, 7]
            ]
        ])
  ```
- After the first swap
  ```
  tensor([
            [
                [0, 1],
                [4, 5]
            ],
            [
                [2, 3],
                [6, 7]
            ]
        ])
  ```
- After the second swap
  ```
  tensor([
            [
                [0, 4],
                [2, 6]
            ],
            [  
                [1, 5],
                [3, 7]
            ]
        ])
  ```
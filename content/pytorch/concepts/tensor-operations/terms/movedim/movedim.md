---
Title: '.movedim()'
Description: 'Returns a tensor with the dimensions moved from the positions specified in source to the positions specified in destination.'
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

In Pytorch, **`.movedim()`** is used to move specific dimensions of the input tensor to a specified positions, while the other dimensions that are not explicitly mentioned remain in their original order.

## Syntax

```pseudo
torch.movedim(input, source, destination)
```

- `input`: The input tensor whose dimensions are to be rearranged.
- `source`: The dimensions to be moved. Can be a single integer or a tuple of integers.
- `destination`: The target positions for the dimensions specified in `source`. It should have the same length as `source`.

## Example

The following example demonstrates the use of `.movedim()`:

```py
import torch

# Define a 1D tensor
a = torch.tensor([[1, 2, 3, -8]])

# Define a 2D tensor
b = torch.tensor([[1, 2, 3, -8],
                    [4, 3, 8, 0],
                    [-1, 7, 6, 3],
                    [5, 6, 9, 0]])

# Define a 3D tensor
c = torch.randn(2, 2, 3)

# Define a 4D tensor
d = torch.randn(2, 3, 2, 3)

# Move dimension 0 to dimension 1 for 1D tensor
a1 = torch.movedim(a, 0, 1)
print("One Dimensional tensor:")
print(a1)
print("\n")

# Move dimension 0 to dimension 1 for 2D tensor
b1 = torch.movedim(b, 0, 1)
print("Two Dimensional tensor:")
print(b1)
print("\n")

# Move dimension 0 to dimension 1 for 3D tensor
c1 = torch.movedim(c, 0, 1)
print("Three Dimensional tensor (Dim 1):")
print(c1)
print("\n")

# Move dimension 0 to dimension 2 for 3D tensor
c2 = torch.movedim(c, 0, 2)
print("Three Dimensional tensor (Dim 2):")
print(c2)
print("\n")

# Move dimensions [0, 1] to positions [2, 3] for 4D tensor
d1 = torch.movedim(d, [0, 1], [2, 3])
print("Four Dimensional tensor:")
print(d1)
```

This example will generate the following output:

```shell
One Dimensional tensor:
tensor([[ 1],
        [ 2],
        [ 3],
        [-8]])

Two Dimensional tensor:
tensor([[ 1,  4, -1,  5],
        [ 2,  3,  7,  6],
        [ 3,  8,  6,  9],
        [-8,  0,  3,  0]])

Three Dimensional tensor (Dim 1):
tensor([[[ 1.0064, -1.2284, -1.1452],
         [-0.9374,  1.2943, -1.7862]],

        [[ 0.4316,  3.1050, -0.4264],
         [-0.9219,  1.6863, -0.3411]]])

Three Dimensional tensor (Dim 2):
tensor([[[ 1.0064, -0.9374],
         [-1.2284,  1.2943],
         [-1.1452, -1.7862]],

        [[ 0.4316, -0.9219],
         [ 3.1050,  1.6863],
         [-0.4264, -0.3411]]])

Four Dimensional tensor:
tensor([[[[ 0.0753,  1.5373,  0.0765],
          [-3.1675,  0.2926,  0.5799]],

         [[-0.1520, -0.4855,  1.9026],
          [-1.6107,  0.5367, -0.3401]],

         [[-0.9148, -0.6213,  0.5939],
          [-0.6407, -1.0397, -0.7044]]],


        [[[ 0.3897,  0.6399,  1.0818],
          [ 0.7111, -1.3950, -1.3415]],

         [[-0.3749,  2.3008, -0.2464],
          [ 1.4121, -0.3554, -0.5184]],

         [[-0.3224, -0.9296,  0.1633],
          [-0.2641,  0.8230,  0.1766]]]])
```

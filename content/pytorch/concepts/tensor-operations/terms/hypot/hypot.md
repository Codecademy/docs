---
Title: '.hypot()'
Description: 'Calculates the hypotenuse of a right triangle given the lengths of its two legs.'
Subjects:
  - 'AI'
  - 'Computer Science'
  - 'Data Science'
Tags: 
  - 'AI'
  - 'Functions'
  - 'Pytorch'
  - 'Trigonometry'
CatalogContent: 
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`torch.hypot`** function in PyTorch calculates the hypotenuse of right triangles, given the lengths of the two legs.

Element-wise, `torch.hypot()` computes:

$$
\text{out}_i = \sqrt{(\text{input}_i)^2 + (\text{other}_i)^2}
$$

## Syntax

```pseudo
torch.hypot(input, other, *, out=None)
```

**Parameters:**

- `input`: The first input tensor.
- `other`: The second input tensor. This must be broadcastable with `input`.
- `out` (Optional): The output tensor to store the result.

**Return value**

Returns a tensor containing the element-wise Euclidean norm: $\sqrt{(\text{input}_i)^2 + (\text{other}_i)^2}$.

## Example 1: Basic Element-Wise Hypotenuse

In this example, `torch.hypot()` calculates the hypotenuse for corresponding elements of two 1D tensors:

```py
import torch

# Create input tensors
x = torch.tensor ([3.0, 5.0, 8.0])
y = torch.tensor ([4.0, 12.0, 15.0])

# Perform element-wise operation
hypotenuse = torch.hypot(x, y)

# Print the result
print(hypotenuse)
```

This code would output the following:

```shell
tensor([5., 13., 17.])
```

## Example 2L 2D Distance Between Points

In this example, `torch.hypot()` calculates the distance from the origin for 2D points stored as x, y coordinates:

```py
import torch

# For the following array:
points = torch.tensor([
    [3.0], [4.0],
    [5.0], [12.0],
    [8.0], [15.0],
])

# Split into x and y columns:
x = points[:, 0]
y = points[:, 1]

distances = torch.hypot(x, y)
print(distances)
```

This will output:

```shell
tensor([ 5., 13., 17. ])
```

This example organizes the `6 x 1` tensor into `x, y` pairs, and calculates each one individually:

- $\sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt {25} = 5$
- $\sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt {169} = 13$
- $\sqrt{8^2 + 15^2} = \sqrt{64 + 225} = \sqrt {289} = 17$

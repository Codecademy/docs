---
Title: '.hypot()'
Description: 'It calculates the hypotenuse of a right traingle given its two legs'
Subjects:
    - 'Data Science'
    - 'AI'
Tags: 
    - 'AI'
    - 'Trigonometry'
    - 'Pytorch' 
    - 'Functions'
CatalogContent: 
    - 'intro-to-p-torch-and-neural-networks'
    - 'paths/data-science'
---

The **`.hypot()`** function is an element-wise operation that calculates the hypotenuse of 2 given [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). 

So, to put it simply, the **`.hypot()`** operator can be considered the same as
$$
hypotenuse = \sqrt{x^2 + y^2}
$$

## Syntax

```pseudo
torch.hypot(input, other, *, out=None)
```
**Parameters:**
* `input` - is the first input tensor (i.e $x$ in $\sqrt{*x*^2 + y^2}$).
* `other` - is the second input tensor (i.e $y$ in $\sqrt{x^2 + *y*^2}$).
* `out` (Optional) - the output tensor.

**Return Value**

A tensor with the result of the hypotenuse between $\sqrt{x^2 + y^2}$.

## Example 1 - Basic Element-Wise Hypotenuse

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

This would output:
```shell
tensor([5., 13., 17.])
```

## Example 2 - 2D Distance Between Points

For 2D points stored as `x, y` coordinates, and we want to calculate each point's distance from the origin (0, 0):

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
* $\sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt {25} = 5$
* $\sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt {169} = 13$
* $\sqrt{8^2 + 15^2} = \sqrt{64 + 225} = \sqrt {289} = 17$
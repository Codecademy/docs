---
Title: '.acos()'
Description: 'Computes the inverse cosine (arccos) of each element in the input tensor.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Functions'
  - 'Math'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, the **`.acos()`** function computes the inverse cosine (arccos) of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). The result is given in radians and lies in the range `[0, π]`. It is useful in trigonometric calculations and [neural network](https://www.codecademy.com/resources/docs/ai/neural-networks) applications where angles need to be determined from cosine values.

## Syntax

```pseudo
torch.acos(input, *, out=None)
```

- `input`: The input tensor containing values in the range `[-1, 1]`, since the arccosine function is only defined within this interval.
- `out` (Optional): A tensor to store the output. If provided, it must have the same shape as `input`.

## Example

The following example demonstrates the usage of the `.acos()` function:

```py
import torch

# Define a tensor
input_tensor = torch.tensor([-1.0, -0.5, 0.0, 0.5, 1.0])

# Compute the inverse cosine of each element in the input tensor
output_tensor = torch.acos(input_tensor)

# Print the resultant tensor
print(output_tensor)
```

The above code produces the following output:

```shell
tensor([3.1416, 2.0944, 1.5708, 1.0472, 0.0000])
```

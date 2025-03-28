---
Title: '.atanh()'
Description: 'Calculates the inverse hyperbolic tangent for each value in a tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.atanh()`** function in PyTorch calculates the inverse hyperbolic tangent for each value in a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors).

## Syntax

```pseudo
torch.atanh(input, *, out=None)
```

**Parameters:**

- `input` (Tensor): A tensor containing values strictly between -1 and 1 (exclusive).
- `out` (Tensor, optional): The output tensor to store the result. If not provided, a new tensor is created.

**Return Value:**

Returns a new tensor where each value is the inverse hyperbolic tangent of the corresponding value in `input`.

## Example

The following example demonstrates the usage of the `.atanh()` function:

```py
import torch

# Create a tensor
x = torch.tensor([0.5, -0.3, 0.0])

# Calculate the inverse hyperbolic tangent
y = torch.atanh(x)

# Print the result
print(y)
```

The above code produces the following output:

```shell
tensor([ 0.5493, -0.3095,  0.0000])
```

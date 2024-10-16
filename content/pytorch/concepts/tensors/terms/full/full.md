---
Title: '.full()'
Description: 'Creates a tensor filled with a specified value, with the shape defined by the given dimensions.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Alias'
  - 'Algorithms'
  - 'Data'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'intro-to-py-torch-and-neural-networks'
---

The **`.full()`** function creates a tensor of a specified shape, filled with a constant value. This function is particularly useful in machine learning and data science for efficiently managing tensors, as it allows the creation of tensors with predefined values. Additionally, it accepts several parameters that allow users to specify the shape, fill value, and other optional attributes like data type and device allocation.

## Syntax

```pseudo
torch.full(size, fill_value, *, out=None, dtype=None, layout=torch.strided, device=None, requires_grad=False)
```

- `size`: A list or tuple that specifies the desired shape of the output tensor.
- `fill_value`: A scalar value that fills the tensor.
- `out` (optional): An existing tensor where the result will be stored, it must have the same shape as the output.
- `dtype` (optional): The desired data type of the output tensor.
- `layout` (optional): Desired layout of the returned tensor. Default value is `torch.strided`.
- `device` (optional): The device on which the tensor is to be allocated.
- `requires_grad (optional)`: A boolean value that indicates whether to track the operations on the tensor for gradient computation. By default this is `False`.

## Example

The below example code creates a _2x3_ tensor where all elements are set to _5_:

```py
import torch

# Create a 2x3 tensor filled with the value 5
tensor = torch.full((2, 3), 5)
print(tensor)
```

The code above produces the following output:

```shell
tensor([[5, 5, 5],
        [5, 5, 5]])
```

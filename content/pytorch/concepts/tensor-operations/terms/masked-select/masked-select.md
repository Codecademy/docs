---
Title: '.masked_select()'
Description: 'Selects elements from a tensor, based on a boolean mask, and returns them as a 1D tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Index'
  - 'Values'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, **`.masked_select()`** is a function that selects elements from an input tensor based on a boolean mask of the same shape. It returns a new 1D tensor containing the elements where the corresponding mask value is `True`.

## Syntax

```pseudo
torch.masked_select(input, mask, *, out=None)
```

- `input`: The input tensor from which elements will be selected.
- `mask`: A boolean tensor of the same shape as input, where `True` indicates the elements to be selected.
- `out` (Optional): A tensor to store the result. If provided, the selected elements will be written to this tensor instead of creating a new one.

## Example

Here's an example of using `.masked_select()` in PyTorch:

```py
import torch

# Create an input tensor
input_tensor = torch.tensor([1, 2, 3, 4, 5])

# Create a mask tensor with boolean values
mask = torch.tensor([True, False, True, False, True])

# Use masked_select to extract elements from the input tensor where the mask is True
selected_elements = torch.masked_select(input_tensor, mask)

# Print the selected elements
print(selected_elements)
```

The code above generates the output as follows:

```shell
tensor([1, 3, 5])
```

In this example, the `input_tensor` contains elements `[1, 2, 3, 4, 5]`, and the `mask` tensor contains boolean values `[True, False, True, False, True]`. The `masked_select()` function selects elements from the `input_tensor` where the corresponding mask value is `True`, resulting in the tensor `[1, 3, 5]`.

The `.masked_select()` function is useful for filtering elements from a tensor based on conditions specified by the mask tensor. It can be applied in various scenarios, such as selecting specific elements for further processing, analysis, or model training.

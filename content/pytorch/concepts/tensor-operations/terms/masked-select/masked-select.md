---
Title: 'masked_select()'
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

In PyTorch, **masked select** is a method that selects elements from a tensor based on a mask. The mask is a tensor of the same shape as the input tensor, containing boolean values. The `masked_select()` function returns a new tensor with elements from the input tensor where the corresponding mask value is `True`.

## Syntax

```pseudo
torch.masked_select(input, mask, *, out=None) → Tensor
```

- `input`: The input tensor from which elements will be selected.
- `mask`: The mask tensor containing boolean values to determine which elements to select.
- `out`: If provided, the result will be written to this tensor. It is an optional parameter.

## Example

Here's an example of using `masked_select()` in PyTorch:

```py
import torch

# Create an input tensor
input_tensor = torch.tensor([1, 2, 3, 4, 5])

# Create a mask tensor
mask = torch.tensor([True, False, True, False, True])

# Use masked_select to select elements based on the mask
selected_elements = torch.masked_select(input_tensor, mask)

# Print the selected elements
print(selected_elements)
```

Output:

```shell
tensor([1, 3, 5])
```

In this example, the `input_tensor` contains elements `[1, 2, 3, 4, 5]`, and the `mask` tensor contains boolean values `[True, False, True, False, True]`. The `masked_select()` function selects elements from the `input_tensor` where the corresponding mask value is `True`, resulting in the tensor `[1, 3, 5]`.

`masked_select()` is useful for filtering elements from a tensor based on a condition specified by the mask tensor. It can be used in various scenarios, such as selecting specific elements for further processing or analysis.

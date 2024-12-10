---
Title: '.column_stack()'
Description: 'Creates a new tensor by stacking tensors as columns in a 2D tensor, converting 1D tensors into 2D.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Functions'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, the **`.column_stack()`** function creates a new tensor by stacking tensors as columns in a 2D tensor, converting 1D tensors into 2D if necessary. It is useful for combining feature vectors or aligning data along the column axis for [machine learning](https://www.codecademy.com/resources/docs/ai/machine-learning) models.

## Syntax

```pseudo
torch.column_stack(tensors, *, out=None)
```

- `tensors`: A sequence of tensors to be stacked, with 1D tensors converted into columns before stacking.
- `out` (Optional): A tensor to store the output, matching the shape of the resulting stacked tensor.

## Example

In this example, `.column_stack()` stacks the 1D tensors `a` and `b` as columns to create a 2D tensor:

```py
import torch

# Define 1D tensors
a = torch.tensor([10, 20, 30])
b = torch.tensor([40, 50, 60])

# Stack the tensors as columns
result = torch.column_stack((a, b))

print(result)
```

Here is the output for the above code:

```shell
tensor([[10, 40],
        [20, 50],
        [30, 60]])
```

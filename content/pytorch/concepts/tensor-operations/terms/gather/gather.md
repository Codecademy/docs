---
Title: '.gather()'
Description: 'Retrieves specific elements from a tensor along a defined axis, ideal for selecting values based on indices in data processing and machine learning.'
Subjects:
  - 'AI'
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

The **`.gather()`** function in PyTorch is a tensor operation that enables the retrieval of specific elements from a tensor along a specified axis. This function is particularly useful for selecting values based on a set of indices, making it ideal for applications in machine learning and data processing where efficient data selection is critical.
## Syntax

```pseudo
torch.gather(input, dim, index)
```

- `input`: The source tensor from which values are gathered.sors must have the same number of dimensions and the same size in all dimensions except for the dimension corresponding to the horizontal stacking.
- `dim`: The dimension along which the gather operation is performed.
- 'index': A tensor of indices specifying which values to gather from each row (or column) along the specified dimension.

The function returns a tensor of the same shape as `index`, where each value is gathered from the `input` tensor based on the specified `index`.

## Example

Here's a simple example of how `.gather()` can be used to select elements from a tensor based on specified indices:

```py
import torch

# Define a source tensor
input_tensor = torch.tensor([[1, 2], [3, 4]])

# Define the indices to gather
index_tensor = torch.tensor([[0, 1], [1, 0]])

# Gather elements from the source tensor along dimension 1
output_tensor = torch.gather(input_tensor, 1, index_tensor)

print(output_tensor)
```

In this example, `.gather()` retrieves elements from `input_tensor` based on `index_tensor` along dimension `1`. The result is a new tensor where values are selected from the original tensor according to the provided indices.

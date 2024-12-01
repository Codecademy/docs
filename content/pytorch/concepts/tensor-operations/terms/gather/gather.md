---
Title: '.gather()'
Description: 'Retrieves specific elements from a tensor along a defined axis based on indices.'
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

The **`.gather()`** function in PyTorch is a tensor operation that retrieves specific elements from a tensor along a specified axis. It is beneficial for selecting values based on a set of indices, making it ideal for applications in machine learning and data processing, where efficient data selection is critical.

## Syntax

```pseudo
torch.gather(input, dim, index)
```

- `input`: The source tensor from which values are gathered.
- `dim`: The dimension along which to gather values. This is the axis in the `input` tensor where the selection occurs.
- `index`: A tensor of indices specifying which values to gather from the `input` tensor along the specified `dim`.

The function returns a tensor with the same shape as the `index`, where each value is gathered from the `input` tensor based on the specified indices.

## Example

Here's an example of how `.gather()` can be used to select elements from a tensor based on specified indices:

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

This example results in the following output:

```shell
tensor([[1, 2],
        [4, 3]])
```

In this example, `.gather()` retrieves elements from `input_tensor` based on `index_tensor` along dimension `1`. The result is a new tensor where values are selected from the original tensor according to the provided indices.

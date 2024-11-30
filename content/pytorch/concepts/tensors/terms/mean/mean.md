---
Title: '.mean()'
Description: 'Calculates the mean of all elements in a PyTorch tensor or along a specified dimension.'
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

The **.mean()** method in PyTorch computes the arithmetic mean (average) of tensor elements. It can calculate the mean for all elements in the tensor or along a specified dimension. This method is widely used in data preprocessing and analysis for summarizing data.

## Syntax

```pseudo
tensor.mean(dim=None, keepdim=False)
```

- `dim` (optional): The dimension along which the mean is computed. If not specified, the mean of all elements is calculated.
- `keepdim` (optional): If `True`, retains the reduced dimension with size `1`. Defaults to `False`.

The function returns a tensor containing the mean value(s).

## Example

This example demonstrates calculating the mean of all elements in a tensor and along a specific dimension:

```py
import torch

# Create a tensor
tensor = torch.tensor([[1.0, 2.0], [3.0, 4.0]])

# Calculate the mean of all elements
mean_all = tensor.mean()

# Calculate the mean along dimension 0 (columns)
mean_dim0 = tensor.mean(dim=0)

print("Mean of all elements:", mean_all)
print("Mean along dimension 0:", mean_dim0)
```

This example results in the following output:

```shell
Mean of all elements: tensor(2.5000)
Mean along dimension 0: tensor([2.0000, 3.0000])
```

In this example:

- `mean_all` computes the mean of all elements in the tensor.
- `mean_dim0` computes the mean along each column (dimension 0), reducing the rows. This makes `.mean()` a versatile tool for data analysis.

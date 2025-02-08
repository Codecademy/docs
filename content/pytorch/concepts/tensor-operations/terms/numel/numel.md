---
Title: '.numel()'
Description: 'Returns the total number of elements in a tensor.'
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

In PyTorch, the **`.numel()`** method calculates the product of all dimensions of the tensor to determine its total size. It's particularly useful to know the total count of elements regardless of the tensor's shape or dimensionality.

## Syntax

```pseudo
tensor.numel()
```

## Example

The following example creates a 2x3 tensor and demonstrates how `.numel()` counts all elements across all dimensions:

```py
import torch

# Create a 2x3 tensor
x = torch.randn(2, 3)
print("Tensor x:")
print(x)
print("\nTotal number of elements:", x.numel())
```

The above code produces the following output:

```shell
Tensor x:
tensor([[-1.0727,  0.3469, -1.2021],
        [ 0.0424,  0.1689,  2.6234]])

Total number of elements: 6
```

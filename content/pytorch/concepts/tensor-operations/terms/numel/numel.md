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
torch.numel(Tensor)
```

- `Tensor`: The input tensor whose total number of elements is to be computed.

It returns an integer representing the total number of elements in the given tensor.

## Example

The following example creates a _2x3_ tensor and demonstrates how `.numel()` counts all elements across all dimensions:

```py
import torch

# Create a 2x3 tensor
x = torch.randn(2, 3)
print("Tensor x:")
print(x)

y = torch.numel(x)
print("\nTotal number of elements:", y)
```

The above code produces the following output:

```shell
Tensor x:
tensor([[-1.0727,  0.3469, -1.2021],
        [ 0.0424,  0.1689,  2.6234]])

Total number of elements: 6
```

> **Note:** The output varies on each run because `torch.randn(2, 3)` generates random values from a normal distribution.

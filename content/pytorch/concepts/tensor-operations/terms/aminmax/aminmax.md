---
Title: '.aminmax()'
Description: 'Returns both the minimum and maximum values of a tensor along a specified dimension or across the entire tensor.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Methods'
  - 'Programming'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.aminmax()`** method in PyTorch computes both the minimum and maximum values of a [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) in a single operation. This method is more efficient than calling `.amin()` and `.amax()` separately, as it requires only one pass through the data. It can operate on the entire tensor or along a specific dimension, making it useful for data analysis, normalization, and monitoring value ranges in neural networks.

## Syntax

```pseudo
torch.aminmax(input)
```

**Parameters:**

- `input`: The input tensor to find the minimum and maximum values from.
  **Return value:**

The `.aminmax()` method returns a named tuple `(min, max)` containing two tensors: the minimum values in the `min` field and the maximum values in the `max` field.

## Example

This example shows how to use the `.aminmax()` method to find the minimum and maximum values of a tensor:

```py
import torch

# Create a sample tensor
tensor = torch.tensor([[3.5, 1.2, 8.7],
                       [4.1, 9.3, 2.6],
                       [7.0, 5.4, 6.2]])

# Find minimum and maximum values of the entire tensor
result = torch.aminmax(tensor)
print("Result:", result)
print("Minimum value:", result.min)
print("Maximum value:", result.max)
```

This example results in the following output:

```shell
torch.return_types.aminmax(min=tensor(1.2000),
                            max=tensor(9.3000)
                        )
Minimum value: tensor(1.2000)
Maximum value: tensor(9.3000)
```

In this example the maximum value is `9.3000` and the minimum value is `1.2000`.

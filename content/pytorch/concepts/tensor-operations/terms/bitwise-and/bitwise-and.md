---
Title: '.bitwise_and()'
Description: 'Performs the element-wise bitwise AND operation on tensors in PyTorch.'
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

The **`.bitwise_and()`** method in PyTorch performs an element-wise bitwise AND operation on two [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) or a tensor and a scalar. It returns a new tensor containing `1` where both corresponding bits are `1`, and `0` otherwise. This method is useful for binary operations and low-level bit manipulation.

## Syntax

```pseudo
torch.bitwise_and(input, other, *, out=None) → Tensor
```

**Parameters:**

- `input`: The first input tensor.
- `other`: The second input tensor.
- `out` (Optional): The output tensor to store the result.

**Return value:**

Returns a new tensor containing element-wise bitwise AND values of the input tensors.

## Example

The following example demonstrates the usage of the `.bitwise_and()` method:

```py
import torch

# Define two tensors
a = torch.tensor([5, 6, 7])  # Binary: [101, 110, 111]
b = torch.tensor([3, 2, 1])  # Binary: [011, 010, 001]

# Perform bitwise AND operation
result = torch.bitwise_and(a, b)

print("Bitwise AND Result:")
print(result)
```

The above code produces the following output:

```shell
Bitwise AND Result:
tensor([1, 2, 1])
```

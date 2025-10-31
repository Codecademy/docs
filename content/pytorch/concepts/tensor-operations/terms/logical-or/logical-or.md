---
title: logical_or()
description: Performs an element-wise logical OR operation between two tensors.
subjects: PyTorch, Tensor Operations, Logical Operations
tags: PyTorch, Tensor
---

The `logical_or()` operation performs an element-wise logical OR between two tensors. For each corresponding element pair, it returns _True_ if _either_ element is _True_, and _False_ only if _both_ elements are _False_.

This operation can be used either as a function in the torch module or as a tensor method.

## Syntax

1. **Function form:**

   ```python
   torch.logical_or(input, other, out=None)
   ```

2. **Tensor method form:**

   ```python
   input.logical_or(other, out=None)
   ```

**Parameters:**

- `input` (Tensor): The first tensor to compare.
- `other` (Tensor): The second tensor to compare.
- `out` (Tensor, optional): Tensor to store the output.

## Example

```python
import torch

# Example 1: Using boolean tensors
a = torch.tensor([True, False, True, False])
b = torch.tensor([True, True, False, False])
print(torch.logical_or(a, b))
# Output: tensor([True, True, True, False])

# Example 2: Using integer tensors
x = torch.tensor([1, 0, 0, 7])
y = torch.tensor([0, 0, 3, 0])
print(x.logical_or(y))
# Output: tensor([True, False, True, True])
```

## Codebyte Example

```codebyte/python
import torch

# Example 1: Using boolean tensors
tensor1 = torch.tensor([True, False, True, False])
tensor2 = torch.tensor([True, True, False, False])

result = torch.logical_or(tensor1, tensor2)
print(f"Example 1 Result:\n{result}\n")
# Output:
# Example 1 Result:
# tensor([True, True, True, False])

# Example 2: Using integer tensors
# Non-zero values are treated as True, and 0 as False.
tensor_a = torch.tensor([1, 0, 0, 7])
tensor_b = torch.tensor([0, 0, 3, 0])

result_b = tensor_a.logical_or(tensor_b)
print(f"Example 2 Result:\n{result_b}\n")
# Output:
# Example 2 Result:
# tensor([True, False, True, True])

# Example 3: Broadcasting
# A 1D tensor is broadcast to match the 2D tensor's shape.
tensor_2d = torch.tensor([[True, False, True],
                        [False, False, False]])
tensor_1d = torch.tensor([True, False, False])

result_c = torch.logical_or(tensor_2d, tensor_1d)
print(f"Example 3 (Broadcasting) Result:\n{result_c}")
# Output:
# Example 3 (Broadcasting) Result:
# tensor([[ True, False,  True],
#         [ True, False, False]])
```

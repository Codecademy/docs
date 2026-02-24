---
Title: '.logical_xor()'
Description: 'Computes the element-wise logical XOR (Exclusive OR) of two input tensors.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Booleans'
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.logical_xor()`** function in PyTorch computes the element-wise logical XOR (Exclusive OR) of two input [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). The resulting tensor contains Boolean (`True` or `False`) values.

According to the XOR rule, an element is `True` only if exactly one of the corresponding inputs is truthy. Inputs are interpreted as Boolean values where non-zero means `True` and zero means `False`.

## Syntax

```pseudo
torch.logical_xor(input, other, out)
```

**Parameters:**

- `input`: A Boolean tensor (or a tensor that can be cast to Boolean).
- `other`: A Boolean tensor of the same shape or broadcastable to `input`.
- `out` (optional): A tensor for storing the result in-place.

**Return value:**

Returns a Boolean tensor where each element is `True` when exactly one of the corresponding elements in `input` and `other` is `True`.

## Example 1

This example shows the logical XOR operation applied to two 2×2 tensors:

```py
import torch

# Tensor A:
# [True, False]
# [True, True]
tensor_a = torch.tensor([[1, 0], [5, 10]])

# Tensor B:
# [True, True]
# [False, True]
tensor_b = torch.tensor([[2, 3], [0, 1]])

# Compute logical XOR: A XOR B
# -----------------------------
# [1 XOR 2] -> True XOR True -> False
# [0 XOR 3] -> False XOR True -> True
# [5 XOR 0] -> True XOR False -> True
# [10 XOR 1] -> True XOR True -> False
result_tensor = torch.logical_xor(tensor_a, tensor_b)

print("Tensor A:\n", tensor_a)
print("\nTensor B:\n", tensor_b)
print("\nA.logical_xor(B) Result (Boolean):\n", result_tensor)
```

The output of this code is:

```shell
Tensor A:
 tensor([[ 1,  0],
        [ 5, 10]])

Tensor B:
 tensor([[2, 3],
        [0, 1]])

A.logical_xor(B) Result (Boolean):
 tensor([[False,  True],
        [ True, False]])
```

## Example 2

This example demonstrates XOR on two 1-D tensors so each result maps cleanly to a single pair of elements:

```py
import torch

x = torch.tensor([1, 0, 10, 0])
y = torch.tensor([0, 5, 0, 0])

# Compute x XOR y
xor_result = torch.logical_xor(x, y)

print(xor_result)
```

The output of this code is:

```shell
tensor([ True,  True,  True, False])
```

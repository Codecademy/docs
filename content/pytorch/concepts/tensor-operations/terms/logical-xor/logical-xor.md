---
Title: '.logical_xor()'
Description: 'Computes the element-wise logical XOR (Exclusive OR) between two tensors.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'PyTorch'
  - 'Tensor'
  - 'Boolean Logic'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

The **`.logical_xor()`** method computes the **Exclusive OR (XOR)** operation element-wise between two input tensors. The resulting tensor contains Boolean (`True` or `False`) values.

The XOR operation returns `True` if **exactly one** of the corresponding elements in the input tensors evaluates to `True`. It returns `False` if both elements are `True` or if both are `False` (zero).

Inputs are treated as Boolean: non-zero values are interpreted as `True`, and zero values are interpreted as `False`.

## Syntax

The method is called on the first tensor and takes the second tensor as an argument.

```pseudo
input_tensor_a.logical_xor(input_tensor_b)
```

## Parameters

* `input_tensor_b` (Tensor): The second tensor to compare. Must be broadcastable with the first tensor.

## Return Value

Returns a tensor of type `torch.bool` (Boolean) containing the element-wise result of the logical XOR operation.

## Example

This example demonstrates the logical XOR operation using various combinations of non-zero (True) and zero (False) values.

```python
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
result_tensor = tensor_a.logical_xor(tensor_b)

print("Tensor A:\n", tensor_a)
print("\nTensor B:\n", tensor_b)
print("\nA.logical_xor(B) Result (Boolean):\n", result_tensor)
```

Output:

```
Tensor A:
tensor([[ 1,  0],
        [ 5, 10]])

Tensor B:
tensor([[ 2,  3],
        [ 0,  1]])

A.logical_xor(B) Result (Boolean):
tensor([[False,  True],
        [ True, False]])
```

## Codebyte

Use the Codebyte below to experiment with the `logical_xor()` method on two 1-D tensors.

```python
import torch

x = torch.tensor([1, 0, 10, 0])
y = torch.tensor([0, 5, 0, 0])

# Compute x logical XOR y
xor_result = x.logical_xor(y)

print(xor_result)
```
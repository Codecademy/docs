---
Title: '.bitwise_or()'
Description: 'Performs element-wise bitwise OR operation on two input tensors, combining their binary representations. Applicable to integer and boolean tensors.'
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

In PyTorch, the **`.bitwise_or()`** function computes the element-wise bitwise OR operation between two input [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). For each pair of bits in the binary representation of the input elements, it returns `1` if at least one bit is `1`, and `0` otherwise. This function supports integer tensors (signed or unsigned) and boolean tensors (where it acts as a logical OR).

## Syntax

```pseudo
torch.bitwise_or(input, other, *, out=None)
```

**Parameters:**

- `input`: A tensor of integer or boolean dtype.
- `other`: The second tensor (must be broadcastable with input).
- `out` (Optional): A tensor for storing the output result.

**Return value:**

The `.bitwise_or()` function returns a new tensor containing the result of applying the bitwise OR operation to each pair of elements in the input tensors.

## Example

The following example illustrates the usage of the `.bitwise_or()` function in PyTorch:

```py
import torch

# Integer tensor example
tensor1 = torch.tensor([5, 3], dtype=torch.int32)  # Binary: 0101, 0011
tensor2 = torch.tensor([3, 7], dtype=torch.int32)  # Binary: 0011, 0111
result_int = torch.bitwise_or(tensor1, tensor2)

print(result_int)  # Output: tensor([7, 7], dtype=torch.int32)

# Boolean tensor example
tensor_bool1 = torch.tensor([True, False])
tensor_bool2 = torch.tensor([False, False])
result_bool = torch.bitwise_or(tensor_bool1, tensor_bool2)

print(result_bool)  # Output: tensor([True, False])
```

The above code produces the following output:

```shell
tensor([7, 7], dtype=torch.int32)
tensor([ True, False])
```

In this example,
5 | 3 (binary 0101 | 0011) results in 0111 (decimal 7).
3 | 7 (binary 0011 | 0111) results in 0111 (decimal 7).
True | False evaluates to True.
False | False evaluates to False.

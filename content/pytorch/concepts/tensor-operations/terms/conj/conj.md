---
Title: '.conj()'
Description: 'Computes the complex conjugate of each element in a given tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Python'
  - 'Machine Learning'
  - 'Functions'
  - 'Values'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/computer-science'
---

In PyTorch, the **`.conj()`** function is used to compute the complex conjugate of each element in a given tensor, returning a new tensor with the computed conjugate values.

## Syntax

```pseudo
torch.conj(tensor)
```

- `tensor`: The input tensor for which the complex conjugate will be computed.

## Example

The following example illustrates the usage of `.conj()`:

```py
import torch

complex_tensor = torch.tensor([1 + 2j, 3 - 4j, 5 + 0j])
print("Original Complex Tensor:")
print(complex_tensor)

# Applying .conj() on a complex tensor
complex_conj = torch.conj(complex_tensor)
print(f"\nReturn type of .conj() - {type(complex_conj)}")
print("\nComplex Conjugate:")
print(complex_conj)
```

The above program gives the following output:

```shell
Original Complex Tensor:
tensor([1.+2.j, 3.-4.j, 5.+0.j])

Return type of .conj() - <class 'torch.Tensor'>

Complex Conjugate:
tensor([1.-2.j, 3.+4.j, 5.-0.j])
```

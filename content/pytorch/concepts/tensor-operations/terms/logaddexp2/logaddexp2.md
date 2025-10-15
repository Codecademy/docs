---
Title: '.logaddexp2()'
Description: 'Computes the logarithm of the sum of exponentials of two tensors in base 2.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-pytorch'
  - 'intro-to-py-torch-and-neural-networks'
---

In PyTorch, the **`.logaddexp2()`** function computes the element-wise $$log_2(2^x + 2^y)$$ of the given [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) inputs.

## Syntax

```pseudo
torch.logaddexp2(input,other,*,out=None)
```

**Parameters:**

- `input`: The first input tensor
- `other`: The second input tensor
- `out`: The output tensor to store the result. Default is `None`.

**Return value:**

The `torch.logaddexp2()` method returns a tensor containing the element-wise logarithm (base 2) of the sum of exponentials of the corresponding elements in the input tensors.

## Example

In this example, `torch.logaddexp2()` is used to combine two tensors into a single tensor by computing their log-sum in base 2:

```py
import torch

# Example tensors
x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([0.5, 2.5, 1.5])

# Compute logaddexp2
result = torch.logaddexp2(x, y)
print(result)
```

This code will produce the following output:

```shell
tensor([1.7716, 3.2716, 3.4368])
```

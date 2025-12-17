---
Title: '.logaddexp()'
Description: 'Computes the element-wise logarithm of the sum of exponentials of two input tensors.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Elements'
  - 'Methods'
  - 'PyTorch'
  - 'Tensors'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.logaddexp()`** function in PyTorch computes the element-wise logarithm of the sum of exponentials of two input [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors). If the tensors are `x` and `y`, the mathematical formula will be:

$$\log(\exp(x) + \exp(y))$$

This operation is particularly useful for combining log-space values (such as log-probabilities) in a numerically stable way.

## Syntax

```pseudo
torch.logaddexp(input, other, *, out=None) → Tensor
```

**Parameters:**

- `input` (Tensor): The first input tensor.
- `other` (Tensor): The second input tensor, broadcastable to the shape of `input`.
- `out` (Tensor, optional): A tensor to store the output; must have the same shape as the broadcasted result if provided.

**Return value:**

Returns a new tensor of the same shape as the broadcasted `input` and `other`, where each element is:

$$\log\left(\exp(\text{input}[i]) + \exp(\text{other}[i])\right)$$

## Example 1: Combining Log-Probabilities

In this example, two tensors representing log-probabilities are combined using `.logaddexp()`:

```py
import torch

x = torch.tensor([ -0.5,  -1.2,  -3.0 ])
y = torch.tensor([ -0.2,  -0.8,  -4.5 ])

result = torch.logaddexp(x, y)
print(result)
```

The output of this code is:

```shell
tensor([ 0.3544, -0.2870, -2.7986])
```

## Example 2: Broadcasting Two Tensors of Different Shapes

In this example, a tensor and a scalar are combined with broadcasting using `.logaddexp()`:

```py
import torch

x = torch.tensor([[ 1.0, 2.0 ,3.0],
                  [ 4.0, 5.0 ,6.0]])
y = torch.tensor( 2.0 )

result = torch.logaddexp(x, y)
print(result)
```

The output of this code is:

```shell
tensor([[2.3133, 2.6931, 3.3133],
        [4.1269, 5.0486, 6.0181]])
```

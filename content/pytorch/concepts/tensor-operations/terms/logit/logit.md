---
Title: '.logit()'
Description: 'Returns the logit of each element in the input tensor.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Elements'
  - 'Methods'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`torch.logit()`** function computes the logit (log-odds) of each element in the input [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors). The logit function is the inverse of the logistic sigmoid function, defined as:

$$\text{logit}(x) = \log\left(\frac{x}{1 - x}\right)$$

This operation is widely used in statistics and machine learning, particularly in logistic regression and neural network transformations. This function is an alias for `torch.special.logit()`.

## Syntax

```pseudo
torch.logit(input, eps=None, *, out=None)
```

**Parameters:**

- `input` (Tensor): The input tensor, where each element should be in the range `(0, 1)` when `eps` is not provided.
- `eps` (float, optional): A small value added for numerical stability. Values less than `eps` are clamped to `eps`, and values greater than `1 - eps` are clamped to `1 - eps`.
- `out` (Tensor, optional): The output tensor to store the result.

**Return value:**

Returns a tensor containing the logit transformation of the input values.

## Example 1

In this example, probabilities are converted into logits and then passed through a sigmoid function to verify the inverse relationship:

```py
import torch

probs = torch.tensor([0.2, 0.5, 0.8])
logits = torch.logit(probs)
recovered = torch.sigmoid(logits)

print("probs:", probs)
print("logits:", logits)
print("sigmoid(logits):", recovered)
```

Expected output (values may vary slightly due to precision):

```shell
probs: tensor([0.2000, 0.5000, 0.8000])
logits: tensor([-1.3863,  0.0000,  1.3863])
sigmoid(logits): tensor([0.2000, 0.5000, 0.8000])
```

## Example 2

In this example, the `eps` parameter is used to prevent infinities when the input contains 0 or 1:

```py
import torch

x = torch.tensor([0.0, 1.0])

# Without eps: produces -inf and +inf
print(torch.logit(x, eps=None))

# With eps: clamps input to [eps, 1 - eps] before applying logit
print(torch.logit(x, eps=1e-6))
```

The output of this code is:

```shell
tensor([-inf, inf])
tensor([-13.8155,  13.8023])
```

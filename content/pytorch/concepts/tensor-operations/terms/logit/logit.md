# Logit

## Introduction
The logit is the inverse of the sigmoid (logistic) function. For a probability p in the open interval (0, 1), the logit is defined as logit(p) = log(p / (1 - p)). In PyTorch the logit operation converts probability-like values to the real line, which is useful for models or computations that work in log-odds space.

Inputs equal to 0 or 1 produce infinite values; to avoid this, PyTorch's logit supports an optional eps argument to clamp inputs away from 0 and 1.

torch.sigmoid(torch.logit(p)) returns approximately p (subject to numerical precision).

### Use case
The logit function is useful in binary classification tasks and logistic regression, where outputs in probability space need to be mapped to log-odds for linear modeling or loss computation.

## Syntax
Python (PyTorch):

```python
torch.logit(input, eps=None, *, out=None) -> Tensor
```

- input (Tensor): Input tensor containing probability values (expected in (0, 1)).
- eps (float, optional): If not None, input values are clamped into [eps, 1 - eps] before computing the logit. 
- out (Tensor, optional): Output tensor.

Returns a tensor of the same shape containing the log-odds: log(p / (1 - p)). 

## Example

```python
import torch

probs = torch.tensor([0.2, 0.5, 0.8])
logits = torch.logit(probs)
recovered = torch.sigmoid(logits)

print("probs:", probs)
print("logits:", logits)
print("sigmoid(logits):", recovered)
```

Expected output (values may be printed with different formatting):

```
probs: tensor([0.2000, 0.5000, 0.8000])
logits: tensor([-1.3863,  0.0000,  1.3863])
sigmoid(logits): tensor([0.2000, 0.5000, 0.8000])
```

Example showing eps to avoid infinities:

```python
x = torch.tensor([0.0, 1.0])
# Without eps: yields -inf and +inf
print(torch.logit(x, eps=None))
# With eps: clamps to [eps, 1-eps] first
print(torch.logit(x, eps=1e-6))
```
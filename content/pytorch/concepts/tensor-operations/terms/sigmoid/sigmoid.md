---
Title: '.sigmoid()'
Description: 'The sigmoid function is an S-shaped curve typically used in binary classification problems'
Subjects:
  - 'AI'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Classification'
  - 'Logistic Regression'
  - 'Machine Learning'
  - 'Math'
  - 'Models'
  - 'Neural Networks'
  - 'Python'
  - 'PyTorch'
CatalogContent:
  - 'py-torch-for-classification'
  - 'intro-to-py-torch-and-neural-networks'
---

A **`.sigmoid()`** function is an S-shaped curve which maps any real-valued input to a bounded output, typically between 0 and 1. Sigmoid functions are regularly used as activation functions in non-linear classification problems, for example in neural networks, where the probability of a binary outcome is required.

Although there are a range of sigmoid functions, in the field of AI the sigmoid function is usually synonymous with the logistic function, which is bound between 0 and 1.

The formula for the sigmoid function is given by:
$$σ(x) = 1 / (1 + e^(-x))$$

## Examples

The following example plots the sigmoid function:

```py
import matplotlib.pyplot as plt
import torch

x = torch.linspace(-10, 10, steps=400)
y = torch.sigmoid(x)

plt.plot(x.numpy(), y.numpy()
plt.title("Sigmoid function")
plt.xlabel("x")
plt.ylabel("σ(x)")
plt.show()
```

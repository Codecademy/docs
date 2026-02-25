---
Title: '.sigmoid()'
<<<<<<< HEAD
Description: 'The sigmoid function is an S-shaped curve typically used in binary classification problems'
=======
Description: 'Applies the sigmoid activation to each element of a tensor, mapping values to a range between 0 and 1'
>>>>>>> c428da50f (Address maintainer feedback)
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

<<<<<<< HEAD
A **`.sigmoid()`** function is an S-shaped curve which maps any real-valued input to a bounded output, typically between 0 and 1. Sigmoid functions are regularly used as activation functions in non-linear classification problems, for example in neural networks, where the probability of a binary outcome is required.
=======
The .sigmoid() function applies the sigmoid (logistic) function to each element of a tensor, producing an S-shaped curve that maps any real-valued input to a value between 0 and 1.
>>>>>>> c428da50f (Address maintainer feedback)

In machine learning, sigmoid is commonly used as an activation function in binary classification tasks, where outputs represent probabilities."

The formula for the sigmoid function is given by:
$$σ(x) = 1 / (1 + e^(-x))$$

## Example

The following example plots the sigmoid function:

```py
import matplotlib.pyplot as plt
import torch

x = torch.linspace(-10, 10, steps=400)
y = torch.sigmoid(x)

plt.plot(x.numpy(), y.numpy())
plt.title("Sigmoid function")
plt.xlabel("x")
plt.ylabel("σ(x)")
plt.show()
```

This example applies the sigmoid function to a tensor:

```py
import torch

x = torch.tensor([-1.8, -1.5, 0.0, 2.0, 4.0])
y = torch.sigmoid(x)

print(y)
```
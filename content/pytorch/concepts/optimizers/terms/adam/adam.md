---
Title: 'Adam'
Description: 'Adam (Adaptive Moment Estimation) is an optimization algorithm designed to train neural networks efficiently by combining elements of AdaGrad and RMSProp.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'PyTorch'
  - 'Optimizers'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

**Adam (Adaptive Moment Estimation)** is a popular optimization algorithm used to train [neural networks](https://www.codecademy.com/resources/docs/ai/neural-networks) in PyTorch. It incorporates the benefits of **AdaGrad** and [RMSProp](https://www.codecademy.com/resources/docs/pytorch/optimizers/rmsprop) algorithms, making it effective for handling sparse gradients and optimizing non-stationary objectives. Adam uses adaptive learning rates for each parameter and incorporates momentum to accelerate convergence.

## Syntax

In PyTorch, the `torch.optim.Adam` class is used to implement the Adam optimizer:

```pseudo
torch.optim.Adam(params, lr=0.001, betas=(0.9, 0.999), eps=1e-8, weight_decay=0, amsgrad=False, ...)
```

- `params`: The iterable of parameters to optimize (typically `model.parameters()`).
- `lr` (Optional): The learning rate (default is `0.001`).
- `betas` (Optional): The coefficients used for computing running averages of gradient and squared gradient (default is `(0.9, 0.999)`).
- `eps` (Optional): The value added to the denominator to prevent division by zero (default is `1e-8`).
- `weight_decay` (Optional): The L2 regularization factor (default is `0`).
- `amsgrad` (Optional): If `True`, uses the AMSGrad variant of the Adam optimizer (default is `False`).

> **Note:** The ellipsis (`...`) indicates that there can be additional optional parameters beyond those listed here, depending on specific use cases.

## Example

The following example demonstrates the usage of the Adam optimizer to train a neural network in PyTorch:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Define the model
model = nn.Sequential(
  nn.Linear(1, 1) # Single linear layer
)

# Define the loss function (MSELoss) and Adam optimizer
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Sample training loop
for epoch in range(50):
  # Sample input and target
  x = torch.randn(5, 1) # 5 samples, 1 feature each
  y = 2*x + 1 # Linear relationship

  # Forward pass
  output = model(x)
  loss = criterion(output, y)

  # Backward pass and optimization
  optimizer.zero_grad()
  loss.backward()
  optimizer.step()

  # Print loss every 10 epochs
  if epoch % 10 == 0:
    print(f'Epoch [{epoch}/100], Loss: {loss.item():.4f}')
```

A sample output from the training loop might look like this (actual values may vary due to randomness):

```shell
Epoch [0/100], Loss: 0.4287
Epoch [10/100], Loss: 9.2974
Epoch [20/100], Loss: 3.8182
Epoch [30/100], Loss: 1.9353
Epoch [40/100], Loss: 14.0286
```

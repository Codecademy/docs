---
Title: 'RMSProp'
Description: 'RMSProp is an optimization algorithm designed to adapt learning rates for each parameter during training.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
  - 'Deep Learning'
Tags:
  - 'PyTorch'
  - 'Optimizers'
  - 'RMSProp'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/machine-learning'
---

**RMSProp** is an adaptive learning rate optimization algorithm that maintains moving averages of the squared gradients to normalize parameter updates. This approach helps stabilize and accelerate training, especially in scenarios with noisy gradients or non-stationary objectives.

## Syntax

```pseudo
torch.optim.RMSprop(
  params,
  lr=0.01,
  alpha=0.99,
  eps=1e-08,
  weight_decay=0,
  momentum=0,
  centered=False
)
```

- `params`: An iterable of parameters to optimize (such as `model.parameters()`).
- `lr`: The learning rate (default is `0.01`).
- `alpha`: Smoothing constant used in the moving average (default is `0.99`).
- `eps`: Term appended to the denominator to improve numerical stability (default is `1e-08`).
- `weight_decay`: L2 penalty (default is `0`).
- `momentum`: Momentum factor (default is `0`).
- `centered`: Computes the gradient variance centered by the gradient mean if set to `True` (default is `False`).

## Example

The following code snippet demonstrates how RMSProp can be utilized to train a simple neural network with PyTorch:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Sample model: a simple feed-forward network
model = nn.Sequential(
  nn.Linear(10, 5),
  nn.ReLU(),
  nn.Linear(5, 1)
)

# Loss function
criterion = nn.MSELoss()

# Optimizer: RMSProp
optimizer = optim.RMSprop(model.parameters(), lr=0.01, alpha=0.99, momentum=0.9)

# Dummy input and target
x = torch.randn(2, 10)   # batch size = 2, input features = 10
target = torch.randn(2, 1)

# Forward pass
output = model(x)
loss = criterion(output, target)

# Backward pass and parameter update
loss.backward()
optimizer.step()

print(f"Loss after one update: {loss.item():.4f}")
```

The above code prints the following output:

```shell
Loss after one update: 0.6504
```

Here is the step-by-step process used in the above example:

1. **Model Definition**: Creates a simple feed-forward network with `Linear` layers and a `ReLU` activation.
2. **Criterion**: Uses **`nn.MSELoss`** to compute the mean squared error between predictions and targets.
3. **Optimizer Configuration**: Sets up RMSProp with a specified learning rate, alpha, and momentum.
4. **Forward Pass**: Feeds input data into the model to obtain output predictions.
5. **Compute Loss**: Calculates how close predictions are to the target.
6. **Backward Pass**: Computes gradients using **`loss.backward()`**.
7. **Parameter Update**: Adjusts model parameters using **`optimizer.step()`**.

Running this script prints a loss value indicating the training progress on a single batch. Multiple batches and epochs are typically used in practice.

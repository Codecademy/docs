---
Title: 'Stochastic Gradient Descent'
Description: 'Stochastic Gradient Descent (SGD) is an optimization procedure commonly used to train neural networks in PyTorch.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'PyTorch'
  - 'Optimizers'
  - 'Stochastic Gradient Descent'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

**Stochastic Gradient Descent (SGD)** is one of the most fundamental optimization algorithms for training neural networks. In PyTorch, **`torch.optim.SGD`** provides a straightforward way to implement SGD with optional parameters like `momentum`, `weight_decay`, and `nesterov`.

SGD updates model parameters iteratively by calculating the loss function's gradient for each parameter and then adjusting those parameters in the opposite direction of the gradient.

## Syntax

```pseudo
torch.optim.SGD(
  params,
  lr=0.01,
  momentum=0,
  weight_decay=0,
  dampening=0,
  nesterov=False
)
```

- `params`: Iterable of parameters to optimize (typically `model.parameters()`).
- `lr`: The learning rate (required).
- `momentum`: Value for momentum (default is `0`, meaning no momentum).
- `weight_decay`: L2 penalty (default is `0`).
- `dampening`: Dampening for momentum (default is `0`).
- `nesterov`: Enables Nesterov momentum if set to `True` (default is `False`).

## Example

Below is a simple example using **`torch.optim.SGD`** to optimize a small neural network:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Sample model: a single-layer neural network
model = nn.Sequential(
  nn.Linear(10, 5),
  nn.ReLU(),
  nn.Linear(5, 1)
)

# Loss function
criterion = nn.MSELoss()

# Optimizer: Stochastic Gradient Descent
optimizer = optim.SGD(model.parameters(), lr=0.01, momentum=0.9)

# Dummy input and target
x = torch.randn(2, 10)   # batch size = 2, input features = 10
target = torch.randn(2, 1)

# Forward pass
output = model(x)
loss = criterion(output, target)

# Backward pass and update
loss.backward()
optimizer.step()

print(f"Loss after one update: {loss.item():.4f}")
```

The above code prints the following output:

```shell
Loss after one update: 0.2851
```

Here is the step-by-step process used in the above example:

1. **Define the Model**: A simple feed-forward network is created with two `Linear` layers and a `ReLU` activation.
2. **Set Up Criterion**: `MSELoss` is used in this example, but any suitable loss function can be substituted.
3. **Initialize Optimizer**: The optimizer is configured with `model.parameters()`, a learning rate of `0.01`, and a momentum of `0.9`.
4. **Forward Pass**: Compute the model’s output given the input tensor.
5. **Compute Loss**: Compare the model’s predictions with the target using **MSE**.
6. **Backward Pass**: Calculate gradients through a call to `loss.backward()`.
7. **Optimize**: Update parameters based on the gradients via `optimizer.step()`.

Running the script prints a loss value indicating how well the network performs on this single batch. In practice, multiple batches and epochs are typically used for training.

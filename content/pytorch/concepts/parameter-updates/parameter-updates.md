---
Title: 'Parameter Updates'
Description: 'Parameter updates adjust model weights using an optimizer, which updates parameters based on gradients computed via backpropagation.'
Subjects:
  - 'Computer Science'
  - 'Deep Learning'
  - 'Machine Learning'
Tags:
  - 'Functions'
  - 'Optimizers'
  - 'PyTorch'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/machine-learning'
---

In PyTorch, **parameter updates** refer to adjusting the model’s weights during training to minimize the loss. This is done using an optimizer, which updates the parameters based on the gradients computed through [backpropagation](https://www.codecademy.com/resources/docs/ai/neural-networks/backpropagation).

Backpropagation is a process where the model computes the gradient of the loss function with respect to each parameter by applying the chain rule of calculus. The optimizer then updates the parameters in the direction that reduces the loss, typically using optimization algorithms like [Stochastic Gradient Descent (SGD)](https://www.codecademy.com/resources/docs/pytorch/optimizers/sgd), [Adam](https://www.codecademy.com/resources/docs/ai/neural-networks/adam-optimization), or [RMSprop](https://www.codecademy.com/resources/docs/ai/neural-networks/rmsprop). The optimizer's learning rate controls the size of the updates, influencing how quickly the model converges to a minimum.

## Steps to update Parameters in PyTorch

Parameter updates typically involve the following steps:

- **Forward Pass**: Compute the model's predictions.
- **Loss Calculation**: Measure how far the predictions are from the actual values.
- **Backward Pass (Gradient Calculation)**: Compute gradients using `loss.backward()`.
- **Parameter Update**: Adjust weights using an optimizer like `SGD` or `Adam`.
- **Zero Gradients**: Clear accumulated gradients before the next iteration using `optimizer.zero_grad()`.

## Example

This code defines a simple neural network in PyTorch, computes the loss, performs backpropagation, updates the parameters using `SGD`, and prints the updated model weights:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple model
class SimpleModel(nn.Module):
    def __init__(self):
        super(SimpleModel, self).__init__()
        self.linear = nn.Linear(1, 1)  # Single linear layer

    def forward(self, x):
        return self.linear(x)

# Initialize the model, loss function, and optimizer
model = SimpleModel()
criterion = nn.MSELoss()  # Mean Squared Error Loss
optimizer = optim.SGD(model.parameters(), lr=0.01)  # Stochastic Gradient Descent

# Sample Data
x_train = torch.tensor([[1.0], [2.0], [3.0]], requires_grad=True)
y_train = torch.tensor([[2.0], [4.0], [6.0]])

# Forward Pass
y_pred = model(x_train)
loss = criterion(y_pred, y_train)

# Backward Pass and Parameter Update
loss.backward()  # Compute gradients
optimizer.step()  # Update model parameters
optimizer.zero_grad()  # Clear gradients

# Print updated parameters
for param in model.parameters():
    print("Updated Parameter:", param.data)
```

This code produces the following output:

```shell
Updated Parameter: tensor([[-0.4505]])
Updated Parameter: tensor([-0.3290])
```

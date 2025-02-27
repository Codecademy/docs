---
Title: 'Vanishing Gradient Problem'
Description: 'When gradients become very small during backpropagation, slowing or halting the training process.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Machine Learning'
  - 'Deep Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **Vanishing gradient problem** occurs when gradients shrink as they move backward through a deep neural network. This causes slow or stalled training because updates to early layers become extremely small. It often appears in neural networks that use certain activation functions, such as sigmoid or hyperbolic tangent, or when the network has many layers.

## How does it occur?

- **Deep Architectures**: Deeper networks have more layers that can multiply small gradient values.
- **Sigmoid or Tanh Activations**: These functions squash input values into a narrow range, which can reduce gradient magnitude.
- **Poor Weight Initialization**: Wrong initial weight scales can cause gradients to vanish.

## How to Fix It

- **Use ReLU or Related Activations**: ReLU functions help avoid squashing the gradient in early layers.
- **Proper Initialization**: Techniques like Xavier or He initialization maintain stable gradients.
- **Batch Normalization**: Normalizing layer inputs can stabilize gradient flow.
- **Skip Connections**: Shortcut paths reduce the effective depth of the network.

## Example: Demonstrating and Addressing the Vanishing Gradient Problem

The following PyTorch example shows a simple deep network with sigmoid activation. The gradients in the earliest layers may become too small, slowing training. Switching to ReLU in the final code snippet provides a potential fix:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Deep feedforward network with Sigmoid
class DeepSigmoidNet(nn.Module):
  def __init__(self):
    super().__init__()
    self.layers = nn.Sequential(
      nn.Linear(100, 128),
      nn.Sigmoid(),
      nn.Linear(128, 128),
      nn.Sigmoid(),
      nn.Linear(128, 128),
      nn.Sigmoid(),
      nn.Linear(128, 10)
    )

  def forward(self, x):
    return self.layers(x)

# Create random data
x = torch.randn(32, 100)  # batch of 32
y = torch.randint(0, 10, (32,))  # target classes

model = DeepSigmoidNet()
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(model.parameters(), lr=0.01)

# Forward pass
outputs = model(x)
loss = criterion(outputs, y)

# Backward pass
loss.backward()

# Check the gradient norm of the first layer
grad_norm = model.layers[0].weight.grad.norm().item()
print(f"Gradient norm (Sigmoid net, first layer): {grad_norm:.6f}")

# Potential fix: Using ReLU
class DeepReLUNet(nn.Module):
  def __init__(self):
    super().__init__()
    self.layers = nn.Sequential(
      nn.Linear(100, 128),
      nn.ReLU(),
      nn.Linear(128, 128),
      nn.ReLU(),
      nn.Linear(128, 128),
      nn.ReLU(),
      nn.Linear(128, 10)
    )

  def forward(self, x):
    return self.layers(x)

model_relu = DeepReLUNet()
optimizer = optim.SGD(model_relu.parameters(), lr=0.01)

outputs_relu = model_relu(x)
loss_relu = criterion(outputs_relu, y)

loss_relu.backward()
grad_norm_relu = model_relu.layers[0].weight.grad.norm().item()
print(f"Gradient norm (ReLU net, first layer): {grad_norm_relu:.6f}")
```

The above code returns the following output:

```shell
Gradient norm (Sigmoid net, first layer): 0.004324
Gradient norm (ReLU net, first layer): 0.118170
```

1. **DeepSigmoidNet**: A fully connected network with multiple layers of sigmoid activation. The gradient often shrinks as it propagates back through each layer.
2. **Gradient Norm**: The code checks the gradient norm of the first layer. A very small value suggests that those parameters receive negligible updates.
3. **DeepReLUNet**: Switching to ReLU reduces the vanishing effect, which can be seen in the larger gradient norm for the first layer.

Using suitable activations, initialization, or techniques like batch normalization and skip connections makes the vanishing gradient problem less severe, making training faster and more reliable.

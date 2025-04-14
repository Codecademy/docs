---
Title: 'Saving Model States'
Description: 'Saving model states in PyTorch enables users to store and reload model parameters, ensuring training continuity, easy sharing, and smooth deployment.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deployment'
  - 'Model Export'
  - 'PyTorch'
  - 'TorchScript'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/data-science'
---

**Saving model states** in PyTorch allows users to store and reload model parameters, ensuring continuity in training, easy model sharing, and smooth deployment. This capability helps in maintaining progress during long training sessions, enables collaboration by allowing models to be shared, and simplifies deployment by ensuring models can be easily reloaded in production environments. Additionally, saving model states aids in experimentation, where different model versions can be compared and analyzed.

## Syntax

PyTorch uses `.state_dict()` to save and `.load_state_dict()` to load model parameters efficiently.

### Saving a Model State

```pseudo
import torch

torch.save(model.state_dict(), "model.pth")
```

### Loading a Model State

```pseudo
import torch

model.load_state_dict(torch.load("model.pth"))
model.eval()  # Set to evaluation mode if needed
```

## Example

Here is an example demonstrating how to save and load a model in PyTorch:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 1)

  def forward(self, x):
    x = torch.relu(self.fc1(x))
    x = self.fc2(x)
    return x

# Initialize model
model = SimpleNN()
optimizer = optim.SGD(model.parameters(), lr=0.01)

# Dummy training step
for param in model.parameters():
  param.data -= 0.01 * param.grad if param.grad is not None else 0

# Save model state
torch.save(model.state_dict(), "model.pth")

# Load model state into a new instance
new_model = SimpleNN()
new_model.load_state_dict(torch.load("model.pth"))
new_model.eval()
```

---
Title: 'PyTorch nn'
Description: 'Build and train neural network models with a range of layers, activations, loss functions and optimisation algorithms.'
Subjects:
  - 'Machine Learning'
  - 'Computer Science'
  - 'AI'
Tags:
  - 'AI'
  - 'Neural Networks'
CatalogContent:
  - 'paths/data-science'
---

## Introduction

The `**torch.nn**` module in PyTorch provides the foundation for building and training neural network models. It includes a wide range of pre-built layers, activation functions, loss functions, and other components necessary for creating complex deep-learning models. The `torch.nn` module is highly flexible and customizable, allowing developers to design and implement neural network architectures tailored to specific tasks.

## Syntax

The primary way to define a neural network model in PyTorch is as follows:

```pseudo
import torch.nn as nn

# Define a neural network model
class NeuralNetwork(nn.Module):
    def __init__(self):
        super(NeuralNetwork, self).__init__()
        # Define layers, activations, and other components here
        # For example: self.layer1 = nn.Linear(in_features, out_features)

    def forward(self, x):
        # Implement the forward pass of the model
        # For example: x = self.layer1(x)
        return x  # Replace 'x' with the final output after applying all layers

    # Define other methods if necessary
```

- `NetworkNeural`: A custom neural network class that subclasses the `nn.Module`.

## Example

The following example demonstrates how to define a simple neural network model using the `nn.Module` with two fully connected layers, apply a ReLU activation function to the first layer's output, and create an instance of the model:

```python
import torch
import torch.nn as nn

class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 1)

  def forward(self, x):
    x = torch.relu(self.fc1(x))
    x = self.fc2(x)
    return x

# Create a model instance
model = SimpleNN()
```

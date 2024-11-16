---
Title: 'Layers'
Description: 'Layers are modules that perform operations on input data to build neural networks.'
Subjects:
  - 'AI'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Models'
  - 'Neural Networks'
CatalogContent:
  - 'learn-intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
  - 'paths/machine-learning'
---

**Layers** are modules that perform operations on input data to build neural networks.

## Syntax

By using PyTorch's `.Sequential()` method to build a neural network, we can specify layers and activation functions in sequence from input to output as shown below:

```pseudo
import torch
import torch.nn as nn

# Define the model for the neural network
model = nn.Sequential(
    # Define layers and activation functions here
    nn.Linear(in_features, out_features),
    nn.ReLU(),
    nn.Linear(in_features, out_features)
)
```

## Example

Below is an example of a basic multi-layer neural network defined using PyTorch's `nn.Sequential()` method, where the data is processed through a specified sequence of layers and activation functions:

```py
import torch
import torch.nn as nn

model = nn.Sequential(
    # First layer: Linear transformation from 56 input features to 128 output features
    nn.Linear(56, 128),  # This layer learns to transform input data
    nn.ReLU(),           # Activation function to introduce non-linearity

    # Second layer: Linear transformation from 128 input features to 26 output features
    nn.Linear(128, 26),  # This layer continues to transform the data
    nn.ReLU(),           # Another activation function for non-linearity

    # Third layer: Linear transformation from 26 input features to 1 output feature
    nn.Linear(26, 1)     # Final output layer that produces the model's prediction
)
```

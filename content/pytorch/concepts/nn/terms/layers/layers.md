---
Title: 'Layers'
Description: 'Layers and their role in PyTorch neural networks.' 
Subjects:
  - 'AI'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Neural Networks'
  - 'AI'
  - 'Deep Learning'
  - 'Models'
CatalogContent:
  - 'learn-intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
  - 'paths/machine-learning'
---

Layers are modules that perform operations on input data to build neural networks.

## Syntax

By using PyTorch's sequential() method to build a neural network, we can specify **layers** and activation functions in sequence from input to output as show below:

```pseudo
import torch
import torch.nn as nn

# Define the model for the neural network
model = nn.Sequential(
    # Define layers and activation functions here
    nn.Linear(in_features, out_features)
    nn.ReLU()
    nn.Linear(in_features, out_features)
)
```

## Example

Below is an example of a basic Multi-**Layer** sequential neural network where data flows down through the specified sequence of layers and activation functions:

```py
import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(56,128),
    nn.ReLU(),
    nn.Linear(128,26),
    nn.ReLU(),
    nn.Linear(26,1)
)
```

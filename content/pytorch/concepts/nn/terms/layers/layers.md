---
Title: 'layers'
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
  - 'paths/machine-learning'
---

**Layers** are higher-level constructs built from **Tensors**, used to define the architecture of neural networks in PyTorch. Neural networks are created by stacking layers in specific patterns to transform input data into outputs, such as image classifications or predictions. PyTorch offers various layers, including **Linear**, **Convolutional**, **Recurrent**, **Pooling**, and **Transformer layers**, each optimized for tasks like image recognition or natural language processing. By stacking multiple layers, neural networks can learn complex patterns, making them effective for a variety of AI applications.

## Syntax

By using PyTorch's sequential() method to build a neural network, we can specify **layers** and activation functions in sequence from input to output as show below:

```pseudo
import torch
import torch.nn as nn

# Define the model for the neural network
# Example: model = sequential()
   # Define layers and activation functions here
   # Example: nn.linear(in_features, out_features)
```
## Example

Below is an example of a basic Multi-**Layer** sequential neural network where data flows down through the specified sequence of layers and activation functions:

```py
import torch
import torch.nn as nn

model = sequential(
    nn.Linear(56,128),
    nn.ReLU(),
    nn.Linear(128,26),
    nn.ReLU(),
    nn.Linear(26,1)
)
```

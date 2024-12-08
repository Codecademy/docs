---
Title: 'Loss Functions'
Description: 'Represents critical functions used to optimize neural network predictions in PyTorch'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'PyTorch'
  - 'Deep Learning'
  - 'Data Structures'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
  - 'paths/machine-learning'
---

**Loss Functions**, also known as cost functions, represent essential components that quantify the error or difference between a [neural network's](https://www.codecademy.com/resources/docs/pytorch/nn) predictions and the target values in PyTorch. They compute a scalar loss value, which optimization algorithms use to adjust the model's weights during training, improving its performance over time.

PyTorch's `nn` (neural network) module provides a variety of built-in loss functions designed for different tasks, such as regression and classification.

## Syntax

The general syntax for using a loss function in PyTorch is:

```pseudo
import torch.nn as nn

# Define the loss function.
criterion = nn.LossFunctionName(*args, **kwargs)

# Compute the loss.
loss = criterion(predicted_outputs, target_values)
```

- Replace `LossFunctionName` with a specific function like `MSELoss` for regression or `CrossEntropyLoss` for classification.
- Ensure that the shapes and types of `predicted_outputs` and `target_values` meet the loss function's requirements. For instance:
  - For `nn.CrossEntropyLoss`, `predicted_outputs` should contain raw scores (logits), and `target_values` should hold class indices.
  - For `nn.BCEWithLogitsLoss`, the function expects raw scores, applying the Sigmoid function internally.
- Most loss functions include a `reduction` parameter (`mean`, `sum`, or `none`) that specifies how to aggregate the loss.

These elements allow optimization algorithms to compute a scalar loss value, adjust model weights, and improve performance over iterations.

## Example 1

Mean Squared Error Loss (`nn.MSELoss`) for Regression:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Hyperparameters
input_size = 10
output_size = 1
learning_rate = 0.01
batch_size = 32

# Sample data
inputs = torch.randn(batch_size, input_size)
targets = torch.randn(batch_size, output_size)

# Define a simple linear regression model
model = nn.Linear(input_size, output_size)

# Define the loss function
criterion = nn.MSELoss()

# Define the optimizer
optimizer = optim.SGD(model.parameters(), lr=learning_rate)

# Forward pass
outputs = model(inputs)

# Compute Loss
loss = criterion(outputs, targets)
print('Initial Loss:', loss.item())

# Backward pass and optimization
optimizer.zero_grad()
loss.backward()
optimizer.step()

# Forward pass after optimization
outputs = model(inputs)
loss = criterion(outputs, targets)
print('Loss after one optimization step:', loss.item())
```

The output for this example will be as follows:

```shell
Initial Loss: 1.0875437259674072
Loss after one optimiation step: 1.0775121450424194
```

## Example 2

Cross Entropy Loss (`nn.CrossEntropyLoss`) for Classification:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Hyperparameters
input_size = 784  # e.g., 28x28 images flattened
hidden_size = 128
num_classes = 10
learning_rate = 0.001
batch_size = 64

# Sample data
inputs = torch.randn(batch_size, input_size)
targets = torch.randint(0, num_classes, (batch_size,))  # Class labels

# Define a simple neural network
model = nn.Sequential(
    nn.Linear(input_size, hidden_size),
    nn.ReLU(),
    nn.Linear(hidden_size, num_classes)
)

# Define the loss function
criterion = nn.CrossEntropyLoss()

# Define the optimizer
optimizer = optim.Adam(model.parameters(), lr=learning_rate)

# Forward pass
outputs = model(inputs)

# Compute loss
loss = criterion(outputs, targets)
print('Initial Loss:', loss.item())

# Backward pass and optimization
optimizer.zero_grad()
loss.backward()
optimizer.step()

# Forward pass after optimization
outputs = model(inputs)
loss = criterion(outputs, targets)
print('Loss after one optimization step:', loss.item())
```

The output for this example will be as follows:

```shell
Initial Loss: 2.3014121055603027
Loss after one optimization step: 2.294567823410034
```

## Example 3

Binary Cross Entropy Loss (`nn.BCEWithLogitsLoss`) for Binary Classification:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Hyperparameters
input_size = 20
hidden_size = 16
learning_rate = 0.005
batch_size = 16

# Sample data
inputs = torch.randn(batch_size, input_size)
targets = torch.randint(0, 2, (batch_size, 1)).float()  # Binary targets (0 or 1)

# Define a simple neural network
model = nn.Sequential(
    nn.Linear(input_size, hidden_size),
    nn.ReLU(),
    nn.Linear(hidden_size, 1)
)

# Define the loss function
criterion = nn.BCEWithLogitsLoss()

# Define the optimizer
optimizer = optim.SGD(model.parameters(), lr=learning_rate)

# Forward pass
outputs = model(inputs)

# Compute loss
loss = criterion(outputs, targets)
print('Initial Loss:', loss.item())

# Backward pass and optimization
optimizer.zero_grad()
loss.backward()
optimizer.step()

# Forward pass after optimization
outputs = model(inputs)
loss = criterion(outputs, targets)
print('Loss after one optimization step:', loss.item())
```

The output for this example will be as follows:

```shell
Initial Loss: 0.6937122344970703
Loss after one optimization step: 0.6932134628295898
```

> **Note**: When running these examples, the exact numerical values of the losses will vary each time due to random initialization of model weights and input data. The important aspect is observing the trend of the loss decreasing after the optimization step, indicating that the model is learning.

---
Title: 'Loss Functions'
Description: 'Represents a multi-dimensional array used for data storage and computation in PyTorch.'
Subjects:
  - 'Machine Learning'
  - 'Python'
Tags:
  - 'PyTorch'
  - 'Tensors'
  - 'Deep Learning'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

**`Loss Functions`**, also known as `cost functions`, are critical in [neural network](https://github.com/Codecademy/docs/blob/main/content/pytorch/concepts/nn/nn.md) training. They quanitfy how well the model's predictions align with the target values. By computing a scalar loss value, they enable optimization algorithms to adjust the model's weights to improve performance.

[PyTorch's](https://github.com/Codecademy/docs/blob/main/content/pytorch/pytorch.md) `nn` (neural network) module offers various built-in loss functions suitable for different tasks, such as regression and classification.

## Syntax

The general syntax for using a loss function in PyTorch is:

```pseudo
import torch.nn as nn

# Define the loss function.
criterion = nn.LossFunctionName(*args, **kwargs)

# Compute the loss.
loss = criterion(predicted_outputs, target_values)
```

- `LossFunctionName` = Replace with the specific loss function (e.g. `MSELoss` which is used for regression, `CrossEntropyLoss` which is used for classification).
- `predicted_outputs` = The predicted outputs from your model.
- `target_values` = The real data values.

## Example 1

Mean Squared Error Loss (`nn.MSELoss`) for Regression:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Hyperparameters.
input_size = 10
output_size = 1
learning_rate = 0.01
batch_size = 32

# Sample data.
inputs = torch.randn(batch_size, input_size)
targets = torch.randn(batch_size, output_size)

# Define a simple linear regression model.
model = nn.Linear(input_size, output_size)

# Define the loss function.
criterion = nn.MSELoss()

# Define the optimizer.
optimizer = optim.SGD(model.parameters(), lr=learning_rate)

# Forward pass.
outputs = model(inputs)

# Compute Loss.
loss = criterion(outputs, targets)
print('Initial Loss:', loss.item())

# Backward pass and optimization.
optimizer.zero_grad()
loss.backward()
optimizer.step()

# Forward pass after optimization.
outputs = model(inputs)
loss = criterion(outputs, targets)
print('Loss after one optimization step:', loss.item())
```

Sample output for this example:

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

Sample output for this example:

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

Sample output for the example:

```shell
Initial Loss: 0.6937122344970703
Loss after one optimization step: 0.6932134628295898
```

> **Note**: When running these examples, the exact numerical values of the losses will vary each time due to random initialization of model weights and input data. The important aspect is observing the trend of the loss decreasing after the optimization step, indicating that the model is learning.

## Common Loss Functions in `torch.nn`

Some commonly used loss functions provided by PyTorch:

- `nn.MSELoss`: Mean Squared Error Loss. Suitable for regression tasks.
- `nn.CrossEntropyLoss`: Combines `nn.LogSoftmax` and `nn.NLLLoss`. Used for multi-class classification.
- `nn.NLLLoss`: Negative Log Likelihood Loss. Often used with `nn.LogSoftmax`.
- `nn.BCELoss`: Binary Cross Entropy Loss. Used for binary classification tasks.
- `nn.BCEWithLogitsLoss`: Combines a **Sigmoid** layer and the BCELoss. More numerically stable.
- `nn.L1Loss`: Mean Absolute Error Loss.
- `nn.SmoothL1Loss`: A combination of `nn.L1Loss` and `nn.MSELoss`. Less sensitive to outliers.
- `nn.HingeEmbeddingLoss`: Used for measuring similarity between samples.

_Sigmoid function_ is a mathematical function that has an "S" shaped curve (sigmoidal shape). It is widely used in machine learning, particularly in logistic regression and neural networks, as an activation function to introduce non-linearity into the model and to map any real-valued number into a value between 0 and 1.

## Notes

- Input Requirements: Ensure that the shapes and data types of `predicted_outputs` and `target_values` match the expectations of the loss function.
  - For `nn.CrossEntropyLoss`, `predicted_outputs` should contain raw scores (logits), and `target_values` should contain class indices (not one-hot encoded).
  - For `nn.BCEWithLogitsLoss`, `predicted_values` should be raw scores; the loss function applies the Sigmoid function internally.
- Reduction Parameter: Most loss functions have a `reduction` parameter (`mean`, `sum`, or `none`) that specifies how the loss should be aggregated.
- Class Imbalance: For datasets with class imbalance, consider using the `weight` parameter in the loss function to assign different weights to classes.

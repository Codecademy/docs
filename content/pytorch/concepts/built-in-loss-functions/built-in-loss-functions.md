---
Title: 'Built-in loss functions'
Description: 'Built-in loss functions in PyTorch are predefined functions that compute the difference between predicted outputs and true labels, guiding model optimization during training.'
Subjects:
  - 'AI'
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Neural Networks'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

In PyTorch, [loss functions](https://www.codecademy.com/resources/docs/pytorch/nn/loss-functions) are critical in the training process of deep learning models. They measure how well the model's predictions match the ground truth. PyTorch provides several built-in loss functions, which can be easily integrated into your models to compute the error and optimize the parameters accordingly.

## Types of built-in loss functions

PyTorch provides various loss functions, each serving a different purpose depending on the task (e.g., regression, classification) at hand.

### 1. Mean Squared Error Loss (`MSELoss`)

For regression problems, Mean Squared Error (MSE) is one of the most commonly used loss functions. It calculates the square of the difference between predicted and actual values, averaging the result over all samples.

The syntax is as follows:

```pseudo
torch.nn.MSELoss(reduction='mean')
```

- `reduction (str, default='mean')`: Specifies the reduction method to apply to the output:
  - `'mean'`: The sum of the squared differences will be divided by the number of elements in the output.
  - `'sum'`: The sum of the squared differences will be computed.
  - `'none'`: No reduction will be applied, returning the loss for each element in the batch.

Here's an example of how to use MSELoss:

```py
import torch
import torch.nn as nn

loss_fn = nn.MSELoss()
predictions = torch.tensor([2.0, 3.0, 4.0])
targets = torch.tensor([2.5, 3.5, 4.5])
loss = loss_fn(predictions, targets)
print(loss)
```

The output will be:

```shell
tensor(0.2500)
```

### 2. Cross-Entropy Loss (`CrossEntropyLoss`)

For classification tasks, `CrossEntropyLoss` measures the performance of a classification model. It compares the predicted class probabilities with the actual class labels. PyTorch combines `log_softmax` and `nll_loss` in this function for numerical stability.

The syntax is as follows:

```pseudo
torch.nn.CrossEntropyLoss(weight=None, ignore_index=-100, reduction='mean')
```

- `weight` (Tensor, optional): A manual rescaling weight given to each class. It has to be a tensor of size `C` where `C` is the number of classes. Default is `None`, meaning no rescaling.
- `ignore_index` (int, optional): Specifies a target value that is ignored and does not contribute to the loss calculation.
- `reduction` (str, default='mean'): Specifies the reduction method to apply:
  - `'mean'`: The mean loss across the batch.
  - `'sum'`: The sum of the loss across the batch.
  - `'none'`: No reduction, returns the loss for each element.

Here's an example that shows how to use `CrossEntropyLoss`:

```py
import torch
import torch.nn as nn

loss_fn = nn.CrossEntropyLoss()
logits = torch.tensor([[1.0, 2.0, 3.0], [1.0, 2.0, 3.0]])
labels = torch.tensor([2, 0])
loss = loss_fn(logits, labels)
print(loss)
```

The output will be:

```shell
tensor(1.4076)
```

### 3. Binary Cross-Entropy Loss (`BCEWithLogitsLoss`)

The `BCEWithLogitsLoss` loss function is commonly used for binary classification tasks. It calculates the cross-entropy between the target labels and predictions. This loss function is suitable for tasks where there are two possible classes, typically 0 and 1.

The syntax is as follows:

```pseudo
torch.nn.BCEWithLogitsLoss(weight=None, reduction='mean')
```

- `weight` (Tensor, optional): A manual rescaling weight given to each class. Default is `None`.
- `reduction` (str, default='mean'): Specifies the `reduction` method to apply:
  - `'mean'`: The mean loss across the batch.
  - `'sum'`: The sum of the loss across the batch.
  - `'none'`: No reduction, returns the loss for each element.

Here's an example that shows how to use `BCEWithLogitsLoss`:

```py
import torch
import torch.nn as nn

# Example of BCEWithLogitsLoss
loss_fn = nn.BCEWithLogitsLoss()
logits = torch.tensor([0.5, -1.5, 2.0])
labels = torch.tensor([1.0, 0.0, 1.0])
loss = loss_fn(logits, labels)
print(loss)
```

The output will be:

```shell
tensor(0.2675)
```

### 4. Huber Loss (`SmoothL1Loss`)

The **Huber Loss function** is less sensitive to outliers than `MSELoss`. It combines the properties of MSE and Mean Absolute Error (MAE) and is less prone to large gradient changes than MSE.

The syntax is as follows:

```pseudo
torch.nn.SmoothL1Loss(reduction='mean')
```

- `reduction` (str, default='mean'): Specifies the `reduction` method to apply:
  - `'mean'`: The mean loss across the batch.
  - `'sum'`: The sum of the loss across the batch.
  - `'none'`: No reduction, returns the loss for each element.

Here's an example that shows how to use `SmoothL1Loss`:

```py
import torch
import torch.nn as nn

# Example of SmoothL1Loss
loss_fn = nn.SmoothL1Loss()
predictions = torch.tensor([2.0, 3.0, 4.0])
targets = torch.tensor([2.5, 3.5, 4.5])
loss = loss_fn(predictions, targets)
print(loss)
```

The output will be:

```shell
tensor(0.1250)
```

### 5. Cosine Similarity Loss (`CosineEmbeddingLoss`)

**Cosine similarity** measures the cosine of the angle between two vectors. This loss function is useful in tasks like measuring the similarity between two vectors, such as in information retrieval or recommendation systems.

The syntax is as follows:

```pseudo
torch.nn.CosineEmbeddingLoss(margin=0.0, reduction='mean')
```

- `margin` (float, default=0.0): The margin by which the cosine similarity should be greater than or less than. If `target` is 1, the cosine similarity should be greater than `1 - margin`; if `target` is -1, the cosine similarity should be less than `-1 + margin`.
- `reduction` (str, default='mean'): Specifies the reduction method to apply:
  - `'mean'`: The mean loss across the batch.
  - `'sum'`: The sum of the loss across the batch.
  - `'none'`: No reduction, returns the loss for each element.

Here's an example that shows how to use `CosineEmbeddingLoss`:

```py
import torch
import torch.nn as nn

loss_fn = nn.CosineEmbeddingLoss()
input1 = torch.tensor([[1.0, 0.0]])
input2 = torch.tensor([[0.0, 1.0]])
target = torch.tensor([1])  # Expecting inputs to be similar
loss = loss_fn(input1, input2, target)
print(loss)
```

The output will be:

```shell
tensor(1.)
```

### 6. Kullback-Leibler Divergence (`KLDivLoss`)

**KL Divergence** measures how one probability distribution diverges from a second, expected probability distribution. It is widely used in tasks such as variational autoencoders (VAEs) and generative models.

The syntax is as follows:

```pseudo
torch.nn.KLDivLoss(reduction='mean')
```

- `reduction` (str, default='mean'): Specifies the `reduction` method to apply:
  - `'mean'`: The mean loss across the batch.
  - `'sum'`: The sum of the loss across the batch.
  - `'none'`: No reduction, returns the loss for each element.

Here's an example that shows how to use `KLDivLoss`:

```py
import torch
import torch.nn as nn

# Define KLDivLoss with batchmean reduction
loss_fn = nn.KLDivLoss(reduction='batchmean')

# Define input logits (must be log probabilities)
input_probs = torch.tensor([[0.4, 0.6], [0.3, 0.7]], dtype=torch.float32)
input_log_probs = input_probs.log()  # Convert probabilities to log probabilities

# Define target distribution (must be a valid probability distribution)
target_probs = torch.tensor([[0.5, 0.5], [0.4, 0.6]], dtype=torch.float32)

# Compute loss
loss = loss_fn(input_log_probs, target_probs)

print(loss)  # Expected output: A small positive tensor value indicating divergence
```

The output will be:

```shell
tensor(0.0215)
```

## Choosing the Right Loss Function

When selecting a loss function for a model, it is essential to consider the task at hand.

Here’s a quick guide to choosing the right loss function for a model:

- **Regression**: Use `MSELoss` or `SmoothL1Loss`.
- **Binary Classification**: Use `BCEWithLogitsLoss`.
- **Multi-class Classification**: Use `CrossEntropyLoss`.
- **Measuring Similarity**: Use `CosineEmbeddingLoss`.
- **Divergence in Probability Distributions**: Use `KLDivLoss`.

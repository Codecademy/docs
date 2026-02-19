---
Title: '.softmax()'
Description: 'Applies the Softmax function to an n-dimensional input Tensor, rescaling elements so they lie in the range [0, 1] and sum to 1.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Neural Networks'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

The **`.softmax()`** function applies the Softmax mathematical transformation to an input tensor. It is a critical operation in deep learning, particularly for multi-class classification tasks. Softmax converts a vector of raw scores (often called logits) into a probability distribution where each value represents the likelihood of a specific class.

The Softmax function for an element $x_i$ in a vector $x$ is defined as:

$$\text{Softmax}(x_{i}) = \frac{\exp(x_i)}{\sum_{j} \exp(x_j)}$$

By exponentiating the inputs, the function ensures all outputs are non-negative. Dividing by the sum of these exponentials ensures that the resulting values sum to exactly 1.

## Syntax

```pseudo
torch.softmax(input, dim, dtype=None)
```

**Parameters:**

- `input`: The input tensor containing the raw scores (logits).
- `dim`: A dimension along which Softmax will be computed. Every slice along the dim will sum to `1`.
- `dtype` (Optional): The desired data type of the returned tensor.

**Return value:**

Returns a tensor of the same shape as `input`, with values scaled between 0 and 1.

## Example 1: Basic Softmax on a 1D Tensor

This example shows how to convert a simple 1D tensor of logits into probabilities:

```py
import torch

# A 1D tensor of raw scores
logits = torch.tensor([1.0, 2.0, 3.0])

# Apply softmax along the only dimension (0)
probabilities = torch.softmax(logits, dim=0)
print("Logits:", logits)
print("Probabilities:", probabilities)
print("Sum of probabilities:", probabilities.sum().item())
```

Here is the output:

```shell
Logits: tensor([1., 2., 3.])
Probabilities: tensor([0.0900, 0.2447, 0.6652])
Sum of probabilities: 1.0
```

The function converts raw logits into probabilities where the highest input value (3.0) yields the highest probability (~0.66), and the sum of all probabilities equals `1.0`.

## Example 2: Softmax on a 2D Tensor

For batched inputs where rows represent samples and columns represent classes, Softmax is typically applied along the class dimension:

```py
import torch

# A 2D tensor (2 samples, 3 classes)
logits = torch.tensor([
    [2.0, 1.0, 0.1],
    [1.0, 3.0, 0.2]
])

# Apply softmax along the class dimension (dim=1)
probs = torch.softmax(logits, dim=1)

print("Probabilities:\n", probs)
print("\nSum of each row:", probs.sum(dim=1))
```

Here is the output:

```shell
Probabilities:
 tensor([[0.6590, 0.2424, 0.0986],
        [0.1131, 0.8360, 0.0508]])

Sum of each row: tensor([1.0000, 1.0000])
```

By specifying `dim=1`, the operation is applied independently to each row (sample), ensuring that the class probabilities for each individual sample sum to `1.0`.

---
Title: '.addcdiv()'
Description: 'Performs element-wise division of tensors followed by scalar multiplication and addition to another tensor.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Neural Networks'
  - 'Optimization'
  - 'PyTorch'
  - 'Tensor'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

The **`.addcdiv()`** function performs element-wise division of [tensors](https://www.codecademy.com/resources/docs/pytorch/tensors) followed by scalar multiplication and addition to another tensor. It returns a new tensor with the formula: `input + value * (tensor1 / tensor2)`. This operation is commonly used in optimization algorithms, particularly in the implementation of adaptive learning rate methods like [Adam](https://www.codecademy.com/resources/docs/ai/neural-networks/adam-optimization), [RMSprop](https://www.codecademy.com/resources/docs/ai/neural-networks/rmsprop), and [Adagrad](https://www.codecademy.com/resources/docs/ai/neural-networks/adagrad).

In [deep learning](https://www.codecademy.com/resources/blog/what-is-deep-learning/) frameworks, efficient tensor operations are crucial for performance. The `.addcdiv()` function provides a convenient way to perform multiple arithmetic operations in a single call, which can help reduce computational overhead and improve code readability in complex neural network implementations.

## Syntax

```pseudo
torch.addcdiv(input, tensor1, tensor2, *, value=1, out=None)
```

**Parameters:**

- `input`: The base tensor to which the scaled division result is added.
- `tensor1`: The numerator tensor in the division operation.
- `tensor2`: The denominator tensor in the division operation.
- `value` (Optional): A scalar multiplier for the division result (default: `1`).
- `out` (Optional): The output tensor to store the result.

**Return value:**

Returns a new tensor with the result of the operation unless `out` is specified.

## Example 1: Basic Usage of `.addcdiv()` with tensors

Let's start with a basic example to understand how `.addcdiv()` works with PyTorch tensors:

```py
import torch

# Create input tensors
input_tensor = torch.tensor([1.0, 2.0, 3.0, 4.0])
tensor1 = torch.tensor([2.0, 4.0, 6.0, 8.0])
tensor2 = torch.tensor([1.0, 2.0, 2.0, 4.0])

# Apply addcdiv with default value=1
result = torch.addcdiv(input_tensor, tensor1, tensor2)

# Print results
print("Input tensor:", input_tensor)
print("Tensor1 (numerator):", tensor1)
print("Tensor2 (denominator):", tensor2)
print("Result:", result)
```

This example results in the following output:

```shell
Input tensor: tensor([1., 2., 3., 4.])
Tensor1 (numerator): tensor([2., 4., 6., 8.])
Tensor2 (denominator): tensor([1., 2., 2., 4.])
Result: tensor([3., 4., 6., 6.])
```

The `.addcdiv()` operation computes `input + tensor1/tensor2`. For each element, it divides the corresponding values in `tensor1` by `tensor2`, then adds this result to the `input_tensor`.

## Example 2: Optimizing Neural Networks with `.addcdiv()`

The `.addcdiv()` function is particularly useful in optimization algorithms for [neural networks](https://www.codecademy.com/resources/docs/ai/neural-networks). Here's an example of implementing a simplified version of the RMSprop optimizer, which uses this operation:

```py
import torch
import torch.nn as nn

# Create a simple neural network
model = nn.Sequential(
  nn.Linear(10, 5),
  nn.ReLU(),
  nn.Linear(5, 2)
)

# Initialize parameters
learning_rate = 0.01
decay_rate = 0.99
epsilon = 1e-8
gradient_squared = [torch.zeros_like(param) for param in model.parameters()]

# Sample input for demonstration
x = torch.randn(1, 10)
target = torch.tensor([1])

# Forward pass
output = model(x)
loss_fn = nn.CrossEntropyLoss()
loss = loss_fn(output, target)

# Backward pass
loss.backward()

# RMSprop update using addcdiv
for i, param in enumerate(model.parameters()):
  if param.grad is not None:
    # Update accumulated squared gradient
    gradient_squared[i] = decay_rate * gradient_squared[i] + (1 - decay_rate) * param.grad.pow(2)

    # Update parameters using addcdiv
    # formula: param = param - learning_rate * grad / sqrt(gradient_squared + epsilon)
    param.data = torch.addcdiv(param.data, param.grad, gradient_squared[i].sqrt() + epsilon, value=-learning_rate)

print("Parameters updated using addcdiv in RMSprop optimizer")
```

This example shows how `.addcdiv()` can be used to implement the RMSprop optimization algorithm, which divides the gradient by the square root of a running average of squared gradients to adapt the learning rate for each parameter.

## Example 3: Custom Normalization with `.addcdiv()`

`.addcdiv()` can also be used for custom [normalization](https://www.codecademy.com/article/normalization) techniques. Here's an example of implementing a form of layer normalization using this operation:

```py
import torch

# Create a batch of feature vectors (batch_size=3, feature_dim=4)
features = torch.tensor([
  [2.0, 4.0, 1.0, 3.0],
  [6.0, 2.0, 5.0, 1.0],
  [3.0, 5.0, 2.0, 4.0]
])

# Calculate mean and standard deviation along the feature dimension
mean = features.mean(dim=1, keepdim=True)  # Shape: (3, 1)
std = features.std(dim=1, keepdim=True) + 1e-5  # Shape: (3, 1)

# Create a scale and shift parameter (like in BatchNorm/LayerNorm)
scale = torch.tensor([1.0, 0.5, 2.0, 1.5]).unsqueeze(0)  # Shape: (1, 4)
shift = torch.tensor([0.0, 0.0, 0.0, 0.0]).unsqueeze(0)  # Shape: (1, 4)

# Normalize using addcdiv
# Formula: normalized = shift + scale * (features - mean) / std
normalized = torch.addcdiv(shift, features - mean, std, value=1.0) * scale  # Apply scaling separately

print("Original features:")
print(features)
print("\nNormalized features:")
print(normalized)
```

This example results in the following output:

```shell
Original features:
tensor([[2., 4., 1., 3.],
        [6., 2., 5., 1.],
        [3., 5., 2., 4.]])

Normalized features:
tensor([[-0.3873,  0.5809, -2.3238,  0.5809],
        [ 1.0502, -0.3151,  1.2602, -1.5753],
        [-0.3873,  0.5809, -2.3238,  0.5809]])
```

This example demonstrates how `.addcdiv()` can be used to implement custom normalization techniques, making the code more concise and efficient compared to separate tensor operations.

To learn more about how to create, train, and test neural networks, check out this [Intro to PyTorch and Neural Networks](https://www.codecademy.com/enrolled/courses/intro-to-py-torch-and-neural-networks) course on Codecademy.

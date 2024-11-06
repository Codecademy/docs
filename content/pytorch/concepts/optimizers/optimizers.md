---
Title: 'Optimizers'
Description: 'Help adjust the model parameters during training to minimize the error between the predicted output and the actual output.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Deep Learning'
  - 'Libraries'
  - 'Python'
  - 'TensorFlow'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/data-science'
---

In PyTorch, **optimizers** help adjust the model parameters during training to minimize the error between the predicted output and the actual output. They use the gradients calculated through backpropagation to update the model in a direction that reduces this error, improving the model's performance over time.

## Syntax

```pseudo
torch.optim.optimizer_type(model_parameters, learning_rate)
```

- `optimizer_type`: The type of optimizer that will be used.
- `model_parameter`: The parameter of the model that will adjust during training.
- `learning_rate`: The parameter that controls how the optimizer adjusts the model weight.

## Example

The following example demonstrates the usage of optimizers in PyTorch:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Input and target data (simple linear relationship y = 2x)
x = torch.tensor([[1.0], [2.0], [3.0], [4.0]])
y = torch.tensor([[2.0], [4.0], [6.0], [8.0]])

# Simple model: 1 linear layer
model = nn.Linear(1, 1)

# Adam Optimizer and Mean Squared Error (MSE) Loss
optimizer = optim.Adam(model.parameters(), lr=0.01)
criterion = nn.MSELoss()

# Training loop
for epoch in range(50):
  predictions = model(x)
  loss = criterion(predictions, y)
  optimizer.zero_grad()
  loss.backward()
  optimizer.step()

  if (epoch+1) % 10 == 0:  # Print loss every 10 epochs
    print(f'Epoch {epoch+1}, Loss: {loss.item():.4f}')

# Test the model by making a prediction for x = 5
with torch.no_grad():
  test_input = torch.tensor([[5.0]])
  test_output = model(test_input)
  print(f'The predicted value for input 5: {test_output.item():.4f}')
```

> **Note:** Optimizers also support specifying per-parameter options like learning rate allowing.

The output of the above code is:

```shell
Epoch 10, Loss: 9.0166
Epoch 20, Loss: 7.0211
Epoch 30, Loss: 5.3501
Epoch 40, Loss: 3.9961
Epoch 50, Loss: 2.9324
The predicted value for input 5: 6.4472
```

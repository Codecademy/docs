---
Title: 'Learning Rate Scheduling'
Description: 'Learning rate scheduling is a technique to adjust the learning rate during training to improve convergence and model performance.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Machine Learning'
  - 'Neural Networks'
  - 'Functions'
CatalogContent:
  - 'paths/data-science'
  - 'paths/machine-learning'
---

**Learning Rate Scheduling** is a method to adjust the learning rate during the training process of a [neural network](https://www.codecademy.com/resources/docs/ai/neural-networks). The learning rate defines the step size used by optimization algorithms, such as [Stochastic Gradient Descent (SGD)](https://www.codecademy.com/resources/docs/ai/neural-networks/stochastic-gradient-descent), to minimize the loss function. By modifying the learning rate throughout training, a schedule can help models converge faster and achieve better accuracy.

## Key Points

- **Higher learning rate initially**: Helps the model explore parameter values quickly during early training.
- **Gradual reduction**: Allows fine-tuning with smaller steps as the model approaches optimal parameters.
- **Types of schedules**:
  - **Step-based schedules**: Reduce the learning rate at fixed intervals (e.g., every 10 epochs). This approach is simple and works well for many cases.
  - **Exponential schedules**: Reduce the learning rate by a fixed factor (e.g., multiplying it by 0.9) after every epoch or step. This ensures a smooth, gradual decay over time.
  - **Adaptive schedules**: Automatically adjust the learning rate based on the model’s performance (e.g., reducing the learning rate when the validation loss stops improving). These are more dynamic and can adapt to the needs of the model during training.

## Syntax

Here’s a general syntax for implementing a learning rate schedule in PyTorch:

```pseudo
torch.optim.lr_scheduler.<SchedulerClass>(
  optimizer,
  step_size=<int>,
  gamma=<float>,
  <other_parameters>
)
```

- `optimizer`: The optimizer whose learning rate will be updated.
- `step_size`: Interval (in epochs) at which the learning rate will be reduced. An epoch refers to one complete pass through the entire training dataset by the model. During each epoch, the model processes all training examples and updates its weights accordingly.
- `gamma`: Multiplicative factor by which the learning rate is reduced.
- **<other_parameters>**: Additional parameters specific to the chosen scheduler.

## Example

The following example demonstrates the use of a **StepLR Learning Rate Scheduler** in PyTorch to reduce the learning rate by a factor of _0.9_ every _10_ epochs:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc = nn.Linear(10, 1)

  def forward(self, x):
    return self.fc(x)

# Initialize the model, loss function, and optimizer
model = SimpleNN()
criterion = nn.MSELoss()
optimizer = optim.SGD(model.parameters(), lr=0.1)

# Define the learning rate scheduler
scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=10, gamma=0.9)

# Training loop
for epoch in range(30):  # Train for 30 epochs
  # Simulate training step
  inputs = torch.randn(5, 10)
  targets = torch.randn(5, 1)
  optimizer.zero_grad()
  outputs = model(inputs)
  loss = criterion(outputs, targets)
  loss.backward()
  optimizer.step()

  # Update the learning rate
  scheduler.step()

  # Print learning rate
  print(f"Epoch {epoch + 1}: Learning Rate = {scheduler.get_last_lr()[0]:.5f}")
```

The code above produces the output as below:

```shell
Epoch 1: Learning Rate = 0.10000
Epoch 2: Learning Rate = 0.10000
Epoch 3: Learning Rate = 0.10000
Epoch 4: Learning Rate = 0.10000
Epoch 5: Learning Rate = 0.10000
Epoch 6: Learning Rate = 0.10000
Epoch 7: Learning Rate = 0.10000
Epoch 8: Learning Rate = 0.10000
Epoch 9: Learning Rate = 0.10000
Epoch 10: Learning Rate = 0.09000
Epoch 11: Learning Rate = 0.09000
Epoch 12: Learning Rate = 0.09000
Epoch 13: Learning Rate = 0.09000
Epoch 14: Learning Rate = 0.09000
Epoch 15: Learning Rate = 0.09000
Epoch 16: Learning Rate = 0.09000
Epoch 17: Learning Rate = 0.09000
Epoch 18: Learning Rate = 0.09000
Epoch 19: Learning Rate = 0.09000
Epoch 20: Learning Rate = 0.08100
Epoch 21: Learning Rate = 0.08100
Epoch 22: Learning Rate = 0.08100
Epoch 23: Learning Rate = 0.08100
Epoch 24: Learning Rate = 0.08100
Epoch 25: Learning Rate = 0.08100
Epoch 26: Learning Rate = 0.08100
Epoch 27: Learning Rate = 0.08100
Epoch 28: Learning Rate = 0.08100
Epoch 29: Learning Rate = 0.08100
Epoch 30: Learning Rate = 0.07290
```

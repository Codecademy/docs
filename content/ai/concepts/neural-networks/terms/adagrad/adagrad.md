---
Title: 'Adagrad'
Description: 'Implements an adaptive learning rate optimization algorithm for training neural networks.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Algorithms'
  - 'Neural Networks'
  - 'Optimization'
  - 'PyTorch'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/machine-learning'
---

**Adagrad** is an adaptive learning rate optimization [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) used for training [deep learning](https://www.codecademy.com/resources/blog/what-is-deep-learning/) models. It automatically adapts the learning rate for each parameter based on the historical gradient information, allowing for more efficient training especially with infrequent data. Adagrad modifies the general learning rate for each parameter according to the accumulated squared gradients, giving larger updates to infrequent parameters and smaller updates to frequent ones.

Adagrad is particularly effective when dealing with infrequent data, such as in [natural language processing](https://www.codecademy.com/resources/blog/what-is-nlp/) and recommendation systems. By automatically adjusting learning rates for each parameter, it eliminates the need for manual tuning of the learning rate hyperparameter, which can be a time-consuming process in model optimization.

## Working of Adagrad with Detailed Steps

Adagrad works by maintaining a sum of squared gradients for each parameter and using this information to adapt the learning rate. Here's how it works:

1\. **Initialization**: The model parameters are initialized, and a small value (ε) is defined to prevent division by zero.

2\. **Gradient Computation**: For each parameter at time step t, compute the gradient of the loss function with respect to that parameter.

3\. **Accumulate Squared Gradients**: Keep track of the sum of squared gradients for each parameter over time.

$$G_t = G_{t-1} + g_t^2$$

Where $$\ G_t \$$ is the accumulated squared gradient and $$\ g_t \$$ is the current gradient.

4\. **Update Parameters**: Adjust each parameter using its own adaptive learning rate.

$$\theta_{t+1} = \theta_t - \left( \frac{\eta}{\sqrt{G_t + \epsilon}} \right) g_t$$

Where:

- $$\ \theta_t \$$ is the parameter at time `t`
- `η` is the initial learning rate
- $$\ G_t \$$ is the sum of squared gradients up to time `t`
- `ε` is a small constant to prevent division by zero
- $$\ g_t \$$ is the gradient at time `t`

This approach causes parameters with frequently occurring features to receive smaller updates, while parameters with infrequent features receive larger updates.

## Comparison with Adam and RMSprop

Adagrad adapts learning rates but suffers from diminishing rates, Adam balances first and second moment estimates for stability, and RMSprop prevents diminishing rates by using a moving average of squared gradients. To explore more about each, refer to their respective entries:

- [Adam optimization](https://www.codecademy.com/resources/docs/ai/neural-networks/adam-optimization)
- [RMSprop](https://www.codecademy.com/resources/docs/ai/neural-networks/rmsprop)

## Advantages and Limitations of Adagrad

### Advantages

1. **Adaptive Learning Rates**: Automatically adjusts the learning rate for each parameter based on historical gradients.
2. **Efficient for Sparse Data**: Performs well on sparse datasets by giving larger updates to infrequent parameters.
3. **No Manual Tuning**: Reduces the need for manual tuning of learning rates for different parameters.
4. **Feature-Specific Learning**: Allows different learning rates for different features based on their importance and frequency.

### Limitations

1. **Diminishing Learning Rates**: The accumulated squared gradients in the denominator continue to grow during training, causing the learning rate to become infinitesimally small and eventually stopping the learning process.
2. **Memory Requirements**: Requires storing an additional variable (accumulated gradient) for each parameter, which can be memory-intensive for very large models.
3. **Initial Learning Rate Sensitivity**: Performance can still be sensitive to the choice of initial learning rate.
4. **No Momentum**: Lacks a momentum term, which can sometimes lead to slower convergence in certain problems.

## Syntax

In PyTorch, Adagrad can be implemented using the following syntax:

```pseudo
torch.optim.Adagrad(params, lr=0.01, lr_decay=0, weight_decay=0, initial_accumulator_value=0, eps=1e-10)
```

**Parameters:**

- `params`: Iterable of parameters to optimize or dicts defining parameter groups
- `lr`: Learning rate (default=`0.01`)
- `lr_decay`: Learning rate decay (default=`0`)
- `weight_decay`: Weight decay (L2 penalty) (default=`0`)
- `initial_accumulator_value`: Initial value for the sum of squared gradients (default=`0`)
- `eps`: Term added to the denominator to improve numerical stability (default=`1e-10`)

**Return value:**

It returns an optimizer instance that can be used to update model parameters.

## Example 1: Basic Adagrad Implementation with Linear Regression

This example demonstrates how to use Adagrad optimizer for a simple linear regression problem:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Create synthetic data
x = torch.linspace(-10, 10, 100).view(-1, 1)
y = 2 * x + 3 + 0.1 * torch.randn(x.size())  # y = 2x + 3 + noise

# Define a simple linear model
class LinearRegression(nn.Module):
  def __init__(self):
    super(LinearRegression, self).__init__()
    self.linear = nn.Linear(1, 1)

  def forward(self, x):
    return self.linear(x)

# Initialize model, loss function, and optimizer
model = LinearRegression()
criterion = nn.MSELoss()
optimizer = optim.Adagrad(model.parameters(), lr=0.1)

# Training loop
for epoch in range(100):
  # Forward pass
  y_pred = model(x)
  loss = criterion(y_pred, y)

  # Backward pass and optimization
  optimizer.zero_grad()
  loss.backward()
  optimizer.step()

  if (epoch+1) % 20 == 0:
    print(f'Epoch {epoch+1}, Loss: {loss.item():.4f}')

# Print model parameters
w, b = model.linear.weight.item(), model.linear.bias.item()
print(f'Model parameters: w = {w:.4f}, b = {b:.4f}')
print(f'Ground truth: w = 2, b = 3')
```

This example shows how Adagrad adjusts learning rates based on gradient history, helping converge to the optimal solution for a linear regression problem.

## Example 2: Training a Neural Network for Image Classification

This example demonstrates using Adagrad for training a [neural network](https://www.codecademy.com/resources/docs/ai/neural-networks) on the [MNIST dataset](https://www.kaggle.com/datasets/hojjatk/mnist-dataset):

```py
import torch
import torch.nn as nn
import torch.optim as optim
import torchvision
import torchvision.transforms as transforms

# Load MNIST dataset (code shortened for brevity)
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.1307,), (0.3081,))
])
train_dataset = torchvision.datasets.MNIST(root='./data', train=True, download=True, transform=transform)
train_loader = torch.utils.data.DataLoader(train_dataset, batch_size=64, shuffle=True)

# Define a simple neural network
class MNISTNet(nn.Module):
  def __init__(self):
    super(MNISTNet, self).__init__()
    self.flatten = nn.Flatten()
    self.fc1 = nn.Linear(28 * 28, 128)
    self.relu = nn.ReLU()
    self.fc2 = nn.Linear(128, 10)

  def forward(self, x):
    x = self.flatten(x)
    x = self.relu(self.fc1(x))
    x = self.fc2(x)
    return x

# Initialize model, loss function, and optimizer
model = MNISTNet()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adagrad(model.parameters(), lr=0.01)

# Training loop (abbreviated)
def train(epochs=3):
  for epoch in range(epochs):
    running_loss = 0.0
    for i, (inputs, labels) in enumerate(train_loader):
      optimizer.zero_grad()
      outputs = model(inputs)
      loss = criterion(outputs, labels)
      loss.backward()
      optimizer.step()

      running_loss += loss.item()

    print(f'Epoch {epoch+1}, Loss: {running_loss/len(train_loader):.4f}')

train()  # Train for 3 epochs
```

## Example 3: Natural Language Processing with Word Embeddings

This example demonstrates using Adagrad for training word embeddings in a simple text classification task:

```py
import torch
import torch.nn as nn
import torch.optim as optim

# Sample data (simplified)
texts = ["I love this movie", "Great film", "Terrible experience", "Waste of time"]
labels = [1, 1, 0, 0]  # 1 for positive, 0 for negative

# Create a simple vocabulary
word_to_idx = {}
for text in texts:
  for word in text.lower().split():
    if word not in word_to_idx:
      word_to_idx[word] = len(word_to_idx)

# Simple text classification model
class TextClassifier(nn.Module):
  def __init__(self, vocab_size, embedding_dim):
    super(TextClassifier, self).__init__()
    self.embedding = nn.Embedding(vocab_size, embedding_dim)
    self.fc = nn.Linear(embedding_dim, 1)

  def forward(self, x):
    embedded = self.embedding(x)
    # Take average of embeddings across sequence length
    embedded = torch.mean(embedded, dim=1)
    return self.fc(embedded).squeeze()

# Initialize model with Adagrad optimizer
vocab_size = len(word_to_idx)
model = TextClassifier(vocab_size, embedding_dim=50)
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adagrad(model.parameters(), lr=0.1)

# Training would continue here with proper batching and data loading
print(f"Model initialized with vocab size: {vocab_size}")
print(f"Optimizer: Adagrad with learning rate 0.1")
```

This example shows how Adagrad can be applied to NLP tasks where sparse features are common, as it provides larger updates for rare words and smaller updates for frequent ones.

Explore these optimization algorithms in Codecademy's [Data Scientist: Machine Learning](https://www.codecademy.com/career-journey/data-scientist-ml) career path, which covers machine learning fundamentals, model training, and advanced techniques.

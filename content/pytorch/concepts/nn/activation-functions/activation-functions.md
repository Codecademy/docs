---
Title: 'Activation Functions'
Description: 'Activation funcstions are mathematical functions that introduce non-linearity into the model, enabling neural networks to learn complex patterns from data.'
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

The **`nn Activation Functions`** in Pytorch are a set of pre-built activation functions that are essential for building neural networks. Activation functions are mathematical equations that determine the output of a neural network. The function is attached to each neuron in the network and determines whether it should be activated or not, based on whether each neuron's input is relevant for the model's prediction. Activation functions also help normalize the output of each neuron to a range between 1 and 0 or between -1 and 1.

Activation functions are used to introduce non-linearity to the neural network. Common activation functions include `ReLU`, `ReLU6`, `Leaky ReLU`, `Sigmoid`, `Tanh`, and `Softmax`. Activation functions are applied to the output of each neuron in the network.

## ReLU (Rectified Linear Unit)

ReLU is a popular activation function that returns the input if it is positive, and zero otherwise. It is defined as:

```pseudo
f(x) = max(0, x)
```

ReLU is widely used in deep learning models due to its simplicity and efficiency. It helps the model learn complex patterns in the data by introducing non-linearity.

```py
import torch.nn as nn

# Define a neural network model with ReLU activation function
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 1)
    self.relu = nn.ReLU()

  def forward(self, x):
    x = self.relu(self.fc1(x))
    x = self.fc2(x)
    return x

# Create a model instance
model = SimpleNN()
```

## ReLU6

ReLU6 is a variation of the ReLU activation function that returns the input if it is positive and less than 6, and zero otherwise. It is defined as:

```pseudo
f(x) = min(max(0, x), 6)
```

ReLU6 is useful when you want to limit the output of the activation function to a specific range, such as between 0 and 6.

```py
import torch.nn as nn

# Define a neural network model with ReLU6 activation function
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 1)
    self.relu6 = nn.ReLU6()

  def forward(self, x):
    x = self.relu6(self.fc1(x))
    x = self.fc2(x)
    return x

# Create a model instance
model = SimpleNN()
```

## Leaky ReLU

Leaky ReLU is a variation of the ReLU activation function that returns the input if it is positive, and a small fraction of the input otherwise. It is defined as:

```pseudo
f(x) = max(0.01x, x)
```

Leaky ReLU helps prevent the dying ReLU problem, where neurons can become inactive and stop learning. By allowing a small gradient for negative inputs, Leaky ReLU ensures that all neurons in the network continue to learn.

```py
import torch.nn as nn

# Define a neural network model with Leaky ReLU activation function
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 1)
    self.leaky_relu = nn.LeakyReLU()

  def forward(self, x):
    x = self.leaky_relu(self.fc1(x))
    x = self.fc2(x)
    return x

# Create a model instance
model = SimpleNN()
```

## Sigmoid

Sigmoid is another popular activation function that returns a value between 0 and 1. It is defined as:

```pseudo
f(x) = 1 / (1 + e^(-x))
```

Sigmoid is commonly used in binary classification problems where the output needs to be between 0 and 1. It is also used in the output layer of neural networks to predict probabilities.

```py
import torch.nn as nn

# Define a neural network model with Sigmoid activation function
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 1)
    self.sigmoid = nn.Sigmoid()
    
  def forward(self, x):
    x = self.sigmoid(self.fc1(x))
    x = self.fc2(x)
    return x

# Create a model instance
model = SimpleNN()
```

## Tanh

Tanh is another activation function that returns a value between -1 and 1. It is defined as:

```pseudo
f(x) = (e^x - e^(-x)) / (e^x + e^(-x))
```

Tanh is similar to the Sigmoid function but returns values between -1 and 1. It is commonly used in the hidden layers of neural networks to introduce non-linearity.

```py
import torch.nn as nn

# Define a neural network model with Tanh activation function
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 1)
    self.tanh = nn.Tanh()
    
  def forward(self, x):
    x = self.tanh(self.fc1(x))
    x = self.fc2(x)
    return x

# Create a model instance
model = SimpleNN()
```

## Softmax

Softmax is an activation function that returns a probability distribution over multiple classes. It is defined as:

```pseudo
f(x_i) = e^(x_i) / sum(e^(x_j)) for j = 1 to n
```

Softmax is commonly used in the output layer of neural networks for multi-class classification problems. It ensures that the output values sum to 1, making it easier to interpret the model's predictions as probabilities.

```py
import torch.nn as nn

# Define a neural network model with Softmax activation function
class SimpleNN(nn.Module):
  def __init__(self):
    super(SimpleNN, self).__init__()
    self.fc1 = nn.Linear(10, 5)
    self.fc2 = nn.Linear(5, 3)
    self.softmax = nn.Softmax(dim=1)
    
  def forward(self, x):
    x = self.fc1(x)
    x = self.fc2(x)
    x = self.softmax(x)
    return x

# Create a model instance
model = SimpleNN()
```

---
Title: 'RMSprop'
Description: 'RMSprop is an optimisation algorithm to adjust the learning rates dynamically for training neural networks.'
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
  - 'paths/machine-learning-ai-engineering-foundations'
  - 'intro-to-ai-strategy'
---

**RMSprop** is an abbreviation for the term, **Root Mean Square Propagation**, and is an algorithm that is designed to adjust the learning rates dynamically for training neural network models. It helps to improve the stability and speed of the training process by adapting the learning rate based on recent gradients, making it effective for training deep neural networks.

## How Does RMSprop Work?

RMSprop modifies the learning rate for each parameter individually by taking into account the magnitudes of the recent gradients to adjust the updates. Here is how it works:

- **Exponential Decay of Squared Gradients**: RMSprop keeps track of the moving average of the squared gradients of the loss function with an exponential decay factor. The average is then used to normalise the gradients, preventing them from being too large or too small.
- **Update Rule**: For each parameter $\theta_i$, RMSprop updates the exponentially decaying average of the squared gradients $E[g^2]_t$ and then uses it to adjust the parameter:
  $$E[g^2]_t = \rho E[g^2]_{t-1} + (1-\rho)g^2_t$$
  $$\theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{E[g^2]_t + \epsilon}}g_t$$
  where $g_t$ refers to the gradient at time $t$, $\rho$ refers to the decay rate (which is typically around 0.9), $\eta$ refers to the learning rate, and $\epsilon$ refers to a small constant (around $10^{-8}$) to prevent any division by zero errors.

## Example

The following example demonstrates how RMSprop can be used for stochastic gradient descent:

```py
import numpy as np

# Example neural network parameter
theta = np.array([0.2, 0.4, 0.6])
# Learning rate
eta = 0.01
# Decay rate
rho = 0.9
# Small constant to prevent zero division error
epsilon = 1e-8
# Running average of squared gradients
E_g2 = np.zeros_like(theta)

# Example gradients from a loss function
gradients = np.array([-0.5, 0.3, 0.24])

# Update running average
E_g2 = rho * E_g2 + (1 - rho) * gradients**2

# Update parameters using RMSprop
theta -= eta / np.sqrt(E_g2 + epsilon) * gradients

print("Updated parameters:", theta)
```

The output of the above code is as follows:

```shell
Updated parameters: [0.23162277 0.36837724 0.56837725]
```

## Codebyte Example

The following Codebyte example also demonstrates the use of RMSprop in another stochastic gradient descent scenario:

```codebyte/python
import numpy as np

# Initialise parameters
theta = np.array([1.0, 2.0, 3.0])
eta = 0.01
rho = 0.9
epsilon = 1e-8
E_g2 = np.zeros_like(theta)

# Example gradients
gradients = np.array([0.1, -0.2, 0.3])

# Update running average of squared gradients
E_g2 = rho * E_g2 + (1 - rho) * gradients**2

# Apply RMSprop
theta -= eta / np.sqrt(E_g2 + epsilon) * gradients

print("Updated parameters:", theta)
```

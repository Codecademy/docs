---
Title: 'Gradient Descent'
Description: 'Gradient Descent is an optimization algorithm that minimizes a cost function by iteratively adjusting parameters in the direction of its gradient.'
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

**Gradient Descent** is an optimization algorithm commonly used in machine learning and neural networks to minimize a cost function. Its goal is to iteratively find the optimal parameters (weights) that minimize the error or loss.

In neural networks, gradient descent computes the gradient (derivative) of the cost function with respect to each parameter. It then updates the parameters in the direction of the negative gradient, effectively reducing the cost with each step.

## Types of Gradient Descent

There are three main types of gradient descent:

| Type                                  | Description                                                                                                                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Batch Gradient Descent**            | Uses the entire dataset to compute the gradient and update the weights. Typically slower but more accurate for large datasets.                                                  |
| **Stochastic Gradient Descent (SGD)** | Uses a single sample to compute the gradient and update the weights. It is faster, but the updates are noisy and can cause fluctuations in the convergence path.                |
| **Mini-batch Gradient Descent**       | A compromise between batch and stochastic gradient descent, using a small batch of samples to compute the gradient. It balances the speed and accuracy of the learning process. |

## Gradient Descent Update Rule

The basic update rule for gradient descent is:

```pseudo
theta = theta - learning_rate * gradient_of_cost_function
```

- `theta`: The parameter (weight) of the model that is being optimized.
- `learning_rate`: A hyperparameter that controls the step size.
- `gradient_of_cost_function`: The gradient (derivative) of the cost function with respect to the parameters, indicating the direction and magnitude of the change needed.

## Syntax

Here's a basic syntax for Gradient Descent in the context of machine learning, specifically for updating the model parameters (weights) in order to minimize the cost function:

```pseudo
# Initialize parameters (weights) and learning rate
theta = initial_value  # Model Parameters (weights)
learning_rate = value  # Learning rate (step size)
iterations = number_of_iterations  # Number of iterations

# Repeat until convergence
for i in range(iterations):
    # Calculate the gradient of the cost function
    gradient = compute_gradient(X, y, theta) # Gradient calculation

    # Update the parameters (weights)
    theta = theta - learning_rate * gradient  # Update rule

    # Optionally, compute and store the cost (for monitoring convergence)
    cost = compute_cost(X, y, theta)
    store(cost)
```

## Example

In the following example, we implement simple gradient descent to minimize the cost function of a linear regression problem:

```py
import numpy as np

# Sample data (X: inputs, y: actual outputs)
X = np.array([1, 2, 3, 4, 5])
y = np.array([1, 2, 1.3, 3.75, 2.25])

# Parameters initialization
theta = 0.0  # Initial weight
learning_rate = 0.01  # Step size
iterations = 1000  # Number of iterations

# Cost function (Mean Squared Error)
def compute_cost(X, y, theta):
    m = len(y)
    cost = (1/(2*m)) * np.sum((X*theta - y)**2) # The cost function for linear regression
    return cost

# Gradient Descent function
def gradient_descent(X, y, theta, learning_rate, iterations):
    m = len(y)
    cost_history = []

    for i in range(iterations):
        gradient = (1/m) * np.sum(X * (X*theta - y))  # Derivative of cost function
        theta = theta - learning_rate * gradient  # Update theta
        cost_history.append(compute_cost(X, y, theta))  # Track cost
    return theta, cost_history

# Run Gradient Descent
theta_optimal, cost_history = gradient_descent(X, y, theta, learning_rate, iterations)

print(f"Optimal Theta: {theta_optimal}")
```

The output for the above code will be something like this:

```shell
Optimal Theta: 0.6390909090909086
```

> **Note**: The optimal `theta` value will be an approximation, as the gradient descent approach iteratively updates the weight to reduce the cost function.

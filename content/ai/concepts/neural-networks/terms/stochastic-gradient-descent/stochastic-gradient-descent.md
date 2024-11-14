---
Title: 'Stochastic Gradient Descent'
Description: 'Stochastic Gradient Descent is an optimizer algorithm that minimizes the loss function in machine learning and deep learning models.'
Subjects:
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Neural Networks'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/data-science'
---

**Stochastic Gradient Descent** (SGD) is an optimization algorithm used to minimize the loss function in machine learning and deep learning models. It is a variant of the traditional **Gradient Descent** (GD) algorithm. SGD updates the weights and biases of a model, such as those in an Artificial Neural Network (ANN), during the backpropagation process.

The term `stochastic` refers to the randomness involved in the algorithm. Instead of using the entire dataset to compute gradients as in batch `gradient descent`, SGD uses a randomly selected data point (or a small mini-batch) to perform each update. For instance, if the dataset contains 500 rows, SGD will update the model parameters 500 times in one epoch, each time using a different randomly chosen data point (or small batch).

This approach significantly reduces computation time, especially for large datasets, making SGD faster and more scalable. SGD is used for training models like neural networks, support vector machines (SVMs), and logistic regression. However, it introduces more noise into the learning process, which can lead to less stable convergence but also helps escape local minima, making it suitable for non-convex problems.

## Algorithms Step

- At each iteration, a random sample is selected from the training dataset.
- The gradient of the cost function with respect to the model parameters is computed based on the selected sample.
- The model parameters are updated using the computed gradient and the learning rate.
- The process is repeated for multiple iterations until convergence or a specified number of epochs.

## Formula

$$
\large \theta = \theta - \alpha  \cdot  \nabla J(\theta ; x_i, y_i)
$$

Where:

- `θ` represents the model parameter (weight or bias) being updated.
- `α` is the learning rate, a hyperparameter that controls the step size of the update.
- `∇J(θ;xi,yi)` is the gradient of the cost or loss function `J` with respect to the model parameter `θ`, computed based on a single training sample `(xi,yi)`.

## Advantages

- **Faster convergence:** SGD updates parameters more frequently hence it takes less time to converge especially for large datasets.
- **Reduced Computation Time:** SGD takes only a subset of dataset or batch for each update. This makes it easy to handle large datasets and compute faster.
- **Avoid Local Minima:** The noise introduced by updating parameters with individual data points or small batches can help escape local minima.This can potentially lead to better solutions in complex, non-convex optimization problems.
- **Online Learning:** SGD can be used in scenarios where data is arriving sequentially (online learning).- It allows models to be updated continuously as new data comes in.

## Disadvantages

- **Noisy Updates:** Updates are based on a single data point or small batch, which introduces variability in the gradient estimates.This noise can cause the algorithm to converge more slowly or oscillate around the optimal solution.
- **Convergence Issues:** The noisy updates can lead to less stable convergence and might make it harder to reach the exact minimum of the loss function.Fine-tuning the learning rate and other hyperparameters becomes crucial to achieving good results.
- **Hyperparameter Sensitivity:** - SGD's performance is sensitive to the choice of learning rate and other hyperparameters.Finding the right set of hyperparameters often requires experimentation and tuning.

## Example

The following code demonstrates **Stochastic Gradient Descent** (SGD) to fit a line to data points. Starting with initial guesses for the slope (`m`) and intercept (`b`), it updates these values iteratively by calculating the gradients of the **Mean Squared Error** (MSE) loss. The parameters are adjusted step-by-step based on the gradients, reducing the error between predicted and actual values:

```python
import numpy as np

# Data points (x, y) where the true line is y = 2x
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

# Initial guess for parameters (slope, intercept)
params = np.array([0.0, 0.0])

# Learning rate and epochs
learning_rate = 0.01
epochs = 1000

# Model: y = mx + b
def model(params, x):
  m, b = params
  return m * x + b

# MSE loss function
def loss(pred, actual):
  return np.mean((pred - actual) ** 2)  # Using mean instead of sum

# Compute gradients (partial derivatives)
def gradients(params, x, y):
  m, b = params
  pred = model(params, x)
  grad_m = 2 * (pred - y) * x  # Gradient for m
  grad_b = 2 * (pred - y)      # Gradient for b
  return np.array([grad_m, grad_b])

# Training history
history = []

# SGD: Update parameters
for epoch in range(epochs):
  total_loss = 0
  # Shuffle data
  indices = np.random.permutation(len(x))
  x_shuffled = x[indices]
  y_shuffled = y[indices]

  for i in range(len(x)):
    # Forward pass
    pred = model(params, x_shuffled[i])
    loss_value = loss(pred, y_shuffled[i])

    # Compute gradients
    grads = gradients(params, x_shuffled[i], y_shuffled[i])

    # Update parameters
    params -= learning_rate * grads
    total_loss += loss_value

  # Store loss for plotting
  avg_loss = total_loss / len(x)
  history.append(avg_loss)

  if epoch % 100 == 0:  # Print loss every 100 epochs
    print(f"Epoch {epoch}, Loss: {avg_loss:.6f}")

print(f"Final parameters: m = {params[0]:.4f}, b = {params[1]:.4f}")
```

The output of the code is as follows:

```shell
Epoch 0, Loss: 22.414958
Epoch 100, Loss: 0.001293
Epoch 200, Loss: 0.000037
Epoch 300, Loss: 0.000001
Epoch 400, Loss: 0.000000
Epoch 500, Loss: 0.000000
Epoch 600, Loss: 0.000000
Epoch 700, Loss: 0.000000
Epoch 800, Loss: 0.000000
Epoch 900, Loss: 0.000000
Final parameters: m = 2.0000, b = 0.0000
```

> **Note**: The output may vary depending on factors like the initial parameter values, learning rate, and number of epochs.

## codebyte Example

Here’s a Python code snippet demonstrating how to implement SGD for linear regression:

```codebyte/python
import numpy as np

# Generate synthetic data
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Add a bias term (X0 = 1) to the input data
X_b = np.c_[np.ones((100, 1)), X]  # Add a column of ones for the intercept term

# Initialize parameters
m, n = X_b.shape
theta = np.random.randn(n, 1)  # Initial weights
learning_rate = 0.01
n_iterations = 1000

# Stochastic Gradient Descent function
def stochastic_gradient_descent(X, y, theta, learning_rate, n_iterations):
  m = len(y)
  for iteration in range(n_iterations):
    # Shuffle the data
    indices = np.random.permutation(m)
    X_shuffled = X[indices]
    y_shuffled = y[indices]

    # Update weights for each sample
    for i in range(m):
      xi = X_shuffled[i:i+1]
      yi = y_shuffled[i:i+1]
      gradient = 2 * xi.T.dot(xi.dot(theta) - yi)
      theta -= learning_rate * gradient

  return theta

# Perform SGD
theta_final = stochastic_gradient_descent(X_b, y, theta, learning_rate, n_iterations)

print("Optimized weights:", theta_final)
```

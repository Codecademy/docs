---
Title: 'Stochastic Gradient Descent'
Description: 'Stochastic Gradient Descent is an optimizer algorithm that minimizes the loss functions in machine learning and deep learning models.'
Subjects:
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Neural Network'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/data-science'
---

**Stochastic Gradient Descent** (SGD) is an optimization algorithm. It is variant of gradient descent optimizer. The SGD minimizes the loss function of machine learning algorithms and deep learning algorithms during backpropagation to update the weights and biases in Artificial Neural Networks. 

The term `stochastic` means randomness on which the algorithm is based. In this algorithm, instead of taking whole datasets like `gradient descent`, we take single randomly selected data points or small batches of data. Suppose if the data set contains 500 rows SGD updates the model parameters 500 times in one cycle or one epoch.

This approach significantly reduces computation time, especially for large datasets, making SGD faster and more scalable.SGD is used for training models like neural networks, support vector machines (SVMs), and logistic regression. However, it introduces more noise into the learning process, which can lead to less stable convergence but also helps escape local minima, making it suitable for non-convex problems. 


![stochastic gradient descent](https://www.goglides.dev/images/Jq8EpuPoMjCcxm7PqMqWuQK7M_MoVtdfAUsGJsoUIMA/w:880/mb:500000/ar:1/aHR0cHM6Ly93d3ct/Z29nbGlkZXMtZGV2/LnMzLmFtYXpvbmF3/cy5jb20vdXBsb2Fk/cy9hcnRpY2xlcy8z/cGh3bjR0bmpnNGlo/eHV0Znpqby5wbmc)

## Algorithms Step

- At each iteration, a random sample  is selected from the training dataset.
- The gradient of the cost function with respect to the model parameters is computed based on the selected sample.
- The model parameters are updated using the computed gradient and the learning rate.
- The process is repeated for multiple iterations until convergence or a specified number of epochs.

## Formula 

$$ 
\large \theta = \theta - \alpha  \cdot  \nabla J(\theta ; x_i, y_i)
$$

Where:

- θ represents the model parameter (weight or bias) being updated.
- α is the learning rate, a hyperparameter that controls the step size of the update.
- ∇J(θ;xi,yi)  is the gradient of the cost or loss function J with respect to the model parameter θ, computed based on a single training sample (xi,yi).

## Advantages
- **Faster convergence:** SGD updates parameters more frequently hence it takes less time to converge especially for large datasets.
- **Reduced Computation Time:** SGD takes only a subset of dataset or batch for each update. This makes it easy to handle large datasets and compute faster.
- **Avoid Local Minima:** The noise introduced by updating parameters with individual data points or small batches can help escape local minima.This can potentially lead to better solutions in complex, non-convex optimization problems.
- **Online Learning:** SGD can be used in scenarios where data is arriving sequentially (online learning).- It allows models to be updated continuously as new data comes in.

## Disadvantages
- **Noisy Updates:** Updates are based on a single data point or small batch, which introduces variability in the gradient estimates.This noise can cause the algorithm to converge more slowly or oscillate around the optimal solution.
- **Convergence Issues:** The noisy updates can lead to less stable convergence and might make it harder to reach the exact minimum of the loss function.Fine-tuning the learning rate and other hyperparameters becomes crucial to achieving good results.
- **Hyperparameter Sensitivity:** - SGD's performance is sensitive to the choice of learning rate and other hyperparameters.Finding the right set of hyperparameters often requires experimentation and tuning.

## Practical Tips And Tricks When Using SGD
- Shuffle data before training 
- Use mini batches(batch size 32)
- Normalize input
- Choose a suitable learning rate (0.01)

## Syntax
- Learning Rate (α): A hyperparameter that controls the size of the update step.
- Number of Iterations: The number of times the algorithm will iterate over the dataset.
- Loss Function: The function that measures the error of the model predictions.
- Gradient Calculation: The method for computing gradients based on the loss function.

## Example

Here’s a Python code snippet demonstrating how to implement SGD for linear regression:

```codebyte/python
import numpy as np

# Generate synthetic data
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Initialize parameters
m, n = X.shape
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
theta_final = stochastic_gradient_descent(X, y, theta, learning_rate, n_iterations)

print("Optimized weights:", theta_final)
```

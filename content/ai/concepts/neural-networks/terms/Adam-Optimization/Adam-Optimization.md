---
Title: 'adam-optimization' 
Description: 'Adam is a momentum-based optimization algorithm that iteratively updates the weights and learning rates in a deep neural network during training.' 
Subjects: 
 - 'AI'
 - 'Computer Science'
 - 'Machine Learning'
Tags: 
 - 'AI'
 - 'Deep Learning'
 - 'Machine Learning'
 - 'Neural Networks'
 - 'Optimization'
 - 'Weights & Bias'
CatalogContent: 
 - 'paths/machine-learning-engineer'
 - 'machine-learning'
---

## Adam Optimization

**Adam Optimization** is an adaptive gradient descent algorithm that computes adaptive learning rates for each parameter of a [neural network](https://www.codecademy.com/resources/docs/ai/neural-networks). It calculates the exponential moving average of the gradient and the exponential moving average of the squared gradient, incorporating control over the decay rates of these moving averages. Adam extends stochastic gradient descent by incorporating the advantages of Root Mean Square Propagation (RMSprop) and the Adaptive Gradient Algorithm (AdaGrad), making it robust for large-scale, high-dimensional machine learning problems.

## Basic Concept

### Traditional Gradient Descent

**Traditional Gradient Descent** is an optimization technique for minimizing the loss function in a deep neural network by iteratively moving in the direction of the steepest descent, as determined by the negative gradient. It calculates the gradient using the entire dataset and makes a single update to the network parameters. This makes Traditional Gradient Descent computationally expensive and time-consuming for large datasets.

### Stochastic Gradient Descent

**Stochastic Gradient Descent (SGD)** optimizes an objective function in the presence of randomness. At each step, SGD calculates an estimate of the gradient using a random subset of the data, often called a mini-batch. By using mini-batches instead of the entire dataset, SGD is more efficient for large datasets with many parameters, allowing for faster and more scalable computations. However, the randomness can introduce noise into the optimization process, requiring careful tuning of hyperparameters.

### Stochastic Gradient Descent with Momentum

**Stochastic Gradient Descent with Momentum (SGD with Momentum)** is an enhancement of stochastic gradient descent that includes a momentum term to accelerate convergence and improve optimization. SGD with Momentum incorporates gradients from previous updates to help navigate the optimization landscape more effectively. The algorithm calculates an exponentially weighted average of the gradients (moving average) and uses this average to update the network parameters. This approach helps to dampen oscillations and can lead to faster convergence, especially in the presence of noisy gradients.

## How Adam Optimization Works

1. **Initialization:** The initial parameters (i.e., neural network weights) are used to calculate the mean and uncentered variance of the initial two momentum gradients.
2. **Update Exponential Moving Average:** The exponential moving averages of the first-order moment (mean of gradients) and second-order moment (mean of squared gradients) are updated using their respective decay rates.
3. **Unbiased Average Calculation:** The first-order and second-order moments are biased towards zero initially. To correct this, the unbiased averages are calculated by adjusting the moving averages to account for their respective biases.
4. **Calculate Weight Update:** The weight update value is computed by dividing the first-order unbiased average by the square root of the second-order unbiased average, and then scaling by the learning rate.
5. **Parameter Update:** The network parameters (weights) are updated by applying the calculated weight update.

## Advantages

Adam optimization has several advantages compared with other gradient decent algorithms for deep learning projects.

1. The Adam optimizer is straightforward to implement.
2. It is computationally efficient.
3. It has very small memory requirements.
4. Adam is invariant to the diagonal rescale of the gradients.
5. It is well-suited for projects with large amounts of data and/or parameters.
6. It is useful for non-stationary objectives, and very noisy and/or sparse gradients.
7. It offers an intuitive hyper-parameter interpretation.
8. It requires little tuning.

## Challenges

While very robust Adam does have a few challenges:

1. Adam does not always converge to an optimal solution.
2. Adam can suffer from weight decay issues
3. Newer optimization algorithms can be faster and provide improved preformance.

## Syntax

The Adam optimization algorithm can be conveniently implemented using two popular deep learning libraries: `TensorFlow` and `PyTorch`. 

The below syntax is for implementing Adam Optimization using `TensorFlow`:

```pseudo
tensorflow.keras.optimizers.Adam(learning_rate=0.01, beta_1=0.9, beta_2=0.999, epsilon=1e-8, amsgrad=False, name='Adam')
```

- `learning_rate`: A float or a tf.keras.optimizers.schedules.LearningRateSchedule, the learning rate.
- `beta_1`: A float, the exponential decay rate for the first moment estimates.
- `beta_2`: A float, the exponential decay rate for the second moment estimates.
- `epsilon`: A float, a small constant for numerical stability.
- `amsgrad`: A boolean, whether to apply the AMSGrad variant of this algorithm.
- `name`: A string, the name for operations created when applying gradients.

The below syntax is for implementing Adam Optimization using `PyTorch`:

```psuedo
torch.optim.Adam(params, lr=0.01, betas=(0.9, 0.999), eps=1e-8, weight_decay=0, amsgrad=False)
```
- `params`: Iterable of parameters to optimize or dictionaries defining parameter groups.
- `lr`: A float, the learning rate (default: 1e-3).
- `betas`: A tuple of two floats, coefficients used for computing running averages of gradient and its square (default: (0.9, 0.999)).
- `eps`: A float, a term added to the denominator to improve numerical stability (default: 1e-8).
- `weight_decay`: A float, weight decay (L2 penalty) (default: 0).
- `amsgrad`: A boolean, whether to use the AMSGrad variant of this algorithm (default: False).

## Codebyte Example

The following Codebyte example, implemented in NumPy, demonstrates the steps involved in the Adam optimization algorithm in detail.

```codebyte/python
# Import required libaries.
import numpy as np

# Define initialization function for Adam optimizer
def initalize_Adam(parameters):
  L = len(parameters) // 2 # number of layers within the neural network
  m = [] # first momentum vector
  v = [] # second momentum vector

# Initialize m, v. Input: "parameters", outputs: "m, v"
  for l in range(L):
    m["dW" + str(1+1)] = np.zeros_like(parameters["W" + str(1+1)])
    m["db" + str(1+1)] = np.zeros_like(parameters["b" + str(1+1)])
    v["dW" + str(1+1)] = np.zeros_like(parameters["W" + str(1+1)])
    v["db" + str(1+1)] = np.zeros_like(parameters["b" + str(1+1)])
  return m, v

# Define Adam update parameters for neural network
def Adam_update_parameters(parameters,grads, m, v, t, learning_rate = 0.01, beta1 = 0.9, beta2 = 0.999, epsilon = 1e-8):
  L = len(parameters) // 2 # number of layers within the neural network
  m_corrected = [] # Initialized first momentum vector
  v_corrected = [] # Initialized second momentum vector

  # Preform Adam update on all parameters.
  for l in range(L):
    # Moving average of the gradients. 
    m["dW" + str(1+1)] = beta1 * m["dW" + str(1+1)] + (1 - beta1) * grads["dW" + str(1+1)]
    m["db" + str(1+1)] = beta1 * m["db" + str(1+1)] + (1 - beta1) * grads["db" + str(1+1)]
    
    # Compute bias-corrected first moment estimate. 
    m_corrected["dW" + str(l+1)] = m["dW" + str(l+1)] / (1 - np.power(beta1,t))
    m_corrected["db" + str(l+1)] = m["db" + str(l+1)] / (1 - np.power(beta1,t))

    # Moving average of the squared gradients. 
    v["dW" + str(l+1)] = beta2 * v["dW" + str(l+1)] + (1 - beta2) * np.power(grads["dW" + str(l+1)],2)
    v["db" + str(l+1)] = beta2 * v["db" + str(l+1)] + (1 - beta2) * np.power(grads["db" + str(l+1)],2)

    # Compute bias-corrected second raw moment estimate.
    v_corrected["dW" + str(l+1)] = v["dW" + str(l+1)] / (1 - np.power(beta2,t))
    v_corrected["db" + str(l+1)] = v["db" + str(l+1)] / (1 - np.power(beta2,t))

    # Update parameters.
    parameters["W" + str(l+1)] = parameters["W" + str(l+1)] - learning_rate * m_corrected["dW" + str(l+1)] / (np.sqrt(v_corrected["dW" + str(l+1)]) + epsilon)
    parameters["b" + str(l+1)] = parameters["b" + str(l+1)] - learning_rate * m_corrected["db" + str(l+1)] / (np.sqrt(v_corrected["db" + str(l+1)]) + epsilon)

return parameters, m, v
```

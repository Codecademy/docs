---
Title: 'adam-optimization' 
Description: 'Adam is a momentum-based optimization algorithm that iteratively updates the weights and learning rates within a deep neural network during training.' 
Subjects: 
  - 'AI'
  - 'Computer Science'
  - 'Machine Learning'
Tags: 
  - 'AI'
  -  'Deep Learning'
  - 'Machine Learning'
  - 'Neural Networks'
  - 'Optimization'
  - 'Weight & Bias'
CatalogContent: 
  - 'paths/machine-learning-engineer'
  - 'machine-learning'
---

## Adam Optimization 
**Adam Optimization** is an adaptive gradient descent algorithm that computes adaptive learning rates for each parameter of a [neural network](https://www.codecademy.com/resources/docs/ai/neural-networks). It calculates the exponential moving average of the gradient and the exponential moving average of the squared gradient, incorporating control over the decay rates of these moving averages. Adam extends stochastic gradient descent by incorporating the advantages of Root Mean Square Propagation (RMSprop) and the Adaptive Gradient Algorithm (AdaGrad), making it robust for large-scale, high-dimensional machine learning problems.

## Basic Concept
[**Traditional Gradient Descent:**
Traditional Gradient Descent is an optimization method used to minimize the loss function of a deep neural network by iteratively progressing toward the steepest descent defined by the negative of the gradient to compare training predictions with actual results. The Traditional Gradient Descent algorithm calculates the gradient across the entire dataset and makes a single update to the network parameters. This makes Traditional Gradient Descent computationally expensive and time-consuming for large datasets. 

**Stochastic Gradient Descent (SGD):**
Stochastic Gradient Descent optimizes an objective function in the presence of randomness. At each step, SGD calculates an estimate of the gradient from a random subset of that data, called a mini-batch. By using mini-batches instead of the whole dataset, SGD is useful for calculating gradient descent over large datasets with many parameters. 

**Stochastic Gradient Descent with Momentum (SGD with Momentum):** 
This is stochastic gradient descent with a momentum term included in the algorithm. SGD with Momentum incorporates gradients from previously updated parameter steps to speed up gradient descent. The algorithm calculates the moving average (A.K.A. - exponentially weighted averages) of the gradient and uses the average to update network parameters.

**Root Mean Square Propagation (RMSprop):**
RMSprop is used to speed up mini-batch learning by adapting the network learning rate based on the moving average of the magnitudes of the recent gradients. This generates parameter updates using momentum on the rescaled gradient. The RMSprop optimization algorithm works well on large, noisy datasets.

**AdaGrad:**
AdaGrad optimizes the learning rate for each parameter which helps increase the learning rate for sparser parameters. This makes AdaGrad ideal for large language and image processing neural network models.]

## How It Works
[1. Initialization: the mean and uncentered variance of the initial two momentum gradients are calculated using initial parameters (i.e. - neural network weights).
2. Update exponential moving average: The exponential moving average of the first-order and second-order moments are updated.
3. Unbiased average calculation: the first-order and second-order unbiased averages are calculated, respectively. 
4. Calculate weight update: divide the first-order unbiased average by the square root of the second-order unbiased average and scale by the learning rate
5. Parameter Update: apply updated weights to network parameters.]

## Advantages
[Adam optimization has several advantages compared with other gradient decent algorithms for deep learning projects.
1. The Adam optimizer is straightforward to implement,
2. Computationally efficient,
3. Has very small memory requirements,
4. Adam is invariant to diagonal rescale of the gradients,
5. Is well suited for projects with large amounts of data and/or parameters,
6. Useful for non-stationary objectives, and very noisy and/or sparse gradients,
8. Intuitive hyper-parameter interpretation,
9. Requires little tuning.]

## Challenges
[While very robust Adam does have a few challenges.
1. Adam does not always converge to an optimal solution
2. Adam does suffer from some weight decay
3. Newer optimization algorithms are faster and provide improved calculations]

## Example

[Below is an example of the pytorch Adam optimizer syntax that is used to reduce the rate of error during the training of the target neural network. 

### Syntax
 '''python
 optimizer = torch.optim.Adam(params,lr=0.005,betas=0.9,0.999,eps=1e-08,weight_decay=0)'''

 The class statement and the required arguments used in the syntax are outlined below:
 - class torch.optim.Adam identifies Adam as the specific optimizer for gradient descent.
 - params: used as a parameter that helps in the optimization.
 - lr: learning rate helping the optimizer.
 - betas: decay parameter that calculates the running average of the gradient and its square.
 - eps: epsilon term added to denominator used to improve numerical stability.
 - weight_delay: adds an L2 penalty to the loss function with a default value of 0.

Adam optimization is used for sparse and noisy datasets like those found in large language models or image processing models.]

## Codebyte Example (if applicable)
[Codebyte example is provided in numpy to better show steps in optimization. The source code is from deeplearning.ai]

```codebyte/python
# Example runnable code block.
 [# import libraries](https://www.codecademy.com/workspaces/664e05e18948c76448d270d9);
```

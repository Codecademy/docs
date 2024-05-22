---
Title: 'adam-optimization' 
Description: 'Adam is a momentum-based optimization algorithm that iteratively updates the training learning rate weights within a deep neural network.' 
Subjects: 
  - 'AI'
  - 'Machine Learning'
  - 'Computer Science'
Tags: 
  - 'Optimization'
  - 'AI'
  - 'Machine Learning'
  - 'Neural Networks'
  - 'Deep Learning'
  - 'Wegith & Bias'
CatalogContent: 
  - 'machine-learning'
  - 'paths/machine-learning-engineer'
---

## Adam Optimization 

[**Adam Optimization** is an adaptive gradient decsent optimization algorithm that computes adaptive learning rates for each parameter of a neural network by calculating the calculating the exponential moving average of the gradient, the exponential moving squared average of the gradeint, and incorperating the control of the decay rates of the moving averages. Furthur, Adam is an extention of stochasic gradient decsent that incoperates the advantages of Root Square Mean Propigation (RMSprop) and Adaptive Gradient Algorithm (AdaGrad) which makes Adam optimization very robust for large-scale high-dimensional machine learning problems.]

## Basic Concept
[**Traditional Gradient Descent:**
An optimization method used to minimize the loss fucntion of a deep neural network by interively progressing toward the steepest decent defined by the negative of the gradient to compare training predications with actual results. The Traditional Gradient Descent algorithm calculates the gradient of the across the entire dataset and makes a single update to the network paramters. This makes Traditional Gradient Descent computationally expensive and time consuming for large datasets. 

**Stochasic Gradient Descent (SGD):**
Stochastic Gradient Descent optimizes an objective function in the presence of randomness. At each step, SGD calculates an estimate of the gradient from a random subset of that data, called a mini-batch. By using mini-batches instead of the whole dataset, SGD is useful for calculating gradient descent over large datatests with many parameters. 

**Stochastic Gradient Descent with Momentum (SGD with Momentum):** 
This is stochastic gradient descent with a momentum term included in the algorithm. SGD with Momentum incorperates gradients from previously updated parameter steps to speed up gradient descent. The algorithm calculates the moving average (A.K.A. - exponentially weighted averages) of the gradient and uses the average to update network parameters.

**Root Mean Square Propigation (RMSprop):**
RMSprop is used to speed up mini-batch learning by adapting the network learning rate based on the moving average of the magnitudes of the recent gradients. This generates parameter updates using momentum on the rescaled gradient. The RMSprop optimization algorithm works well on large, noisy datasets.

**AdaGrad:**
AdaGrad optimizes the learning rate for each parameter whcih helps increases the learning rate for sparser parameters. This makes AdaGrad ideal for large language and image processing neural network models.]

## How It Works
[1. Initilization: the mean and uncentered variance of the initial two momentum gradients are calculated using initial parameters (i.e. - neural network weights).
2. Update exponential moving average: Exponential moving average of the first-order and second-order moments are updated.
3. Unbiased average calculation:  the first-order and second-order unbiased averages are calculated, respectively. 
4. Calcuate weight update: divide the first-order unbiased average by the square root of the second-order unbiased average and scale by learning rate
5. Parameter Update: apply updated weights to network parameters.]

## Advantages
[Adam optimiziation has several advantages compaired with other gradient decent algorithms for deep learning projects.
1. The Adam optimizer is straightforward to implement,
2. Computationally effiecient,
3. Has very small memory requirements,
4. Adam is invariant to diagonal rescale of the gradients,
5. Is well suited for projects with large amounts of data and/or parameters,
6. Useful for non-stationary objectives, and for very noisy and/or sparse gradients,
8. Intuitive hyper-parameter interpretation,
9. Rquires little tuning.]

## Challenges
[While very robust Adam does have a few challenges.
1. Adam does not always converge to an optimal solution
2. Adam does suffer fom some weight decay
3. Newer optimization algorithms are faster and provide improved calculations]

## Example

[Below is an example of the pytorch adam optimizer syntax that is used to reduce the rate of error during the training of the target neural network. 

### Syntax
  '''python
  optimizer = torch.optim.Adam(params,lr=0.005,betas=0.9,0.999,eps=1e-08,weight_decay=0)'''

  The class statement and the required arguments used in the syntax are outlined below:
  - class torch.optim.Adam identifies Adam as the specific optimizer for gradient decent.
  - params: used as a parameter that helps in the optimization.
  - lr: learning rate helping the optimizer.
  - betas: decay parameter that calculates the running average of the gradient and its square.
  - eps: epsilon term added to denominator used to improve numerical stability.
  - weight_delay: adds a L2 penality to the loss function with a default value of 0.

Adam optimization is used for sparse and noisy datasets like those found in large language models or image processing models.]

## Codebyte Example (if applicable)
[Codebyte example is provided in numpy to better show steps in optimization. Source code is from deeplearning.ai]

```codebyte/python
# Example runnable code block.
  [# import libraries](https://www.codecademy.com/workspaces/664e05e18948c76448d270d9);
```

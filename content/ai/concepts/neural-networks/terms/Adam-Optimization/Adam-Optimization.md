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

[**Adam Optimization** is a gradient decsent optimization algorithm that computes adaptive learning rates for each parameter of a neural network to compare predicted and actual model outcomes. Adam is an extention of stochasic gradient decsent, and is closely related to Root Square Mean Propigation (RMSprop) along with AdaGrad. The parameter learning rates are optimized using Adam based on the mean and uncentered variance of the gradient by calculating the exponential moving average of the gradient, the exponential moving squared average of the gradeint, and control of the decay rates of the moving averages. This makes Adam optimization very robust and efficent for use in large-scale high-dimensional machine learning problems.]

## Basic Concept
[**Traditional Gradient Descent:**
An optimization method used to minimize the loss fucntion of a deep neural network by interively progressing toward the steepest decent defined by the negative of the gradient to compare training predications with actual test data. Gradient descent calculates the gradient of the loss function across the entire dataset and makes a single update the loss function paramters. This is computationally expensive and time consuming for large datasets. 

**Stochasic Gradient Descent:**
An optimization method that implements small batch or single data point from the loss function gradient dataset that is stochastically gathered and calculates the gradient decent and update training parameters.

**Root Mean Square Propigation (RMSprop):**
An optimization method that is related to Adam optimization. RMSprop with momentum generates parameter updates using momentum on the rescaled gradient. Additionally, RMSprop lacks the bias-correction term which impacts the training prediction calculations of the loss function for sparse gradients.

**AdaGrad:**
An optimization method related to Adam that generates larger updates for infrequent parameters and smaller updates for frequent parameters. Gradient updates provide a scaling indicator.]

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
Initialization bias: the mean and uncentered variance are initialized as vectors of zeros which causes Adam optimization to be bias toward zero during initial set up and when decay rates are small.

## Syntax

[Below is an example of the pytorch adam optimizer syntax that is used to reduce the rate of error during the training of the target neural network. 

[torch.optim.Adam(params,lr=0.005,betas=0.9,0.999,eps=1e-08,weight_decay=0)]

The class statement and the required arguments used in the syntax are outlined below:
- class torch.optim.Adam identifies Adam as the specific optimizer for gradient decent.
- params: used as a parameter that helps in the optimization.
- lr: learning rate helping the optimizer.
- betas: parameter that calculates the running average of the gradient and its square.
- eps: term added to denominator used to improve numerical stability.
- weight_delay: adds a L2 penality to the loss function with a default value of 0.]

## Example

[Adam optiminization]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```

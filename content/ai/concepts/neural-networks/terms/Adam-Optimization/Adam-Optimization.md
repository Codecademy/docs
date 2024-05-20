---
Title: 'adam-optimization' 
Description: 'Adam is a momentum-based optimization algorithm used to iteratively update network weights based in training data.' 
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

[**Adam Optimization** is second-order optimization method that utilize momentum-based algorithms that adapt the learning rate for each parameter based on the first and second moments of the gradent. Adam optimization addresses the limitations of first-order optimization methods such as stochastic gradient decent (SDG), Root Mean Square Propagation (RMSprop), Adagrad, and Adadelta. Ultimately, Adam optimization seeks to achieve faster convergence and better perfromance of deep learning models.]

## Syntax

[Below is an example of the pytorch adam optimizer syntax that is used to reduce the rate of error during the training of the target neural network. 

[torch.optim.Adam(params,lr=0.005,betas=0.9,0.999,eps=1e-08,weight_decay=0,amsgrad=False)]

The parameters used in the syntax include:
- Adam is used as the replacement optimizer for gradient decent.
- params: used as a parameter that helps in the optimization.
- lr: learning rate helping the optimizer.
- betas: parameter that calculates the average of the gradient.
- eps: episodes or epochs used to improve numerical stability
- weight_delay: adds a l2 penality to the loss function with a default value of 0.]

## Example

[Text, code, images, etc. about example 1]

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

---
Title: 'autograd'
 # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Autograd is a Pytorch library that calculates automated derivatives.' 
# Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Neural Networks'
  - 'AI'
  - 'Data Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Deep Learning'
  - 'Libraries'
  - 'TensorFlow'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'https://www.codecademy.com/learn/intro-to-py-torch-and-neural-networks'
  - 'https://www.codecademy.com/resources/docs/pytorch'
---

**Autograd** is a Pytorch library that is important for automatically computing derivatives (also known as automatic differentiation). This can save engineers a lot of time from manually computing gradients for large numbers of model parameters in machine learning models. Autograd is often used as a method in machine learning for generating loss functions to assess how well a machine learning model fits the data and optimizing tasks.  

So how does autograd speeds up complex derivative computations in Pytorch? To do this, autograd first traces all possible decision branches, automatically calculates differentiations, and tracks all calculations made in the `Tensor`. 

To compute gradients, autograd forward passes all input values in the `Tensor` to calculate the loss. Then in the backward pass (also known as backpropagation), the gradients are calculated to generate graphs. In backpropagation, gradients are computed to discover if adjustments need to be made to minimize loss in the learning model. This allows autograd to update learning models' weight values during training and provides a method for computing gradients by using scalar values (also known as floating point).

>[!Note]
> Only tensors of floating point and complex dtype can have gradients.

## Syntax
To enable autograd in a `Tensor`, the gradient parameter needs to be set to `true`.

`requires_grad=true`

>[!Note] 
> When the autograd parameter is set to `requires_grad=false`, gradients cannot be computed and the graphs will return empty. This is because the backpropagation function required for calculating gradients is disabled. 


## Using autograd to calculate gradients

The following is a simple example of how to use autograd to calculate gradients.

```python
import torch 

#Create a tensor and set the autograd parameter to true.
x = torch.ones(3,3,3,requires_grad=True)
print (x)

""" 
Output:
tensor([[[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]]], requires_grad=True)
"""

#Print out the data for x.
print (x.data)

""" 
Output:
tensor([[[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]]])
"""
```
Note that at this point no gradient functions have been created yet, so `print (x.grad)` will not work. To solve this issue, create a gradient function.

```python

#Create a gradient function by specifying the operation for x.
y = x * 3
print(y)

"""
Output:
tensor([[[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]]], grad_fn=<MulBackward0>)

"""
```
Because *y* was created from the operation, it now has a gradient function.

```python
#Print out the created gradient function.
print (y.grad_fn)

""" 
Output:
MulBackward0 object at 0x11f5b2950
"""
```

By default, the Pytorch gradient computations clear all internal buffers in the graph. To perform backpropagation twice on parts of the graph, parameters must be passed in `retain_variables = True` during the forward pass. If the retained variables were not specified at this step, certain operations will fail later on.

```python
x = torch.ones(3,3,3, requires_grad=True)
y = x * 3
y.backward(torch.ones(3,3,3), retain_graph=True)
print(x.grad)

"""
Output:
tensor([[[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]]])
"""
```
To test the gradients, create a new operation. 

```python
z = y * y * y
print(z)

"""
Output:
tensor([[[27., 27., 27.],
         [27., 27., 27.],
         [27., 27., 27.]],

        [[27., 27., 27.],
         [27., 27., 27.],
         [27., 27., 27.]],

        [[27., 27., 27.],
         [27., 27., 27.],
         [27., 27., 27.]]], grad_fn=<MulBackward0>)
"""
```

Backpropogate with random numbers. 
>[!Note]
> If the retained variables was not specified in earlier steps, this function will fail.

```python
gradient = torch.randn(3,3,3)
y.backward(gradient)

print(x.grad)

"""
Output:
Tensor([[[ 3.9394,  5.6904,  3.2610],
         [ 3.5621, -0.7557,  4.3721],
         [ 7.6155,  9.2516,  2.9956]],

        [[ 1.4368,  0.5990,  7.6822],
         [ 1.8252, -2.0303, -2.0354],
         [ 0.1065,  1.2566,  2.5728]],

        [[-1.2817,  0.0793,  2.5414],
         [ 1.6439,  2.6008, -1.2971],
         [ 3.6977,  2.7832,  1.4368]]])
```


## Codebyte example
The following codebyte example adds weight parameters to the autograd gradient calculations. 

```codebyte/python
import torch
x = torch.tensor([2.0, 4.0, 6.0, 8.0], requires_grad=True) 
y_true = torch.tensor([3.0, 6.0, 9.0, 12.0])
a = torch.tensor(4.0, requires_grad=True)
b = torch.tensor(6.0, requires_grad=True)
y_pred = w * x * b
loss = torch.mean((y_pred - y_true)**4)
loss.backward()
print("Gradient of a:", a.grad)
print("Gradient of b:", b.grad)
```


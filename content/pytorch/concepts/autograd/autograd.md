---
Title: 'Autograd'
Description: 'Autograd is a PyTorch library that calculates automated derivatives.'
Subjects:
  - 'Neural Networks'
  - 'AI'
  - 'Data Science'
Tags:
  - 'Deep Learning'
  - 'Libraries'
  - 'TensorFlow'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

`Autograd` is a built-in PyTorch library that is important for automatically computing derivatives (also known as automatic differentiation). This can save engineers a lot of time from manually computing gradients for large numbers of model parameters in machine learning models. Autograd is often used as a method in machine learning to optimize loss functions to assess how well a machine learning model fits the data and optimizes tasks.

Autograd speeds up complex derivative computations in PyTorch by tracing all possible decision branches, automatically calculating derivatives, and tracking all calculations made in the `Tensor`.

To compute gradients, autograd performs a forward pass for all input values in the `Tensor` to calculate the loss. Then in the backward pass (also known as backpropagation), the gradients are calculated to for updating the weights. In backpropagation, gradients are computed to discover if adjustments need to be made to minimize loss in the learning model. This allows autograd to update the learning models' weight values during training and provides a method for computing gradients by using scalar values (also known as floating point numbers).

> **Note** Only tensors of floating point and complex dtype can have gradients.

## Syntax

To enable autograd in a `Tensor`, the gradient parameter needs to be set to `true`.

`requires_grad=true`

> **Note** When the autograd parameter is set to `requires_grad=False`, gradients cannot be computed and the computational graphs will not be constructed. This is because the backpropagation function required for calculating gradients is disabled.

## Example

The following is a simple example of how to use autograd to calculate gradients.

```py
import torch
x = torch.ones(3,3,3,requires_grad=True)
print (x)
```

This example results in the following output:

```shell
tensor([[[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]]], requires_grad=True)
```

Print out the data for x.

```py
print (x.data)
```

This example results in the following output:

```shell
tensor([[[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]],

        [[1., 1., 1.],
         [1., 1., 1.],
         [1., 1., 1.]]])
```

> **Note** At this point no gradient functions have been created yet, so `print (x.grad)` will not work. To solve this issue, create a gradient function.

Create a gradient function by specifying the operation for x.

```py
y = x * 3
print(y)
```

This example results in the following output:

```shell
tensor([[[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]]], grad_fn=<MulBackward0>)

```

Because _y_ was created from the operation, it now has a gradient function.

Print out the created gradient function.

```py
print (y.grad_fn)
```

This example results in the following output:

```shell
MulBackward0 object at 0x11f5b2950
```

By default, the Pytorch gradient computations clear all internal buffers in the graph. To perform backpropagation twice on parts of the graph, parameters must be passed in `retain_variables = True` during the forward pass. If the retained variables were not specified at this step, certain operations will fail later on, but not necessarily cause create immediate failures.

```py
x = torch.ones(3,3,3, requires_grad=True)
y = x * 3
y.backward(torch.ones(3,3,3))
print(x.grad)
```

This example results in the following output:

```shell
tensor([[[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]],

        [[3., 3., 3.],
         [3., 3., 3.],
         [3., 3., 3.]]])
```

To test the gradients, create a new operation.

```py
z = y * y * y
print(z)
```

This example results in the following output:

```shell
tensor([[[27., 27., 27.],
         [27., 27., 27.],
         [27., 27., 27.]],

        [[27., 27., 27.],
         [27., 27., 27.],
         [27., 27., 27.]],

        [[27., 27., 27.],
         [27., 27., 27.],
         [27., 27., 27.]]], grad_fn=<MulBackward0>)
```

Backpropogate with random numbers.

> **Note** This function will fail if the retained variables are not specified in earlier steps.

```py
gradient = torch.randn(3,3,3)
y.backward(gradient)

print(x.grad)
```

This example results in the following ouptut:

```shell
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

---
Title: 'Binary Step Activation Function'
Description: 'The simplest threshold based activation function which works by either firing the node in case the threshold value is surpassed or doing nothing at all.'
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
  - 'machine-learning'
  - 'path/data-science'
---

**Binary Step** is the simplest threshold-based activation function which works by either activating the node, i.e. passing on its output to the next layer in case the threshold value is surpassed, or doing nothing at all.

![Binary Step Activation Plot](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-step-plot.png)

Mathematically, it can be defined as:

![Binary Step Activation Function](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-step-function.jpg)

If the node input value is less than 0, it returns 0 as output. Else, it returns 1.

### Usage and Limitations

As the name suggests, binary step can be used as an activation function in the output layer of a neural network for binary classification problems.

It is generally not suggested to use binary step in the hidden layer as it is a linear piecewise function unable to handle complex representations.

### Codebyte Example

The following is an example of the activation function in Python:

```codebyte/python
def binary_step(x):
  # Apply binary step activation
  if x < 0:
    # Deactivate node
    return 0
  else:
    # Activate node
    return 1

# Examples
print(binary_step(-0.2))
print(binary_step(0.5))
```

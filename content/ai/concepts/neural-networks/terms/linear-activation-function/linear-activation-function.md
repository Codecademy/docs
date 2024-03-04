---
Title: 'Linear Activation Function'
Description: 'The linear activation function is an activation function where the activation is proportional to the input.'
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

The **linear activation function**, also known as the identity function, is one of the most straightforward activation functions, where the output is identical to the input.
The linear activation function typically adds the weighted sum with bias and passes it as output.

Mathematically, it can be defined as:

![Linear Activation Function Equation](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-equ.png)

where :

![Linear Activation Function Expression](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-expression.png)

### Usage and Limitations

The problem with this activation function is that it is limited in the context of deep neural networks.

The model cannot learn complex non-linear relationships between inputs and outputs by using linear activation functions.

### Codebyte Example

The following is an example of the linear activation function in Python:

```codebyte/python
import numpy as np
from matplotlib import pyplot as plt

# Linear activation Function
def linear(x):
    ''' y = f(x) It returns the input as it is'''
    return x

# Generating data to plot
x_data = np.linspace(-6,6,100)
y_data = linear(x_data)

# Plotting
plt.plot(x_data, y_data)
plt.title('Linear Activation Function')
plt.legend(['f(x) = x'])
plt.grid()
plt.show()
```

This code will return a linear activation function graph:

![Linear Activation Function Plot](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-graph.png)

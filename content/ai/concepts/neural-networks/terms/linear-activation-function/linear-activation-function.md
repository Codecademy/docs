---
Title: 'Linear Activation Function'
Description: 'The linear activation function, also known as the identity function, is where the activation is proportional to the input.'
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
  - 'path/data-science'****
---

The **linear activation function**, also known as the identity function, is one of the most straight-forward activation function,where the output of linear activation function is exactly same as input.
In general , linear activation function simply add weighted sum with bias and pass it as output.


Mathematically, it can be defined as:

![linear Activation Function Equation](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-equation.png)

where :

![linear Activation Function](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-equation-express.png)

### Usage and Limitations

The problem with this activation function is that it is limited in the context of deep neural network's.

Using linear activation functions would not able to the model to learn complex non-linear relationships between input's and output's.

All layers of the neural network will collapse into one if a linear activation function is used. No matter the number of layers in the neural network, the last layer will still be a linear function of the first layer. So, essentially, a linear activation function turns the neural network into just one layer.

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

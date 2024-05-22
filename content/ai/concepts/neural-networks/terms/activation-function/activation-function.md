---
Title: 'Activation Function'
Description: 'An activation function is the function used by a node in a neural network to take the summed weighted input to the node and transform it into the output value.'
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
  - 'paths/data-science'
---

An **activation function** is the function used by a node in a neural network to take the summed weighted input to the node and transform it into the output value. The output value can be fed into the next hidden layer or received from the output layer. For networks that engage in tasks of any significant complexity, the activation function needs to be non-linear.

## Types of Activation Functions

There are a number of different types of activation functions that can be used:

- **Linear**: The node returns what was provided as input, also known as the "identity" function.
- **Binary Step**: The node either provides an output or not, depending on some threshold applied to the input.
- **[Sigmoid](https://www.codecademy.com/resources/docs/ai/neural-networks/sigmoid-activation-function)**: Takes the input and returns a value between 0 and 1. The more positive (larger) the input, the closer the value is to 1. The more negative (smaller) the input, the closer the value is to 0.
- **Tanh**: Like the sigmoid function but produces values between -1 and 1.
- **Gaussian**: Takes the input and distributes it in a bell curve with values between 0 and 1.
- **ReLU (Rectified Linear Unit)**: Represents the positive part of the input, returning 0 for values less than 0, and behaving like a linear function for positive values.

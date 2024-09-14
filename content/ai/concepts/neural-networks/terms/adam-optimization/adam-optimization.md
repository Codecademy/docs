---
Title: 'Adam Optimization'
Description: 'Adam is optimization algorithms that compute adaptive learning rates for each parameter basically is combination of SGD with momentum and RMSprop and also consider extension of AdaDelta.'
Subjects:
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Neural Network'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/data-science'
---

**Adam** (Adaptive Moment Estimation) is a popular optimization algorithm frequently used in deep learning. It combines the momentum techniques from stochastic gradient descent (SGD) and the adaptive learning rate of RMSprop (Root Mean Square Propagation). It is also considered an extension of AdaDelta because it refines the learning rate adjusted per parameter.

It adapts the learning rate for each parameter, making the training process faster and more efficient, especially for large datasets. Adam's ability to handle sparse gradients and adapt dynamically to different scenarios makes it highly efficient for training deep neural networks.

## Expalnation
Adam works by computing adaptive learning rates for each parameter, which helps in adjusting the step size during optimization. It maintains two moving averages for each parameter: one is the average of the gradients (momentum), and the other is the uncentered variance of the gradients (RMSProp). These moving averages help to smooth out noisy updates and ensure more consistent progress towards the minimum.

One of Adam’s key features is bias correction, which adjusts the moving averages at the start of training to prevent initial values from being too small. This adjustment enhances Adam's stability during the initial stages of training. Furthermore, Adam adapts to different problem structures and works well with non-stationary data, such as datasets that change over time or have dynamic properties.

Finally, because Adam adjusts learning rates individually for each parameter, it performs exceptionally well on problems where parameters might have different levels of importance or gradients vary widely in magnitude.

![Adam](https://machinelearningmastery.com/wp-content/uploads/2017/05/Comparison-of-Adam-to-Other-Optimization-Algorithms-Training-a-Multilayer-Perceptron.png)

## Key Advantages 
- Adaptive Learning Rates: Discuss how Adam adapts learning rates for each parameter, leading to more efficient training.
- Bias Correction: Explain the significance of bias correction in the early stages of training.
- Robustness: Highlight how Adam performs well with noisy gradients and varying data distributions.

## Hyperpameters
- Learning Rate (α): Describe the role of the learning rate and typical values.
- β1​ and β2​: Explain the impact of these hyperparameters on the moment estimates (usually β1​ is 0.9 and β2​ is 0.999).
- ϵ: Mention the purpose of this small constant (typically $ 10^{-8} $) to prevent numerical instability.

## Example
### MNIST Classification with Adam Optimizer

This example demonstrates how to train a neural network on the MNIST dataset using the Adam optimizer with TensorFlow/Keras.

```codebyte/python
import tensorflow as tf
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten
from tensorflow.keras.utils import to_categorical

# Load data
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize data
x_train, x_test = x_train / 255.0, x_test / 255.0

# One-hot encode labels
y_train, y_test = to_categorical(y_train, 10), to_categorical(y_test, 10)

# Build and compile the model
model = Sequential([
    Flatten(input_shape=(28, 28)),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
model.fit(x_train, y_train, epochs=5, batch_size=32, validation_split=0.2)

# Evaluate the model
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f'Test Accuracy: {test_acc:.4f}')
```
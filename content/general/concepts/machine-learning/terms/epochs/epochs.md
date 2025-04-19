---
Title: 'epochs'
Description: 'Defines epochs in machine learning and explains their importance in training models.'
Subjects:
 - 'Computer Science'
 - 'Data Science'
 - 'Machine Learning'
Tags:
 - 'AI'
 - 'Algorithms'
 - 'Deep Learning'
 - 'Machine Learning'
 - 'Models'
 - 'Neural Networks'
 - 'Parameters'
 - 'PyTorch'
 - 'Scikit-learn'
 - 'Stochastic Gradient Descent'
 - 'Supervised Learning'
 - 'TensorFlow'
CatalogContent:
  - 'intro-to-deep-learning-with-tensor-flow'
  - 'paths/machine-learning-ai-engineering-foundations'
---

When training a machine learning model, several hyperparameters play a crutial role in determining the model’s performance and convergence. **Epochs** are a fundamental one in machine learning, particularly in the training of a model. 

An epoch refers to one complete pass through the entire training dataset. During an epoch, the learning algorithm updates the model's parameters based on the training data.

## Importance of Epochs in Training

The number of epochs determine how many times the learning algorithm will work through the entire training dataset. 

Training for too few epochs may result in underfitting, where the model fails to capture the dominant trends in the data. This results in errors and poor performance.

More epochs can lead to better model performance, as the model has more opportunities to learn from the data. However, too many epochs can lead to overfitting, where the model performs well on training data but poorly on unseen data.

## Difference between Epochs, Iterations, Batches

Understanding these concepts helps in effectively training machine learning models and optimizing their performance.

- **Epochs**: One complete pass through the entire training dataset.

- **Iterations**: The number of batches needed to complete one epoch. For example, if you have 1000 samples and a batch size of 100, it will take 10 iterations to complete one epoch.

- **Batches**: A subset of the training dataset used to train the model in one iteration. Batch size determines the number of samples processed before the model's parameters are updated.

##  Example

This example demonstrates how to train a neural network model using the Diabetes dataset and visualize the training and validation loss over multiple epochs:

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPRegressor
from sklearn.metrics import mean_squared_error

# Load the Diabetes dataset
diabetes = load_diabetes()
X, y = diabetes.data, diabetes.target

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the data
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Build and train the neural network model
mlp = MLPRegressor(hidden_layer_sizes=(128,), max_iter=20, alpha=1e-4,
    solver='adam', random_state=42, learning_rate_init=0.001)

train_loss = []
val_loss = []

for i in range(5000):
    mlp.partial_fit(X_train, y_train)
    train_loss.append(mean_squared_error(y_train, mlp.predict(X_train)))
    val_loss.append(mean_squared_error(y_test, mlp.predict(X_test)))

# Find the epoch with the minimum validation loss
minimum_validation_loss_epoch = np.argmin(val_loss)

# Plot the training and validation loss with logarithmic scales
plt.figure(figsize=(10, 6))
plt.plot(train_loss, label='Training Loss', color='blue')
plt.plot(val_loss, label='Validation Loss', color='orange')
plt.axvline(x=minimum_validation_loss_epoch, linestyle='--', color='red', label='Minimum Validation Loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.title('Training and Validation Loss')
plt.legend()
plt.grid(True)
plt.yscale('log')
plt.show()
```
The model is trained for 5000 epochs. During each epoch, the training and validation loss are recorded. The epoch with the minimum validation loss is identified to help determine the optimal number of epochs for training.

The above code generates the following output:

![Output of the above example, training and validation loss over multiple epochs](https://raw.githubusercontent.com/Codecademy/docs/main/media/epochs.png)

This example helps in understanding how the model's performance evolves over time and helps to determine the optimal number of epochs to prevent underfitting or overfitting.

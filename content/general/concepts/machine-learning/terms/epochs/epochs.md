---
Title: 'Epochs'
Description: 'An epoch is one complete pass of the entire training dataset by the learning algorithm to update the model’s weights.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Algorithms'
  - 'Deep Learning'
  - 'Machine Learning'
CatalogContent:
  - 'intro-to-deep-learning-with-tensor-flow'
  - 'paths/machine-learning-ai-engineering-foundations'
---

When training a machine learning model, several hyperparameters play an important role in determining the model’s performance and convergence. **Epochs** are an essential concept in machine learning, particularly in the training of a model.

An epoch is one complete pass of the entire training dataset. During an epoch, the model processes every sample in the training data once and updates its parameters through backpropagation and gradient descent.

## Importance of Epochs in Training

- Epochs define how often the model processes the entire training dataset during the learning phase.
- Training for too few epochs may result in underfitting. In this case, the model fails to capture the dominant trends in the data, leading to errors and poor performance.
- Increasing the number of epochs gives the model additional chances to learn from the data, potentially enhancing its accuracy. However, too many epochs can lead to overfitting. In this case, the model fits the training data a bit too closely and performs poorly on unseen data.

## Epochs vs. Iterations vs. Batches

Understanding these concepts helps in effectively training machine learning models and optimizing their performance:

- **Epochs**: One complete pass of the entire training dataset.
- **Iterations**: Refer to how many batch updates are required to complete a single pass through the full dataset.
- **Batches**: A subset of the training dataset used to train the model in one iteration. The batch size controls how many data samples are used at once before updating the model’s weights.

## Example

This example shows how to train a neural network model using the Diabetes dataset and visualize the training and validation loss over various epochs:

```py
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

# Split the loaded dataset into training and test datasets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Perform data standardization
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Build and train the neural network model
mlp = MLPRegressor(hidden_layer_sizes=(128,), max_iter=20, alpha=1e-4,
  solver='adam', random_state=42, learning_rate_init=0.001)

train_loss = []
val_loss = []

for i in range(5000):
  mlp.partial_fit(X_train, y_train) # Each partial_fit call processes the entire training data once, simulating one epoch
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

Here is the output:

![Output for the example visualizing the training and validation loss over various epochs](https://raw.githubusercontent.com/Codecademy/docs/main/media/epochs.png)

This example helps in understanding how the model's performance evolves over time and helps to determine the optimal number of epochs to prevent underfitting or overfitting.

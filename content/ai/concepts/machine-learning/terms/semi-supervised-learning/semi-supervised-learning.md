---
Title: 'Semi-Supervised Learning'
Description: 'A machine learning approach that leverages both labeled and unlabeled data for training, improving model performance when labeled data is scarce.'
Subjects:
  - 'AI'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Unsupervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/intermediate-machine-learning-skill-path'
---

**Semi-Supervised Learning** is an approach in machine learning that combines elements of both [supervised learning](https://www.codecademy.com/resources/docs/ai/machine-learning/supervised-learning) and unsupervised learning. It is particularly helpful when a dataset contains a small amount of labeled data and a large amount of unlabeled data.

By leveraging patterns in the unlabeled data, semi-supervised learning improves model accuracy and generalization while reducing the reliance on extensive labeled datasets.

## Syntax

The general approach for implementing semi-supervised learning follows these steps:

```pseudo
1. Train an initial model using the available labeled data.
2. Use the trained model to predict labels for the unlabeled data.
3. Select high-confidence pseudo-labels and add them to the labeled dataset.
4. Retrain the model with the expanded labeled dataset.
5. Repeat steps 2-4 iteratively until convergence or stopping criteria is met.
```

## Example

A common example of semi-supervised learning is using a [self-training](https://www.codecademy.com/resources/docs/sklearn/self-training) classifier with [Scikit-learn](https://www.codecademy.com/resources/docs/sklearn) in Python:

```py
import numpy as np
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.semi_supervised import SelfTrainingClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load dataset
X, y = datasets.load_digits(return_X_y=True)

# Create a mask to simulate unlabeled data (-1 represents unlabeled samples)
unlabeled_mask = np.random.rand(len(y)) < 0.8
y_unlabeled = np.copy(y)
y_unlabeled[unlabeled_mask] = -1  # Set 80% of labels to -1 (unlabeled)

# Split into training and test datasets
X_train, X_test, y_train, y_test_masked = train_test_split(X, y_unlabeled, test_size=0.2, random_state=42)

# Get the true labels for the test set
_, y_test_true = train_test_split(y, test_size=0.2, random_state=42)  # True labels for evaluation

# Define the base classifier
base_classifier = RandomForestClassifier(n_estimators=100, random_state=42)

# Create the semi-supervised model
self_training_model = SelfTrainingClassifier(base_classifier)

# Train the model
self_training_model.fit(X_train, y_train)

# Get predictions
y_pred = self_training_model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test_true, y_pred)
print(f"Semi-Supervised Model Accuracy: {accuracy:.2f}")
```

This example demonstrates the use of a self-training classifier, where an initial model is trained on labeled data and iteratively labels the unlabeled data to improve its learning capability. The output of this code will be:

```shell
Semi-Supervised Model Accuracy: 0.89
```

> **Note:** Since the dataset splitting and unlabeled mask generation involve randomness (`np.random.rand()` and `train_test_split()`), the accuracy may change slightly each time unless a fixed random seed (`np.random.seed()`) is set before creating the mask.

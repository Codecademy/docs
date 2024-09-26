---
Title: 'Self-Training'
Description: 'Self-training is a semi-supervised learning algorithm, which improves the model performance when labeled data is limited.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'Algorithms'
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Unsupervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Self-training** is a semi-supervised learning algorithm implemented in Scikit-learn. It involves training a model on a small amount of labeled data and then using that trained model to predict the labels for a large unlabeled data. It is an useful approach as it maintains the model's efficiency and saves time.

## Syntax

Self-training can be implemented in Sklearn using `SelfTrainingClassifier` for classification and `SelfTrainingRegressor` for regression:

```pseudo
from sklearn.semi_supervised import SelfTrainingClassifier

self_training_clf = SelfTrainingClassifier(base_estimator)
self_training_clf.fit(X_labeled, y_labeled)
predictions = self_training_clf.predict(X_unlabeled)
```

- `base_estimator`: The base model to be used for self-training.
- `X_labeled`: The features of the labeled dataset.
- `y_labeled`: The labels of the labeled dataset.
- `X_unlabeled`: The features of the unlabeled dataset.

## Example

The below example demonstrates the implementation of self-training using the `SelfTrainingClassifier` with a `DecisionTreeClassifier`:

```sklearn
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.semi_supervised import SelfTrainingClassifier
from sklearn.metrics import accuracy_score

# Create a synthetic dataset
X, y = make_classification(n_samples=1000, n_features=20, n_informative=10, n_redundant=10, random_state=42)

# Split the dataset into labeled and unlabeled data
# For this example, only 100 labeled samples are used
X_labeled, X_unlabeled, y_labeled, y_unlabeled = train_test_split(X, y, test_size=0.9, random_state=42)

# Mark unlabeled samples with -1
y_labeled = y_labeled[:100] # Take only 100 labeled samples
y_unlabeled = [-1] * len(X_unlabeled) # Unlabeled samples

# Combine labeled and unlabeled data
X_combined = X_labeled.tolist() + X_unlabeled.tolist()
y_combined = y_labeled.tolist() + y_unlabeled

# Initialize the SelfTrainingClassifier
base_estimator = DecisionTreeClassifier()
self_training_clf = SelfTrainingClassifier(base_estimator)

# Fit the model
self_training_clf.fit(X_combined, y_combined)

# Make predictions
predictions = self_training_clf.predict(X_unlabeled)

# Evaluate the model (on the labeled portion of data)
accuracy = accuracy_score(y_unlabeled, predictions)
print(f'Accuracy: {accuracy:.2f}')
```

The above code produces the following output:

```shell
Accuracy: 0.00
```

---
Title: 'Multilabel Classification'
Description: 'Multilabel classification is a machine learning task where each instance can be assigned multiple labels or categories simultaneously.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Classification'
  - 'Natural Language Processing'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/intermediate-machine-learning-skill-path'
---

In sklearn, **Multilabel Classification** assigns multiple labels to a single instance, allowing models to predict multiple outputs simultaneously. This method differs from traditional classification, where each instance belongs to only one class.

Scikit-learn offers tools like `OneVsRestClassifier`, `ClassifierChain`, and `MultiOutputClassifier` to handle multilabel classification and enable efficient model training and evaluation.

## Syntax

Here's the syntax for using multiabel classification in sklearn:

```pseudo
from sklearn.multioutput import MultiOutputClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Step 1: Initialize the base classifier
base_model = RandomForestClassifier(random_state=42)

# Step 2: Create a MultiOutputClassifier wrapper for multilabel classification
multi_label_model = MultiOutputClassifier(base_model)

# Step 3: Train the model using the training dataset
multi_label_model.fit(X_train, y_train)

# Step 4: Make predictions on the test dataset
predicted_labels = multi_label_model.predict(X_test)

# Step 5: Evaluate predictions or use the results
print(predicted_labels)
```

- `RandomForestClassifier`: The base classifier for multilabel classification.
- `MultiOutputClassifier`: A wrapper to extend the base classifier for multilabel tasks.
- `Training and testing`: The model is trained with `fit()` and predictions are made using `predict()`.

## Example

This code demonstrates multilabel classification using scikit-learn by training a model to assign multiple labels:

```py
from sklearn.datasets import make_multilabel_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.multioutput import MultiOutputClassifier
from sklearn.metrics import classification_report

# Generate synthetic multilabel data
X, y = make_multilabel_classification(n_samples=100, n_features=10, n_classes=3, n_labels=2, random_state=42)

# Initialize a base classifier
base_classifier = RandomForestClassifier()

# Wrap the base classifier for multilabel classification
model = MultiOutputClassifier(base_classifier)

# Train the model
model.fit(X, y)

# Predict labels for new data
predictions = model.predict(X[:5])

# Display predictions
print("Predicted Labels for First 5 Samples:")
print(predictions)
```

The code results the following output:

```shell
Predicted Labels for First 5 Samples:
[[1 1 0]
 [1 1 0]
 [0 0 1]
 [1 1 1]
 [0 1 0]]
```

## Codebyte Example

The following codebyte example trains a Random Forest classifier for multilabel classification on dataset and predicts multiple categories for new samples:

```codebyte/python
# This code demonstrates multilabel classification using scikit-learn.
from sklearn.datasets import make_multilabel_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.multioutput import MultiOutputClassifier

# Generate synthetic multilabel data
X, y = make_multilabel_classification(n_samples=100, n_features=10, n_classes=3, n_labels=2, random_state=42)

# Initialize a Random Forest classifier
classifier = RandomForestClassifier()

# Wrap the classifier for multilabel classification
multi_label_model = MultiOutputClassifier(classifier)

# Train the model on the dataset
multi_label_model.fit(X, y)

# Predict labels for the first 4 samples
predictions = multi_label_model.predict(X[:4])

# Display the predictions
print("Predicted labels for the first 4 samples:")
print(predictions)
```

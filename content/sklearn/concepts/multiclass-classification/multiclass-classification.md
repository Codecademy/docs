---
Title: 'Multiclass Classification'
Description: 'Multiclass classification is a supervised machine learning task where instances are categorized into one of three or more distinct classes.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Classification'
  - 'Multitask Learning'
  - 'Scikit-learn'
  - 'Supervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/intermediate-machine-learning-skill-path'
---

In [Sklearn](https://www.codecademy.com/resources/docs/sklearn), **Multiclass Classification** is a supervised machine learning task where instances are categorized into one of three or more distinct classes. Unlike binary classification, which involves two classes, multiclass classification requires the model to differentiate among multiple categories.

Multiclass classification in Sklearn is implemented using algorithms such as [`Decision Trees`](https://www.codecademy.com/resources/docs/sklearn/decision-trees), [`Support Vector Machines (SVMs)`](https://www.codecademy.com/resources/docs/sklearn/support-vector-machines), and `Logistic Regression`. These algorithms handle multiple classes through strategies like One-vs-Rest (OvR) or One-vs-One (OvO), depending on the model and configuration.

> **Note:** Sklearn offers many algorithms for multi-class classification.

## Syntax

Sklearn offers a variety of algorithms for multiclass classification. Below is an example syntax for performing multiclass classification using `RandomForestClassifier` in sklearn:

```pseudo
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier  # Replace with your classifier
from sklearn.metrics import classification_report

# Generate a synthetic dataset
X, y = make_classification(n_samples=1000, n_features=20, n_classes=3, random_state=42)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create the classifier (can be any model that supports multiclass classification)
clf = RandomForestClassifier(random_state=42)

# Fit the model
clf.fit(X_train, y_train)

# Make predictions
y_pred = clf.predict(X_test)

# Evaluate the model
print(classification_report(y_test, y_pred))
```

## Example

The following example code loads the `iris` dataset, split it into training and testing sets (80% training, 20% testing), then train a `RandomForestClassifier`, make predictions on the test data, calculates and prints the accuracy of the model:

```py
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the Iris dataset (for multiclass classification)
data = load_iris()
X, y = data.data, data.target

# Split the dataset into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the RandomForestClassifier
model = RandomForestClassifier()

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model by calculating accuracy
accuracy = accuracy_score(y_test, y_pred)

# Print the accuracy of the model
print(f"Accuracy: {accuracy:.2f}")
```

The code outputs the following output:

```shell
Accuracy: 1.00
```

## Codebyte Example

The following codebyte example trains a `Random Forest classifier` for multiclass classification on synthetic data and predicts the category of a new product:

```codebyte/python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Generate synthetic data for multiclass classification (3 classes)
X, y = make_classification(n_samples=1000, n_features=20, n_classes=3, random_state=42)

# Split the dataset into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the RandomForestClassifier
model = RandomForestClassifier()

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model by calculating accuracy
accuracy = accuracy_score(y_test, y_pred)

# Print the accuracy of the model
print(f"Accuracy: {accuracy:.2f}")
```

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

## Syntax

Here's a syntax for using multi-class classification in sklearn:

```pseudo
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier

# Load dataset
data = load_iris()
X, y = data.data, data.target

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create the model
model = RandomForestClassifier()

# Train the model
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate the model
accuracy = model.score(X_test, y_test)
print("Accuracy:", accuracy)
```
- `load_iris()`: Function that loads the popular `iris`dataset with three classes for multiclass classification.
- `train_test_split()`: Divides the dataset into training and testing subsets.
- `RandomForestClassifier()`: Algorithm that is used for multiclass classification. Other classifiers like `LogisticRegression`, `SVC`, can also be used for the same.
- `fit()`: Method used to train the model on training data.
- `predict()`: Method makes predicitions on the test data.

## Example

The following example code loads the `iris` dataset, split it into training and testing sets (80% training, 20% testing), then train a `RandomForestClassifier`, make predictions on the test data, calculates and prints the accuracy of the model.

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

The following codebyte example trains a `Random Forest classifier` for multiclass classification on synthetic data and predicts the category of a new product.

```codebyte/python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Generate synthetic data for multiclass classification (3 classes)
X, y = make_classification(n_samples=1000, n_features=20, n_informative=4, n_classes=3, random_state=42)

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

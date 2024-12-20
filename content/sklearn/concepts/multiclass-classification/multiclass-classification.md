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

> **Note:** Scikit-learn offers many algorithms for multi-class classification.

## Syntax

Scikit-learn offers variety of algorithms for multi-class classification.
Here's a syntax for using multi-class classification in sklearn using `RandomForestClassifier`:

```pseudo
RandomForestClassifier(
    n_estimators=100,
    criterion='gini',
    max_depth=None,
    min_samples_split=2,
    min_samples_leaf=1,
    min_weight_fraction_leaf=0.0,
    max_features='sqrt',
    max_leaf_nodes=None,
    min_impurity_decrease=0.0,
    bootstrap=True,
    oob_score=False,
    n_jobs=None,
    random_state=None,
    verbose=0,
    warm_start=False,
    class_weight=None,
    ccp_alpha=0.0,
    max_samples=None,
    monotonic_cst=None
)
```

- `n_estimators`: Number of trees in the forest.
- `criterion`: Specifies the function used to measure the quality of a split. It can be set to `gini` for Gini impurity or `entropy` for information gain.
- `max_depth`: Limits the depth of trees. If `None`, trees grow until all leaves are pure or have fewer than `min_samples_split` samples.
- `min_samples_leaf`: Minimum samples required at a leaf node.
- `bootstrap`: used to train each tree on random subsets of the data with replacement, if set to `True`.
- `random_state`: Controls randomness for ensuring consistent results.
- `n_jobs`: Specifies the number of parallel jobs for fitting and predicting.
- `oob_score`: Used to estimate accuracy and provide internal validation if set to `True`.
- `class_weight`: Assigns weights to classes, helping manage class imbalance.

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

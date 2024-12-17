---
Title: 'Decision Trees'
Description: 'Decision trees are machine learning models that split data into branches based on features, enabling clear decisions for classification and regression tasks.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Decision Trees** are intuitive machine learning algorithms that can be used for classification and regression tasks. They recursively split data into subsets based on feature values, creating a tree-like structure to make predictions.

Decision trees are widely favored for their ease of use and clarity in interpretation.

In [sklearn](https://www.codecademy.com/resources/docs/sklearn), decision trees are implemented in the `DecisionTreeClassifier` and `DecisionTreeRegressor` classes. They can handle both numerical and categorical data, and support advanced features like pruning and handling missing values.

## Advantages of Decision Trees

- Easy to understand and interpret.
- Can handle both numerical and categorical data.
- Requires minimal data preprocessing (e.g., no need for feature scaling).
- Can model non-linear relationships.

## Limitations

- Can be prone to overfitting without proper pruning.
- Sensitive to small changes in the data, which can lead to different tree structures.

## Syntax

Below is an example of the syntax for using a decision tree classifier:

```pseudo
from sklearn.tree import DecisionTreeClassifier

# Initialize the Decision Tree Classifier with common parameters
model = DecisionTreeClassifier(criterion='gini', max_depth=None, random_state=None, min_samples_split=2, min_samples_leaf=1)

# Fit the model to the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)
```

- `criterion`: Specifies the metric to evaluate split quality (`gini` for Gini Impurity, `entropy` for Information Gain).
- `max_depth`: Sets the maximum depth of the tree to control model complexity and prevent overfitting.
- `random_state`: Ensures reproducibility by setting the random seed for consistent results.
- `min_samples_split`: Minimum number of samples required to split an internal node, controlling when splitting occurs.
- `min_samples_leaf`: Minimum number of samples required at a leaf node, ensuring leaves aren’t too small.

## Example

Here's an example of a Decision Tree Classifier for predicting labels on a synthetic dataset:

```py
from sklearn.datasets import make_classification
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Generating a synthetic classification dataset
X, y = make_classification(n_samples=100, n_features=4, random_state=42)

# Splitting data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Initializing and training the Decision Tree Classifier
model = DecisionTreeClassifier(max_depth=3, random_state=42)
model.fit(X_train, y_train)

# Making predictions
y_pred = model.predict(X_test)

# Evaluating the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
```

The code above generates an output as follows:

```shell
Accuracy: 0.9333
```

> **Note**: The output may change based on dataset randomness, train-test split, hyperparameters, or changes in sklearn and execution environment.

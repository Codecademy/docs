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

**Decision Trees** are intuitive machine learning algorithms that can be used for classification and regression tasks. They work by recursively splitting data into subsets based on feature values, building a tree-like structure of decisions to predict an output. Decision trees are widely favored for their ease of use and clarity in interpretation.
In scikit-learn, decision trees are implemented in the `DecisionTreeClassifier` and `DecisionTreeRegressor` classes. They can handle both numerical and categorical data, and support advanced features like pruning and handling missing values.

## Advantages of Decision Trees:

- Easy to understand and interpret.
- Handles both numerical and categorical data.
- Requires minimal data preprocessing (e.g., no need for feature scaling).
- Can model non-linear relationships.

## Limitations:

- Prone to overfitting without proper pruning.
- Sensitive to small changes in the data, which can lead to different tree structures.

## Syntax

Below is an example syntax of decision tree classifier:

```pseudo
from sklearn.tree import DecisionTreeClassifier

# Initializing the Decision Tree Classifier
model = DecisionTreeClassifier()

# Fitting the model to the training data
model.fit(X_train, y_train)

# Making predictions on test data
y_pred = model.predict(X_test)
```

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

> **Note**: The output may vary based on dataset randomness, train-test split, hyperparameters, or changes in scikit-learn and execution environment.

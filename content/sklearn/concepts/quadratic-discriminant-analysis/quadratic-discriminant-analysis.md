---
Title: 'Quadratic Discriminant Analysis'
Description: 'Quadratic Discriminant Analysis is a technique that models each class with a quadratic decision boundary, assuming different covariance matrices for each class.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Scikit-learn'
  - 'Supervised Learning'
  - 'Unsupervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Sklearn, **Quadratic Discriminant Analysis (QDA)** is a classification technique that assumes that the data points within each class are normally distributed. Unlike **Linear Discriminant Analysis (LDA)**, which assumes a shared covariance matrix for all classes, QDA enables each class to have its own covariance matrix. This flexibility enables QDA to model more complex decision boundaries, making it suitable for datasets with overlapping classes or non-linear relationships between features.

## Syntax

```pseudo
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis

# Create a QDA model
model = QuadraticDiscriminantAnalysis(priors=None, reg_param=0.0, store_covariance=False, tol=0.0001)

# Fit the model to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)
```

- `priors`: The prior probabilities of the classes. If `None`, the class distribution is estimated from the training data. If specified, it should sum to 1. This allows control over the importance of each class.
- `reg_param`: The regularization parameter. A value greater than 0 applies regularization to the covariance estimates. Regularization can help in cases where the covariance matrices might be singular or near-singular.
- `store_covariance`: Whether to store the covariance matrices for each class. If `True`, the covariance matrix is explicitly computed and stored when `solver='svd'`. If `False`, it will not store the covariance matrices but will use them for prediction during training.
- `tol`: The tolerance value for the eigenvalue decomposition when using `solver='eigen'`. This helps control the precision of the eigenvalue computation.

## Example

The following example demonstrates the implementation of QDA:

```py
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a QDA model
model = QuadraticDiscriminantAnalysis()

# Fit the model to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, y_pred))
```

The above code produces the following output:

```shell
Accuracy: 1.0
```

## Codebyte Example

The following codebyte example demonstrates the implementation of QDA:

```codebyte/python
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=44)

# Create a QDA model
model = QuadraticDiscriminantAnalysis()

# Fit the model to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, y_pred))
```

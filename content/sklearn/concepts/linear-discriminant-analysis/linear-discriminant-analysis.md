---
Title: 'Linear Discriminant Analysis'
Description: 'Linear Discriminant Analysis aims to project data onto a lower-dimensional space while preserving the information that discriminates between different classes.'
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

In Sklearn, **Linear Discriminant Analysis (LDA)** is a supervised algorithm that aims to project data onto a lower-dimensional space while preserving the information that discriminates between different classes. LDA finds a set of directions in the original feature space that maximize the separation between the classes. These directions are called discriminant directions. By projecting the data onto these directions, LDA reduces the dimensionality of the data while retaining the information that is most relevant for classification.

## Syntax

```pseudo
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis

# Create an LDA model
model = LinearDiscriminantAnalysis(
        solver='svd',
        shrinkage=None,
        priors=None,
        n_components=None,
        store_covariance=False,
        tol=0.0001,
        covariance_estimator=None
)

# Fit the model to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)
```

- `solver`: The solver to be used. Common options include:
  - `svd`: Singular Value Decomposition (default).
  - `lsqr`: Least Squares Solution.
  - `eigen`: Eigenvalue Decomposition.
- `shrinkage`: Controls the amount of shrinkage applied to the covariance matrix. Common options include:
  - `None`: No shrinkage (default).
  - `auto`: Automatic shrinkage utilizing the Ledoit-Wolf lemma.
- `priors`: Prior probabilities of the classes. The default value is `None`.
- `n_components`: The number of components. The default value is `None`.
- `store_covariance`: If set to `True`, it explicitly calculates the covariance matrix when `solver` is set to `svd`. The default value is `False`.
- `tol`: The tolerance for the eigenvalue calculation. The default value is `0.0001`.
- `covariance_estimator`: Estimates the covariance matrices. The default value is `None`.

## Example

The following example demonstrates the implementation of LDA:

```py
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create an LDA model
model = LinearDiscriminantAnalysis()

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

The following codebyte example demonstrates the implementation of LDA:

```codebyte/python
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=44)

# Create an LDA model
model = LinearDiscriminantAnalysis()

# Fit the model to the training data
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, y_pred))
```

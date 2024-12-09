---
Title: 'Cross Decomposition'
Description: 'Analyzes the relationships between two datasets using latent variables to maximize covariance or correlation between the datasets.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Scikit-learn'
  - 'Supervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**Cross Decomposition** is a technique in machine learning that analyzes the relationships between two datasets by using latent variables to maximize covariance or correlation. This method is commonly used for tasks like data fusion, dimensionality reduction, and regression, especially when datasets have many features. In Scikit-learn, the `sklearn.cross_decomposition` module implements cross decomposition techniques such as Partial Least Squares (PLS) Regression and Canonical Correlation Analysis (CCA).

## Syntax

### Partial Least Squares Regression

```pseudo
from sklearn.cross_decomposition import PLSRegression

model = PLSRegression(n_components=2)
```

### Canonical Correlation Analysis

```pseudo
from sklearn.cross_decomposition import CCA

model = CCA(n_components=2)
```

- `n_components`: Specifies the number of components to extract. This is the dimensionality of the latent space.

## Example

This example demonstrates the use of Partial Least Squares Regression to find relationships between two datasets:

```py
import numpy as np
from sklearn.cross_decomposition import PLSRegression

# Create two datasets
X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
Y = np.array([[1], [2], [3]])

# Define the model
pls = PLSRegression(n_components=2)

# Fit the model
pls.fit(X, Y)

# Transform the datasets into the latent space
X_transformed, Y_transformed = pls.transform(X, Y)

print("X in latent space:")
print(X_transformed)

print("\nY in latent space:")
print(Y_transformed)
```

This example results in the following output:

```shell
X in latent space:
[[ -1.41421356e+00   0.00000000e+00]
 [  1.73205081e-16   0.00000000e+00]
 [  1.41421356e+00   0.00000000e+00]]

Y in latent space:
[[-1.41421356]
 [ 0.        ]
 [ 1.41421356]]
```

- The input datasets `X` and `Y` are projected into a shared latent space with reduced dimensionality.
- The transformed datasets (`X_transformed` and `Y_transformed`) now maximize the covariance between their components.

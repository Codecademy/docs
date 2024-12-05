---
Title: 'Gaussian Processes'
Description: 'Predicts outcomes as distributions, assuming any set of input points follows a joint Gaussian distribution.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Scikit-learn'
  - 'Supervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Gaussian Processes** are a supervised learning framework that predicts outcomes as distributions, assuming any set of input points follows a joint Gaussian distribution.

They are beneficial for modeling complex relationships and estimating the confidence of predictions.

Gaussian Processes are implemented in Scikit-learn via **`GaussianProcessRegressor`** and **`GaussianProcessClassifier`**.

## Syntax

[Scikit-learn](https://www.codecademy.com/resources/docs/sklearn) provides the general [`sklearn.gaussian_process`](https://scikit-learn.org/stable/modules/gaussian_process.html) class for implementing all the essential Gaussian Processes.

Under this class, you can use the [`GaussianProcessRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html#sklearn.gaussian_process.GaussianProcessRegressor) class for regression tasks, and the [`GaussianProcessClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier) class for classification tasks.

Here is the basic syntax for using them:

### `GaussianProcessRegressor`

```pseudo
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.gaussian_process.kernels import RBF

# Define the Gaussian Process Regressor
gp_regressor = GaussianProcessRegressor(kernel=RBF(), alpha=1e-10)
```

- `kernel`: Defines the covariance function of the Gaussian Process. For example, `RBF()` represents a radial basis function kernel, which measures similarity between points.
- `alpha`: Adds noise to the diagonal of the covariance matrix, useful for handling numerical stability during regression.

### `GaussianProcessClassifier`

```pseudo
from sklearn.gaussian_process import GaussianProcessClassifier

# Define the Gaussian Process Classifier
gp_classifier = GaussianProcessClassifier(kernel=None, n_restarts_optimizer=10)
```

- `kernel`: Defines the covariance function of the Gaussian Process. If set to `None`, the classifier uses the default radial basis function (RBF) kernel.
- `n_restarts_optimizer`: Specifies the number of restarts for the optimizer when finding the best hyperparameters. Increasing this value may improve performance at the cost of computation time.

## Example

This example demonstrates using `GaussianProcessRegressor` to model a sine function:

```py
import numpy as np
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.gaussian_process.kernels import RBF

# Generate sample data
X = np.linspace(0, 10, 100).reshape(-1, 1)
y = np.sin(X).ravel() + 0.1 * np.random.normal(size=100)  # Add noise

# Define the kernel
kernel = RBF(length_scale=1.0)

# Train the Gaussian Process Regressor
gp = GaussianProcessRegressor(kernel=kernel, alpha=0.1)
gp.fit(X, y)

# Make predictions
X_test = np.linspace(0, 10, 100).reshape(-1, 1)
y_pred, sigma = gp.predict(X_test, return_std=True)

print("First 5 Predictions:", y_pred[:5])
print("First 5 Uncertainties (std_dev):", sigma[:5])
```

This example results in the following output:

```shell
First 5 Predictions: [ 0.053  0.087  0.119  0.148  0.175]
First 5 Uncertainties (std_dev): [0.1 0.1 0.1 0.1 0.1]
```

## Codebyte Example

Try this example to experiment with `GaussianProcessRegressor` for modeling data:

```codebyte/python
import numpy as np
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.gaussian_process.kernels import Matern

# Sample data
X = np.array([[1], [3], [5], [6], [8]])
y = np.array([2.5, 0.0, 1.5, 2.0, 3.0])

# Define and fit the model
kernel = Matern(nu=1.5)
gp = GaussianProcessRegressor(kernel=kernel, alpha=0.01)
gp.fit(X, y)

# Make predictions
X_test = np.linspace(0, 10, 20).reshape(-1, 1)
y_pred, sigma = gp.predict(X_test, return_std=True)

print("Predicted values:", y_pred[:5])
print("Prediction uncertainty:", sigma[:5])
```

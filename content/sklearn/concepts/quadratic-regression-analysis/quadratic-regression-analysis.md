---
Title: 'Quadratic Regression Analysis'
Description: 'Quadratic regression analysis is a supervised learning technique that models non-linear behaviors such as a parabolic shape with a quadratic equation.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Quadratic Regression Analysis**, also known as second-order regression analysis, is a supervised learning technique that models non-linear behaviors, such as a parabolic shape, using a quadratic equation. The quadratic equation is a polynomial of the second degree, which can be written in the form:

![The quadratic equation](https://raw.githubusercontent.com/Codecademy/docs/main/media/quadratic-equation.png)

The goal of quadratic regression is to fit this equation to the observed data, providing a more refined, non-linear model of the data than linear regression.

## Syntax

In Scikit-Learn, quadratic regression is performed using the combination of `PolynomialFeatures` and `LinearRegression`.

```pseudo
sklearn.preprocessing.PolynomialFeatures(degree=2, *, interaction_only=False, include_bias=True, order='C')
model = LinearRegression(fit_intercept=True, copy_X=True, n_jobs=None, positive=False)
```

`PolynomialFeatures` has the following parameters:

- `degree` (int, default=2): The degree of the polynomial features. For quadratic regression, this is set to `2`.
- `interaction_only` (bool, default=False): If `True`, only interaction features are produced (no powers of features).
- `include_bias` (bool, default=True): If `True`, includes a bias column (constant term) in the output features.
- `order` (str, default='C'): Order of the output array. 'C' means row-major (C-style), and 'F' means column-major (Fortran-style).

`LinearRegression` has the following parameters:

- `fit_intercept`: Determines whether the model should calculate an intercept term. If `False`, the model is forced through the origin.
- `copy_X`: If `True`, creates a deep copy of the input data to avoid modifying the original; otherwise, the input data might be overwritten.
- `n_jobs`: Specifies the number of CPU cores to use for parallel computations. `-1` uses all available cores.
- `positive`: If `True`, ensures that all coefficients are constrained to be positive values.

## Example

The example below shows quadratic regression analysis by generating polynomial features with `PolynomialFeatures`, fitting a `LinearRegression` model, and making predictions.

```py
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Define sample training data and labels
training_data = np.array([[1], [2], [3], [4]])
labels = np.array([1, 4, 9, 16])  # Example quadratic relationship: y = x^2

# Define polynomial features for interaction terms only and without bias term
poly = PolynomialFeatures(interaction_only=True, include_bias=False)
model = LinearRegression()

# Transform training data to include polynomial features and fit the model
poly_features = poly.fit_transform(training_data)
model.fit(poly_features, labels)

# Define sample test data
test_data = np.array([[5], [6]])

# Transform test data with the same PolynomialFeatures instance and predict labels
test_poly_features = poly.transform(test_data)
predictions = model.predict(test_poly_features)

print(predictions)
```

## Codebyte Example

Run the following codebyte to understand quadratic regression by fitting a linear model to polynomial features:

``` codebyte/python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures

# Create training (X_train) and testing (X_test) data
n = 100 # 100 data points
X_train = 6 * np.random.rand(n,1)-4
X_test = np.sort(X_train,axis = 0)
y = X_train**2 + 2*X_train + 3 + np.random.rand(n,1)

# Convert original training and testing data to polynomial features
poly = PolynomialFeatures(degree=2, include_bias=False)
X_train_poly = poly.fit_transform(X_train)

X_test_poly = poly.transform(X_test)

# Fit the polynomial features into the linear regression model
model = LinearRegression()
model.fit(X_train_poly, y)

# Predict test data
y_prediction = model.predict(X_test_poly)
print(y_prediction)
```

**Note:** The output predictions will vary due to the random generation of training data and noise in the model.

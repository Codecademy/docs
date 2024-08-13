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

**Quadratic regression analysis**, also known as second-order regression analysis, is a supervised learning technique that models non-linear behaviors such as a parabolic shape with a quadratic equation.

The quadratic equation is a polynomial equation of the second degree, which can be written in the form:

![The quadratic equation](https://raw.githubusercontent.com/Codecademy/docs/main/media/quadratic-equation.png)

The goal of quadratic regression is to fit this equation to the observed data, providing a more refined, non-linear model of the data than linear regression.

## Syntax

In Scikit-Learn, quadratic regression is performed using the combination of PolynomialFeatures and LinearRegression.

```pseudo
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Define the model for the quadratic equation and create an instance of linear regression
poly = PolynomialFeatures(degree=2, interaction_only=True, include_bias=False)
model = LinearRegression()

# Fit the quadratic equation into the linear regression model with the training data and labels
poly_features = poly.fit_transform(training_data)
model.fit(poly_features, labels)

# Predict labels for test data
predictions = model.predict(test_data)
```

PolynomialFeatures has parameters for:

- `degree`: In this case, for a quadratic equation, it is 2 by default.
- `interaction_only`: If True, only interaction features are produced; this includes only features that are products of single degree input features, terms with power of 2 or more are not included.
- `include bias`: If True, the function will include a bias column in which all polynomial powers are 0 (the value of `c` in the quadratic equation above). We turn this off since we are plugging the poly features into a linear regression model which will take this into consideration by default.

LinearRegression has parameters for:

- `fit_intercept`: If True, the function will calculate the intercept for the model.
- `copy_X`: If True, the function will create a deep copy of X, otherwise it may be overwritten.
- `n_jobs`: Specifies the number of parallel jobs to compute the model if more than 1 is needed for larger problems.
- `positive`: If True, forces the coefficients to be positive. This may help identify a more correct model in the presence of noisy data but introduces potential bias.

## Codebyte Example

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
X_test_poly = poly.fit_transform(X_test)

# Fit the polynomial features into the linear regression model
model = LinearRegression()
model.fit(X_train_poly, y)

# Predict test data
y_prediction = model.predict(X_test_poly)
```

---
Title: 'GLM'
Description: 'Extends linear regression to handle non-linear relationships between variables.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Linear Regression'
  - 'Machine Learning'
  - 'Python'
  - 'Statistics'
  - 'Supervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**Generalized Linear Model (GLM)** is a statistical tool that helps us understand relationships between variables. Specifically, it predicts the value of a dependent variable (the target variable that needs to be predicted) based on one or more independent variables (the inputs or factors we think influence it). GLMs are an extension of regular linear regression, designed to handle more complex scenarios.

## Syntax

GLMs in Python are commonly implemented using the `statsmodels` library. Here's the basic syntax:

```pseudo
import statsmodels.api as sm

# Fit the GLM model
model = sm.GLM(y, X, family=sm.families.Family())
results = model.fit()

- `y`: The dependent variable that needs to be predicted.
- `X`: The independent variable that is used to model the relationship with the `y` variable.
- `family=sm.families.Family()`: Specifies the distribution family for the GLM (e.g., Gaussian() for Poisson(), etc.)
```

Available family distributions include:

- [`sm.families.Family()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.Family.html): The parent class for one-parameter exponential families
- [`sm.families.Gaussian()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.Gaussian.html): For continuous outcomes
- [`sm.families.Binomial()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.Binomial.html): For binary outcomes (0/1 data)
- [`sm.families.Gamma()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.Gamma.html): For positive continuous data
- [`sm.families.Poisson()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.Poisson.html): For count data
- [`sm.families.InverseGaussian()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.InverseGaussian.html): For positive continuous data with inverse Gaussian distribution
- [`sm.families.NegativeBinomial()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.NegativeBinomial.html): For overdispersed count data
- [`sm.families.Tweedie()`](https://www.statsmodels.org/stable/generated/statsmodels.genmod.families.family.Tweedie.html): For compound Poisson distributions

Source: [statsmodels GLM documentation](https://www.statsmodels.org/stable/_modules/statsmodels/genmod/generalized_linear_model.html#GLM)

## Example

Here's an example of fitting a GLM using the famous `iris` dataset to predict petal length:

```py
import statsmodels.api as sm
from sklearn.datasets import load_iris
import numpy as np

# Load and prepare the iris dataset
iris = load_iris()
X = iris.data[:, [0, 1]]  # using sepal length and sepal width
y = iris.data[:, 2]       # predicting petal length

# Add constant term
X = sm.add_constant(X)

# Fit GLM with Gaussian family (identity link)
model = sm.GLM(y, X, family=sm.families.Gaussian())
results = model.fit()

# Print summary
print(results.summary())

# Make a prediction for a flower with sepal length=5.0 and sepal width=3.5
new_flower = np.array([1, 5.0, 3.5])  # include constant term
new_flower = new_flower.reshape(1, -1)  # Reshape to 2D array for prediction
prediction = results.predict(new_flower)
print("\nPredicted petal length:", prediction[0])
```

Here is the output of the code:

```shell
                 Generalized Linear Model Regression Results
==============================================================================
Dep. Variable:                      y   No. Observations:                  150
Model:                            GLM   Df Residuals:                      147
Model Family:                Gaussian   Df Model:                            2
Link Function:               Identity   Scale:                         0.41794
Method:                          IRLS   Log-Likelihood:                -145.89
Date:                Sun, 01 Dec 2024   Deviance:                       61.437
Time:                        19:50:30   Pearson chi2:                     61.4
No. Iterations:                     3   Pseudo R-squ. (CS):             0.9984
Covariance Type:            nonrobust
==============================================================================
                 coef    std err          z      P>|z|      [0.025      0.975]
------------------------------------------------------------------------------
const         -2.5248      0.563     -4.481      0.000      -3.629      -1.420
x1             1.7756      0.064     27.569      0.000       1.649       1.902
x2            -1.3386      0.122    -10.940      0.000      -1.578      -1.099
==============================================================================

Predicted petal length: 1.6680197099857788
```

## Codebyte Example

Here's a codebyte example that demonstrates the use of GLM to predict house prices:

```codebyte/python
import numpy as np
import statsmodels.api as sm

# Generate sample house data
np.random.seed(42)
n_samples = 100

# Generate features: square footage (1000-3000 sq ft) and bedrooms (2-5)
sq_footage = np.random.uniform(1000, 3000, n_samples)
bedrooms = np.random.randint(2, 6, n_samples)

# Combine features
X = np.column_stack((sq_footage, bedrooms))
X = sm.add_constant(X)  # Add intercept term

# Generate house prices (in thousands)
# Base price: 100k + (200 per sq ft) + (50k per bedroom) + some random noise
y = 100 + 0.2 * X[:, 1] + 50 * X[:, 2] + np.random.normal(0, 25, n_samples)

# Fit GLM with Gaussian family
model = sm.GLM(y, X, family=sm.families.Gaussian())
results = model.fit()

# Print model summary
print("House Price Prediction Model Summary:")
print(results.summary())

# Make a prediction for a 2000 sq ft house with 3 bedrooms
new_house = np.array([1, 2000, 3])  # [constant, sq_footage, bedrooms]
new_house = new_house.reshape(1, -1)  # Reshape to 2D array for prediction
prediction = results.predict(new_house)
print("\nPredicted price for a 2000 sq ft house with 3 bedrooms:")
print(f"${prediction[0]:,.2f}k")
```

The example demonstrates:

- Creating realistic house data with square footage and number of bedrooms.
- Generating prices based on: ($100k base + $200/sq ft + $50k/bedroom).
- Using GLM to predict house prices.
- Making a practical prediction example for a specific house.

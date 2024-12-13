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

gamma_model = sm.GLM(data.endog, data.exog, family=sm.families.Gamma())
```

- `data.endog`: The dependent variable (target) being modeled, representing the outcomes to predict.
- `data.exog`: The independent variables (predictors), structured as a design matrix including features.
- `family=sm.families.Gamma()`: Specifies that the dependent variable follows a Gamma distribution, suitable for modeling positive continuous data.

Available family distributions include:

- `sm.families.Gaussian()`: For continuous outcomes
- `sm.families.Binomial()`: For binary outcomes (0/1 data)
- `sm.families.Gamma()`: For positive continuous data
- `sm.families.Poisson()`: For count data
- `sm.families.InverseGaussian()`: For positive continuous data with inverse Gaussian distribution
- `sm.families.NegativeBinomial()`: For overdispersed count data
- `sm.families.Tweedie()`: For compound Poisson distributions

## Example

Here's an example of fitting a GLM using the famous `iris` dataset to predict petal length:

```py
import statsmodels.api as sm
from sklearn.datasets import load_iris
import numpy as np

# Load and prepare the iris dataset
iris = load_iris()
X = iris.data[:, [0, 1]]  # Using sepal length (0) and sepal width (1)
y = iris.data[:, 2]       # Predicting petal length (2)

# Add constant term (intercept) to the predictor variables
X = sm.add_constant(X)

# Fit GLM with Gaussian family (identity link) for continuous outcome
model = sm.GLM(y, X, family=sm.families.Gaussian())  # Gaussian family for continuous data
results = model.fit()

# Print the summary of the model
print(results.summary())

# Make a prediction for a flower with sepal length=5.0 and sepal width=3.5
new_flower = np.array([1, 5.0, 3.5])  # Include constant term (1) for the intercept
new_flower = new_flower.reshape(1, -1)  # Reshape to 2D array for prediction
prediction = results.predict(new_flower)

# Output the predicted petal length
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
Date:                Wed, 11 Dec 2024   Deviance:                       61.437
Time:                        15:49:05   Pearson chi2:                     61.4
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

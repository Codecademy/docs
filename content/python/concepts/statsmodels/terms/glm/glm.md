---
Title: 'GLM'
Description: 'Generalized Linear Models (GLM) are a type of regression model that extends linear regression to include non-linear relationships between the independent and dependent variables.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Linear Regression'
  - 'Machine Learning'
  - 'Mathematics'
  - 'Python'
  - 'Statistics'
  - 'Supervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**Generalized Linear Model (GLM)** is a statistical tool that helps us understand relationships between variables. Specifically, it predicts the value of a dependent variable (the thing we’re trying to understand or forecast) based on one or more independent variables (the inputs or factors we think influence it). GLMs are an extension of regular linear regression, designed to handle more complex scenarios.

## Syntax

GLMs in Python are typically implemented using the statsmodels library. Here's the basic syntax:

```python
import statsmodels.api as sm

# Fit the GLM model
model = sm.GLM(y,                    # Dependent variable
               X,                    # Independent variables
               family=sm.families.Family())  # Distribution family
results = model.fit()
```

Common family distributions include:
- `sm.families.Gaussian()`: For continuous outcomes
- `sm.families.Binomial()`: For binary outcomes
- `sm.families.Poisson()`: For count data
- `sm.families.Gamma()`: For positive continuous data

Source: [statsmodels GLM documentation](https://www.statsmodels.org/stable/_modules/statsmodels/genmod/generalized_linear_model.html#GLM)

## Example

Here's an example of fitting a GLM using the famous iris dataset to predict petal length.

```python
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
prediction = results.predict(new_flower)
print("\nPredicted petal length:", prediction[0])
```

Here is the output of the above code:

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

Click here for more examples: [statsmodels GLM documentation](https://www.statsmodels.org/stable/glm.html)
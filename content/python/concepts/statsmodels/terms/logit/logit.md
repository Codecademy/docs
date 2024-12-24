---
Title: 'Logit'
Description: 'Returns the log-odds of a binary outcome using logistic regression.'
Subjects:
  - 'Python'
  - 'Statistics'
Tags:
  - 'Logit'
  - 'Logistic Regression'
  - 'Statsmodels'
CatalogContent:
  - 'learn-statistics'
  - 'paths/data-science-inf'
---

**Logit** is a term used in statistics, specifically in the context of logistic regression. It represents the log-odds of a binary outcome, mapping probabilities from the 0 to 1 range to the entire real number line. The **`.Logit()`** function is a key part of many statistical models, particularly in binary classification tasks.

## Syntax

```pseudo
statsmodels.api.Logit(endog, exog)
```

- `endog`: The dependent (binary) variable, which must be a binary outcome (0 or 1).
- `exog`: The independent variables (features or predictors).

## Example

This example demonstrates how to use the `.Logit()` function in the `statsmodels` library to perform logistic regression:

```py
import statsmodels.api as sm

# Example data
X = sm.add_constant([[1], [2], [3], [4], [5]])  # Adding a constant for the intercept
y = [0, 0, 1, 1, 1]

# Fitting the logistic regression model
model = sm.Logit(y, X)
result = model.fit()

# Output the results
print(result.summary())
```

> **Note:** The dependent variable (`y`) must contain only binary values (0 or 1) for the logistic regression to be valid.

This example produces a summary of the logistic regression model's results, showing coefficients, standard errors, p-values, and other statistics relevant to evaluating the model fit:

```shell
                           Logit Regression Results
==============================================================================
Dep. Variable:                      y   No. Observations:                    5
Model:                          Logit   Df Residuals:                        3
Method:                           MLE   Df Model:                            1
Date:                Tue, 24 Dec 2024   Pseudo R-squ.:                   1.000
Time:                        12:28:45   Log-Likelihood:            -5.0138e-10
converged:                      False   LL-Null:                       -3.3651
Covariance Type:            nonrobust   LLR p-value:                  0.009480
==============================================================================
                 coef    std err          z      P>|z|      [0.025      0.975]
------------------------------------------------------------------------------
const       -110.4353   2.23e+05     -0.000      1.000   -4.38e+05    4.38e+05
x1            44.2438   9.07e+04      0.000      1.000   -1.78e+05    1.78e+05
==============================================================================

Complete Separation: The results show that there iscomplete separation or perfect prediction.
In this case the Maximum Likelihood Estimator does not exist and the parameters
are not identified.
```

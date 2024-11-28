---
Title: 'Logit'
Description: 'Returns the log-odds of a binary outcome using logistic regression.'
Subjects:
  - 'Python'
  - 'Statistics'
Tags:
  - 'logit'
  - 'logistic-regression'
  - 'statsmodels'
CatalogContent:
  - 'learn-statistics'
  - 'path/python-data-science'
---

## Introduction

**Logit** is a term used in statistics, specifically in the context of logistic regression. It represents the log-odds of a binary outcome, mapping probabilities from the 0 to 1 range to the entire real number line. The **logit** function is a key part of many statistical models, particularly in binary classification tasks.

## Syntax

```python
statsmodels.api.Logit(endog, exog)
endog: The dependent (binary) variable, which must be a binary outcome (0 or 1).
exog: The independent variables (features or predictors).
Example
This example demonstrates how to use the Logit function in the statsmodels library to perform logistic regression.

python:

import statsmodels.api as sm

# Example data
X = sm.add_constant([[1], [2], [3], [4], [5]])  # Adding a constant for the intercept
y = [0, 0, 1, 1, 1]

# Fitting the logistic regression model
model = sm.Logit(y, X)
result = model.fit()

# Output the results
print(result.summary())
Note: The dependent variable (y) must contain only binary values (0 or 1) for logistic regression to be valid.

Output
This example produces a summary of the logistic regression model's results, showing coefficients, standard errors, p-values, and other statistics relevant to evaluating the model fit.

Codebyte Example

codebyte/python:

import statsmodels.api as sm

# Example data
X = sm.add_constant([[1], [2], [3], [4], [5]])  # Adding a constant for the intercept
y = [0, 0, 1, 1, 1]

# Fitting the logistic regression model
model = sm.Logit(y, X)
result = model.fit()

# Output the results
result.summary()
This code performs the logistic regression and outputs the summary directly in an interactive code environment.

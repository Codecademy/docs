---
Title: 'Diagnostic Plots'
Description: 'Diagnostic plots are visual tools used to assess the validity of regression model assumptions, detect anomalies, and evaluate model performance.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
Tags:
  - 'Statistics'
  - 'Properties'
  - 'Models'
  - 'Data'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

Diagnostic plots are essential tools for evaluating the assumptions and performance of regression models. In the context of linear regression, these plots help identify potential issues such as non-linearity, non-constant variance, outliers, high leverage points, and collinearity. The `statsmodels` library in Python provides several functions to generate these diagnostic plots, aiding in assessing model fit and validity.

Common diagnostic plots include:

- **Residual plots**: Check for homoscedasticity and non-linearity.
- **Q-Q plots**: Assess the normality of residuals.
- **Leverage plots**: Identify influential points.
- **Scale-location plots**: Detect patterns in residual variance.

## Syntax

There are several different methods for generating diagnostic plots in statsmodels. Two common methods are `plot_partregress_grid()` and `plot_regress_exog()`. These methods work with a fitted regression results object.

### `plot_partregress_grid()`

The `plot_partregress_grid()` method generates diagnostic plots for all explanatory variables in the model. It helps assess the relationship between the residuals and each independent variable.

The syntax for using `plot_partregress_grid()` is:

```psuedo
results.plot_partregress_grid()
```

- `results` refers to the fitted regression results object.

### `plot_regress_exog()`

The `plot_regress_exog()` method generates residual plots for a specific independent variable. This can help check the assumption of linearity with respect to a particular predictor.

The syntax for using `plot_regress_exog()` is:

```pseudo
results.plot_regress_exog(exog_idx)
```

- `results` refers to the fitted regression results object.
- `exog_idx` is the index of the explanatory variable whose relationship with the dependent variable you want to plot.

## Example

Below is an example demonstrating how to generate diagnostic plots for a linear regression model using `statsmodels`:

```py
import statsmodels.api as sm
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Create synthetic data
np.random.seed(0)
X = np.random.rand(100, 2)
X = sm.add_constant(X)  # Add constant (intercept)
y = X[:, 1] + X[:, 2] + np.random.randn(100)  # Dependent variable with some noise

# Fit linear regression model
model = sm.OLS(y, X)
results = model.fit()

# Generate diagnostic plots for all variables
fig = plt.figure(figsize=(10, 8))
fig = sm.graphics.plot_partregress_grid(results)
plt.show()

# Alternatively, generate a residual plot for the first independent variable
fig = plt.figure(figsize=(10, 8))
fig = sm.graphics.plot_regress_exog(results, 1)
plt.show()
```

The output will be as follows:

![Diagnostic plots for all variables](https://raw.githubusercontent.com/Codecademy/docs/main/media/partial-regression-plot.png)

![A residual plot for the first independent variable](https://raw.githubusercontent.com/Codecademy/docs/main/media/regression-plot-for-x1.png)

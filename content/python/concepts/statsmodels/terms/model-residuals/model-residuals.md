---
Title: 'Model Residuals'
Description: 'Analyzes residuals for Python statistical models, measure model performance, detect patterns, and diagnose problems using concise syntax and examples.'
Subjects:
  - 'AI'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Data'
  - 'Linear Regression'
  - 'Logistic Regression'
  - 'Models'
  - 'Statsmodels'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Model residuals** are calculated as the differences between observed and predicted values for a statistical model. This method measures error or deviation for each data point by using the formula:

![Model Residuals formula](https://raw.githubusercontent.com/Codecademy/docs/main/media/model-residuals-example.png)

Residuals are a key concept in statistical modeling. They are used to evaluate the goodness of fit, identify patterns, detect outliers, and validate assumptions about the model. Analyzing residuals helps enhance model accuracy and reliability by providing information about areas where the model is underperforming.

## Syntax

Here is the general syntax for calculating Model Residuals:

```pseudo
# Fit the model (if not already fitted)
model = sm.OLS(y, X).fit()
# Retrieve the residuals
residuals = model.resid
```

- `sm.OLS(y, X)`: Defines the `OLS` regression model with `y` as the dependent variable and `X` as the independent variable.
- `.fit()`: Fits the model to the data.
- `model.resid`: Extracts the residuals from the fitted model.

## Example

In this example, a linear regression model is fitted using statsmodels, and the residuals are calculated:

```py
import statsmodels.api as sm
import numpy as np

# Step 1: Create sample data
X = np.random.rand(5, 1)  # Independent variable (100 samples)
y = 3 * X + np.random.randn(5, 1)  # Dependent variable with noise

# Step 2: Add constant to X for the intercept term
X = sm.add_constant(X)

# Step 3: Fit the OLS model
model = sm.OLS(y, X).fit()

# Step 4: Calculate residuals
residuals = model.resid

# Step 5: Display residuals
print("Model Residuals:\n", residuals)
```

Here is the output for the code:

```shell
Model Residuals:
[0.07524913 -1.02179262  1.42678355 -1.50131552  1.02107546]
```

These values indicate how much each prediction deviates from the true value. A smaller residual means the prediction is closer to the actual value, while larger residuals indicate a greater deviation.

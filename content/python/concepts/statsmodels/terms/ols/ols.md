---
Title: 'Ordinary Least Squares'
Description: 'Uses Ordinary Least Squares (OLS) to perform linear regression in order to reduce prediction errors and evaluate associations between variables.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'Data'
  - 'Linear Regression'
  - 'Machine Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science-foundations'
---

**Ordinary least squares** (OLS) is a statistical method that reduces the sum of squared residuals to assess the correlation between independent and dependent variables. In linear regression, it is widely used to predict values and analyze correlations between variables.

## Syntax

Here's syntax to implement Ordinary Least Squares in Python:

```pseudo
import statsmodels.api as sm  # Import the statsmodels library

# Add a constant to the independent variable(s) for the intercept
X = sm.add_constant(X)  # Method to add a constant to X

# Fit the OLS model
model = sm.OLS(y, X).fit()  # `OLS` function applied to y (dependent variable) and X (independent variables)

# Access the model summary
model.summary()  # Method to get summary statistics
```

- `sm.add_constant(x)`: Adds an intercept (constant term) to the independent variables X.
- `sm.OLS(y, X)`: Creates the OLS model with y as the dependent variable and X as the independent variables.
- `model.summary()`: Displays the model's results, including coefficients and `R-squared`values.

## Example

Here's an example predicting `test_scores` based on `hours_studied`:

```py
import statsmodels.api as sm
import matplotlib.pyplot as plt
import numpy as np

# Hours studied and corresponding test scores
hours_studied = [1, 2, 3, 4, 5]
test_scores = [50, 55, 60, 65, 70]

# Add a constant to the independent variable
hours_with_constant = sm.add_constant(hours_studied)

# Fit the OLS model
model = sm.OLS(test_scores, hours_with_constant).fit()

# Display the summary of the model
print(model.summary())

# Predict the test scores using OLS model
predicted_scores = model.predict(hours_with_constant)

# Plot the data and line
plt.scatter(hours_studied, test_scores, color='blue', label='Observed data')
plt.plot(hours_studied, predicted_scores, color='red', label='Fitted line')

# Displaying the plot
plt.xlabel('Hours Studied')
plt.ylabel('Test Scores')
plt.title('OLS Regression: Test Scores vs Hours Studied')
plt.legend()

# Show the plot
plt.show()
```

! [Regression plot](https://raw.githubusercontent.com/Codecademy/docs/main/media/ols-model-example.png)

---
Title: 'Linear Regression Analysis'
Description: 'A machine learning technique used to predict a dependent variable from one or more independent variables, assuming a linear relationship between them.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Linear Regression'
  - 'Machine Learning'
  - 'Scikit-learn'
  - 'Supervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning'
---

In sklearn, **Linear Regression Analysis** is a machine learning technique used to predict a dependent variable based on one or more independent variables, assuming a linear relationship.

In simple linear regression, we predict the dependent variable `Y` using a single independent variable `X`, fitting the data to a straight line, often called as the `regression line`. The equation for the line is:

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

- **Y**: The dependent variable to be predicted.
- **β₀**: The intercept represents Y's predicted value when X has no effect.
- **β₁**: The coefficient measures the relationship between X and Y.
- **X**: The independent variable used to predict Y.
- **ε**: The error term representing the difference between the observed and predicted values of Y.

## Syntax

Here's the basic syntax for implementing linear regression analysis in Python:

```pseudo
from sklearn.linear_model import LinearRegression

# Create the model
model = LinearRegression()

# Fit the model
model.fit(X, y)

# Predict the dependent variable
predictions = model.predict(X)  # X is the input for which predictions are to be made
```

## Example

In this example, the dependent variable `y`is directly proportional to the independent variable `X`, showing a basic linear regression:

```py
# Import required libraries
import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Sample data (Simple Linear Regression)
# X: Independent variable, y: Dependent variable
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)  # Reshaping to 2D array for sklearn
y = np.array([1, 2, 3, 4, 5])

# Create the Linear Regression model
model = LinearRegression()

# Fit the model
model.fit(X, y)

# Make predictions
predictions = model.predict(X)

# Output the results
print(f"Intercept (β₀): {model.intercept_}")
print(f"Coefficient (β₁): {model.coef_[0]}")
print(f"Predictions: {predictions}")

# Plot the data and regression line
plt.scatter(X, y, color='red', label='Data Points')
plt.plot(X, predictions, color='green', label='Regression Line')
plt.xlabel('X')
plt.ylabel('y')
plt.title('Simple Linear Regression')
plt.legend()
plt.show()
```

The code outputs the following result:

```shell
Intercept (β₀): 0.0
Coefficient (β₁): 1.0
Predictions: [1. 2. 3. 4. 5.]
```

![A scatter plot showing the data points (red dots) and the corresponding regression line (green) representing the simple linear regression model.](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-regressin-analysis.png)

## Codebyte Example

```codebyte/python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Example data: Hours studied (X) and scores (y)
X = np.array([[1], [2], [3], [4], [5]])  # Hours studied
y = np.array([2, 4, 5, 4, 5])  # Scores achieved

# Create a linear regression model
model = LinearRegression()

# Train the model on the data
model.fit(X, y)

# Get the model's predictions
predictions = model.predict(X)

# Output the results
print("Intercept (β₀):", model.intercept_)
print("Coefficient (β₁):", model.coef_[0])
print("Predictions:", predictions)
plt.scatter(X, y, color='red', label='Data Points')
plt.plot(X, predictions, color='green', label='Regression Line')
plt.xlabel('X')
plt.ylabel('y')
plt.title('Simple Linear Regression')
plt.legend()
plt.show()
```

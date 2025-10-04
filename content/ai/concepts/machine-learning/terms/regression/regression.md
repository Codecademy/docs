---
Title: 'Regression'
Description: 'Regression models relationships between variables to predict a dependent variable utilizing one or more independent variables.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Machine Learning'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Regression** is a mathematical process used to model data by identifying a function that best represents its patterns. In machine learning, regression functions are used for predictive analysis.

There are various regression techniques and the choice depends on factors such as data distribution. A simple form is linear regression, represented by the equation:

```
y = a\*x + b
```

Visualizing this equation as a straight line on a 2D graph:

- `y`: The dependent (outcome) variable, plotted on the y-axis (vertical).
- `x`: The independent (predictor) variable, plotted on the x-axis (horizontal).
- `b`: The intercept, representing the value of `y` when `x = 0`.
- `a`: The slope, indicating how `y` changes when `x` increases by one unit.

## Example

The following code predicts a person's weight based on a person's height:

```py
import pandas as pd
import statsmodels.api as sm
import matplotlib.pyplot as plt

# Sample data
heights = [150, 152, 160, 172, 176, 176, 180, 189]
weights = [50, 65, 65, 70, 80, 90, 90, 89]

# Create a DataFrame
measurements = pd.DataFrame({'height': heights, 'weight': weights})

# Fit the linear regression model
model = sm.OLS.from_formula("weight ~ height", data=measurements)
results = model.fit()

# Print the summary of the model
print(results.summary())

# Plot the data and the regression line
plt.scatter(measurements['height'], measurements['weight'], label='Data')
plt.plot(measurements['height'], results.predict(measurements), color='red', label='Regression Line')
plt.xlabel('Height (cm)')
plt.ylabel('Weight (kg)')
plt.title('Height vs Weight with Regression Line')
plt.legend()

# Save the plot as an image file
plt.savefig('height-vs-weight-plot.png')

# Show the plot
plt.show()
```

This code performs linear regression using `statsmodels` to analyze the relationship between height and weight. It fits a model of the form `weight = a * height + b`, prints the regression summary, and visualizes the data with a scatter plot and a best-fit line.

The output of this code is as follows:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/height-vs-weight-plot.png)

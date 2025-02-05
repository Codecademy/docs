---
Title: 'Isotonic Regression'
Description: 'Isotonic Regression is a technique of using a free-form line to establish a non-linear path, created by a set of data points.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Booleans'
  - 'Datasets'
  - 'Matplotlib'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/intermediate-machine-learning-skill-path'
---

**Isotonic Regression** is a technique of using a free-form line to establish a non-linear path. The path is created by a set of data points. In this technique, predictor variables and target vairables increase or decrease, monotonically, in a non-oscilatory manner. The word "isotonic" (_iso_ and _tonos_) comes from the Greek, meaning _equal_ and _to stretch_, respectively.

## Syntax

This is the basic syntax for implementing Isotonic Regression in Python:

```pseudo
import numpy as np
from sklearn.isotonic import IsotonicRegression
import matplotlib.pyplot as plt

# Define predictor and target data
X = [list of predictor values]
Y = [list of target values]

# Initialize Isotonic Regression model
model = IsotonicRegression(increasing=True or False)

# Fit the model and transform the target data
Y_transformed = model.fit_transform(X, Y)

# Visualize the original data and the regression fit
plot.scatter(X, Y, label="Original Data")
plot.line(X, Y_transformed, label="Isotonic Fit", color="red")
plot.title("Isotonic Regression Example")
plot.xlabel("Predictor Variable")
plot.ylabel("Target Variable")
plot.legend()
plot.show()
```

- `increasing`: This is a boolean parameter that specifies whether the fitted values should increase monotonically (`True`) or decrease monotonically (`False`).
- `increasing=True` enforces a non-decreasing relationship between the predictor (`x`) and the target (`y`) variables.

## Example

The following is an example of Isotonic Regression in action:

```py
import numpy as np
import matplotlib.pyplot as plt
from sklearn.isotonic import IsotonicRegression

# Generate synthetic data with a non-monotonic relationship
np.random.seed(123)
x = np.linspace(0, 10, 15) # Predictor variables
y = np.sin(x) + np.random.normal(0, 0.2, len(x)) # Non-monotonic target variable with noise

# Initialize and fit Isotonic Regression model
iso_reg = IsotonicRegression(increasing=True)
y_isotonic = iso_reg.fit_transform(x, y)

# Plot the original data and Isotonic Regression fit
plt.figure(figsize=(8, 6))
plt.scatter(x, y, color='green', label='Original Data', marker='o')
plt.step(x, y_isotonic, color-'orange', label='Isotonic Fit', where='post', linewidth=2)
plt.title('Isotonic Regression on Non-Monotonic Data')
plt.xlabel('Predictor Variable (X)')
plt.ylabel('Target Variable (Y)')
plt.legend()
plt.grid(True)
plt.show()
```

The example results in the following output:

![Output for the above example on Isotonic Regression](https://raw.githubusercontent.com/Codecademy/docs/main/media/isotonic-regression-example.jpg)

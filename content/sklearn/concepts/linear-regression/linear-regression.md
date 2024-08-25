---
Title: 'Linear regression'
Description: 'Linear Regression is a Supervised Learning technique that Predicts a continuous output based on the linear relationship with input features.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Linear Regression'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Linear Regression** is a technique which is used to predict an unknown data(a.k.a unknown variable) using the known data. The unknown variable is known as dependent variable and the known data is called as independent variable. For instance, You have the data about savings and income of last few years. Linear regression can be used to predict your future unknown savings based on your future known income.

**Linear Regression equation : y=mx+b**

- `y` is the value you want to predict (like test savings).
- `x` is the value you have (like income).
- `m` is the slope of the line, showing how much `𝑦` changes for each unit change in `𝑥`.
- `b` is the intercept, the point where the line crosses the y-axis.

**Implementing Linear Regression with scikit-learn**

Let's dive into how to perform linear regression using scikit-learn with a step-by-step example.

**Step 1:** Start by importing the necessary libraries.

```py
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt
```

**Step 2:** Prepare Your Data.

Let's create a simple dataset where hours studied is the feature, and test scores are the target variable.

```py
# Sample data: hours studied vs. test score
X = np.array([[1], [2], [3], [4], [5]])  # Features (e.g., hours studied)
y = np.array([2, 4, 6, 8, 10])            # Target variable (e.g., test scores)
```

**Step 3:** Create and Train the Model.

Now, we’ll create a linear regression model and fit it to our data:

```py# Create the model
model = LinearRegression()

# Train the model
model.fit(X, y)
```

**Step 4:** Make predictions.

Once the model is trained, we can use it to make predictions on new data:

```py# Create the model
# Predict using the trained model
predictions = model.predict(np.array([[6], [7]]))
print(f"Predictions for 6 and 7 hours studied: {predictions}")
```

Here is the output for the above example:

```py#Output
Predictions for 6 and 7 hours studied: [12. 14.]
```

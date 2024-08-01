---
Title: 'Kernel Ridge Regression'
Description: 'A brief description.' # 150 char
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Python'
  - 'Scikit-learn'
CatalogContent:
  - 'paths/intermediate-machine-learning-skill-path'
---

**Kernel ridge regression** is a regression model that combines ridge regression with the kernel trick. Here's the breakdown:

## Ridge Regression

**Ridge regression** is a linear regression model with a least square loss function and L2 regularization. The loss function, equivalent to the sum of the coefficients squared, allows the linear regression model to find the best fit line on the training data as shown in the example below:

![Linear regression](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-regression-least-squares.png)

The L2 regularization adds a squared magnitude of the coefficient to penalize the loss function, distributing the impact of correlated features more evenly among the coefficients and preventing any one feature from dominating the model's predictions. This prevents the model from overfitting the data and stabilizes the solution.

## Applying the Kernel Trick

However, not all data can be separated linearly. In the real world, data can be randomly distributed, making it difficult to classify the data with linear regression as shown in the example below:

![Kernel trick](https://raw.githubusercontent.com/Codecademy/docs/main/media/kernel-trick.png)

The **kernel trick** allows us to form a more complex model in the original feature space without incurring huge computing costs required to transform the data into a higher dimensional space. It is more efficient and less expensive to use the kernel function, which is the dot product of x-transpose and y in 2-dimensional space, instead of doing more complicated computations in 4-dimensional space. The more dimensions you are working with, the more costly the computations. Because we are mapping data to a higher dimension, there is a greater chance that we may overfit the model and thus, ridge regression balances out the this critical issue by incorporating L2 regularization.

## Syntax

```pseudo
# Initialize the classifier
model = KernelRidge()

# Train the model with training data
model.fit(x_train, y_train)

# Use the model to predict the outcomes for testing: data
predictions = model.predict(x_test)
```

## Codebyte Example

```codebyte/python
from sklearn.datasets import load_iris
from sklearn.kernel_ridge import KernelRidge
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split

# Load the iris dataset
iris = load_iris()
  
# Store the feature matrix (X) and response vector (y)
X = iris.data
y = iris.target
 
# Split the data set into training and testing data sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
 
# Initialize the Kernel Ridge Regression classifier
krr = KernelRidge()
 
# Train the model with training data
krr.fit(X_train, y_train)

# Predict the outcomes for test data
y_pred = krr.predict(X_test)
 
# Calculate the R2 Score
r2 = r2_score(y_test, y_pred)
print(f'R2 Score: {r2}')
```
---
Title: 'Kernel Ridge Regression'
Description: 'Kernel ridge regression is a sophisticated linear regression model combined with L2 regularization and kernel trick to handle non-linearities that provide optimal solutions.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Python'
  - 'Scikit-learn'
CatalogContent:
  - 'paths/data-science'
  - 'paths/intermediate-machine-learning-skill-path'
---

**Kernel ridge regression** is a regression model that combines ridge regression with the kernel trick.

## Ridge Regression

**Ridge regression** is a linear regression model with a least square loss function and L2 regularization. The loss function combines the least square loss with the L2 regularization term and allows the linear regression model to find the best-fit line on the training data. It is shown in the example below:

![Linear regression](https://raw.githubusercontent.com/Codecademy/docs/main/media/linear-regression-least-squares.png)

The L2 regularization adds a squared magnitude of the coefficient to penalize the loss function, distributing the impact of correlated features more evenly among the coefficients and preventing any one feature from dominating the model's predictions. This prevents the model from overfitting the data and stabilizes the solution.

## Applying the Kernel Trick

However, not all data can be separated linearly. In the real world, data can be randomly distributed, making it difficult to classify the data with linear regression as shown in the example below:

![Kernel trick](https://raw.githubusercontent.com/Codecademy/docs/main/media/kernel-trick.png)

The **kernel trick** allows us to form a more complex model in the original feature space without incurring huge computing costs to transform the data into a higher dimensional space. It is more efficient and less expensive to use the kernel function, which is the dot product of x-transpose and y in 2-dimensional space, instead of doing more complicated computations in 4-dimensional space. The more dimensions you are working with, the more costly the computations. Because we are mapping data to a higher dimension, there is a greater chance that we may overfit the model, and thus, ridge regression balances out this critical issue by incorporating L2 regularization.

## Syntax

```pseudo
# Initialize the classifier
model = KernelRidge()
# Train the model with training data
model.fit(x_train, y_train)
# Use the model to predict the outcomes for testing data
predictions = model.predict(x_test)
```

`KernelRidge` has the following parameters:

- `alpha` (float or n-sized array of floats, default=1.0): Regularization strength to improve the conditioning of the problem and reduce variance of estimates.
- `interaction_only` (str, default='linear'): kernel mapping specified in `pairwise.PAIRWISE_KERNEL_FUNCTIONS`. Other options include radial basis function, laplacian, polynomial, exponential chi2 and sigmoid kernels.
- `gamma` (float, default=None): Gamma parameter for the kernel.
- `order` (float, default=3): Degree of the polynomial kernel; ignored by other kernels.
- `coef0` (float, default=1): Zero coefficient for polynomial and sigmoid kernels; ignored by other kernels.

## Example

The example below shows kernel ridge regression analysis by generating datasets, fitting training data in `KernelRidge` model, and making predictions on test data:

```py
import numpy as np
from sklearn.kernel_ridge import KernelRidge
from sklearn.datasets import make_regression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Load dataset
X, y = make_regression(n_samples=100, n_features=1, noise=0.1)

# Preprocess data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize Kernel Ridge instance
krr = KernelRidge(kernel='rbf', alpha=1.0, gamma=0.1)

# Model the training data
krr.fit(X_train, y_train)

# Predict the testing data
y_pred = krr.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')
```

Here is the output for the above example:

```shell
Mean Squared Error: 9.33325172522716
```

## Codebyte Example

```codebyte/python
import numpy as np
from sklearn.kernel_ridge import KernelRidge
from sklearn.datasets import make_moons
from sklearn.metrics import r2_score

# Create training (X,y) and testing (X_test) datasets
randoms = np.random.RandomState(42)
X = 5 * randoms.rand(100, 1)
y = np.sin(X).ravel()
y[::5] += 3 * (0.5 - randoms.rand(X.shape[0] // 5))
X_test = np.sin(X)

# Use KernelRidge to model the data with radial basis function kernel
krr = KernelRidge(alpha=1.0, kernel='rbf', gamma=0.1)
krr.fit(X, y)

# Predict test dataset
y_test = krr.predict(X_test)

# Evaluate the model with R2 score
r2 = r2_score(y, y_test)
print(f'R2 Score: {r2}')
```

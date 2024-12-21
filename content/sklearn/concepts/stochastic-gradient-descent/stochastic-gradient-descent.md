---
Title: 'Stochastic Gradient Descent'
Description: 'Stochastic Gradient Descent (SGD) aims to find the best set of parameters for a model that minimizes a given loss function.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Scikit-learn'
  - 'Supervised Learning'
  - 'Unsupervised Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In [Sklearn](https://www.codecademy.com/resources/docs/sklearn), **Stochastic Gradient Descent (SGD)** is a popular optimization algorithm that focuses on finding the best set of parameters for a model that minimizes a given loss function.

Unlike traditional [gradient descent](https://www.codecademy.com/resources/docs/ai/search-algorithms/gradient-descent), which calculates the gradient using the entire dataset, SGD computes the gradient using a single training example at a time. This makes it computationally efficient for large datasets.

Sklearn provides two primary classes for implementing SGD:

- `SGDClassifier`: Well-suited for classification tasks. Supports various loss functions and penalties for fitting linear classification models.
- `SGDRegressor`: Well-suited for regression tasks. Supports various loss functions and penalties for fitting [linear regression models](https://www.codecademy.com/resources/docs/sklearn/linear-regression-analysis).

## Syntax

Following is the syntax for implementing SGD using `SGDClassifier`:

```pseudo
from sklearn.linear_model import SGDClassifier

# Create an SGDClassifier model
model = SGDClassifier(loss="hinge", penalty="l2", max_iter=1000, random_state=42)

# Fit the classifier to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)
```

Following is the syntax for implementing SGD using `SGDRegressor`:

```pseudo
from sklearn.linear_model import SGDRegressor

# Create an SGDRegressor model
model = SGDRegressor(loss="squared_loss", penalty="l2", max_iter=1000, random_state=42)

# Fit the regressor to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)
```

- `loss`: Specifies the loss function.
  - For `SGDClassifier`, the options include `hinge` (default), `log`, and `modified_huber`.
  - For `SGDRegressor`, the options include `squared_loss` (default), `huber`, and `epsilon_insensitive`.
- `penalty`: Specifies the regularization penalty. Common options include `l2` (L2 regularization, default), `l1` (L1 regularization), and `elasticnet` (a combination of L1 and L2 regularization).
- `max_iter`: Specifies the maximum number of iterations for the optimization algorithm. The default value is `1000`. Excessive values can lead to overfitting or unnecessary computations.
- `random_state`: Specifies the random seed for reproducibility. The default value is `None`. Setting `random_state` ensures consistent results across runs by fixing the randomness of data splitting or model initialization.

## Example

The following example demonstrates the implementation of SGD using `SGDClassifier`:

```py
from sklearn.datasets import load_iris
from sklearn.linear_model import SGDClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create an SGDClassifier model
model = SGDClassifier(loss="hinge", penalty="l2", max_iter=1000, random_state=42)

# Fit the classifier to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)

# Evaluate the model's accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
```

The above code produces the following output:

```shell
Accuracy: 0.8
```

## Codebyte Example

The following codebyte example demonstrates the implementation of SGD using `SGDRegressor`:

```codebyte/python
from sklearn.datasets import load_diabetes
from sklearn.linear_model import SGDRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Load the Diabetes dataset
diabetes = load_diabetes()
X = diabetes.data
y = diabetes.target

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create an SGDRegressor model
model = SGDRegressor(loss="squared_loss", penalty="l2", max_iter=1000, random_state=42)

# Fit the regressor to the training data
model.fit(X_train, y_train)

# Make predictions on the new data
y_pred = model.predict(X_test)

# Evaluate the model's performance
m2e = mean_squared_error(y_test, y_pred)

print("Mean Squared Error:", m2e)
```

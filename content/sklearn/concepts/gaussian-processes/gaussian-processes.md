---
Title: 'Gaussian Processes'
Description: 'Gaussian Processes are a supervised learning algorithm that predicts outcomes as distributions, assuming that any set of input points follows a joint Gaussian distribution.'

Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Gaussian Processes** are a way to predict outcomes while estimating the confidence of these predictions. These processes assume that all of the points in a given dataset have a joint Gaussian distribution, meaning the relationship between these points has a pattern that can be described by a mean and a variance. Gaussian Processes are particularly useful when it comes to modeling complex relationships while taking the reliability of the predictions they produce into account.

## Syntax

[Scikit-learn](https://www.codecademy.com/resources/docs/sklearn) provides the general [`sklearn.gaussian_process`](https://scikit-learn.org/stable/modules/gaussian_process.html) class for implementing all the essential Gaussian Processes. 
Under this class, you can use the [`GaussianProcessRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html#sklearn.gaussian_process.GaussianProcessRegressor) class for regression tasks, and the [`GaussianProcessClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html#sklearn.gaussian_process.GaussianProcessClassifier) class for classification tasks. Here's the basic syntax for using them:

### `GaussianProcessRegressor`

```pseudo
from sklearn.gaussian_process import GaussianProcessRegressor

# Define the gaussian process regressor with desired parameters
gp_regressor = GaussianProcessRegressor(kernel=None, alpha=1e-10)

# Fit the model on the training data (X) and labels (y)
gp_regressor.fit(X, y)

# Predict the mean and standard deviation for new data points
y_pred, sigma = gp_regressor.predict(X, return_std=True)

```

### `GaussianProcessClassifier` 

```pseudo
from sklearn.gaussian_process import GaussianProcessClassifier

# Define the Gaussian Process with desired parameters
gp_classifier = GaussianProcessClassifier(kernel=None, n_restarts_optimizer=10)

# Fit the model on the training data (X) and labels (y)
gp_classifier.fit(X, y)

# Predict class probabilities for new data points
y_prob = gp_classifier.predict_proba(X)


```


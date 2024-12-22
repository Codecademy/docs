---
Title: 'Probability Calibration'
Description: 'Probability calibration improves the reliability of predicted probabilities from machine learning models.'
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

In [Sklearn](https://www.codecademy.com/resources/docs/sklearn), **Probability Calibration** is a technique used to improve the reliability of predicted probabilities from machine learning models. When a model outputs a probability, it makes a statement about the likelihood of a specific outcome.

A well-calibrated model ensures that these probabilities accurately reflect the true likelihoods, meaning the predicted probabilities align closely with observed outcomes.

Sklearn provides two primary methods for implementing probability calibration:

- **Platt Scaling**: Fits a logistic regression model to the model's output probabilities.
- **Isotonic Regression**: Fits a non-parametric isotonic regression model to the model's output probabilities.

## Syntax

The `CalibratedClassifierCV` class is used to implement probability calibration.

Platt Scaling uses a `sigmoid` function to map raw model scores to calibrated probabilities, ensuring they better reflect true likelihoods.

The sigmoid function, σ(x) = 1 / (1 + e^(-x)), maps any real-valued number to a range between 0 and 1.

In Platt Scaling, this function is parameterized as:

P(y=1 | x) = 1 / (1 + e^(-(A \* x + B)))

Where A and B are parameters learned during calibration.

Following is the syntax for implementing probability calibration using Platt Scaling:

```pseudo
from sklearn.calibration import CalibratedClassifierCV
from sklearn.linear_model import LogisticRegression

# Create a logistic regression classifier
model = LogisticRegression()

# Calibrate the classifier using Platt Scaling
model_calibrated = CalibratedClassifierCV(model, cv=5, method="sigmoid")

# Fit the calibrated classifier to the training data
# X_train: Features for the training set; y_train: Target labels for the training set
model_calibrated.fit(X_train, y_train)

# Make predictions using the calibrated classifier
y_pred_prob = model_calibrated.predict_proba(X_test)
```

Isotonic regression is a non-parametric regression technique that fits a piecewise constant, monotonic (increasing or decreasing) function to the data.

In the context of calibration, the isotonic method uses isotonic regression to map the model's raw probabilities to calibrated probabilities while preserving their relative order.

Following is the syntax for implementing probability calibration using Isotonic Regression:

```pseudo
from sklearn.calibration import CalibratedClassifierCV
from sklearn.linear_model import LogisticRegression

# Create a logistic regression classifier
model = LogisticRegression()

# Calibrate the classifier using Isotonic Regression
model_calibrated = CalibratedClassifierCV(model, cv=5, method="isotonic")

# Fit the calibrated classifier to the training data
# X_train: Features for the training set; y_train: Target labels for the training set
model_calibrated.fit(X_train, y_train)

# Make predictions using the calibrated classifier
y_pred_prob = model_calibrated.predict_proba(X_test)
```

- `cv`: The number of cross-validation folds. The default value is `None`.
- `method`: The calibration method. Common options include `sigmoid` (default) and `isotonic`.

## Example

The following example demonstrates the implementation of probability calibration using Platt Scaling:

```py
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.calibration import CalibratedClassifierCV
from sklearn.metrics import brier_score_loss

# Load the Diabetes Dataset
diabetes = load_diabetes()
X = diabetes.data
y = (diabetes.target > 126).astype(int) # Convert to binary classification

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a logistic regression classifier
model = LogisticRegression()

# Calibrate the classifier using Platt Scaling
model_calibrated = CalibratedClassifierCV(model, cv=5, method="sigmoid")

# Fit the calibrated classifier to the training data
model_calibrated.fit(X_train, y_train)

# Make predictions using the calibrated classifier
y_pred_prob = model_calibrated.predict_proba(X_test)[:, 1]

# Calculate the Brier score
brier_score = brier_score_loss(y_test, y_pred_prob)
print("Brier Score:", brier_score)
```

The above code produces the following output:

```shell
Brier Score: 0.17555317807611756
```

## Codebyte Example

The following example demonstrates the implementation of probability calibration using Isotonic Regression:

```codebyte/python
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.calibration import CalibratedClassifierCV
from sklearn.metrics import brier_score_loss

# Load the Diabetes Dataset
diabetes = load_diabetes()
X = diabetes.data
y = (diabetes.target > 126).astype(int) # Convert to binary classification

# Create training and testing sets by splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a logistic regression classifier
model = LogisticRegression()

# Calibrate the classifier using Isotonic Regression
model_calibrated = CalibratedClassifierCV(model, cv=5, method="isotonic")

# Fit the calibrated classifier to the training data
model_calibrated.fit(X_train, y_train)

# Make predictions using the calibrated classifier
y_pred_prob = model_calibrated.predict_proba(X_test)[:, 1]

# Calculate the Brier score
brier_score = brier_score_loss(y_test, y_pred_prob)

print("Brier Score:", brier_score)
```

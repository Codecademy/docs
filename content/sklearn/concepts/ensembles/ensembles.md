---
Title: 'Ensembles'
Description: 'A machine learning technique that incorporates predictions from multiple models to enhance accuracy and reliability.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Classification'
  - 'Data'
  - 'Machine Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'paths/intermediate-machine-learning-skill-path'
  - 'paths/data-science'
---

**Ensembles** are machine learning techniques that combine the predictions from multiple models in order to increase accuracy, robustness, and reliability in classification and regression tasks. Scikit-learn provides tools to build these sophisticated predictive systems effectively.
Some of the ensemble techniques include _Bagging_ and _Boosting_.

## Bagging (Bootstrap Aggregating)

Bagging refers to training multiple models in parallel on different subsets of the data generated using bootstrapping or random sampling with replacement. The predictions from the models are combined.

This approach reduces the variance and prevents overfitting. Some popular algorithms that can be classified under bagging are `Random Forest` and `Bagging Classifier`.

## Boosting

Boosting creates models sequentially, where each new model corrects the mistakes of the previous one by focusing on the harder instances that the former model failed to predict. Well-known boosting algorithms include `AdaBoost`, `Gradient Boosting`, and `XGBoost`.

## Syntax

Sklearn offers the `BaggingClassifier` for performing classification tasks:

```pseudo
BaggingClassifier(estimator=None, n_estimators=10, max_samples=1.0, max_features=1.0, bootstrap=True, bootstrap_features=False, oob_score=False, warm_start=False, n_jobs=None, random_state=None, verbose=0)
```

- `estimator` (`None`, default=`None`): The base estimator to fit on random subsets of the dataset. If `None`, the algorithm uses a decision tree as the default estimator.
- `n_estimators` (int, default=`10`): Number of estimators in the ensemble.
- `max_samples` (float, default=`1.0`): The fraction of samples for fitting each estimator, must be between `0` and `1`.
- `max_features` (float, default=`1.0`): The fraction of features for fitting each estimator, must be between `0` and `1`.
- `bootstrap` (bool, default=`True`): Whether to use bootstrap sampling (sampling with replacement) for creating datasets for each estimator.
- `bootstrap_features` (bool, default=`False`): Determines whether to sample features with replacement for each estimator.
- `oob_score` (bool, default=`False`): Determines whether to use out-of-bag samples for estimating the generalization error.
- `warm_start` (bool, default=`False`): If `True`, the fit method adds more estimators to the existing ensemble instead of starting from scratch.
- `n_jobs` (int, default=`None`): The number of jobs to run in parallel for fitting the base estimators. `None` means using `1` core, `-1` uses all available cores.
- `random_state` (int, default=`None`): Controls the randomness of the estimator fitting process, ensuring reproducibility.
- `verbose` (int, default=`0`): Controls the verbosity level of the fitting process, with higher values producing more detailed output.

## Example

This example code demonstrates the use of the `BaggingClassifier` to build an ensemble of `Decision Trees` and examine its performance on the Iris dataset:

```py
# Import all the necessary libraries
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
data = load_iris()
X = data.data
y = data.target

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Initialize a BaggingClassifier with a DecisionTreeClassifier as the base estimator
bagging_clf = BaggingClassifier(estimator=DecisionTreeClassifier(),
                               n_estimators=50,
                               max_samples=0.8,
                               max_features=0.8,
                               bootstrap=True,
                               random_state=42)

# Train the BaggingClassifier
bagging_clf.fit(X_train, y_train)

# Predict on the test set
y_pred = bagging_clf.predict(X_test)

# Evaluate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")
```

The code results in the following output:

```shell
Accuracy: 1.00
```

## Codebyte Example

This is an example that demonstrates the use of a `VotingClassifier` to combine multiple classifiers (`Decision Tree`, `Support Vector Classifier`, and `K-Nearest Neighbors`) for a classification task on the Iris dataset:

```codebyte/python
# Import all the necessary libraries
from sklearn.ensemble import VotingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the Iris dataset
data = load_iris()
X = data.data
y = data.target

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Initialize individual classifiers
dt_clf = DecisionTreeClassifier(random_state=42)
svc_clf = SVC(probability=True, random_state=42)
knn_clf = KNeighborsClassifier()

# Create a VotingClassifier that combines the classifiers
voting_clf = VotingClassifier(estimators=[('dt', dt_clf), ('svc', svc_clf), ('knn', knn_clf)], voting='soft')

# Train the VotingClassifier
voting_clf.fit(X_train, y_train)

# Predict on the test set
y_pred = voting_clf.predict(X_test)

# Evaluate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"VotingClassifier Accuracy: {accuracy:.2f}")
```

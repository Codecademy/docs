---
Title: 'Feature Selection'
Description: 'Feature selection techniques in sklearn help identify the most relevant features in a dataset, improving model performance and reducing overfitting.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Feature Selection** is a critical step in machine learning that helps identify a dataset's most relevant features, improving model performance, reducing overfitting, and decreasing computation time.

[Sklearn](https://www.codecademy.com/resources/docs/sklearn) offers various methods for feature selection, including statistical tests, model-based selection, and iterative approaches.

## Types of Feature Selection in Sklearn

1. **Variance Threshold**

   - A simple baseline technique that removes features with variance below a predefined threshold.
   - Features with very low variance across samples typically contribute little to the predictive power of the model.

2. **Univariate Feature Selection**

   - Selects features based on univariate statistical tests.
   - Commonly used methods include `SelectKBest` and `SelectPercentile`.
   - Example tests:
     - `f_classif`: For classification tasks, calculates the ANOVA F-value.
     - `chi2`: For non-negative feature values in classification.
     - `mutual_info_classif`: Captures non-linear dependencies for classification.

3. **Recursive Feature Elimination (RFE)**

   - Iteratively fits a model and removes the least important features, refining the subset with each iteration.
   - Works best with models that provide feature importance, such as linear models or tree-based algorithms.

4. **Sequential Feature Selection (SFS)**
   - Sequentially adds or removes features to optimize a performance metric (e.g., accuracy).
   - Two approaches:
     - **Forward Selection**: Starts with no features, adding one at a time.
     - **Backward Elimination**: Starts with all features, removing one at a time.

## Advantages of Feature Selection

- Enhances model accuracy and efficiency.
- Reduces overfitting by removing irrelevant features.
- Simplifies model interpretability.

## Syntax

Below is an example of using `SelectKBest` for univariate feature selection:

```pseudo
from sklearn.feature_selection import SelectKBest, f_classif

# Applying SelectKBest to select the top 5 features with the highest ANOVA F-values
selector = SelectKBest(score_func=f_classif, k=5)
X_new = selector.fit_transform(X, y)

# Selected feature indices
selected_features = selector.get_support(indices=True)
print("Selected Features:", selected_features)
```

## Example

Below is a complete example showcasing `SelectFromModel` with Lasso regression for feature selection:

```py
from sklearn.datasets import make_regression
from sklearn.linear_model import Lasso
from sklearn.feature_selection import SelectFromModel
from sklearn.model_selection import train_test_split

# Generating a synthetic regression dataset
X, y = make_regression(n_samples=100, n_features=10, noise=10, random_state=42)

# Splitting data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Fitting Lasso regression with stronger regularization
model = Lasso(alpha=0.5).fit(X_train, y_train)

# Use the pre-trained Lasso model for feature selection
selector = SelectFromModel(model, prefit=True)
X_train_selected = selector.transform(X_train)
X_test_selected = selector.transform(X_test)

# Selected feature indices
selected_features = selector.get_support(indices=True)
print("Selected Features:", selected_features)
```

The code above produces the output as follows:

```shell
Selected Features: [1 4 7]
```

> **Note:** The exact selected features depend on the dataset and Lasso regularization strength.

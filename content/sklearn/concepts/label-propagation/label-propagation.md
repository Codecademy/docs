---
Title: 'Label Propagation'
Description: 'A  semi-supervised learning algorithm that spreads labels from a small set of labeled data points to the unlabeled data using a graph-based approach.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Classification'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**Label Propagation** is a semi-supervised learning algorithm used in classification problems where a small portion of the data is labeled, and the remaining data is unlabeled. The algorithm spreads the label information from the labeled instances to the unlabeled ones by propagating labels across the graph built from the input data. In Scikit-learn, this is implemented as part of the `sklearn.semi_supervised` module.

Scikit-learn provides two closely related semi-supervised algorithms:

- **Label Propagation**: Propagates labels through the graph using a probabilistic transition matrix.
- **Label Spreading**: A variant of Label Propagation that uses a normalized graph Laplacian to reduce noise sensitivity.

## Syntax

```pseudo
from sklearn.semi_supervised import LabelPropagation

# Create a LabelPropagation object with desired parameters
model = LabelPropagation(kernel='rbf', gamma=1, max_iter=1000)

# Fit the model to your data
model.fit(X, y)

# Predict labels for unlabeled data
y_pred = model.predict(X_unlabeled)
```

- `kernel`: The kernel function used for label propagation. Common options are `rbf` (radial basis function), `knn` (k-nearest neighbors), and `poly` (polynomial).
- `gamma`: The kernel coefficient for the `rbf` kernel.
- `max_iter`: The maximum number of iterations for the label propagation algorithm.
- `X`: The input data, where each row is a sample and each column is a feature.
- `y`: The corresponding labels for the labeled samples.
- `X_unlabeled`: The input data for the unlabeled samples.

## Example

In the following example, a small set of labeled points (`y = 0, 1`) and unlabeled points (`y = -1`) is given. The Label Propagation algorithm spreads the known labels to the unlabeled data points based on their proximity.

```python
import numpy as np
from sklearn.semi_supervised import LabelPropagation
import matplotlib.pyplot as plt

# Create synthetic data
X = np.array([[1, 1], [2, 1], [3, 2], [5, 5], [6, 5], [7, 6]])
y = np.array([0, 0, 1, -1, -1, -1])  # -1 represents unlabeled data

# Initialize Label Propagation model
model = LabelPropagation()
model.fit(X, y)

# Predict labels for unlabeled data
predicted_labels = model.transduction_
print("Predicted labels:", predicted_labels)

# Plotting the data
plt.scatter(X[:, 0], X[:, 1], c=predicted_labels, cmap='viridis', s=100)
plt.show()
```

The output of the above code will be:

```shell
Predicted labels: [0 0 1 1 1 1]
```

![Label Propagation Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/sklearn-label-propagation.png)

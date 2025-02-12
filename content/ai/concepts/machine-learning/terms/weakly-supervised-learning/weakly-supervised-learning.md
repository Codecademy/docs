---
Title: 'Weakly-Supervised Learning'
Description: 'A machine learning approach that uses limited labeled data alongside large amounts of unlabeled data for training models.'
Subjects:
 - 'AI'
 - 'Machine Learning'
Tags:
 - 'AI'
 - 'Machine Learning'
 - 'Supervised Learning'
 - 'Unsupervised Learning'
CatalogContent:
 - 'learn-python-3'
 - 'paths/intermediate-machine-learning-skill-path
---

**Weakly-Supervised Learning** is a machine learning paradigm that leverages a small amount of labeled data in conjunction with a large amount of unlabeled data to train models.

This approach is particularly useful when obtaining fully labeled datasets is expensive or impractical. Weakly-supervised learning bridges the gap between supervised learning, which requires extensive labeled data, and unsupervised learning, which requires none.

## Syntax

The syntax of weakly-supervised learning varies depending on the technique used. Common appraoches include:

- **Semi-Supervised Learning**: Uses a small labeled dataset along with a larger unlabeled dataset to improve learning.
- **Weak Labeling**: Uses noisy, incomplete, or inaccurate labels to guide learning.
- **Distant Supervision**: Uses external sources or heuristic rules to generate labels.

For example, in Python using the `scikit-learn` library, weakly-supervised learning can be applied with semi-supervised learning methods:

```py
from sklearn.semi_supervised import LabelPropagation
import numpy as np

# Sample data: Labeled and unlabeled points
X = np.arry([[1, 2], [2, 3], [3, 4], [8, 7], [9, 8], [10, 9]])
y = np.array([0, 0, 0, -1, -1, -1])    # -1 indicates unlabeled data

# Apply label propagation
model = LabelPropagation()
model.fit(X,y)
predictions = model.predict(X)
print(predictions)    # Outputs predicted labels, including inferred ones
```

## Example

A practical example of weakly-supervised learning is in _image classification_, where only a subset of images is labeled, and the model learns to infer labels for the remaining dataset.

```py
from sklearn.semi_supervised import SelfTrainingClassifier
from sklearn.ensemble import RandomForestClassifier

# Sample dataset with some missing labels
X_train = np.array([[1, 2], [2, 3], [3, 4], [8, 7], [9, 8], [10, 9]])
y_train = np.array([0, 0, 0, -1, -1, -1])  # Unlabeled entries (-1)

# Using a base classifier with self-training
base_classifier = RandomForestClassifier()
model = SelfTrainingClassifier(base_classifier)
model.fit(X_train, y_train)

# Predict labels for all data
predicted_labels = model.predict(X_train)
print(predicted_labels)
```

Weakly-supervised learning is widely used in fields like natural language processing, medical diagnosis, and autonomous systems, where fully labeled data is scarce or expensive to obtain.

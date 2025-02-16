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
  - 'paths/intermediate-machine-learning-skill-path'
---

**Weakly-Supervised Learning** is a machine learning paradigm that trains models using a small amount of labeled data alongside a large amount of unlabeled data.

This approach is particularly valuable when obtaining fully labeled datasets is costly or impractical. By incorporating elements of both supervised and unsupervised learning, it bridges the gap between the two, enabling more efficient model training with minimal labeled data.

## Syntax

The syntax of weakly-supervised learning varies depending on the technique used. Common approaches include:

- **Semi-Supervised Learning**: Utilizes a small labeled dataset alongside a larger unlabeled dataset to enhance model learning.
- **Weak Labeling**: Employs noisy, incomplete, or imprecise labels to guide the training process.
- **Distant Supervision**: Leverages external sources or heuristic rules to generate labels automatically.

For example, in Python using the `scikit-learn` library, weakly-supervised learning can be applied with semi-supervised learning methods:

```pseudo
# 1. Load or generate labeled and unlabeled data
data = [labeled_data, unlabeled_data]

# 2. Select a weakly-supervised learning technique:
- Semi-supervised learning
- Weak labeling
- Distant supervision

# 3. Apply the selected weak supervision method:
- Train a model using weak supervision
- Use heuristics, pseudo-labeling, or propagation techniques

# 4. Evaluate and fine-tune the model
- Validate using available labeled data
- Refine the model to improve accuracy
```

## Example

A practical example of weakly-supervised learning is in _image classification_, where only a subset of images is labeled, and the model learns to infer labels for the remaining dataset.

This code demonstrates weakly-supervised learning using `SelfTrainingClassifier`, where a Random Forest model learns from a dataset with both labeled and unlabeled data, inferring missing labels through self-training:

```py
import numpy as np
from sklearn.semi_supervised import SelfTrainingClassifier
from sklearn.ensemble import RandomForestClassifier

# Sample dataset with some missing labels
X_train = np.array([[1, 2], [2, 3], [3, 4], [8, 7], [9, 8], [10, 9]])
y_train = np.array([0, 0, 0, -1, 1, -1])  # -1 indicates unlabeled data

# Using a base classifier (Random Forest) with self-training
base_classifier = RandomForestClassifier()
model = SelfTrainingClassifier(base_classifier)

# Train the model on weakly labeled data
model.fit(X_train, y_train)

# Predict labels for all data points
predicted_labels = model.predict(X_train)
print(predicted_labels)  # Outputs predicted labels, including inferred ones
```

Here is the output:

```shell
[0 0 0 1 1 1]
```

Weakly-supervised learning is widely used in fields like natural language processing, medical diagnosis, and autonomous systems, where fully labeled data is scarce or expensive to obtain.

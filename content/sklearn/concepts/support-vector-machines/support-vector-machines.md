---
Title: 'Support Vector Machines'
Description: 'A supervised learning algorithm used to classify data by finding a separation line between categories.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Supervised Learning'
  - 'Unsupervised Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Support Vector Machines** (SVMs) are a supervised learning algorithm excelling at classification tasks. They work by finding the optimal hyperplane that maximizes the margin between different classes in the data. The margin is the distance between the hyperplane and the closest data points from each class, called support vectors. SVMs are particularly effective for high-dimensional datasets and handling complex data while promoting good generalization and reducing the risk of overfitting.

## Syntax

Scikit-learn provides the `SVC` class for implementing SVMs. Here's the basic syntax for using SVC:

```pseudo
from sklearn.svm import SVC

# Define the model with desired parameters
model = SVC(kernel='linear', C=1.0)

# Fit the model on the training data (X) and labels (y)
model.fit(X, y)

# Predict labels for new data (X_new)
predictions = model.predict(X_new)
```

The example syntax defines a new SVM model, fits the model to training set `X` and testing set `y`, and predicts the labels of `X_new`. When defining an SVM model, there are two parameters to consider, i.e., `kernel` and `C`.

The `kernel` parameter defines the type of hyperplane used for separation. The options are:

- `linear`: Linear Kernel is the default option suitable for linearly separable datasets.
- `poly`: Polynomial Kernel allows for complex decision boundaries but is prone to overfitting. Hypertuning the `degree` parameter helps in avoiding this overfitting.
- `rbf`: Radial Basis Function (RBF) Kernel creates smooth and circular decision boundaries.
- `sigmoid`: Sigmoid Kernel is similar to RBF in that it creates non-linear decision boundaries but is less commonly used.

The `C` parameter in `SVC` controls the trade-off between maximizing the margin and reducing training errors:

- A higher `C` value prioritizes a larger margin, potentially leading to overfitting on the training data.
- A lower `C` value prioritizes reducing training errors, but might result in a smaller margin and poorer generalization on unseen data.

Choosing the optimal `C` value often involves experimentation and techniques like grid search or cross-validation. In terms of choosing the best combination of `kernel` and `C` values, here are a few general guidelines:

- For linearly separable data, the `linear` kernel should be used.
- For moderately complex, non-linear data, `rbf` or a low-degree `poly` kernel with a moderate `C` value can be considered.
- For highly complex data, different kernels and `C` values can be experimented with using techniques like grid search.

## Example

This example generates a synthetic dataset of 500 samples with two classes using the `make-blobs` function. Then, it defines an SVM model with a `linear` kernel and `C` value of `1`. After training, the model is used to predict the class of a new data point `[5, 1.5]` and the predicted class in printed to the console. The output will be either `0` or `1`, depending on which side of the decision boundary the point falls on:

```py
from sklearn.svm import SVC
from sklearn.datasets import make_blobs

# Generate sample data with two classes
X, y = make_blobs(n_samples=500, centers=2, random_state=0, cluster_std=0.6)

# Define and train the SVC model
model = SVC(kernel='linear', C=1.0)
model.fit(X, y)

# New data point to predict
new_data = [[5, 1.5]]

# Predict the class of the new data
prediction = model.predict(new_data)

print("Predicted class:", prediction[0])
```

The output of the above code will be:

```shell
Predicted class: 1
```

## Codebyte Example

This codebyte example demonstrates the use of a Support Vector Classifier (SVC) with a
linear kernel on a synthetic two-class dataset and predicts the class of a new data point:

```codebyte/python
from sklearn.svm import SVC
from sklearn.datasets import make_blobs

# Generate sample data with two classes
X, y = make_blobs(n_samples=500, centers=2, random_state=0, cluster_std=0.6)

# Define and train the SVC model
model = SVC(kernel='linear', C=1.0)
model.fit(X, y)

# New data point to predict
new_data = [[5, 1.5]]

# Predict the class of the new data
prediction = model.predict(new_data)

print("Predicted class:", prediction[0])
```

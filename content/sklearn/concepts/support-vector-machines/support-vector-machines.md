---
Title: 'Support Vector Machines'
Description: 'Support Vector Machines are a supervised learning algorithm used to classify data by finding a separation line between categories.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Supervised Learning'
  - 'Sci-kit Learn'
CatalogContent:
  - 'getting-started-with-python-for-data-science'
  - 'paths/data-science'
---

**Support Vector Machines**(SVMs) are a supervised learning algorithm excelling at classification tasks. They work by finding the optimal hyperplane that maximizes the margin between different classes in your data. The margin is the distance between the hyperplane and the closest data points from each class, called support vectors. SVMs are particularly effective for high-dimensional datasets, and handle complex data while promoting good generalization and reducing the risk of overfitting.

## Example

Scikit-learn provides the SVC class for implementing SVMs. Here's the basic syntax for using SVC:

```py
from sklearn.svm import SVC

# Define the model with desired parameters
model = SVC(kernel='linear', C=1.0)

# Fit the model on your training data (X) and labels (y)
model.fit(X, y)

# Predict labels for new data (X_new)
predictions = model.predict(X_new)
```

The example syntax defines a new SVM model, fits the model to training set X and testing set y, and predicts the labels of X_new. When defining a SVM model, there are two parameters to consider.

The kernel defines the type of hyperplane used for separation. The options are:

- 'linear': linear kernel, default option that is suitable for linearly separable datasets.
- 'poly': polynomial kernel, allows for complex decision boundaries but is prone to overfitting. Hypertune the 'degree' parameter to avoid overfitting.
- 'rbf': Radial Basis Function(RBF) Kernel, creates smooth, circular decision boundaries.
- 'sigmoid': Sigmoid Kernel, similar to RBF in that it creates non-linear decision boundaries, but is less commonly used.

The C parameter in SVC controls the trade-off between maximizing the margin and reducing training error. 

- A higher C value prioritizes a larger margin, potentially leading to overfitting on the training data. 
- A lower C value prioritizes reducing training error, but might result in a smaller margin and poorer generalization on unseen data.

Choosing the optimal C value often involves experimentation and techniques like grid search or cross-validation. In terms of choosing the best combination of kernel and C value, here are a few general guidelines:

- For linearly separable data, use the 'linear' kernel.
- For moderately complex, non-linear data, consider 'rbf' or a low-degree 'poly' kernel with a moderate C value.
- For highly complex data, experiment with different kernels and C values using techniques like grid search.

## Codebyte Example

```py
from sklearn.svm import SVC
from sklearn.datasets import make_blobs

# Generate sample data with two classes
X, y = make_blobs(n_samples=500, centers=2, random_state=0, cluster_std=0.6)

# Define and train the SVC model
model = SVC(kernel='linear', C=1.0)
model.fit(X, y)

# New data point to predict
new_data = [[5, 1.5]]  # Example data point

# Predict the class of the new data
prediction = model.predict(new_data)

print("Predicted class:", prediction[0])
```

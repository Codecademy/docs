---
Title: 'Nearest Neighbors'
Description: 'Nearest Neighbors is a machine learning algorithm used to find the closest data points in a feature space based on a defined distance metric.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Algorithms'
  - 'Machine Learning'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Scikit-learn, **Nearest Neighbors** is an essential algorithm for finding the closest data points in a dataset based on a defined distance metric. It supports tasks like classification, regression, and clustering by calculating similarities between data points. The algorithm is easy to implement and highly adaptable, making it a go-to choice for various machine learning applications.

Sklearn's implementation offers several optimization techniques, including `ball_tree` and `kd_tree`, to enhance performance, especially for large datasets. Users can customize parameters like `n_neighbors`, `metric`, and `algorithm` to fine-tune the model for specific use cases. This versatility makes Nearest Neighbors particularly valuable in recommendation systems, anomaly detection, and exploratory data analysis.

## Syntax

```pseudo
from sklearn.neighbors import NearestNeighbors

nbrs = NearestNeighbors(n_neighbors=5, algorithm='auto', metric='minkowski', p=2)
```

- `n_neighbors`: The number of nearest neighbors to find for each data point.
- `algorithm`: Algorithm used to compute the nearest neighbors.
  - `'auto'`: Automatically selects the best algorithm.
  - `'ball_tree'`: Uses a Ball Tree structure.
  - `'kd_tree'`: Uses a KD Tree structure.
  - `'brute'`: Performs brute-force search.
- `metric`: The distance metric to use.
  - `'euclidean'`: Standard Euclidean distance.
  - `'manhattan'`: Manhattan (L1) distance.
  - `'minkowski'`: Generalized Minkowski distance (requires `p`).
- `p`: Power parameter for the Minkowski metric.
  - `p=1`: Equivalent to Manhattan distance.
  - `p=2`: Equivalent to Euclidean distance.

## Example

The following example uses Sklearn's `NearestNeighbors` to find and display the indices and distances of the 2 nearest neighbors for each data point in a sample dataset:

```py
from sklearn.neighbors import NearestNeighbors
import numpy as np

# Sample dataset: Each row represents a data point
X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])

# Initialize the Nearest Neighbors model
nbrs = NearestNeighbors(n_neighbors=2, algorithm='auto')

# Fit the model with the data
nbrs.fit(X)

# Query the Nearest Neighbors for the given dataset
distances, indices = nbrs.kneighbors(X)

# Output the results
print("Indices of Nearest Neighbors:")
print(indices) # Indices of the closest neighbors in the dataset

print("\nDistances to Nearest Neighbors:")
print(distances) # Corresponding distances to those neighbors
```

The code above produces the following possible output:

```shell
Indices of Nearest Neighbors:
[[0 1 2]
 [1 0 2]
 [2 1 3]
 [3 2 1]]

Distances to Nearest Neighbors:
[[0.         4.24264069 7.81024968]
 [0.         4.24264069 3.60555128]
 [0.         4.24264069 3.16227766]
 [0.         4.24264069 3.60555128]]
```

---
Title: 'Clustering'
Description: 'Grouping similar data points together based on defined characteristics or features.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Clustering'
  - 'Machine Learning'
  - 'Scikit-learn'
  - 'Unsupervised learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**Clustering** is an unsupervised machine learning technique that groups similar rows of unlabeled data. Various clustering algorithms, such as k-means, DBSCAN, etc., apply different types of clustering.

Clustering is primarily used for exploratory data analysis. Each technique varies in understanding what constitutes a cluster and how to find them so that different algorithms may yield different clusters for the same dataset. Since there is no ground truth to verify against, it is essential to evaluate the results. Iterating to find satisfactory clusters is vital until the output quality meets expectations.

Each cluster is formed based on the similarity of its members. The similarity measure becomes more complicated as the dataset contains more complex features. After clustering, each cluster is assigned a unique cluster ID.

Each clustering algorithm is available in two forms: a class and a function. The class implements the fit method to learn the clusters from the training data, while the function returns an array of integer labels corresponding to different clusters.

The 12 algorithms that can be executed using `sklearn` for clustering are k-means, Affinity Propagation, Mean Shift, Spectral Clustering, Ward Hierarchical Clustering, Agglomerative Clustering, DBSCAN, HDBSCAN, OPTICS, Gaussian Mixtures, BIRCH, and Bisecting k-means.

## K-means

The **K-means** algorithm is a popular clustering technique. Given a dataset with n points, the goal is to choose k centroids to minimize inertia.

First, the number of centroids is selected. The algorithm consists of two steps. In the first step, each sample is assigned to its nearest centroid by measuring the distance between the data point and the current centroid using the Euclidean distance, for instance. In the second step, the mean of all data points assigned to each cluster is calculated, which becomes the new cluster center. These two steps are repeated until the difference between the old centroid and the new centroid is less than a predefined threshold.

## Clustering Performance Evaluation

Evaluating the clusters is not as straightforward as counting errors, precision, or recall, primarily because there is no ground truth. Instead of relying on labels, we can assess how similar the data points within a cluster are to each other based on some form of ground truth.

Several methods can be used to evaluate clusters, including visual inspection, Silhouette Score, Rand Index, and Homogeneity.

## Syntax

Sklearn provides the `KMeans` class for implementing clustering.

```psuedo
KMeans(n_clusters=8, *, init='k-means++', n_init= 'auto', max_iter=300, tol=0.0001, verbose=0, random_state=None, copy_x=True, algorithm='lloyd')
```

`KMeans` has the following parameters:

- `n_clusters` (`int, default=8`): The number of clusters to form, and hence, the number of centroids to generate.
- `init` (`str, array-like, default='k-means++'`): Chooses the method for initializing centroids. If `'k-means++'`, the algorithm selects the first centroid randomly, then selects subsequent centroids with a probability proportional to the square of the distance from the nearest existing centroid. If `'random'`, the centroids are chosen randomly from the data points. If an array is provided, it must specify the initial centroids.
- `n_init` (`int, default='auto'`): The number of times the KMeans algorithm is run with different centroid seeds. The final output will be the best result based on the lowest inertia (sum of squared distances). In `'auto'`, this is set to 1 if `init='k-means++'` and 10 if `init='random'`.
- `max_iter` (`int, default=300`): Maximum number of iterations of the KMeans algorithm for a single run.
- `tol` (`float, default:1e-4`): The relative tolerance for convergence. If the change in inertia between consecutive iterations is smaller than this value, the algorithm will stop.
- `verbose` (`int, default=0`): Controls the amount of output information printed during the K-Means fitting process, useful for debugging. Higher values show more details.
- `random_state` (`int, default=None`): Determines random number generation for centroid initialization. It is used for reproducibility, so setting this parameter ensures that running the algorithm multiple times on the same data yields the same results.
- `copy_x` (`bool, default=True`): If `True`, the input data is copied before processing. If `False`, the input data is modified in place to avoid copying, which can save memory but might alter the original data.
- `algorithm` (`str, default='lloyd'`): Specifies the algorithm to use for computing the clusters. `'lloyd'` is the standard EM-style algorithm for KMeans. `'elkan'` uses the triangle inequality to speed up convergence, especially for datasets with well-defined clusters and lower-dimensional spaces.

## Example

This example uses the Iris dataset to form the clusters:

```py
#import all the necessary libraries
import pandas as pd
import numpy as np
from sklearn import datasets
from sklearn.cluster import KMeans

# Load the Dataset
df= datasets.load_iris()
d = pd.DataFrame(df.data, columns=df.feature_names)
print(d.columns)

#Initializing the k-means model
model=KMeans(n_clusters=3,n_init=1)
y=model.fit(d)

# Get the cluster labels
y = model.labels_

# Print the cluster labels
print("Cluster labels:", y)

# Get the unique clusters
clusters = pd.unique(y)

# Print the unique clusters
print("Clusters:", clusters)
```

The code above produces the following output:

```shell
Index(['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)',
       'petal width (cm)'],
      dtype='object')
Cluster Labels: [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
 2 2 2 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 2 1 1 1 1 2 1 1 1 1
 1 1 2 2 1 1 1 1 2 1 2 1 2 1 1 2 2 1 1 1 1 1 2 1 1 1 1 2 1 1 1 2 1 1 1 2 1
 1 2]
Clusters: [0 1 2]
```

To visualize the clusters:

```py
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

pca = PCA(n_components=2)
d_pca = pca.fit_transform(d)

plt.scatter(d_pca[:, 0], d_pca[:, 1], c=y)
plt.title("K-Means Clustering")
plt.show()
```

![K-Means Clustering](https://raw.githubusercontent.com/Codecademy/docs/main/media/k-means-clustering.png)

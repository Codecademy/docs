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

**Clustering** is an unsupervised machine learning technique that groups similar rows of unlabeled data. Various clustering algorithms (such as k-means, DBSCAN etc.) apply different type of clustering. 

Clustering is primarily used for an exploratory data analysis. Each technique varies in understanding what constitutes a cluster and how to find them so that different algorithms may yield different clusters for the same dataset. Since there is no ground truth to verify against, it is essential to evaluate the results. Iterating to find satisfactory clusters is vital until the output quality meets expectations. 

Each cluster is formed based on the similarity of its members. The similarity measure becomes more complicated as the dataset contains more complex features. After clustering, each cluster is assigned a unique cluster ID.

Each clustering algorithm is available in two forms: a class and a function. The class implements the fit method to learn the clusters from the training data, while the function returns an array of integer labels corresponding to different clusters. 

The 12 algorithms that can be executed using `sklearn` for clustering are k-means, Affinity Propagation, Mean Shift, Spectral Clustering, Ward Hierarchical Clustering, Agglomerative Clustering, DBSCAN, HDBSCAN, OPTICS, Gaussian Mixtures, BIRCH, and Bisecting k-means.

## K-means

The **K-means** algorithm is a popular clustering technique. Given a dataset with n points, the goal is to choose k centroids to minimize inertia. 

First, the number of centroids is selected. The algorithm consists of two steps. In the first step, each sample is assigned to its nearest centroid by measuring the distance between the data point and the current centroid using the Euclidean distance, for instance. In the second step, the mean of all data points assigned to each cluster is calculated, which becomes the new cluster center. These two steps are continuously repeated until the difference between the old centroid and the new centroid is less than a predefined threshold.

## Clustering Performance Evaluation

Evaluating the clusters is not as straightforward as counting errors, precision or recall, primarily because there is no ground truth. Instead of relying on labels, we can assess how similar the data points within a cluster are to each other based on some form of ground truth.

Several methods can be used to evaluate clusters, including visual inspection, Silhouette Score, Rand Index, and Homogeneity.

## Syntax
Sklearn provides the `KMeans` class for implementing clustering.

```psuedo
KMeans(n_clusters=8, init=’k-means++’, n_init=10, max_iter=300, tol=0.0001, precompute_distances=’auto’, verbose=0, random_state=None, copy_x=True, n_jobs=1, algorithm=’auto’) 
```

`KMeans` has the following parameters:

- `n_clusters` (int, default=8): The number of clusters.
- `init` (array, default=k-means++): It chooses the method of initialization. If `k-means++`, then a random point is choosen for the initial centroid and for the remaining centroids each data point is weighed according to the distance squared from the initial centroid. If `random`, then random points are choosen for the initial centroid. If `array`, then specific set of points are used as initial centroids.
- `n_init` (int, default=auto): The number of times the algorithm will run with different initial centroid positions. If `1`, the algorithm runs only once with one random initialization of centroids.
- `max_iter` (int, default=300): Maximum number of iterations of the KMeans algorithm for a single run.
- `tol` (float, default:1e-4): The tolerance for stopping the algorithm when the change in centroids is smaller than this value between iterations.
- `verbose` (int, default=0): Controls the amount of output information printed during the K-Means fitting process, useful for debugging. Higher values show more details.
- `random_state` (int, default=None): Determines random number generation for centroid initialization.
- `copy_x` (bool, default=True): If `True`, then original data is copied before processing and if `false`, then it modifies the input data by subtracting and then adding the data mean, can save memory.
- `algorithm` (default=lloyd): If `lloyd`, then the traditional algorithm is used, and if `elkan`, then triangle inequality is used on datasets with well-defined 
clusters. 

## Example

This example uses the Iris dataset to form the clusters.

```py
#import all the necessary libraries
import pandas as pd
import numpy as np
from sklearn import datasets
from sklearn.cluster import KMeans

# Dataset
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
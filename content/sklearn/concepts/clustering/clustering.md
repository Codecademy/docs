---
Title: 'Clustering'
Description: 'A technique that groups similar unlabled data points.'
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

**Clustering** is an unsupervised machine learning technique. It groups similar rows of unlabled data. There are various clustering algorithms (like k-means,DBSCAN etc.). Different clustering algorithms apply different type of clustering. We will only be discussing the algorithms and types of clustering that can be implemented using sklearn.

Clustering is more used as an exploratory data analysis.Each technique varies in their understanding of what a cluster constitutes and how to find them. So, for a dataset each algorithm may come up with different clusters. Since there is no truth against to verify, it's important to check the result. Until the quality of output is satisfactory, iterating to find the clusters are important.

Each clusters are formed based on the similarity to each other. When the dataset has more and complex features the similarity measure becomes complex. After clustering, each cluster is given a unique cluster ID.

Each clustering algorithm comes in two forms- a class and a function. The class implements the fit method to learn the clusters on training data. The function returns an array of integer labels corresponding to different clusters. 

The 12 algorithms that can be executed using sklearn clustering are k-means,Affinity Propagation, Mean shift, Spectral clustering, Ward hierarchical clustering, Agglomerative clustering, DBSCAN, HDBSCAN, OPTICS, Gaussian mixtures, BIRCH, Bisecting k-means.

## K-means

K-means algorithm is a popular clustering algorithm. Given a dataset with n points, the goal is to choose k centers so as to minimize the inertia. 

First, we choose the number of centroids. The algorithm consists of two steps. The first step is to assign each sample to its nearest centroid. Measure the distance between the data point and the current data center via Euclidean distance for instance. The second step is to calculate the mean of all the data points assigned to each cluster. This will be the new cluster center.These two steps are continuously repeated. The algorithm stops when the difference between the old centroid and new centroid is less than the threshold.

## Clustering Performance Evaluation

Evaluating the clusters is not simple like counting errors or precision or recall, simply because there is no ground truth. We can check how similar the data points of a cluster are to each other based on some ground truth instead of looking at the labels.

Visualling look at the clusters, Silhouette Score, rand index and homogeneity are among the few methods to evaluate the clusters.

## Syntax
Sklearn provides the `KMeans` class for implementing clustering.

```psuedo
KMeans(n_clusters: int = 8, *, init: str = "k-means++", n_init: str = "auto", max_iter: int = 300, tol: float = 0.0001, verbose: int = 0, random_state: Any | None = None, copy_x: bool = True, algorithm: str = "lloyd") 
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
print(d.head)
print(d.columns)

#Initializing the k-means model
model=KMeans(n_clusters=3,n_init=1)
y=model.fit(d)

# Get the cluster labels
y = model.labels_

# Print the cluster labels
print(y)

# Get the unique clusters
clusters = pd.unique(y)

# Print the unique clusters
print(clusters)
```

If you want to visually access the clusters:

```py
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

pca = PCA(n_components=2)
d_pca = pca.fit_transform(d)

plt.scatter(d_pca[:, 0], d_pca[:, 1], c=y)
plt.title("K-Means Clustering")
plt.show()
```
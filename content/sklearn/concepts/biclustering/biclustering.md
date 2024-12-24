---
Title: 'Biclustering'
Description: 'A technique for grouping rows and columns of a matrix to discover local patterns in data.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Scikit-learn'
  - 'Unsupervised learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**Biclustering** is a form of unsupervised machine learning that takes a data matrix and groups both the rows and columns of this matrix to unveil previously unknown patterns. It's  standard in gene expression, text mining, and other recommendation systems and captures more localized relationships than the general clustering method. Scikit-learn provides spectral co-clustering and diagonal biclustering algorithms, implemented as classes with a fit method, enabling efficient pattern discovery in complex datasets.

## Syntax

Here's a syntax that shows the implementation of biclustering using sklearn:

```pseudo
from sklearn.cluster import SpectralCoclustering, SpectralBiclustering

# For Spectral Co-clustering
model = SpectralCoclustering(n_clusters=number_of_biclusters, random_state=seed)
model.fit(data_matrix)

# For Spectral Bi-clustering
model = SpectralBiclustering(n_clusters=number_of_biclusters, method="log", random_state=seed)
model.fit(data_matrix)
```

- `n_clusters`: Number of biclusters to create.
- `random_state`: Ensures the randomness for reproducible results.
- `method`(For SpectralBiclustering): Specifies the algorithm variant, e.g., `log` or `bistochastic`. The `log` method applies logarithmic scaling, while `bistochastic` normalizes rows and columns. The choice of method can affect the results depending on the dataset.

> **Note**: Since Bicluster is not directly available in sklearn, alternative methods for biclustering, such as `SpectralBiclustering`, can be used.

## Example

Here's an example of implementing biclustering using `SpectralBiclustering` from sklearn:

```py
import numpy as np
from sklearn.cluster import SpectralBiclustering

# Sample data matrix
data_matrix = np.array([[1, 1, 0, 0],
                        [1, 1, 0, 0],
                        [0, 0, 1, 1],
                        [0, 0, 1, 1]])

# Apply Spectral Biclustering
model = SpectralBiclustering(n_clusters=2, random_state=42)
model.fit(data_matrix)

# Get the bicluster labels for rows and columns
row_labels = model.rows_
column_labels = model.columns_

# Print biclusters
print("Row Biclusters:", row_labels)
print("Column Biclusters:", column_labels)
```

The above code results in the following output:

```shell
Row Biclusters: [[False False  True  True]
 [False False  True  True]
 [ True  True False False]
 [ True  True False False]]
Column Biclusters: [[False False  True  True]
 [ True  True False False]
 [False False  True  True]
 [ True  True False False]]
```

- In the **Row Biclusters**, `True` in a position means that the corresponding row is part of the bicluster.
- Similarly, in the **Column Biclusters**, `True` indicates that the corresponding column is part of the bicluster.

## Codebyte Example

Here the example demonstrates how to perform Spectral Biclustering on a simple **6x6** binary data matrix using `SpectralBiclustering` from `sklearn`:

```codebyte/python
import numpy as np
from sklearn.cluster import SpectralBiclustering

# Sample 6x6 data matrix
data_matrix = np.array([[1, 1, 0, 0, 1, 1],
                        [1, 1, 0, 0, 1, 1],
                        [0, 0, 1, 1, 0, 0],
                        [0, 0, 1, 1, 0, 0],
                        [1, 1, 0, 0, 1, 1],
                        [1, 1, 0, 0, 1, 1]])

# Apply Spectral Biclustering
model = SpectralBiclustering(n_clusters=2, random_state=42)
model.fit(data_matrix)

# Get the bicluster labels for rows and columns
row_labels = model.rows_
column_labels = model.columns_

# Print the resulting biclusters for rows and columns
print("Row Biclusters:", row_labels)
print("Column Biclusters:", column_labels)
```

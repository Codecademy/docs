---
Title: '.create_dendrogram()'
Description: 'Generates a hierarchical cluster tree to visualize relationships between data points.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Histograms'
  - 'NumPy'
  - 'Plotly'
  - 'Python'
  - 'Seaborn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.create_dendrogram()`** function in Plotly's `figure_factory` module generates hierarchical cluster trees (dendrograms) for visualizing the arrangement of data clusters. It is useful in hierarchical clustering applications, such as bioinformatics and machine learning, to depict relationships between data points.

## Syntax

```pseudo
import plotly.figure_factory as ff

dendrogram = ff.create_dendrogram(
    X,
    orientation="bottom",
    labels=None,
    colorscale="Viridis",
    distfun=None,
    linkagefun=None,
    hovertext=None
)
```

**Parameters**:

- **`X`**: A matrix-like 2D list or NumPy array containing the data to be clustered.
- **`orientation`** (default="bottom"): Specifies the orientation of the dendrogram (`'top'`, `'bottom'`, `'left'`, or `'right'`).
- **`labels`** (optional): A list of labels for the data points. If `None`, default labels `(0, 1, 2,...)` are used.
- **`colorscale`** (default="Viridis"): Determines the color scale used for branch coloring.
- **`distfun`** (default=`scipy.spatial.distance.pdist`): A function to compute pairwise distances between data points.
- **`linkagefun`** (default=`scipy.cluster.hierarchy.linkage`): A function to compute the hierarchical clustering.
- **`hovertext`** (optional): Custom hover text for the data points.

## Examples

### Basic Dendrogram

The following example demonstrates how to create a dendrogram using Plotly's `figure_factory` module with randomly generated data.

```py
import plotly.figure_factory as ff
import numpy as np

# Generate random data
np.random.seed(42)
data = np.random.rand(10, 4) # 10 samples, 4 features

# Create dendrogram
fig = ff.create_dendrogram(data, labels=[f"Sample {i}" for i in range(10)])
fig.update_layout(title="Hierarchical Clustering Dendrogram")
fig.show()
```

The output will be:

![A hierarchical dendrogram where clusters are formed based on similarities in the dataset.](https://raw.githubusercontent.com/Codecademy/docs/main/media/hierarchical-clustering-dendrogram.png)

The x-axis represents the labels of the data points, and the y-axis represents the clustering distance. Branches merge as clusters combine, illustrating hierarchical relationships between data points.

### Dendrogram with Custom Colors

This example customizes the colors of the dendrogram branches.

```py
import plotly.figure_factory as ff
import numpy as np

# Generate random data
np.random.seed(42)
data = np.random.rand(10, 4)

# Create dendrogram with a custom colorscale
fig = ff.create_dendrogram(data, labels=[f"Sample {i}" for i in range(10)], colorscale=["#636EFA", "#EF553B", "#00CC96"])
fig.update_layout(title="Custom Colored Dendrogram")
fig.show()
```

The output will be:

![A dendrogram with custom branch colors, improving visualization for distinguishing different clusters.](https://raw.githubusercontent.com/Codecademy/docs/main/media/custom-colored-dendrogram.png)

### Horizontal Dendrogram

This example demonstrates a dendrogram with a horizontal orientation.

```py
import plotly.figure_factory as ff
import numpy as np

# Generate random data
np.random.seed(42)
data = np.random.rand(10, 4)

# Create horizontal dendrogram
fig = ff.create_dendrogram(data, labels=[f"Sample {i}" for i in range(10)], orientation="right")
fig.update_layout(title="Horizontal Dendrogram")
fig.show()
```

The output will be:

![A dendrogram rotated 90 degrees, with hierarchical clustering displayed from left to right.](https://raw.githubusercontent.com/Codecademy/docs/main/media/horizontal-dendrogram.png)

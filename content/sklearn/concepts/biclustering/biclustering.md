---
Title: 'Biclustering' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A brief description.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Classification'
  - 'Multitask Learning'
  - 'MultiTaskLasso'
  - 'Scikit-learn'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In scikit-learn, the biclustering module provides various biclustering methods, such as Spectral Biclustering and Spectral Co-Clustering

## Example

Here’s the syntax for performing biclustering using the SpectralBiclustering algorithm:

```python

from sklearn.cluster import SpectralBiclustering

model = SpectralBiclustering(n_clusters=3)


model.fit(data_matrix)


row_labels = model.row_labels_
column_labels = model.column_labels_
```

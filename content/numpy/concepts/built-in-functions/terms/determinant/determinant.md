---
Title: '.linalg.det()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the determinant of a 2D array' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  -  Computer Science
  -  Data Science
  -  Machine Learning
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  -  Linear Algebra
  -  Arrays
  -  NumPy
  -  Functions
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.linalg.det()`** function returns the determinant of an given matrix. 

## Syntax

```pseudo
numpy.linalg.det(array)
```

`.linalg.det()` provides the following arguments:

 - `array` : The numpy array_like object to compute the determinant for

## Example

The following example creates multiple numpy array then computes and returns the respective determinants

```py
import numpy as np

a = np.array([[1, 2], [3, 4]])
det_a = np.linalg.det(a)
print(det_a)

b = np.array([[5, 6], [7, 8]])
det_b = np.linalg.det(b)
print(det_b)

c = np.array([[1, 2, 3], [0, 1, 4], [5, 6, 0]])
det_c = np.linalg.det(c)
print(det_c)
```

This produces the following output:

```shell
-2.0
-2.0
1.0
```

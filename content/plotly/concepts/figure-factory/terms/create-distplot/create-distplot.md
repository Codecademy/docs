---
Title: 'Create Distplot()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'create a distribution plot from a data set.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Visualization'
  - 'Developer Tools'
  - 'Data Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Box Plot'
  - 'Data'
  - 'NumPy'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

The **create_distplot()** function is used to create a distribution plot from a data set. First import **plotly.figure_factory** as **ff**. Then `create-distplot` can be called upon as a method of `ff`.

## Syntax

```codebyte/python
import plotly.figure_factory as ff
fig = ff.create-distplot.(data_sets,label_names,bin_size)
fig.show()
```

## Example

The following example involves creating three random data sets of 100 floats using **numpy**. `x1`, `x2`, and `x3` are arrays, and are saved to `hist_data`, which becomes an array or arrays. `create-distplot` is called upon from `figure_factory`, and a custom bin size of 0.3 is used to create the following distribution plot.

![Example_Distplot](https://raw.githubusercontent.com/Codecademy/docs/main/media/ff_distplot_example.png)

```codebyte/python
import numpy as np
import plotly.figure_factory as ff


# Add histogram data
x1 = np.random.randn(100)
x2 = np.random.randn(100) + 2
x3 = np.random.randn(100) - 2

hist_data = [x1, x2, x3,]

group_labels = ['control', '+ 2', '- 2']

fig = ff.create_distplot(hist_data, group_labels, bin_size=.3)
fig.show()
```

```shell
fig.show()
```

## Codebyte Example

```codebyte/python
import numpy as np
import plotly.figure_factory as ff


# Add histogram data
x1 = np.random.randn(100)
x2 = np.random.randn(100) + 2
x3 = np.random.randn(100) - 2

hist_data = [x1, x2, x3,]

group_labels = ['control', '+ 2', '- 2']

fig = ff.create_distplot(hist_data, group_labels, bin_size=.3)
fig.show()
```

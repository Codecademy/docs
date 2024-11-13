---
Title: '`.create_distplot()`'
Description: '`.create_distplot()` creates interactive distribution plots combining histogram and KDE curves, ideal for visualization and comparing data distributions.'
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
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.create_distplot()`** function is part of Plotly's `.figure_factory` module. It is used to create distribution plots, which are visual representations that combine histograms and kernel density estimates (KDE) to display the distribution of a dataset.

## Syntax

```pseudo
fig = figure_factory.create_distplot(
    hist_data,
    group_labels,
    (...)
```

- `hist_data`: Contains numerical data for each dataset, entered as a list of lists or arrays.
- `group_labels`: List of strings corresponding to each dataset in `hist_data`.

> Note: The ellipsis (...) in the syntax represents many parameters that are optional and automatically set to their default values, including `bin-size=None`, `curve_type='kde'`, `colors=None`, `histnorm=''`, `show_hist=True`, `show_curve=True`, and `show_rug=True`.

## Example

This is a basic distribution plot that generates 2 datasets with normal distributions using default settings:

```python
import plotly.figure_factory as ff
import numpy as np
from scipy import stats

# Generate sample data.
x1 = np.random.randn(200)    # Dataset 1
x2 = np.random.randn(200) + 2    # Dataset 2

hist_data = [x1, x2]
group_labels = ['Dataset 1', 'Dataset 2']

# Create the distribution plot.
fig = ff.create_distplot(hist_data, group_labels)

# Display the plot.
fig.show()
```

The resulting output looks as follows:

![Example 1 Output]("https://raw.githubusercontent.com/Codecademy/docs/main/media/distplot-example.png")

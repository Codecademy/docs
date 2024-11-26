---
Title: '.create_distplot()'
Description: 'Generates a distribution plot to visualize the distribution of data, combining a histogram and a kernel density estimate.'
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

The **`.create_distplot()`** function is part of Plotly's [`figure_factory`](https://www.codecademy.com/resources/docs/plotly/figure-factory) module.

It generates distribution plots that combine histograms and **Kernel Density Estimates (KDE)**, allowing for a clear visualization of a dataset's distribution.

## Syntax

```pseudo
fig = figure_factory.create_distplot( hist_data, group_labels, ...)
```

- `hist_data`: A list of datasets to plot. Each dataset is represented as a separate group in the distribution plot.
- `group_labels`: List of strings corresponding to each dataset in `hist_data`. These labels are used to distinguish the different groups in the plot.

> **Note**: The ellipsis (...) in the syntax represents several optional parameters, which are automatically set to their default values, such as `bin_size=None`, `curve_type='kde'`, `colors=None`, `histnorm=''`, `show_hist=True`, `show_curve=True`, and `show_rug=True`.

## Example

This is a basic distribution plot that generates 2 datasets with normal distributions using default settings:

```py
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

![Both datasets are displayed with their histograms and smoothed KDE curves overlaid, providing a clear visualization of the data's distribution.](https://raw.githubusercontent.com/Codecademy/docs/main/media/distplot-example.png)

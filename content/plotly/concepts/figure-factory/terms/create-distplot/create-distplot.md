---
Title: 'Create Distplot()' 
Description: 'create a distribution plot from a data set.' 
Subjects: 
  - 'Data Visualization'
  - 'Developer Tools'
  - 'Data Science'
Tags: 
  - 'Box Plot'
  - 'Data'
  - 'NumPy'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/computer-science'
---

The **create_distplot()** function is used to create a distribution plot from a data set. First import **plotly.figure_factory** as **ff**. Then `create-distplot` can be called upon as a method of `ff`.

## Syntax

```pseudo
import plotly.figure_factory as ff
fig = ff.create-distplot.(data_sets,label_names,bin_size)
fig.show()
```

`create-distplot` takes the following arguments:

- `hist_data` : Use list of lists to plot multiple data sets on the same plot.
- `group_labels` : Names for each data set.
- `bin_size` : – Size of histogram bins. Default = 1.
- `curve_type` : ‘kde’ or ‘normal’. Default = ‘kde’
- `histnorm` : ‘probability density’ or ‘probability’. Default = ‘probability density’
- `show_hist` : Add histogram to distplot? Default = True
- `show_curve` : Add curve to distplot? Default = True
- `show_rug` : Add rug to distplot? Default = True
- `colors` : Colors for traces
- `rug_text` : Hovertext values for rug_plot

## Example

The following example involves creating three random data sets of 100 floats using **numpy**. `create-distplot` is called upon from `figure_factory`, and a custom bin size of 0.3 is used to create the following distribution plot.

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

This code will output the following:

![Example_Distplot](https://raw.githubusercontent.com/Codecademy/docs/main/media/ff_distplot_example.png)



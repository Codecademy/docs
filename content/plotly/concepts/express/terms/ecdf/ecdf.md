---
Title: '.ecdf()'
Description: 'Creates ECDF plots, which are used for visualizing the proportion or count of observations that are less than or equal to a given value.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Functions'
  - 'Plotly'
  - 'Values'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Plotly, the **`.ecdf()`** function under the `plotly.express` module is used to generate an [Empirical Cumulative Distribution Function (ECDF)](https://www.codecademy.com/resources/docs/python/statsmodels/statistical-distributions) plot. An ECDF plot visualizes the proportion or count of observations that are less than or equal to a given value, making it useful for analyzing distributions of data without assuming an underlying probability distribution.

## Syntax

```pseudo
plotly.express.ecdf(data_frame=None, x=None, y=None, color=None, orientation=None, markers=False, ...)
```

- `data_frame`: The [Pandas DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe) containing the data.
- `x`: The column to be plotted on the x-axis.
- `y` (Optional): The column to be plotted on the y-axis.
- `color` (Optional): The column name for grouping data by different colors.
- `orientation` (Optional): Defines the orientation of the ECDF plot. The available options are `v` (vertical) and `h` (horizontal).
- `markers` (Optional): If `True`, shows markers at each data point.

> **Note:** The ellipsis (...) indicates that there can be additional optional parameters beyond those listed here.

## Example

The following example demonstrates the usage of the `.ecdf()` function:

```py
import plotly.express as px
import pandas as pd

# Create a sample dataset
data = pd.DataFrame({
  "values": [3, 7, 8, 5, 12, 14, 18, 21, 25, 30]
})

# Create an ECDF plot
plot = px.ecdf(data, x="values", markers=True)

# Display the ECDF plot
plot.show()
```

The above code produces the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/ecdf-plot.png)

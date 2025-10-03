---
Title: '.area()'
Description: 'Creates an area chart by filling the space under a line plot to visualize trends and cumulative data.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Graphs'
  - 'Libraries'
  - 'Methods'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`.area()`** function in Plotly Express creates an area chart by filling the space under a line plot, making it useful for visualizing trends and cumulative values over time. It supports grouped and stacked data, enabling easy comparison across categories.

## Syntax

```pseudo
import plotly.express as px

fig = px.area(
    data_frame,
    x,
    y,
    color=None,
    line_group=None,
    markers=False,
    text=None,
    hover_name=None,
    hover_data=None,
    template=None
)
fig.show()
```

**Parameters**:

- **`data_frame`**: The DataFrame containing the data. If `data_frame` is not provided, `x` and `y` must be passed as separate lists.
- **`x`**: If `data_frame` is given, `x` should be a column name in `data_frame` representing the x-axis values. Otherwise, it takes as input a list of values for the x-axis.
- **`y`**: If `data_frame` is given, `y` should be column name(s) in `data_frame` representing the y-axis values. Otherwise, it takes as input a list of values for the y-axis. If multiple column names are provided, stacked area plots are created.
- **`color`** (optional): Column name for grouping and coloring different areas.
- **`line_group`** (optional): Defines which lines share the same fill area.
- **`markers`** (default=`False`): Adds markers to data points if set to `True`.
- **`text`** (optional): Adds text labels to data points.
- **`hover_name`** (optional): Column used for hover labels.
- **`hover_data`** (optional): Additional columns to display in the hover tooltip.
- **`template`** (optional): Specifies a predefined Plotly template.

## Examples

### Basic Area Chart

The following example demonstrates how to create an area chart using Plotly Express. This example uses a sample dataset showing daily sales over a period of time.

```py
import plotly.express as px
import pandas as pd

# Sample data
data = {
    "Date": pd.date_range(start="2024-01-01", periods=10, freq='D'),
    "Sales": [100, 120, 150, 130, 170, 180, 200, 190, 210, 230]
}
df = pd.DataFrame(data)

# Create area chart
fig = px.area(df, x="Date", y="Sales", title="Daily Sales Trend")
fig.show()
```

The output will be as follows:

![The output is an area chart where the x-axis represents the dates and the y-axis represents sales figures.](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-area.png)

The output image displays an area chart where the x-axis represents the dates and the y-axis represents sales figures. The area under the line is filled, showcasing the trend of increasing sales over time. Peaks and valleys in the data are clearly visible, making it easy to identify fluctuations in daily sales.

### Stacked Area Chart

The following example demonstrates how to create a stacked area chart by grouping data using the `color` parameter.

```py
import plotly.express as px
import pandas as pd
import numpy as np

# Sample data
dates = pd.date_range(start="2024-01-01", periods=10, freq='D')
data = {
    "Date": np.tile(dates, 2),  # Repeat the dates for two categories
    "Sales": [100, 120, 150, 130, 170, 180, 200, 190, 210, 230] + [80, 110, 140, 120, 160, 170, 190, 180, 200, 220],
    "Category": ["A"] * 10 + ["B"] * 10
}
df = pd.DataFrame(data)

# Create stacked area chart
fig = px.area(df, x="Date", y="Sales", color="Category", title="Stacked Area Chart")
fig.show()
```

The output will be as follows:

![The output is a stacked area chart where different categories are represented by different colors, showing their contribution to the total values over time.](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-stacked-area-chart.png)

---
Title: '.funnel()'
Description: 'Generates a funnel chart that visualizes the reduction of data in progressive stages.'
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

The **.funnel()** method in Plotly Express creates a chart showing the progressive reduction, or "funneling," of data as it moves through sequential stages. The chart is composed of stacked horizontal bars, with the length of each bar representing a value at each stage in the process. This helps visualize how the values change as they move through each stage and can highlight bottlenecks or drop-offs in values.

## Syntax

```pseudo
plotly.express.funnel(data_frame=None, x=None, y=None, color=None, facet_row=None, facet_col=None, ...)
```

- `data_frame`: The dataset (typically a [Pandas dataframe](https://www.codecademy.com/resources/docs/pandas/dataframe)) to be plotted. If this is not provided, Plotly Express will construct a dataframe using the other arguments.
- `x`: The column in the dataframe that specifies the length of the bars, plotted along the x-axis in cartesian coordinates. 
- `y`: The column in the dataframe that represents the stages of the funnel, plotted along the y-axis.
- `color`: The column in the dataframe that assigns colors to the bars of the funnel.
- `facet_row`: Splits the funnel chart into vertically-stacked subplots based on a specified column from the dataframe.
- `facet_col`: Splits the funnel chart into horizontally-arranged subplots based on a specified column from the dataframe.

> **Note:** The ellipsis (...) indicates there can be additional optional parameters beyond those listed here.

## Examples

The example below generates a funnel chart representing the job search process for an applicant.

```python
# Import Plotly Express module and Pandas library
import plotly.express as px
import pandas as pd

# Create sample dictionary
data = {
    'Stage': ['Applications Sent', 'Phone Interview', 'Technical Interview', 'Onsite Interview', 'Offers Received', 'Offers Accepted'],
    'Job Applications': [500, 348, 92, 56, 10, 1]
}

# Convert the dictionary into a DataFrame
df = pd.DataFrame(data)

# Create the funnel chart with title "Job Search"
fig = px.funnel(df, x='Job Applications', y='Stage', title='Job Search')

# Show the chart
fig.show()
```

The above example produces the following output:

![Funnel Chart Illustrating Job Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-express-funnel-example1.png)

As a variation on the previous example, the next example adds subplots using the `facet_col` parameter to compare two different job applicants side by side.

```python
# Import Plotly Express module and Pandas library
import plotly.express as px
import pandas as pd

# Create sample dictionary
data = {
    'Stage': ['Applications Sent', 'Phone Interview', 'Technical Interview', 'Onsite Interview', 'Offers Received', 'Offers Accepted'] * 2,
    'Job Applications': [500, 348, 92, 56, 10, 1, 500, 329, 290, 225, 167, 1],
    'Applicants': ['Candidate 1'] * 6 + ['Candidate 2'] * 6
}

# Convert the dictionary into a DataFrame
df = pd.DataFrame(data)

# Create the funnel chart with title "Job Search Comparison"
fig = px.funnel(df, x='Job Applications', y='Stage', facet_col='Applicants', title='Job Search Comparison')

# Show the chart
fig.show()
```
The above code will result in the following output:

![Funnel Chart Comparing Two Applicants](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-express-funnel-example2.png)

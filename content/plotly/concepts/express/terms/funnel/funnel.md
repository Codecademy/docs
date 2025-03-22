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
---

The **`.funnel()`** method in Plotly Express creates a funnel chart, which visualizes the progressive reduction of data as it moves through sequential stages. The chart is composed of stacked horizontal bars, with each bar's length representing a value at a specific stage. This helps highlight changes, bottlenecks, or drop-offs in the process.

## Syntax

```pseudo
plotly.express.funnel(data_frame=None, x=None, y=None, color=None, facet_row=None, facet_col=None, ...)
```

- `data_frame`: The dataset (typically a [Pandas DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe)) to be plotted. If this is not provided, Plotly Express will construct a DataFrame using the other arguments.
- `x`: The column in the DataFrame that specifies the values to determine the length of the bars, plotted along the x-axis.
- `y`: The column in the DataFrame that represents the stages of the funnel, plotted along the y-axis.
- `color`: The column in the DataFrame that assigns colors to the bars of the funnel.
- `facet_row`: Splits the funnel chart into vertically-stacked subplots based on a specified column from the DataFrame.
- `facet_col`: Splits the funnel chart into horizontally-arranged subplots based on a specified column from the DataFrame.

> **Note:** The ellipsis (...) indicates there can be additional optional parameters beyond those listed here.

## Example 1

The example below generates a funnel chart representing the job search process for an applicant:

```py
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

## Example 2

As a variation of the previous example, this example adds subplots using the `facet_col` parameter to compare two different job applicants side by side:

```py
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

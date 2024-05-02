---
Title: '.line()'
Description: 'Creates line charts, also known as line plots or line graphs.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data'
  - 'Graphs'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.line()`** method in Plotly is specifically designed for creating line charts, also known as line plots or line graphs, which effectively illustrate changes and trends over time. Line charts are invaluable in data visualization for depicting the progression of numerical data points connected by lines. This method simplifies the visualization of relationships between the elements in datasets, highlighting trends and changes across continuous or categorical axes.

## Syntax

The syntax for the `.line()` method in Plotly is straightforward and highly customizable. Here is a general structure:

```pseudo
plotly.express.line(data_frame=None, x=None, y=None, color=None, title=None, labels=None, ...)
```

- `data_frame`: The dataset containing the variables to be plotted.
- `x`: The data for the x-axis, typically time or a continuous variable.
- `y`: The data for the y-axis, representing the measured variables.
- `color` (Optional): A column name in the data frame that determines the color of the lines, useful for distinguishing different groups or categories.
- `title` (Optional): The title of the chart.
- `labels` (Optional): Custom labels for different axes or legend items.

> **Note:** The ellipsis (...) indicates that there can be additional optional arguments beyond those listed here.

## Example

Below is an example demonstrating how to use the `.line()` method to create a line chart visualizing economic growth over time:

```python
import plotly.express as px

# Load an example dataset
df = px.data.gapminder().query("continent == 'Oceania'")

# Create a line chart visualizing economic growth over time
fig = px.line(df, x='year', y='gdpPercap', color='country', title='Economic Growth in Oceania')

# Show the plot
fig.show()
```

In the above example, the economic growth (GDP per capita) of countries in Oceania from the Gapminder dataset is plotted. The x parameter is set to 'year' and the y parameter to 'gdpPercap'. The color parameter differentiates the lines by country, providing clear visual distinctions between each country's economic trajectory.

The above code produces the following output:

![Output of the above example](<https://raw.githubusercontent.com/Codecademy/docs/main/media/Output_plotly_line().png>)

---
Title: '.line()'
Description: 'Creates line charts, also known as line plots or line graphs.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Graphs'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.line()`** method in Plotly is specifically designed for creating line charts, which effectively illustrate changes and trends over time. Line charts are invaluable in data visualization for depicting the progression of numerical data points connected by lines. This method simplifies the visualization of relationships between the elements in datasets, highlighting trends and changes across continuous or categorical axes.

## Syntax

The syntax for the `.line()` method in Plotly is straightforward and highly customizable. Here is a general structure:

```pseudo
plotly.express.line(data_frame=None, x=None, y=None, color=None, title=None, labels=None, ...)
```
- data_frame: The dataset containing the variables that will be plotted.
- x: The data for the x-axis, typically time or a continuous variable.
- y: The data for the y-axis, representing the measured variables.
- color: (Optional) A column name in the dataframe that will determine the color of the lines, useful for distinguishing different groups or categories.
- title: (Optional) The title of the chart.
labels: (Optional) Custom labels for different axes or legend items.

```

## Example

Below is an example demonstrating how to use the `.line()` method to create a line chart visualizing economic growth over time:

```python
import plotly.express as px

# Load an example dataset
df = px.data.gapminder().query("continent == 'Oceania'")

# Create a line chart
fig = px.line(df, x='year', y='gdpPercap', color='country', title='Economic Growth in Oceania')

# Show the plot
fig.show()

```

In this example, the economic growth (GDP per capita) of countries in Oceania from the Gapminder dataset is plotted. The x parameter is set to 'year', and the y parameter to 'gdpPercap'. The color parameter differentiates the lines by country, providing clear visual distinctions between each country's economic trajectory.

## Conclusion
Utilizing the `.line()` method in Plotly allows for the efficient creation of dynamic and informative line charts. This tool is especially useful in data analysis for identifying trends, making comparisons across categories, and illustrating changes over time, making it a cornerstone of data visualization tasks.
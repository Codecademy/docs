---
Title: 'Create Gantt'
Description: 'Creates a Gantt chart, a type of bar chart that delineates a project schedule'
Subjects: 
  - 'Data Science
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Libraries'
  - 'Plotly'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/data-science'
---

The **.create_gantt** method in the *plotly.figure_factory* module is used to draw a Gantt chart, a bar chart that 
delineates a project schedule. Due to introduction of *plotly.express.timeline()* in version 4.9, the .create_gantt() method is now 
**deprecated**

## Syntax

```pseudo
plotly.figure_factory.create_gantt(df, colors, index_col, show_colorbar, show_hover_fill, reverse_colors, title, bar_width, showgrid_x, showgrid_y, height, width, tasks, task_names, data, group_tasks, show_hover_fill)
```

The `df` argument is the only required parameter. It represents the dataframe (or list) that serves as input data for the chart.

Other parameters are optional and can be used to customize plot elements such as the color, title, width of bars, and other customization parameters.

`.create_gantt` takes the following arguments:

- `df`: A dataframe or a list that serves as input data for the chart.
- `colors`: Either a plotly scale name, list, dictionary or a tuple.
- `index_col`: The column header to be used as indexing column.
- `show_colorbar`: Boolean, determines if the colorbar will be visible.
- `show_hover_fill`: Boolean, determines if the hovertext for the filled area of the chart.
- `reverse_colors`: Boolean, serves as a reverser of selected colors.
- `title`: Sets the title of the chart.
- `bar_width`: Determines the width of horizontal bars in the plot.
- `showgrid_x`: Boolean, determines if the x grid is visible.
- `showgrid_y`: Boolean, determines if the y grid is visible.
- `height`: Sets the height of the chart.
- `width`: Sets the width of the chart.

## Example

The example below demonstrates the use of `.create_gantt()` to plot a Gantt chart.

```py
import plotly.figure_factory as ff 

df = [dict(Task="Task A", Start='2024-01-01', Finish='2024-02-02'), 
	dict(Task="Task B", Start='2024-03-01', Finish='2024-11-11'), 
	dict(Task="Task C", Start='2024-08-06', Finish='2024-09-21')] 

fig = ff.create_gantt(df) 
fig.show()

```
**Output:**

![Output of plotly.figure_factory.create_gantt() function example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-figure-factory-create-gantt-output.png)

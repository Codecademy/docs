---
Title: '.create_gantt()'
Description: 'Creates a Gantt chart, a type of bar chart that delineates a project schedule by illustrating task durations, dependencies, and timelines.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data'
  - 'Graphs'
  - 'Libraries'
CatalogContent: 
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.create_gantt`** method in the `plotly.figure_factory` module is a function used in `Plotly` to generate Gantt charts. Gantt charts are graphical representations of project schedules that illustrate tasks, their durations, and dependencies. This method allows users to create interactive Gantt charts within their Plotly figures, providing a visual overview of project timelines and progress.

## Syntax

The syntax for the .create_gantt() method in Plotly is customizable. Below is a general structure of it: 

```pseudo

plotly.figure_factory.create_gantt(df, colors=None, index_col=None, show_colorbar=False, reverse_colors=False, title=’Gantt Chart’, ....)

```

The `.create_gantt` method takes the following arguments:

- `df`: Required input data, either a `data frame` or a list, serving as the foundation for the Gantt chart's content.
- `colors`: Specifies the color scheme used in the chart, allowing customization through options like a Plotly scale name, a `list` of colors, a `dictionary` mapping values to colors, or a `tuple` defining the color range.
- `index_col`: Identifies the column header to be used as the indexing column in the Gantt chart, aiding in the organization of tasks or data points along the `y-axis`.
- `show_colorbar`: A `boolean` parameter determining the visibility of the color bar in the Gantt chart.
- `reverse_colors`: A `boolean` parameter enabling the reversal of selected colors in the chart.
- `title`: Sets a descriptive title for the Gantt chart.

>**Note:** The ellipsis (...) indicates that there can be additional optional arguments beyond those listed here.

## Example

The example below demonstrates the use of `.create_gantt()` to plot a Gantt chart for a simple project with three tasks (A, B and C) that take place in the same year:

```py
import plotly.figure_factory as ff 

df = [dict(Task="Task A", Start='2024-01-01', Finish='2024-02-02'), 
	dict(Task="Task B", Start='2024-03-01', Finish='2024-11-11'), 
	dict(Task="Task C", Start='2024-08-06', Finish='2024-09-21')] 

fig = ff.create_gantt(df) 
fig.show()

```
**Output:**

The code above produces the following output:

![Output of plotly.figure_factory.create_gantt() function example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-figure-factory-create-gantt-output.png)

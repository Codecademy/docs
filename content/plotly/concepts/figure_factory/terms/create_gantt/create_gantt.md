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

"The syntax for the .create_gantt() method in Plotly is customizable. Below is a general structure of it: "

```pseudo

plotly.figure_factory.create_gantt(df, colors=None, index_col=None, show_colorbar=False, reverse_colors=False, title=’Gantt Chart’, ....)

```

`.create_gantt` takes the following arguments:

- `df`: This is the only required parameter for this method, a dataframe or a list that serves as input data for the chart.
- `colors`: Either a plotly scale name, list, dictionary or a tuple.
- `index_col`: The column header to be used as indexing column.
- `show_colorbar`: Boolean, determines if the colorbar will be visible.
- `reverse_colors`: Boolean, serves as a reverser of selected colors.
- `title`: Sets the title of the chart.

**Note:** The ellipsis (...) indicates that there can be additional optional arguments beyond those listed here.

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

![Output of plotly.figure_factory.create_gantt() function example](https://raw.githubusercontent.com/Codecademy/docs/main/media/plotly-figure-factory-create-gantt-output.png)

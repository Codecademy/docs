---
Title: '.create_bullet()'
Description: 'Generates bullet charts to visualize performance metrics against a target using Plotly.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Plotly'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**`.create_bullet()`** is a function from the [Plotly Figure Factory](https://www.codecademy.com/resources/docs/plotly/figure-factory) module that generates bullet charts. These charts compare a performance measure against predefined thresholds or ranges and are commonly used to visualize progress toward targets or key performance indicators (KPIs).

## Syntax

```pseudo
plotly.figure_factory.create_bullet(
  data,
  markers=None,
  measures=None,
  ranges=None,
  subtitles=None,
  titles=None,
  orientation='h',
  width=None,
  height=None,
  **layout_options
)
```

| **Parameter**      | **Description**                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `data`             | A list of dictionaries or a similar data structure describing chart parameters for each bullet.               |
| `markers`          | A list of target or reference values (for example, the goal).                                                 |
| `measures`         | A list of actual values representing the performance metric being tracked.                                    |
| `ranges`           | A list of numeric intervals that define color-coded zones for context.                                        |
| `subtitles`        | A list of text labels for additional information or descriptions.                                             |
| `titles`           | A list of main titles or labels for each bullet.                                                              |
| `orientation`      | Determines chart direction: `'h'` (horizontal, default) or `'v'` (vertical).                                  |
| `width`, `height`  | The figure’s width and height in pixels.                                                                      |
| `**layout_options` | Additional layout attributes passed to the underlying Plotly figure (for example, margins, background color). |

**Returns**: A Plotly figure object that can be displayed or updated using standard Plotly methods.

## Example

The example below demonstrates the usage of `.create_bullet()` function:

```py
import plotly.figure_factory as ff

bullet_data = [
  {
    'title': 'Sales',
    'subtitle': 'in thousands',
    'ranges': [20, 30, 40],
    'measures': [22],
    'markers': [30]
  }
]

fig = ff.create_bullet(
  data=bullet_data,
  orientation='h',
  width=600,
  height=200
)

fig.update_layout(
  title="Bullet Chart Example"
)

fig.show()
```

- `bullet_data` defines the ranges, measures, and markers for the bullet chart.
- `create_bullet()` builds the chart with a chosen orientation and size.
- `update_layout()` modifies the layout, including adding a title.
- `fig.show()` displays the chart in an interactive environment such as Jupyter Notebook.

Here's how the output will look like:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/create-bullet.png)

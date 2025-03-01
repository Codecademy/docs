---
Title: '.Sankey()'
Description: 'Creates a Sankey diagram in Plotly using the graph_objects module.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphics'
  - 'Charts'
  - 'Plotly'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**`.Sankey()`** is a method in Plotly's [`graph_objects`](https://www.codecademy.com/resources/docs/plotly/graph-objects) module that generates **Sankey diagrams
**. These diagrams are a type of visualization that illustrates flow from one set of values to another. The items being
connected are called **nodes**, and the connections between them are called **links**. The width of the links is
proportional to the flow quantity.

## Syntax

```pseudo
plotly.graph_objects.Sankey(node=None, link=None, arrangement = 'snap', orientation = 'h', valueformat = None, ...))
```

- `node`: A dictionary that defines the properties of the nodes in the Sankey
  diagram. It has the following keys:

    - `label`: An array of strings, each representing the name of a node. The
      order of the labels in this array corresponds to the node indices used
      in the `link` parameter.
    - `color`: A string or an array of strings specifying the color of each
      node. If a single string is provided, all nodes will have the same
      color. If an array is provided, each element defines the color of the
      node with the same index.

- `link`: A dictionary that defines the links (connections) between nodes and
  their flow values. It contains the following keys:

    - `source`: An array of numerical indices. Each index specifies the source
      node of a link. The numerical index refers to the position of the node's
      name in the `label` array.
    - `target`: An array of numerical indices. Each index specifies the target
      node of a link. The numerical index refers to the position of the node's
      name in the `label` array.
    - `value`: An array of numerical values. Each value represents the flow
      quantity associated with a specific link. The order of values
      corresponds to the order of the source-target pairs.
    - `color`: A string or an array of strings specifying the color of each
      link.
    - `line`: A dictionary used to define the border of the links, contains
      the following keys:
        - `color`: Defines the color of the link border.
        - `width`: Defines the width of the link border.

  > **Note:** The `source`, `target`, and `value` arrays must have the same
  > length. Each set of elements at the same index in these arrays defines a
  > single link. The index used in the `source` and `target` array, refer to
  > the position of the node in the `label` array.
  
- `arrangement`: Sets the arrangement of the nodes in the Sankey diagram. The
  possible values are: `'snap'`, `'perpendicular'`, `'freeform'` and
  `'fixed'`. The default value is `'snap'`.

- `orientation`: Sets the orientation of the Sankey diagram. The possible
  values are: `'h'` for horizontal and `'v'` for vertical. The default value
  is `'h'`.

- `valueformat`: Sets the format of the numerical values displayed on the
  links, using d3-format's syntax.

> **Note:** There are many additional, optional parameters that are not listed
> here, as indicated by the ellipsis (`...`) in the syntax.




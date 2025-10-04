---
Title: '.Sankey()'
Description: 'Creates Sankey diagrams, which visualize flow between categories using nodes and links.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Graphics'
  - 'Plotly'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**`.Sankey()`** is a method in Plotly's [`graph_objects`](https://www.codecademy.com/resources/docs/plotly/graph-objects) module that creates Sankey diagrams, which visualize the flow between different values. The connected elements are called nodes, and the connections between them are links, where the width of each link represents the quantity of flow.

## Syntax

```pseudo
plotly.graph_objects.Sankey(node=None, link=None, arrangement = 'snap', orientation = 'h', valueformat = None, ...)
```

- `node`: A dictionary that defines the properties of the nodes in the Sankey diagram. It has the following keys:
  - `label`: Names of the nodes, where the order corresponds to their indices used in `link`.
  - `color`: A string or an array of strings specifying the color of each node. If a single string is provided, all nodes will have the same color. If an array is provided, each element defines the color of the node with the same index.
- `link`: A dictionary that defines the links (connections) between nodes and their flow values. It contains the following keys:
  - `source`: An array of numerical indices. Each index specifies the source node of a link. The numerical index refers to the position of the node's name in the `label` array.
  - `target`: An array of numerical indices. Each index specifies the target node of a link. The numerical index refers to the position of the node's name in the `label` array.
  - `value`: An array of numerical values. Each value represents the flow quantity associated with a specific link. The order of values corresponds to the order of the source-target pairs.

> **Note:** The `source`, `target`, and `value` arrays must have the same length.

- `arrangement`: Sets the arrangement of the nodes in the Sankey diagram. The possible values are: `snap`, `perpendicular`, `freeform`, and `fixed`. The default value is `snap`.
- `orientation`: Determines whether the Sankey diagram is displayed horizontally or vertically. The possible values are: `h` for horizontal, and `v` for vertical. The default value is `h`.
- `valueformat`: Sets the numerical format for flow values, using d3-format syntax.

> **Note:** There are many additional, optional parameters that are not listed here, as indicated by the ellipsis (`...`) in the syntax.

## Example

This code displays a Sankey diagram, illustrating the advertising cash flow through its nodes, and links:

```py
import plotly.graph_objects as go

# Define the data for the Sankey diagram (Advertising Cash Flow).
data = {
    'source': ['Ad Campaign', 'Social Media', 'Search Engines', 'Referrals', 'Social Media', 'Search Engines', 'Referrals', 'Social Media', 'Search Engines', 'Referrals'],
    'target': ['Clicks', 'Clicks', 'Clicks', 'Clicks', 'Leads', 'Leads', 'Leads', 'Conversions', 'Conversions', 'Conversions'],
    'value': [500, 300, 200, 100, 150, 80, 40, 60, 30, 10]
}

# Create a list of unique nodes.
all_nodes = data['source'] + data['target']

# Create a dictionary that links the name of the node to its index.
node_to_index = {node: i for i, node in enumerate(all_nodes)}

# Convert source, and target names to indices.
source_indices = [node_to_index[source] for source in data['source']]
target_indices = [node_to_index[target] for target in data['target']]

# Create the Sankey diagram.
fig = go.Figure(data=[go.Sankey(
    node=dict(
        label=all_nodes,
        pad=20,  # Add padding between nodes.
        thickness=10,  # Define the thickness of the nodes.
        line=dict(color="black", width=0.5)  # Add a border to the nodes.
    ),
    link=dict(
        source=source_indices,
        target=target_indices,
        value=data['value'],
        color=['lightblue', 'lightgreen', 'lightcoral', 'indigo', 'turquoise', 'mediumvioletred', 'darkorange', 'yellowgreen', 'dodgerblue', 'lightblue'],  # Define the color of the links.
        line=dict(color='black', width=0.2)  # Define the border of the links.
    ),
    arrangement='snap',  # Set the arrangement of the nodes.
    orientation='h'  # Set the orientation of the diagram.
)])

# Update layout to add a title.
fig.update_layout(title_text="Advertising Cash Flow", font_size=10)

# Display the plot.
fig.show()
```

This example results in the following output:

![The output will be a Sankey diagram.](https://raw.githubusercontent.com/Codecademy/docs/main/media/sankey-cash-flow.png)

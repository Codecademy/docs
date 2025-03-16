---
Title: '.Ohlc()'
Description: 'Creates an OHLC (Open-High-Low-Close) chart, which is commonly used in financial analysis to represent stock price movements over time.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Charts'
  - 'Data'
  - 'Functions'
  - 'Plotly'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

In Plotly, the **`.Ohlc()`** function is used to create an OHLC (Open-High-Low-Close) chart, which is commonly used in financial analysis to represent stock price movements over time. Each data point in an OHLC chart consists of four values:

- **Open**: The price at which the asset opened.
- **High**: The highest price recorded during the time period.
- **Low**: The lowest price recorded during the time period.
- **Close**: The price at which the asset closed.

These charts are useful for traders and analysts to identify trends and price movements.

## Syntax

```pseudo
plotly.graph_objects.Ohlc(x=None, open=None, high=None, low=None, close=None, ...)
```

- `x`: A list of date/time values for each data point.
- `open`: A list of opening prices.
- `high`: A list of highest prices.
- `low`: A list of lowest prices.
- `close`: A list of closing prices.

> **Note:** The ellipsis (...) in the syntax indicates that there can be additional optional parameters beyond those listed here.

## Example

The following example demonstrates the usage of the `.Ohlc()` function:

```py
import plotly.graph_objects as go

# Sample data
dates = ["2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13", "2024-03-14"]
opens = [100, 102, 105, 107, 110]
highs = [105, 108, 110, 112, 115]
lows = [98, 100, 103, 105, 108]
closes = [102, 106, 108, 110, 113]

# Create an OHLC chart
fig = go.Figure(data=[go.Ohlc(x=dates,
                              open=opens,
                              high=highs,
                              low=lows,
                              close=closes)])

# Update the chart with labels
fig.update_layout(title="OHLC Chart", xaxis_title="Date", yaxis_title="Price")

# Display the chart
fig.show()
```

The above code generates the following output:

![The output for the above example](https://raw.githubusercontent.com/Codecademy/docs/main/media/ohlc-chart.png)

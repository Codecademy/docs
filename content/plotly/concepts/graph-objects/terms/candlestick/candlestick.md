---
Title: '.Candlestick()'
Description: 'Creates candlestick charts to visualize financial data, showing open, high, low, and close values over time.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Data'
  - 'Finance'
  - 'Plotly'
  - 'Graphs'
  - 'Data Visualization'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-visualization'
---

The **`.Candlestick()`** method in Plotly's [`graph_objects`](https://www.codecademy.com/resources/docs/plotly/graph-objects) module is used to create candlestick charts, widely used for visualizing financial data. A candlestick chart displays four key data points for a specific time period:

1. **Open** - The starting value of the asset.
2. **High** - The highest value achieved within the time period.
3. **Low** - The smallest value during the period.
4. **Close** - The final value of the asset.

Candlestick charts are commonly used to identify trends and patterns in stock prices and forex, helping analysts and traders visualize market behavior and make informed decisions.

## Syntax

```pseudo
import plotly.graph_objects as go

fig = go.Figure(data=[go.Candlestick(
    x=df['date'],  # Time or date data
    open=df['open'],  # Opening prices
    high=df['high'],  # Highest prices
    low=df['low'],  # Lowest prices
    close=df['close']  # Closing prices
)])

fig.show()
```

## Example

The following example showcases the use of the `.candlestick()` method:

```py
import plotly.graph_objects as go

# Sample data
dates = ['2024-12-01', '2024-12-02', '2024-12-03']
open_prices = [100, 105, 110]
high_prices = [110, 115, 120]
low_prices = [95, 100, 105]
close_prices = [105, 110, 115]

# Create the figure
fig = go.Figure(data=[go.Candlestick(
    x=dates,
    open=open_prices,
    high=high_prices,
    low=low_prices,
    close=close_prices
)])

# Customize layout
fig.update_layout(
    title='Sample Candlestick Chart',
    xaxis_title='Date',
    yaxis_title='Price',
    xaxis_rangeslider_visible=False
)

# Display the figure
fig.show()
```

This example generates an interactive candlestick chart that displays the price movements over specific dates.

The above code generates the following output:

![Candlestick example Plotly](https://raw.githubusercontent.com/Codecademy/docs/main/media/candlestick-example.png)

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

1. **Open**: The starting value of the asset.
2. **High**: The highest value achieved during the time period.
3. **Low**: The lowest value during the period.
4. **Close**: The final value of the asset.

Candlestick charts are commonly used to identify trends and patterns in stock prices and forex, helping analysts and traders visualize market behavior and make informed decisions.

## Syntax

```pseudo
import plotly.graph_objects as go

fig = go.Figure(data=[go.Candlestick(
    x=df['date'],  # Time or date data
    open=df['open'],  # Opening prices
    high=df['high'],  # Highest prices
    low=df['low'],  # Lowest prices
    close=df['close'],  # Closing prices
    increasing_line_color='green',  # Color for increasing candlesticks
    decreasing_line_color='red',  # Color for decreasing candlesticks
    increasing_fillcolor='rgba(0, 255, 0, 0.3)',  # Fill color for increasing candlesticks
    decreasing_fillcolor='rgba(255, 0, 0, 0.3)'  # Fill color for decreasing candlesticks
)])

fig.update_layout(
    title='Candlestick Chart',  # Title for the chart
    xaxis_title='Date',  # X-axis label
    yaxis_title='Price',  # Y-axis label
    xaxis_rangeslider_visible=False  # Disables the range slider under the candlestick chart
)

fig.show()
```

- `x`: The data for the x-axis (usually dates or time values) representing the time of each candlestick.
- `open`: The opening price for each time period (candlestick).
- `high`: The highest price attained within the time period.
- `low`: The lowest price recorded within the period.
- `close`: - `close`: Close price for the period of time.
- `increasing_line_color`: Color of line for candlesticks where close price is greater than an open price (bullish).
- `decreasing_line_color`: Color of the line for candlesticks where the closing price is lower than the opening price (bearish).
- `increasing_fillcolor`: Fill color for the body of increasing candlesticks (bullish).
- `decreasing_fillcolor`: Fill color for the body of decreasing candlesticks (bearish).
- `title`: The title is displayed at the chart's top.
- `xaxis_title`: Label for the x-axis (usually indicating time, e.g., 'Date').
- `yaxis_title`: Label for the y-axis (usually indicating price, e.g., 'Price').
- `xaxis_rangeslider_visible`: Controls visibility of the range slider at the bottom; set to `False` to hide it.

## Example

The following code example creates a candlestick chart using Plotly's `.candlestick()` method. The x-axis represents dates or time periods, and the y-axis displays the opening, highest, lowest, and closing prices for each time period.

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
    # Time Periods for the x-axis.
    x=dates,
    # Opening prices for each date.
    open=open_prices,
    # Highest prices for each date.
    high=high_prices,
    # Lowest prices for each date.
    low=low_prices,
    # Closing prices for each date.
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

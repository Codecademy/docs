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

go.Candlestick(
    x=None,  # X-axis data (time or date)
    open=None,  # Opening prices
    high=None,  # High prices
    low=None,  # Low prices
    close=None,  # Closing prices
    increasing=None,  # Increasing line style (color, width, etc.)
    decreasing=None,  # Decreasing line style (color, width, etc.)
    line=None,  # Line settings (e.g., width, color)
    hoverinfo=None,  # Tooltip information format
    name=None,  # Name for the trace (appears in legend)
    opacity=None,  # Opacity of the candlestick
    visible=None,  # Determines visibility (True/False)
    xaxis=None,  # X-axis to associate the trace with
    yaxis=None   # Y-axis to associate the trace with
)
```

- `x`: The data for the x-axis (usually dates or time values) representing the time of each candlestick.
- `open`: The opening price for each time period (candlestick).
- `high`: The highest price attained within the time period.
- `low`: The lowest price recorded within the period.
- `close`: Closing price for the time period.
- `increasing`: Specifies the style of candlesticks where the close price is higher than the open price(bullish).
- `decreasing`: Specifies the style of candlesticks where the close price is lower than the open price(bearish) .
- `line`: Configures the line settings for the candlesticks.
- `hoverinfo`: Defines the information displayed when hovering over the candlesticks(such as 'x', 'open', 'close', etc.).
- `name`: The trace name that appears in the legend.
- `opacity`: The transparency level of candlestick trace.
- `visible`: Controls the visibility of the trace.
- `xaxis` and `yaxis`: Allows you to assign specific axes to the trace.

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

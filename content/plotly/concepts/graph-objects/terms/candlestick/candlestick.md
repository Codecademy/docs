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

go.Candlestick(x=None, open=None, high=None, low=None, close=None, increasing=None, ...)
```

- `x`: Represents the x-axis values, typically dates or time intervals for the candlestick chart.
- `open`: Represents the opening price of the asset for each time period.
- `high`: Represents the highest price of the asset for each time period.
- `low`: Represents the lowest price of the asset for each time period.
- `close`: Represents the closing price of the asset for each time period.
- `increasing`: Customizes the appearance of candles in cases where the closing price is higher than the opening price. The line color, width, or other styles can be defined.

> **Note**: The ellipsis (`...`) indicates that additional optional parameters can be specified to customize the candlestick chart further.

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
    # Dates or time periods for the x-axis.
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

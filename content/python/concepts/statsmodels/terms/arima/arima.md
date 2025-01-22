---
Title: 'ARIMA'
Description: 'Models and predicts time series data using past values and trends to forecast future values.'
Subjects:
- 'Data Science'
- 'Machine Learning'
Tags:
- 'Algorithms'
- 'Data'
- 'Machine Learning'
- 'Statistics'
  CatalogContent:
- 'learn-python-3'
- 'paths/data science'
---

The **Auto-Regressive Integrated Moving Average**`(ARIMA)` model is a statistical tool that can be used for analyzing and forecasting the time series data. It is particularly useful when the data shows trends or non-stationary behavior and is most commonly used in economics and finance to predict patterns and seasonality.

It combines the following three components:

- **`AR (Autoregression)`**: Models the relationship between current values in a time series and their past values (lags).
- **`I(Differencing)`**: Converts non-stationary data into stationary data by subtracting the previous value from the current one, helping to remove trends and seasonality.
- **`MA(Moving Average)`**: Smooths the data by capturing the correlation between the current observation and the inaccuracies from earlier predictions.

## Syntax

Here's the syntax for defining an `ARIMA` model:

```pseudo
ARIMA(time_series_data, order=(p, d, q))
```

- `time_series_data`: The dataset containing the time series to be modeled or forecasted.
- `order`: A tuple (p, d, q) where:
  - `p`: Number of lagged observations for the Auto-Regressive (AR) component.
  - `d`: Differencing order to make the data stationary (use 0 for ARMA models).
  - `q`: Number of lagged forecast errors for the Moving Average (MA) component.

## Example

Here’s an example showing how to apply the `ARIMA` model to a time series and interpret the results:

```py
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA

# Generate sample time series data
np.random.seed(42)
time = np.arange(1, 51)
data = 10 + 0.5 * time + np.random.normal(scale=2, size=len(time))

# Create a pandas DataFrame
df = pd.DataFrame({'Time': time, 'Value': data})

# Define ARIMA model order
order = (1, 1, 1)

# Fit the ARIMA model
model = ARIMA(df['Value'], order=order)
result = model.fit()

# Forecast for the next 10 steps
forecast = result.get_forecast(steps=10)
forecast_values = forecast.predicted_mean
forecast_ci = forecast.conf_int()

# Plot the original data and forecast
plt.figure(figsize=(10, 6))
plt.plot(df['Time'], df['Value'], label="Original Data", marker='o')
plt.plot(
    range(len(df['Value']), len(df['Value']) + len(forecast_values)),
    forecast_values,
    label="Forecast",
    marker='o',
    color="orange"
)
plt.fill_between(
    range(len(df['Value']), len(df['Value']) + len(forecast_values)),
    forecast_ci.iloc[:, 0],
    forecast_ci.iloc[:, 1],
    color='orange',
    alpha=0.2,
    label="Confidence Interval"
)
plt.xlabel("Time")
plt.ylabel("Value")
plt.title("ARIMA Model: Original Data and Forecast")
plt.legend()
plt.grid()
plt.show()
```

Here is the output for the code:

![ARIMA Model](https://raw.githubusercontent.com/Codecademy/docs/main/media/arima-example.png)

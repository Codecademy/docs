---
Title: 'SARIMAX'
Description: 'Models and forecasts time series data with seasonality and optional exogenous variables.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Machine Learning'
  - 'Python'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**SARIMAX** (Seasonal AutoRegressive Integrated Moving Average with eXogenous regressors) in Python's statsmodels is a versatile model for analyzing and forecasting time series data. It accounts for trends, seasonality, and autoregressive/moving average components, while also allowing the inclusion of external factors (exogenous variables) that influence the data. This makes it ideal for complex time series with seasonal patterns and external dependencies.

SARIMAX is an extended version of [`ARIMA`](https://www.codecademy.com/resources/docs/python/statsmodels/arima) that incorporates seasonal components and the ability to include exogenous variables (external factors influencing the time series). While ARIMA is suitable for non-seasonal data, SARIMAX handles seasonal patterns and can account for additional independent variables, making it more flexible for complex time series forecasting.

## Syntax

```pseudo
from statsmodels.tsa.statespace.sarimax import SARIMAX

model = SARIMAX(endog, exog=None, order=(p, d, q), seasonal_order=(P, D, Q, s), trend=None)
```

- `endog`: The dependent variable (time series data) that the model will analyze and forecast.
- `exog`: External or exogenous variables that influence the dependent variable. Defaults to `None` if no external factors are used.
- `order`: Specifies the non-seasonal ARIMA components in the form `(p, d, q)`, where:
  - `p`: Number of autoregressive terms.
  - `d`: Differencing order to make the series stationary.
  - `q`: Number of moving average terms.
- `seasonal_order`: Specifies the seasonal components in the form (`P`, `D`, `Q`, `s`), where:
  - `P`: Seasonal autoregressive terms.
  - `D`: Seasonal differencing order.
  - `Q`: Seasonal moving average terms.
  - `s`: Length of the seasonality (e.g., `s=12` for monthly data with yearly seasonality).
- `trend`: Specifies whether to include a deterministic trend component in the model. Options include `"n"` (no trend), `"c"` (constant), `"t"` (linear trend), or `"ct"` (constant and linear trend). Defaults to `None`.

## Example

The following code demonstrates how to use the SARIMAX model to forecast a seasonal time series with exogenous variables:

```py
import numpy as np
import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX
import matplotlib.pyplot as plt

# Generate synthetic time series data
np.random.seed(42)
n = 100
time = np.arange(1, n + 1)
seasonality = 10 * np.sin(2 * np.pi * time / 12)  # Seasonal pattern
trend = 0.5 * time  # Trend component
noise = np.random.normal(scale=2, size=n)  # Random noise
data = trend + seasonality + noise

# Create exogenous variable (e.g., marketing spend)
exog = 5 * np.sin(2 * np.pi * time / 6) + np.random.normal(scale=1, size=n)

# Create a DataFrame
df = pd.DataFrame({'Time': time, 'Value': data, 'Exog': exog})

# Fit the SARIMAX model
model = SARIMAX(
    df['Value'],
    exog=df['Exog'],
    order=(1, 1, 1),
    seasonal_order=(1, 1, 1, 12)
)
result = model.fit(disp=False)  # Use disp=False to suppress display of the fitting process

# Forecast the next 12 steps
# Create exogenous values for the forecast period (constant for simplicity in this example)
forecast_exog = np.array([5] * 12).reshape(-1, 1)  # Future exogenous values, reshaped for forecasting

# Make the forecast
forecast = result.get_forecast(steps=12, exog=forecast_exog)
forecast_values = forecast.predicted_mean
forecast_ci = forecast.conf_int()

# Plot original data and forecast
plt.figure(figsize=(10, 6))
plt.plot(df['Time'], df['Value'], label="Original Data", marker='o')
plt.plot(
    range(n + 1, n + 13),
    forecast_values,
    label="Forecast",
    color='yellow',
    marker='o'
)
plt.fill_between(
    range(n + 1, n + 13),
    forecast_ci.iloc[:, 0],
    forecast_ci.iloc[:, 1],
    color='orange',
    alpha=0.2,
    label="Confidence Interval"
)
plt.xlabel("Time")
plt.ylabel("Value")
plt.title("SARIMAX Model: Original Data and Forecast")
plt.legend()
plt.grid()
plt.show()
```

The code produces the following output:

![The plot compares the original data with the forecasted values and includes a shaded confidence interval to show the range of possible future outcomes based on the model.](https://raw.githubusercontent.com/Codecademy/docs/main/media/sarimax-example.png)

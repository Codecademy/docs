---
Title: 'ARMA'
Description: 'Represent stationary time series data, where statistical properties remain consistent over time.'
Subjects:
  - 'Machine Learning'
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Statistics'
  - 'Models'
  - 'Data'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**The Autoregressive Moving Average (ARMA)** is designed to represent stationary time series data, where statistical properties remain consistent over time.

It combines the following two components:
  - **Auto-Regressive (AR) Model**: Predicts future values using relationships with past observations.
  - **Moving Average (MA) Model**: Models relationships with past errors to correct forecasts and improve accuracy.

## Installation
To run ARMA model, you need to install `statsmodels` and `pandas` libraries using `pip`:
```shell
pip install statsmodels pandas

## Syntax

### ARIMA Model
To implement ARMA in Python, the **ARIMA(Autoregressive integrated moving average) model** will be used.
```py
model = ARIMA(endog, order=(p, d, q))
```
- `endog`: The time series data (y-axis).
- `order`: A tuple (p, d, q) where:
  - `p`: Order of the autoregressive (AR) component.
  - `d`: Differencing order (set to 0 for ARMA).
  - `q`: Order of the moving average (MA) component.
### Fitting the Model
Once the ARIMA model is initialized, the `.fit()` method trains it on the data.
```py
model_fit = model.fit()
```
The result, `model_fit`, contains:

- Parameters of the fitted ARMA model.
- Methods for forecasting and evaluating the model.
### Forecasting
The `.forecast()` method generates predictions for a specified number of future steps.
```py
forecast = model_fit.forecast(steps=n)
```
- steps: Number of future time steps to predict.

### Visualizing
Matplotlib is used to visualize the historical data and the forecast.
```py
plt.plot(data.index, data["temperature"], label="Historical Data")
plt.plot(future_dates, forecast, label="Forecast", color="red")
```
- `data.index`: Dates for the historical data.
- `forecast`: Forecasted values for the next steps days.
- `future_dates`: Generated dates for the forecast period.

| Function/Parameter | Purpose |
| --- | --- |
| `ARIMA(endog, order=(p, d, q))`	| Initializes the ARIMA (or ARMA when d=0) model. |
| `.fit()`| Fits the ARIMA/ARMA model to the data. |
| `.forecast(steps=n)` | Predicts the next n time points. |
| `plt.plot()`	| Plots the time series data and forecast for visualization.| 

## Example
In this example, static data will be generated randomly and forecasted using ARMA model:
```py
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
import matplotlib.pyplot as plt

# Generate synthetic time series data
np.random.seed(42)  # Set seed for reproducibility
dates = pd.date_range(start="2023-01-01", periods=100)
temperatures = 20 + np.sin(np.linspace(0, 3 * np.pi, 100)) + np.random.normal(0, 0.5, 100)
data = pd.DataFrame({"date": dates, "temperature": temperatures})
data.set_index("date", inplace=True)

# Fit ARMA model (ARIMA with no differencing)
model = ARIMA(data["temperature"], order=(2, 0, 2))
model_fit = model.fit()

# Forecast for the next 10 days
forecast = model_fit.forecast(steps=10)

# Generate future dates for the forecast
future_dates = pd.date_range(start=data.index[-1] + pd.Timedelta(days=1), periods=10)

# Plot historical data and forecast
plt.figure(figsize=(10, 6))
plt.plot(data.index, data["temperature"], label="Historical Data")
plt.plot(future_dates, forecast, label="Forecast", color="red")
plt.title("ARMA Forecast")
plt.xlabel("Date")
plt.ylabel("Temperature (°C)")
plt.legend()
plt.grid()
plt.show()
```
## Output
![ARMA Forecast](https://raw.githubusercontent.com/Codecademy/docs/main/media/arma-forecast-example.png)
---
Title: '.to_datetime()'
Description: 'Converts various date and time representations into standardized pandas datetime objects for time series analysis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Types'
  - 'Functions'
  - 'Time'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.to_datetime()`** function in Pandas transforms various date and time representations into standardized pandas datetime objects. It serves as the primary mechanism for converting strings, integers, lists, Series, or [DataFrames](https://www.codecademy.com/resources/docs/pandas/dataframe) containing date-like information into `datetime64` objects that can be used for time series analysis and date arithmetic operations.

This function is essential in data preprocessing workflows where raw data contains dates in multiple formats, making temporal analysis difficult. Common use cases include converting CSV file date columns from strings to datetime objects, standardizing mixed date formats within datasets, handling Unix timestamps from APIs, parsing dates with different regional formats, and creating time series indexes for financial or scientific data analysis. The function provides robust error handling and format inference capabilities, making it indispensable for real-world data cleaning scenarios.

## Syntax

```pseudo
pandas.to_datetime(arg, errors='raise', dayfirst=False, yearfirst=False,
                   utc=False, format=None, exact=<no_default>, unit=None,
                   infer_datetime_format=<no_default>, origin='unix', cache=True)
```

**Parameters:**

- `arg`: The object to convert to `datetime`. Can be scalar, array-like, Series, or `DataFrame`/dict-like
- `errors`: How to handle parsing errors - 'raise' (default), 'coerce', or 'ignore'
- `dayfirst`: Boolean, if True parses dates with day first (e.g., "31/12/2023" as Dec 31)
- `yearfirst`: Boolean, if True parses dates with year first when ambiguous
- `utc`: Boolean, if True returns UTC `DatetimeIndex`
- `format`: String format to parse the datetime (e.g., '%Y-%m-%d')
- `exact`: Boolean, if True requires exact format match
- `unit`: Unit for numeric timestamps ('D', 's', 'ms', 'us', 'ns')
- `infer_datetime_format`: Boolean, attempts to infer format for faster parsing (deprecated)
- `origin`: Reference date for numeric values, default 'unix' (1970-01-01)
- `cache`: Boolean, use cache for improved performance with duplicate values

**Return value:**

The function returns datetime-like objects depending on input type:

- **Scalar input**: Returns pandas Timestamp
- **Array-like input**: Returns `DatetimeIndex`
- **Series input**: Returns Series with `datetime64[ns]` dtype
- **`DataFrame` input**: Returns Series with `datetime64[ns]` dtype from assembled columns

## Example 1: Basic String Conversion Using `.to_datetime()`

The following example demonstrates the fundamental usage of `.to_datetime()` for converting date strings into pandas `datetime` objects:

```py
import pandas as pd

# Create a Series with various date string formats
date_strings = pd.Series(['2023-01-15', '2023-02-20', '2023-03-25', '2023-04-30'])

# Convert string dates to datetime objects
converted_dates = pd.to_datetime(date_strings)

print("Original strings:")
print(date_strings)
print("\nConverted to datetime:")
print(converted_dates)
print(f"\nData type: {converted_dates.dtype}")
```

The output produced by this code will be:

```shell
Original strings:
0    2023-01-15
1    2023-02-20
2    2023-03-25
3    2023-04-30
dtype: object

Converted to datetime:
0   2023-01-15
1   2023-02-20
2   2023-03-25
3   2023-04-30
dtype: datetime64[ns]

Data type: datetime64[ns]
```

This example shows how `.to_datetime()` automatically recognizes standard date formats and converts them to pandas datetime objects. The resulting Series has `datetime64[ns]` dtype, enabling time-based operations and analysis.

## Example 2: Financial Data Processing

This example shows how to process financial data with mixed date formats and handle missing values, a common scenario in real-world datasets:

```py
import pandas as pd
import numpy as np

# Create a DataFrame simulating financial data with mixed date formats
financial_data = pd.DataFrame({
    'trade_date': ['2023-01-15', '15/02/2023', '03-25-2023', 'invalid_date', '2023-04-30'],
    'stock_price': [150.25, 155.80, 148.90, 152.10, 159.75],
    'volume': [1000000, 1200000, 950000, 1100000, 1300000]
})

# Convert dates with error handling for invalid entries
financial_data['trade_date'] = pd.to_datetime(
    financial_data['trade_date'],
    errors='coerce',  # Convert invalid dates to NaT
    dayfirst=False    # Assume month comes first in ambiguous dates
)

# Display the processed data
print("Financial data with processed dates:")
print(financial_data)

# Check for any missing dates after conversion
missing_dates = financial_data['trade_date'].isna().sum()
print(f"\nNumber of invalid dates converted to NaT: {missing_dates}")

# Filter out rows with invalid dates for analysis
clean_data = financial_data.dropna(subset=['trade_date'])
print(f"\nClean data shape: {clean_data.shape}")
```

The output of this code is:

```shell
Financial data with processed dates:
   trade_date  stock_price    volume
0  2023-01-15       150.25   1000000
1  2023-02-15       155.80   1200000
2  2023-03-25       148.90    950000
3        NaT       152.10   1100000
4  2023-04-30       159.75   1300000

Number of invalid dates converted to NaT: 1

Clean data shape: (4, 3)
```

This example demonstrates handling real-world financial data where dates might be in different formats or contain invalid entries. Using `errors='coerce'` converts unparseable dates to NaT (Not a Time), allowing the analysis to continue with valid data.

## Codebyte Example: Sensor Data Time Series Analysis

This example processes sensor data with Unix timestamps and demonstrates creating a time series index for scientific data analysis:

```codebyte/python
import pandas as pd
import numpy as np

# Create sensor data with Unix timestamps (seconds since 1970-01-01)
sensor_timestamps = [1672531200, 1672534800, 1672538400, 1672542000, 1672545600]  # Hourly readings
temperature_readings = [23.5, 24.1, 23.8, 24.3, 24.7]
humidity_readings = [45.2, 46.8, 44.9, 47.1, 48.3]

# Create DataFrame with sensor data
sensor_data = pd.DataFrame({
    'timestamp': sensor_timestamps,
    'temperature_c': temperature_readings,
    'humidity_percent': humidity_readings
})

# Convert Unix timestamps to datetime objects
sensor_data['datetime'] = pd.to_datetime(
    sensor_data['timestamp'],
    unit='s'  # Specify that timestamps are in seconds
)

# Set datetime as index for time series analysis
sensor_data.set_index('datetime', inplace=True)

# Drop the original timestamp column
sensor_data.drop('timestamp', axis=1, inplace=True)

print("Processed sensor data with datetime index:")
print(sensor_data)

# Demonstrate time series capabilities
print(f"\nData collection period: {sensor_data.index[0]} to {sensor_data.index[-1]}")
print(f"Average temperature: {sensor_data['temperature_c'].mean():.1f}°C")

# Resample data (example: if we had more data points)
print(f"\nTime series index frequency: {sensor_data.index.freq}")
```

This example shows how to process sensor data with Unix timestamps, which is common in IoT applications and scientific data collection. Converting timestamps to datetime objects and using them as an index enables powerful time series analysis capabilities in pandas.

## Frequently Asked Questions

### 1. Can I convert multiple date columns at once?

Yes, you can apply `to_datetime()` to multiple columns using `apply()` or process each column individually. For DataFrames with separate year, month, day columns, pass the DataFrame directly to `to_datetime()` and it will automatically assemble the datetime from the columns.

### 2. How do I handle dates before 1677 or after 2262?

Pandas `datetime64[ns]` has limitations for dates outside this range. For such dates, pandas will return Python datetime objects instead of Timestamp objects, which may have reduced functionality for time series operations.

### 3. Can I specify custom origins for Unix timestamps?

Yes, use the `origin` parameter to set a custom reference date. For example, `origin='2000-01-01'` will interpret numeric values as time units from that date instead of the Unix epoch.

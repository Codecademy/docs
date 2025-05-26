---
Title: '.fillna()'
Description: 'Replaces null values in a DataFrame or Series with specified values.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Data Structures'
  - 'Pandas'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

**`.fillna()`** is a method in Pandas that replaces null or missing values in a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) or Series with specified values. In data analysis, missing values (represented as `NaN` in pandas) are common and can cause errors or skew analysis results if not handled properly. The `.fillna()` method provides a flexible way to handle these null values by replacing them with meaningful data.

The `.fillna()` method is widely used in data preprocessing and cleaning stages of the data analysis pipeline. It can replace missing values with a fixed value, forward/backwards fill from existing data, or even use different values for different columns. This functionality is essential when working with real-world datasets that often contain incomplete information due to various reasons such as data collection errors, data corruption, or simply because the information wasn't available.

## Syntax

```pseudo
DataFrame.fillna(value=None, method=None, axis=None, inplace=False, limit=None, downcast=None)
```

**Parameters:**

- `value`: The value to use for filling null values. This can be a scalar (like `0`, `'Unknown'`), dictionary, Series, or `DataFrame`.
- `method`: Specifies the method to use for filling. Options include `'ffill'`/`'pad'` (forward fill), `'bfill'`/`'backfill'` (backward fill). The default is `None`.
- `axis`: The axis along which to fill missing values (`0` or `'index'` for rows, `1` or `'columns'` for columns).
- `inplace`: If `True`, modifies the DataFrame in place (returns `None`). If `False`, returns a copy with replacements.
- `limit`: Maximum number of consecutive NaN values to forward/backwards fill (if method is specified).
- `downcast`: Dictionary or `'infer'` to downcast dtypes if possible.

**Return value:**

The method returns a new `DataFrame` or Series with filled values unless `inplace=True`, in which case it returns None and modifies the original object.

## Example 1: Replacing `NaN` with a Static Value

This example demonstrates how to replace all missing values in a `DataFrame` with a specified value:

```py
# Importing pandas library
import pandas as pd
import numpy as np

# Creating a sample DataFrame with NaN values
df = pd.DataFrame({
  'A': [1, 2, np.nan, 4],
  'B': [5, np.nan, np.nan, 8],
  'C': [9, 10, 11, np.nan]
})

# Display the original DataFrame
print("Original DataFrame:")
print(df)

# Replacing all NaN values with 0
filled_df = df.fillna(0)

# Display the result
print("\nDataFrame after filling NaN with 0:")
print(filled_df)
```

The output produced by the above code will be:

```shell
Original DataFrame:
     A    B     C
0  1.0  5.0   9.0
1  2.0  NaN  10.0
2  NaN  NaN  11.0
3  4.0  8.0   NaN

DataFrame after filling NaN with 0:
     A    B     C
0  1.0  5.0   9.0
1  2.0  0.0  10.0
2  0.0  0.0  11.0
3  4.0  8.0   0.0
```

In this example, we created a `DataFrame` with some NaN values and used `.fillna(0)` to replace all missing values with zero. This is the simplest way to use `.fillna()`, providing a single value that replaces all null values across the entire `DataFrame`.

## Example 2: Column-Specific Value Replacement

This example shows how to fill missing values with different values for each column using a dictionary.

```py
# Importing pandas library
import pandas as pd
import numpy as np

# Creating a sample DataFrame with NaN values
sales_data = pd.DataFrame({
  'Product': ['A', 'B', 'C', 'D', 'E'],
  'Price': [10.5, 8.0, np.nan, 15.5, np.nan],
  'Units_Sold': [100, 150, np.nan, 80, 200],
  'In_Stock': [True, False, np.nan, True, np.nan]
})

# Display the original DataFrame
print("Original Sales Data:")
print(sales_data)

# Creating a dictionary with column-specific fill values
fill_values = {
  'Price': 0.0,
  'Units_Sold': 0,
  'In_Stock': False
}

# Filling NaN values with column-specific values
filled_sales = sales_data.fillna(fill_values)

# Display the result
print("\nSales Data after filling NaN values:")
print(filled_sales)
```

```shell
Original Sales Data:
  Product  Price  Units_Sold  In_Stock
0       A   10.5      100.0      True
1       B    8.0      150.0     False
2       C    NaN        NaN       NaN
3       D   15.5       80.0      True
4       E    NaN      200.0       NaN

Sales Data after filling NaN values:
  Product  Price  Units_Sold  In_Stock
0       A   10.5      100.0      True
1       B    8.0      150.0     False
2       C    0.0        0.0     False
3       D   15.5       80.0      True
4       E    0.0      200.0     False
```

In this real-life scenario, we have a sales dataset with missing values in the `Price`, `Units_Sold`, and `In_Stock` columns. Using a dictionary with `.fillna()`, we specify different fill values for each column: 0.0 for missing prices, 0 for missing units sold, and False for missing stock information. This approach allows for more contextually appropriate data filling.

## Codebyte Example: Using Forward Fill Method for Time Series Data

This example demonstrates how to use method-based filling, which is particularly useful for time series data:

```codebyte/python
# Importing pandas library
import pandas as pd
import numpy as np

# Creating a time series DataFrame with NaN values
dates = pd.date_range('2023-01-01', periods=6)
temperature_data = pd.DataFrame({
    'Temperature': [25.3, np.nan, np.nan, 24.1, 23.8, np.nan]
}, index=dates)

# Display the original DataFrame
print("Original Temperature Data:")
print(temperature_data)

# Forward fill (using previous valid observation)
ffill_temp = temperature_data.fillna(method='ffill')

# Display the result
print("\nTemperature Data after forward fill:")
print(ffill_temp)

# Limiting the number of consecutive fills
limited_ffill = temperature_data.fillna(method='ffill', limit=1)

# Display the result with limit
print("\nTemperature Data with limited forward fill (limit=1):")
print(limited_ffill)
```

In this example, we work with a time series of temperature measurements where some days have missing data. We use `.fillna(method='ffill')` to propagate the last valid observation forward to fill gaps. This method is particularly useful for time series data, where carrying forward the last known value often makes the most sense.

We also demonstrate the `limit` parameter, which restricts propagation to only fill a specified number of consecutive NaN values. With `limit=1`, the second consecutive missing value remains NaN, as seen on 2023-01-03.

## Frequently Asked Questions

### 1. What's the difference between `fillna()` and `replace()`?

The `.fillna()` method specifically targets null (NaN) values, while `.replace()` can substitute any specified value with another. Use `.fillna()` when you only need to address missing data and `.replace()` when you want to replace specific values.

### 2. Does `fillna()` modify the original DataFrame?

By default, `.fillna()` returns a new DataFrame with replacements. To modify the original DataFrame, set `inplace=True`, but note that this returns None.

### 3. Can I use different methods for different columns?

No, the `method` parameter applies to all columns. For different treatments per column, use separate `.fillna()` calls or use the `value` parameter with a dictionary.

### 4. What's the best way to fill missing values in a dataset?

The appropriate approach depends on your data and analysis goals. Common strategies include:

- Using meaningful defaults (0, average, median)
- Forward/backwards filling for time series
- Interpolation for numerical data with trends
- Using domain knowledge to inform replacements

### 5. How can I fill `NaNs` with the column mean?

You can use `.fillna()` with a dictionary of column means:

```py
df.fillna(df.mean())
```

For selective columns:

```py
df['column_name'].fillna(df['column_name'].mean())
```

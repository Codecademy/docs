---
Title: '.loc'
Description: 'Accesses a group of rows and columns by label(s) or a boolean array.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'DataFrame'
  - 'Pandas'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.loc`** property in Pandas is used to access and manipulate rows and columns using row and column labels instead of integer-based positions. It offers a clear and intuitive way to retrieve, update, or filter data based on row and column names, enhancing code readability and reducing the chances of errors when the data structure changes.

[`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe)'s `.loc` property is commonly used in data analysis and manipulation tasks, such as selecting specific subsets of data, filtering based on conditions, and updating values. It's an essential tool for data scientists, analysts, and anyone working with tabular data in Python.

## Syntax

```pseudo
DataFrame.loc[row_indexer, column_indexer]
```

**Parameters:**

- `row_indexer`: Specifies which rows to select. Can be a single label, a list of labels, a slice with labels, a boolean array, or a callable function.
- `column_indexer`: Specifies which columns to select. Can be a single label, a list of labels, a slice with labels, a boolean array, or a callable function.

Both parameters are optional. If only one is provided, it is assumed to be the row indexer.

**Return value:**

The `.loc` property returns:

- A scalar value when both row and column are specified as single labels
- A pandas Series when either row or column indexer is specified as a single label
- A pandas `DataFrame` when selecting multiple rows and/or columns

## Example 1: Basic Label-Based Selection

This example demonstrates how to use `.loc` to select data from a `DataFrame` using row and column labels:

```py
# Import pandas library
import pandas as pd

# Create a sample DataFrame with student records
data = {
  'Name': ['John', 'Emma', 'Michael', 'Sophia', 'David'],
  'Math': [85, 92, 78, 95, 88],
  'Science': [92, 88, 75, 91, 84],
  'English': [80, 95, 82, 89, 90]
}

# Create the DataFrame with custom row indices
df = pd.DataFrame(data)
df.index = ['S001', 'S002', 'S003', 'S004', 'S005']  # Set custom student IDs as index

# Print the original DataFrame
print("Original DataFrame:")
print(df)

# Select a specific student's record using .loc
student_record = df.loc['S003']
print("\nRecord for student with ID 'S003':")
print(student_record)

# Select a specific value (Michael's Science score) using .loc
michael_science = df.loc['S003', 'Science']
print("\nMichael's Science score:", michael_science)

# Select multiple students' Math and Science scores
selected_scores = df.loc[['S001', 'S004'], ['Math', 'Science']]
print("\nMath and Science scores for students S001 and S004:")
print(selected_scores)
```

The output of this code will be:

```shell
Original DataFrame:
       Name  Math  Science  English
S001   John    85       92       80
S002   Emma    92       88       95
S003  Michael  78       75       82
S004  Sophia   95       91       89
S005   David   88       84       90

Record for student with ID 'S003':
Name       Michael
Math           78
Science        75
English        82
Name: S003, dtype: object

Michael's Science score: 75

Math and Science scores for students S001 and S004:
      Math  Science
S001    85       92
S004    95       91
```

This example shows how to use `.loc` to select data at different levels of granularity: an entire row, a specific cell, and a subset of rows and columns, all using label-based indexing.

## Example 2: Filtering Data with Conditions

This example demonstrates how to use `.loc` with boolean conditions to filter data, a common operation in data analysis:

```py
# Import pandas library
import pandas as pd

# Create a sample DataFrame with employee records
data = {
  'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona'],
  'Department': ['Sales', 'IT', 'Marketing', 'IT', 'Finance', 'Sales'],
  'Salary': [72000, 85000, 65000, 90000, 95000, 62000],
  'Experience': [5, 8, 3, 10, 12, 2]
}

df = pd.DataFrame(data)

# Print the original DataFrame
print("Original Employee DataFrame:")
print(df)

# Filter employees with salary greater than 80000
high_salary = df.loc[df['Salary'] > 80000]
print("\nEmployees with salary greater than 80000:")
print(high_salary)

# Filter IT department employees with more than 5 years of experience
experienced_it = df.loc[(df['Department'] == 'IT') & (df['Experience'] > 5)]
print("\nIT employees with more than 5 years of experience:")
print(experienced_it)

# Multiple conditions: Sales employees with salary less than 70000 or experience less than 4
sales_filter = df.loc[(df['Department'] == 'Sales') & ((df['Salary'] < 70000) | (df['Experience'] < 4))]
print("\nSales employees with salary less than 70000 or experience less than 4:")
print(sales_filter)

# Update salaries: Give a 10% raise to employees with experience > 10 years
df.loc[df['Experience'] > 10, 'Salary'] *= 1.1
print("\nDataFrame after giving 10% raise to highly experienced employees:")
print(df)
```

The output produced by this code is:

```shell
Original Employee DataFrame:
      Name Department  Salary  Experience
0    Alice      Sales   72000           5
1      Bob         IT   85000           8
2  Charlie  Marketing   65000           3
3    Diana         IT   90000          10
4     Evan    Finance   95000          12
5    Fiona      Sales   62000           2

Employees with salary greater than 80000:
    Name Department  Salary  Experience
1    Bob         IT   85000           8
3  Diana         IT   90000          10
4   Evan    Finance   95000          12

IT employees with more than 5 years of experience:
    Name Department  Salary  Experience
1    Bob         IT   85000           8
3  Diana         IT   90000          10

Sales employees with salary less than 70000 or experience less than 4:
    Name Department  Salary  Experience
5  Fiona      Sales   62000           2

DataFrame after giving 10% raise to highly experienced employees:
      Name Department  Salary  Experience
0    Alice      Sales   72000           5
1      Bob         IT   85000           8
2  Charlie  Marketing   65000           3
3    Diana         IT   90000          10
4     Evan    Finance  104500          12
5    Fiona      Sales   62000           2
```

This example illustrates how `.loc` can be used with boolean indexing to filter data based on various conditions, as well as how to update values based on conditions. These operations are fundamental for data cleaning, exploratory data analysis, and feature engineering.

## Codebyte Example: Working with Date Ranges and Missing Values

This example demonstrates how to use `.loc` with date indices and handle missing values, which is common in time series analysis and real-world datasets.

```codebyte/python
# Import pandas library
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Create a sample DataFrame with stock price data
# Generate dates for the last 10 business days
end_date = datetime.now().date()
dates = [end_date - timedelta(days=i) for i in range(10)]
dates.reverse()  # Put in ascending order

# Create stock data with some missing values
data = {
  'AAPL': [145.85, 147.92, np.nan, 149.04, 148.56, 150.70, 151.21, np.nan, 152.15, 153.79],
  'MSFT': [270.22, 272.36, 275.15, np.nan, 278.90, 280.15, 281.75, 279.82, 282.30, np.nan],
  'GOOGL': [np.nan, 132.58, 133.95, 135.41, 134.80, np.nan, 137.65, 138.92, 139.50, 140.82]
}

# Create the DataFrame with dates as the index
df = pd.DataFrame(data, index=dates)

# Print the original DataFrame
print("Stock Price DataFrame:")
print(df)

# Select data for a specific date range
start_date = dates[2]
end_date = dates[7]
date_range_data = df.loc[start_date:end_date]
print(f"\nStock prices from {start_date} to {end_date}:")
print(date_range_data)

# Fill missing values with the previous day's price (forward fill)
df_filled = df.copy()
df_filled.loc[:, :] = df_filled.fillna(method='ffill')
print("\nDataFrame with missing values filled (forward fill):")
print(df_filled)

# Calculate the average price when stock was above certain threshold
# For AAPL, calculate average when price > 150
aapl_high_prices = df.loc[df['AAPL'] > 150, 'AAPL']
if not aapl_high_prices.empty:
  avg_high_price = aapl_high_prices.mean()
  print(f"\nAverage AAPL price when above 150: ${avg_high_price:.2f}")
else:
  print("\nNo AAPL prices above 150 in the dataset")

# Find dates when both AAPL and MSFT had available prices and AAPL outperformed MSFT
# (percentage gain from previous day)
df_pct_change = df.pct_change()
outperformance_dates = df.loc[(df_pct_change['AAPL'] > df_pct_change['MSFT']) &
                            (~df['AAPL'].isna()) &
                            (~df['MSFT'].isna())].index
print("\nDates when AAPL outperformed MSFT (percentage gain):")
for date in outperformance_dates:
  print(f"- {date}")
```

This example demonstrates advanced usage of `.loc` for time series data, handling missing values, and performing complex filtering operations based on multiple conditions. These techniques are especially valuable for financial analysis, sensor data processing, and other time-dependent data applications.

## Frequently Asked Questions

### 1. How are `.iloc()` and `.loc()` different?

- `.loc[]` is label-based indexing that uses row and column names.
- `.iloc[]` is integer-based indexing that uses positions (0, 1, 2, etc.).

Example:

```py
df = pd.DataFrame({'A': [1, 2, 3]}, index=['X', 'Y', 'Z'])
df.loc['Y']    # Returns value at row labeled 'Y'
df.iloc[1]     # Returns value at second row position
```

`.loc[]` includes both endpoints in slices while `.iloc[]` excludes the end position.

### 2. How to display first 3 rows in pandas?

a. Using `.loc[]` (with default index):

```py
df.loc[0:2]  # Includes rows 0, 1, and 2
```

b. Using `.iloc[]` (preferred for position-based selection):

```py
df.iloc[0:3]  # Includes rows 0, 1, and 2
```

c. Using `.head()` (most common approach):

```py
df.head(3)  # Shows first 3 rows
```

### Is `.iloc` faster than `.loc`?

Yes, `.iloc[]` is generally faster than `.loc[]` because:

- `.iloc[]` uses direct integer indexing
- `.loc[]` requires label matching and lookup

The performance difference matters mainly with:

- Very large `DataFrames` (millions of rows)
- Repeated indexing operations in loops
- Performance-critical applications

For most analysis tasks, choose based on readability and correctness rather than speed.

---
Title: '.reset_index()'
Description: 'Resets the index of a DataFrame to the default integer index.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Index'
  - 'Pandas'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.reset_index()`** method in Pandas is used to reset the index of a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) to the default integer index. When working with Pandas `DataFrames`, the index may become non-sequential or non-numeric after operations like filtering, sorting, or grouping. The `.reset_index()` method helps restore the `DataFrame` to a clean, sequential integer index, making it easier to access rows by position and generally improving readability.

This method is particularly useful in data preprocessing workflows where there is a need to maintain a consistent row reference after manipulating data. It allows to either discard the original index or preserve it as a new column in the `DataFrame`, giving you flexibility in how you want to handle previous indexing information.

## Syntax

```pseudo
DataFrame.reset_index(level=None, drop=False, inplace=False, col_level=0, col_fill='', allow_duplicates=<no_default>, names=None)
```

**Parameters:**

- `level` (int, str, tuple, list, default `None`): Only remove the given levels from the index. Removes all levels by default.
- `drop` (bool, default `False`): If `True`, do not try to insert the index into the `DataFrame` as a column. If `False`, the original index becomes a new column named 'index'.
- `inplace` (bool, default False): If `True`, modifies the `DataFrame` in place rather than creating a new one.
- `col_level` (int or str, default `0`): If the columns have multiple levels, determines which level the labels are inserted into.
- `col_fill` (object, default ''): If the columns have multiple levels, determines how the other levels are named.
- `allow_duplicates` (bool, optional): If `False`, checks for duplicate columns when inserting the index and raises if duplicates are found. If `True`, allows duplicates. Default behavior depends on the version of Pandas and is subject to change.
- `names` (int, str or 1-dimensional list, default `None`): Use this parameter to rename the index column(s) when adding them to the `DataFrame`.

**Return value:**

- Returns a DataFrame with the new index or `None` if `inplace=True`.

## Example 1: Basic Usage of `.reset_index()`

This example demonstrates how to use `.reset_index()` to restore the default integer index after filtering a `DataFrame`:

```py
# Import pandas library
import pandas as pd

# Create a sample DataFrame
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
    'age': [25, 30, 35, 40, 45],
    'city': ['New York', 'Boston', 'Chicago', 'Denver', 'Seattle']
}

df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)

# Filter the DataFrame to create non-sequential indices
filtered_df = df[df['age'] > 30]
print("\nFiltered DataFrame (non-sequential indices):")
print(filtered_df)

# Reset the index
reset_df = filtered_df.reset_index()
print("\nReset index (keeping old index as a column):")
print(reset_df)

# Reset index and drop the old index
reset_df_drop = filtered_df.reset_index(drop=True)
print("\nReset index (dropping old index):")
print(reset_df_drop)
```

The output by this code will be:

```shell
Original DataFrame:
     name  age      city
0   Alice   25  New York
1     Bob   30    Boston
2  Charlie   35   Chicago
3   David   40    Denver
4     Eva   45   Seattle

Filtered DataFrame (non-sequential indices):
     name  age      city
2  Charlie   35   Chicago
3   David   40    Denver
4     Eva   45   Seattle

Reset index (keeping old index as a column):
   index     name  age     city
0      2  Charlie   35  Chicago
1      3   David   40   Denver
2      4     Eva   45  Seattle

Reset index (dropping old index):
      name  age     city
0  Charlie   35  Chicago
1   David   40   Denver
2     Eva   45  Seattle
```

The above example shows how to reset the index of a filtered `DataFrame`. When the `DataFrame` is filtered, the indices become non-sequential (2, 3, 4). Using `.reset_index()` creates a new sequential integer index starting from 0, and by default, preserves the old index as a new column named 'index'. Using `.reset_index(drop=True)` discards the old index completely.

## Example 2: Working with MultiIndex

This example demonstrates how to use `.reset_index()` with a DataFrame that has a hierarchical MultiIndex:

```py
# Import pandas library
import pandas as pd

# Create a DataFrame with MultiIndex
data = {
    'sales': [1000, 1200, 1500, 1300, 1400, 1600],
    'expenses': [700, 800, 900, 750, 850, 950]
}

# Create MultiIndex DataFrame
multi_idx = pd.MultiIndex.from_tuples([
    ('Q1', 'Jan'), ('Q1', 'Feb'), ('Q1', 'Mar'),
    ('Q2', 'Apr'), ('Q2', 'May'), ('Q2', 'Jun')
], names=['quarter', 'month'])

df = pd.DataFrame(data, index=multi_idx)
print("DataFrame with MultiIndex:")
print(df)

# Reset the entire index
reset_all = df.reset_index()
print("\nReset entire MultiIndex:")
print(reset_all)

# Reset only the first level of the index
reset_level = df.reset_index(level='quarter')
print("\nReset only 'quarter' level:")
print(reset_level)

# Reset with inplace=True
df_copy = df.copy()
df_copy.reset_index(inplace=True)
print("\nReset index with inplace=True:")
print(df_copy)
```

The output of this code will be:

```shell
DataFrame with MultiIndex:
             sales  expenses
quarter month
Q1      Jan    1000       700
        Feb    1200       800
        Mar    1500       900
Q2      Apr    1300       750
        May    1400       850
        Jun    1600       950

Reset entire MultiIndex:
  quarter month  sales  expenses
0      Q1   Jan   1000       700
1      Q1   Feb   1200       800
2      Q1   Mar   1500       900
3      Q2   Apr   1300       750
4      Q2   May   1400       850
5      Q2   Jun   1600       950

Reset only 'quarter' level:
       quarter  sales  expenses
month
Jan         Q1   1000       700
Feb         Q1   1200       800
Mar         Q1   1500       900
Apr         Q2   1300       750
May         Q2   1400       850
Jun         Q2   1600       950

Reset index with inplace=True:
  quarter month  sales  expenses
0      Q1   Jan   1000       700
1      Q1   Feb   1200       800
2      Q1   Mar   1500       900
3      Q2   Apr   1300       750
4      Q2   May   1400       850
5      Q2   Jun   1600       950
```

In this example, the process of working with a `DataFrame` that has a hierarchical MultiIndex is demonstrated. When applying `.reset_index()` without specifying a level, all index levels are converted to columns. Using the `level` parameter allows for the selective reset of specific levels of a MultiIndex. The `inplace=True` parameter modifies the original `DataFrame` instead of returning a new one.

## Codebyte Example: Practical Application in Data Analysis

This example demonstrates how `.reset_index()` can be useful in a data analysis workflow, particularly after aggregation operations:

```codebyte/python
# Import pandas library
import pandas as pd

# Create a sample sales dataset
data = {
    'date': ['2023-01-01', '2023-01-01', '2023-01-02', '2023-01-02',
             '2023-01-03', '2023-01-03', '2023-01-04', '2023-01-04'],
    'product': ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'],
    'region': ['East', 'East', 'West', 'West', 'East', 'West', 'West', 'East'],
    'sales': [200, 150, 300, 250, 220, 170, 280, 190]
}

# Convert to DataFrame
df = pd.DataFrame(data)
df['date'] = pd.to_datetime(df['date'])
print("Original sales data:")
print(df)

# Group by date and product, calculating sum of sales
grouped = df.groupby(['date', 'product'])['sales'].sum()
print("\nGrouped data (hierarchical index):")
print(grouped)

# Reset index to make the result more usable for plotting
reset_grouped = grouped.reset_index()
print("\nAfter reset_index():")
print(reset_grouped)

# Calculate percentage of total sales for each product-date combination
total_sales = reset_grouped['sales'].sum()
reset_grouped['sales_pct'] = reset_grouped['sales'].apply(lambda x: (x / total_sales) * 100)
print("\nWith calculated percentages:")
print(reset_grouped)
```

This example demonstrates a common data analysis workflow where `.reset_index()` plays a crucial role. After grouping data and performing aggregation, the result is a Series with a MultiIndex. Using `.reset_index()` converts this hierarchical index into regular columns, making the data easier to work with for further analysis, such as calculating percentages or creating visualizations.

## Frequently Asked Questions

### 1. When should I use `.reset_index()` versus `.reindex()`?

Use `.reset_index()` when you want to convert the current index into a column and create a new sequential integer index. Use `.reindex()` when you want to resample a `DataFrame` to a new index with optional filling of missing values.

### 2. What happens to the old index after using `.reset_index()`?

By default (`drop=False`), the old index becomes a new column named 'index' in the `DataFrame`. If you set `drop=True`, the old index is discarded completely.

### 3. Does `.reset_index()` always create a new `DataFrame`?

By default, `.reset_index()` returns a new `DataFrame` and does not modify the original. If you want to modify the original `DataFrame`, use the parameter `inplace=True`, which will return None.

### 4. How can I rename the index column when it's moved to the `DataFrame`?

You can use the `names` parameter to specify a custom name for the index column(s) when they are added to the `DataFrame`. For example: `df.reset_index(names=['original_index'])`.

### 5. Can `reset_index()` handle MultiIndex DataFrames?

Yes, `reset_index()` can handle MultiIndex DataFrames. By default, it will reset all levels of the index, but you can use the `level` parameter to specify which levels to reset.

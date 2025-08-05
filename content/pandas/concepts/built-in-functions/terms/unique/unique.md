---
Title: '.unique()'
Description: 'Returns a NumPy array containing all the unique elements in a data series, with no specific order.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Data'
  - 'Encoding'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The Pandas **`.unique()`** function returns a [NumPy array](https://www.codecademy.com/resources/docs/numpy/ndarray) containining all the unique elements in a data series, with no specific order. It operates similarly to [NumPy](https://www.codecademy.com/resources/docs/numpy) `.unique()`, but is notably faster, especially with large datasets, and it also includes `NaN` values.

## Pandas `.unique()` Syntax

```pseudo
series.unique()
```

**Parameters:**

The `.unique()` function takes no parameters.

**Return value:**

Returns a NumPy array containining all the unique elements in the given data series.

## Example 1: Basic Usage of `.unique()`

In this example, `.unique()` is used to return all the unique elements in `series`:

```py
import pandas as pd

series = pd.Series([3, -1, 5, -1, 2, 1, 3, 2, 1, 5, -2, 1, 2])

unique_elements = series.unique()

print(unique_elements)
```

Here is the output:

```shell
[ 3 -1  5  2  1 -2]
```

## Example 2: Using `.unique()` on a DataFrame Column

In this example, `.unique()` is used to return all the unique names from the `Name` column of the `df` [DataFrame](https://www.codecademy.com/resources/docs/pandas/dataframe):

```py
import pandas as pd

df = pd.DataFrame({
  'Name': ['Alice', 'Bob', 'Alice', 'David', 'Bob'],
  'Age': [25, 30, 25, 40, 30]
})

unique_names = df['Name'].unique()

print(unique_names)
```

Here is the output:

```shell
['Alice' 'Bob' 'David']
```

## Codebyte Example: Dealing with Missing Values Using `.unique()`

This codebyte example shows how `.unique()` deals with missing values:

```codebyte/python
import pandas as pd

data_with_nan = pd.Series([1, 2, 2, None, 3, None, 1])

unique_with_nan = data_with_nan.unique()

print(unique_with_nan)
```

## Frequently Asked Questions

### 1. Does `.unique()` work on DataFrames directly?

No. `.unique()` only works on Series. To find unique values in a DataFrame column, you must select the column first:

```py
df['column_name'].unique()
```

### 2. What is the difference between `.unique()` and `.nunique()`?

- `.unique()` returns a NumPy array of the unique values.
- `.nunique()` returns the count of unique values.

### 3. Can I get unique values across multiple columns using `.unique()`?

Not directly with `.unique()`, but you can use `.drop_duplicates()` or combine the columns:

```py
df[['col1', 'col2']].drop_duplicates()
```

Or for a single array of unique combinations:

```py
df[['col1', 'col2']].drop_duplicates().values
```

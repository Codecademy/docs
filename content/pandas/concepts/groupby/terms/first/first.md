---
Title: '.prod()'
Description: 'Returns the first non-null value from each group.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`groupby().first()`** method in pandas returns the first non-null value from each group created by a `groupby()` operation. It is commonly used to extract representative or initial entries for grouped data, such as the first transaction, first record, or earliest occurrence.

## Syntax

```pseudo
DataFrameGroupBy.first(numeric_only=False, min_count=-1, skipna=True)
```

**Parameters:**

- `numeric_only` (bool, default `False`): Includes only float, int, and boolean columns in the operation.
- `min_count` (int, default `-1`): Minimum number of valid values required to perform the operation. If fewer values are available, returns `NaN`.
- `skipna` (bool, default `True`): Excludes `NA`/`null` values. If all entries are `NA`, the result is `NA`.

**Return value:**

Returns a Series or DataFrame. First non-null values within each group.

## Example 1

In this example, the method retrieves the first entry of each department from the DataFrame:

```py
import pandas as pd

data = {
  'Department': ['HR', 'Finance', 'HR', 'IT', 'Finance', 'IT'],
  'Employee': ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank'],
  'Salary': [50000, 60000, 52000, 58000, 61000, 59000]
}

df = pd.DataFrame(data)
result = df.groupby('Department').first()
print(result)
```

The output of this code is:

```shell
           Employee  Salary
Department
Finance         Bob   60000
HR             Alice   50000
IT             David   58000
```

## Example 2

In this example, the method extracts the first available record for each city group while skipping missing values:

```py
import pandas as pd
import numpy as np

data = {
  'City': ['Delhi', 'Delhi', 'Mumbai', 'Mumbai', 'Chennai', 'Chennai'],
  'Temperature': [32, np.nan, 30, 29, np.nan, 27],
  'Humidity': [80, 82, 75, 78, 70, 72]
}

df = pd.DataFrame(data)
result = df.groupby('City').first()
print(result)
```

The output of this code is:

```shell
         Temperature  Humidity
City
Chennai         NaN        70
Delhi          32.0        80
Mumbai         30.0        75
```

## Codebyte Example

In this example, the method finds the first purchase record for each customer, showing how it can be applied to analyze grouped transaction data:

```codebyte/python
import pandas as pd

data = {
  'Customer': ['Alice', 'Alice', 'Bob', 'Charlie', 'Charlie', 'Charlie'],
  'Purchase': ['Shoes', 'Bag', 'Watch', 'Shirt', 'Shoes', 'Hat'],
  'Amount': [120, 80, 150, 200, 90, 50]
}

df = pd.DataFrame(data)
result = df.groupby('Customer').first()
print(result)
```

## Frequently Asked Questions

### 1. What does groupby `first()` do?

It returns the first non-null record from each group in a grouped pandas object.

### 2. How do you get the first in a pandas group?

By applying the `first()` method after using `groupby()`, such as `df.groupby('Column').first()`.

### 3. How to print the first 10 rows of a pandas DataFrame?

Use the `head(10)` method, which displays the first 10 rows of the DataFrame.

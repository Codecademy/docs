---
Title: '.agg()'
Description: 'Applies one or more aggregation functions to grouped data in a Pandas DataFrame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Methods'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.agg()`** method in Pandas is used with `groupby()` to apply one or more aggregation functions (like `sum`, `mean`, `count`, etc.) to grouped data. It allows flexible and powerful summarization of DataFrame data after grouping.

## Syntax

```pseudo
DataFrameGroupBy.agg(arg, *args, **kwargs)
```

**Parameters:**

- arg: Function, string, list, or dictionary specifying the aggregation(s) to apply. Examples: `'sum'`, `'mean'`, `['min', 'max']`, or `{'col1': 'sum', 'col2': 'mean'}`
- `*args`: Additional positional arguments passed to the function.
- `**kwargs`: Additional keyword arguments passed to the function.

**Return Value:**

Returns a DataFrame or Series with the aggregated results for each group.

## Example

In this example, the mean Salary, maximum Salary, and total Bonus are calculated for each Department using `groupby().agg()`:

```py
import pandas as pd

# Sample DataFrame
data = {
    'Department': ['Sales', 'Sales', 'HR', 'HR', 'IT', 'IT'],
    'Salary': [50000, 60000, 40000, 45000, 70000, 75000],
    'Bonus': [5000, 6000, 2000, 2500, 8000, 8500]
}

df = pd.DataFrame(data)

# Group by Department and calculate multiple aggregations
result = df.groupby('Department').agg({
    'Salary': ['mean', 'max'],
    'Bonus': 'sum'
})

print(result)
```

This example produces the following output:

```shell
           Salary         Bonus
             mean    max    sum
Department
HR          42500  45000   4500
IT          72500  75000  16500
Sales       55000  60000  11000
```

## Codebyte Example

In this example, the average Points and total Assists are computed for each Team using `groupby().agg()`:

```codebyte/python
import pandas as pd

# Create a sample DataFrame
data = {
    'Team': ['A', 'A', 'B', 'B', 'C', 'C'],
    'Points': [25, 30, 15, 10, 50, 45],
    'Assists': [5, 7, 3, 4, 8, 9]
}

df = pd.DataFrame(data)

# Use groupby and agg to calculate mean Points and total Assists per Team
grouped = df.groupby('Team').agg({
    'Points': 'mean',
    'Assists': 'sum'
})

print(grouped)
```

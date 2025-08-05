---
Title: '.groupby()'
Description: 'Groups a DataFrame using a mapper or a series of columns and returns a GroupBy object.'
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

The Pandas DataFrame **`.groupby()`** function groups a `DataFrame` using a mapper or a series of columns and returns a [`GroupBy`](https://www.codecademy.com/resources/docs/pandas/groupby) object. A range of methods, as well as custom functions, can be applied to `GroupBy` objects in order to combine or transform large amounts of data in these groups.

## Pandas `.groupby()` Syntax

```pseudo
df.groupby(by=None, axis=0, level=None, as_index=True, sort=True, group_keys=True, observed=False, dropna=True)
```

**Parameters:**

- `by`: If a dictionary or `Series` is passed, the values will determine groups. If a list or [ndarray](https://www.codecademy.com/resources/docs/numpy/ndarray) with the same length as the selected axis is passed, the values will be used to form groups. A label or list of labels can be used to group by a particular column or columns.
- `axis`: Split along rows (`0` or `"index"`) or columns (`1` or `"columns"`).
- `level`: If the axis is a `MultiIndex`, group by a particular level or levels. Value is an integer or level name, or a sequence of them.
- `as_index`: Boolean value. `True` returns group labels as an index in aggregated output, and `False` returns labels as `DataFrame` columns.
- `sort`: Boolean value. `True` sorts the group keys.
- `group_keys`: Boolean value. If `False`, add group keys to index when calling apply.
- `observed`: Boolean value. If `True`, only show observed values for categorical groupers, otherwise show all values.
- `dropna`: Boolean value. If `True`, drop groups whose keys contain `NA` values. If `False`, `NA` will be used as a key for those groups.

## Example 1: Group by Single Column Using `.groupby()`

This example uses `.groupby()` to group the data by a single column:

```py
import pandas as pd

data = {
  'Region': ['East', 'West', 'East', 'South', 'West', 'South', 'East'],
  'Sales': [250, 200, 300, 400, 150, 500, 100]
}

df = pd.DataFrame(data)

result = df.groupby('Region')['Sales'].sum()

print(result)
```

Here is the output:

```shell
Region
East     650
South    900
West     350
Name: Sales, dtype: int64
```

## Example 2: Group by Multiple Columns Using `.groupby()`

This example uses `.groupby()` to group the data by multiple columns:

```py
import pandas as pd

data = {
  'Region': ['East', 'West', 'East', 'South', 'West', 'South', 'East'],
  'Product': ['A', 'B', 'A', 'B', 'A', 'A', 'B'],
  'Sales': [250, 200, 300, 400, 150, 500, 100]
}

df = pd.DataFrame(data)

result = df.groupby(['Region', 'Product'])['Sales'].sum()

print(result)
```

Here is the output:

```shell
Region  Product
East    A          550
        B          100
South   A          500
        B          400
West    A          150
        B          200
Name: Sales, dtype: int64
```

## Codebyte Example: Using Aggregate Functions with `.groupby()`

This codebyte example uses `.groupby()` to group the data and then applies aggregate functions on the grouped data:

```codebyte/python
import pandas as pd

data = {
  'Region': ['East', 'West', 'East', 'South', 'West', 'South', 'East'],
  'Product': ['A', 'B', 'A', 'B', 'A', 'A', 'B'],
  'Sales': [250, 200, 300, 400, 150, 500, 100]
}

df = pd.DataFrame(data)

result = df.groupby('Region')['Sales'].agg(['sum', 'mean', 'max'])

print(result)
```

## Frequently Asked Questions

### 1. What does `as_index=False` do in `.groupby()`?

`as_index=False` in `.groupby()` prevents the grouped keys from becoming the index of the resulting DataFrame.

### 2. How to filter groups based on a condition?

Use `.filter()` after `.groupby()`:

```py
filtered = df.groupby('Region').filter(lambda x: x['Sales'].sum() > 500)
```

### 3. Can I use custom functions with `.groupby()`?

Yes, you can define your own functions and use them with `.groupby()` with the help of `.apply()` or `.agg()`:

```py
def range_func(x):
  return x.max() - x.min()

result = df.groupby('Region')['Sales'].agg(['sum', range_func])
```

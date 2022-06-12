---
Title: '.min()'
Description: 'Produces a new Series or DataFrame with minimum values for the groups in a GroupBy object.'
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

The **`.min()`** method produces a new `Series` or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) with minimum values for the groups in a [`GroupBy`](https://www.codecademy.com/resources/docs/pandas/groupby) object.

## Syntax

```pseudo
groupbyobject.min(numeric_only, min_count)
```

The `.min()` method has the following parameters:

- `numeric_only`: Boolean value. `True` includes only int, float, and boolean columns. Default value is `True`.
- `min_count`: Int value. Required number of valid entries in order to produce a result. Default value is 0.

## Example

The following example produces a `GroupBy` object from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) and executes the `.min()` method on it.

```py
import pandas as pd

df = pd.DataFrame({'Key' : ['A', 'A', 'A', 'B', 'B', 'C'],
                   'Value' : [15., 23., 17., 5., 8., 12.]})
print(df, end='\n\n')

group = df.groupby(['Key'], as_index=False)

print(group.min())
```

This example produces the following output:

```shell
  Key  Value
0   A   15.0
1   A   23.0
2   A   17.0
3   B    5.0
4   B    8.0
5   C   12.0

  Key  Value
0   A   15.0
1   B    5.0
2   C   12.0
```

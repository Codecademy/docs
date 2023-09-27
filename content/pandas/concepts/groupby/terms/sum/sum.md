---
Title: '.sum()'
Description: 'Produces a new Series or DataFrame with aggregate sums for the groups in a GroupBy object.'
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

The **`.sum()`** method produces a new `Series` or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) with aggregate sums for the groups in a [`GroupBy`](https://www.codecademy.com/resources/docs/pandas/groupby) object.

## Syntax

```pseudo
groupbyobject.sum(numeric_only, min_count)
```

The `.sum()` method has the following parameters:

- `numeric_only`: Boolean value. `True` includes only int, float, and boolean columns. Default value is `True`.
- `min_count`: Int value. Required number of valid entries in order to produce a result. Default value is 0.

## Example

The following example produces a `GroupBy` object from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) and executes the `.sum()` method on it.

```py
import pandas as pd

df = pd.DataFrame({'Key' : ['A', 'A', 'A', 'B', 'B', 'C'],
                   'Value' : [15., 23., 17., 5., 8., 12.]})
print(df, end='\n\n')

group = df.groupby(['Key'], as_index=False)

print(group.sum())
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
0   A   55.0
1   B   13.0
2   C   12.0
```

## Codebyte Example

Use the Codebytes editor below to produce a new Series with the `.sum()` method.

```codebyte/py
import pandas as pd

df = pd.DataFrame({'Key' : ['A', 'A', 'A', 'B', 'B', 'C'],
                   'Value' : [15., 23., 17., 5., 8., 12.]})
print(df, end='\n\n')

group = df.groupby(['Key'], as_index=False)

print(group.sum())
```

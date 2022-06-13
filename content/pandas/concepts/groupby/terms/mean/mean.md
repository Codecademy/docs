---
Title: '.mean()'
Description: 'Produces a new Series or DataFrame with aggregate mean values for the groups in a GroupBy object.'
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

The **`.mean()`** method produces a new `Series` or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) with aggregate mean values for the groups in a [`GroupBy`](https://www.codecademy.com/resources/docs/pandas/groupby) object.

## Syntax

```pseudo
groupbyobject.mean(numeric_only)
```

`numeric_only` is a boolean value. `True` includes only int, float, and boolean columns. It defaults to `True`.

## Example

The following example produces a `GroupBy` object from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) and executes the `.mean()` method on it.

```py
import pandas as pd

df = pd.DataFrame({'Key' : ['A', 'A', 'A', 'B', 'B', 'C'],
                   'Value' : [15., 23., 17., 5., 8., 12.]})
print(df, end='\n\n')

group = df.groupby(['Key'], as_index=False)

print(group.mean())
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

  Key      Value
0   A  18.333333
1   B   6.500000
2   C  12.000000
```

---
Title: '.median()'
Description: 'Produces a new Series or DataFrame with median values for the groups in a GroupBy object.'
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

The **`.median()`** method produces a new `Series` or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) with median values for the groups in a [`GroupBy`](https://www.codecademy.com/resources/docs/pandas/groupby) object.  
It calculates the middle value of each group, ignoring `NaN` values by default.

## Syntax

```pseudo
groupbyobject.median(numeric_only)
```

The `.median()` method has the following parameter:

`numeric_only`: Boolean value. If `True`, includes only numeric columns. Default is `False`.

## Example

The following example produces a `GroupBy` object from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) and executes the `.median()` method on it.

```py
import pandas as pd

df = pd.DataFrame({'Team' : ['A', 'A', 'A', 'B', 'B', 'C'],
                   'Score' : [10, 20, 30, 40, 50, 60]})
print(df, end='\n\n')

group = df.groupby(['Team'], as_index=False)

print(group.median())
```

This example produces the following output:

```shell
  Team  Score
0    A     10
1    A     20
2    A     30
3    B     40
4    B     50
5    C     60

  Team  Score
0    A   20.0
1    B   45.0
2    C   60.0
```
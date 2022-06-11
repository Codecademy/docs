---
Title: 'GroupBy'
Description: 'The GroupBy object is returned by calls to `.groupby()` on a Series or DataFrame.'
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

The **`GroupBy`** object is returned by calls to [`.groupby()`](https://www.codecademy.com/resources/docs/pandas/dataframe/groupby) on a `Series` or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe). The `.groupby()` function reassembles the data into distinct groups, often for aggregation.

## Example

The following example produces a `GroupBy` object from a `DataFrame` and uses it to produce some aggregate results.

```py
import pandas as pd

df = pd.DataFrame({'Key' : ['A', 'A', 'A', 'B', 'B', 'C'],
                   'Value' : [15., 23., 17., 5., 8., 12.]})
print(df, end='\n\n')

group = df.groupby(['Key'], as_index=False)

print(group.count(), end='\n\n')

print(group.sum(), end='\n\n')

print(group.mean())
```

This produces the following output:

```shell
  Key  Value
0   A   15.0
1   A   23.0
2   A   17.0
3   B    5.0
4   B    8.0
5   C   12.0

  Key  Value
0   A      3
1   B      2
2   C      1

  Key  Value
0   A   55.0
1   B   13.0
2   C   12.0

  Key      Value
0   A  18.333333
1   B   6.500000
2   C  12.000000
```

Selected methods of the `GroupBy` object are listed below:

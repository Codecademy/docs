---
Title: 'DataFrame.drop()'
Description: 'Returns a DataFrame object with rows or columns removed based on column or index names.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Modules'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

The `DataFrame.drop()` function returns a new `DataFrame` object with rows or columns removed based on column or index names. The original `DataFrame` object, used to call the method, remains unchanged.

## Syntax

```py
df = DataFrame.drop(names,axis) # Drop names from specified axis.

df = DataFrame.drop(columns=names) # Drop names from columns.

df = DataFrame.drop(names) # Drop names from rows. (axis defaults to "0")
```

`names` is a single label or a list of the items to drop. `axis` is equal to `0` for dropping rows and `1` for dropping columns, it defaults to `0`. The parameters `columns` or `index` can be used to specify the labels to drop without using `axis`.

`DataFrame.drop()` has the following parameters:

| Parameter Name | Data Type                | Usage                                                                                                                             |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `labels`       | single label or list     | The labels to drop from columns or index as specified by `axis`.                                                                  |
| `axis`         | 0/1 or 'index'/'columns' | Specifies if `labels` refers to columns or indices. Defaults to `0`.                                                              |
| `index`        | single label or list     | Specifies index labels to drop. Ignores `axis`.                                                                                   |
| `columns`      | single label or list     | Specifies column labels to drop. Ignores `axis`.                                                                                  |
| `level`        | index of level name      | For MultiIndex dataframes, the level from which the label(s) will be removed.                                                     |
| `inplace`      | bool                     | If `True`, alters the existing `DataFrame` rather than returning a new one. Defaults to `False`.                                  |
| `errors`       | 'ignore'/'raise'         | Specifies if exception is raised for non-existent labels ('raise') or if those labels are ignored ('ignore'). Default is 'raise'. |

## Example

```py
>>> import pandas as pd
>>> d = {'col 1' : [1,2,3,4], 'col 2' : ['A','B','C','D'], 'col 3' : [5,6,7,8], 'col 4' : ['E','F','G','H']}
>>> df = pd.DataFrame(data = d)
>>> df
   col 1 col 2  col 3 col 4
0      1     A      5     E
1      2     B      6     F
2      3     C      7     G
3      4     D      8     H

>>> df.drop(columns='col 3')
   col 1 col 2 col 4
0      1     A     E
1      2     B     F
2      3     C     G
3      4     D     H
>>> df.drop(2)

   col 1 col 2  col 3 col 4
0      1     A      5     E
1      2     B      6     F
3      4     D      8     H
```

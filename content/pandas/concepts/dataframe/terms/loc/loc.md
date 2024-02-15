---
Title: '.loc'
Description: 'Accesses specified rows and/or columns of a DataFrame object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The `.loc` property of the [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) object allows the return of specified rows and/or columns from that `DataFrame`. It can do so using a label or label(s), or a boolean array of the same size as the axis being filtered.

## Syntax

```pseudo
dataframevalue.loc[rows,columns]
```

**Note:** `.loc` is not a method, it is a property indexed via square brackets.

Inside the square brackets are specified indices for `rows` and, optionally, specified indices for `columns`.

The indices to access can be specified in several ways:

- A single label. **Note:** an integer is treated as a label, not a row or column position.
- An array of labels.
- An array of booleans the same size as the index being accessed.
- Labels using the Python slice notation. **Note:** slices for `.loc` will include both endpoints.

## Example

The example below creates a DataFrame and uses the `.loc` property to return various combinations of rows and columns:

```py
import pandas as pd

d = {'col 1' : [1,2,3,4], 'col 2' : ['A','B','C','D'], 'col 3' : [5,6,7,8], 'col 4' : ['E','F','G','H']}

df = pd.DataFrame(data = d)
print(f'Original df:\n{df}\n')

first_loc = df.loc[:,'col 3']
print(f'First .loc:\n{first_loc}\n')

second_loc = df.loc[:2]
print(f'Second .loc:\n{second_loc}\n')

third_loc = df.loc[[0,3],'col 2':]
print(f'Third .loc:\n{third_loc}')
```

This will print the following:

```shell
Original df:
   col 1 col 2  col 3 col 4
0      1     A      5     E
1      2     B      6     F
2      3     C      7     G
3      4     D      8     H

First .loc:
0    5
1    6
2    7
3    8
Name: col 3, dtype: int64

Second .loc:
   col 1 col 2  col 3 col 4
0      1     A      5     E
1      2     B      6     F
2      3     C      7     G

Third .loc:
  col 2  col 3 col 4
0     A      5     E
3     D      8     H
```

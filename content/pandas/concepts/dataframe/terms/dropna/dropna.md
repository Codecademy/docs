---
Title: '.dropna()'
Description: 'Returns a DataFrame object with rows or columns with NA values removed.'
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

The `.dropna()` function returns a new [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) object with rows or columns removed if they contain `NA` values. The original `DataFrame` object, used to call the method, remains unchanged.

## Syntax

```pseudo
# Drop rows with any NA values.
df = dataframevalue.dropna()

# Drop from specified axis where NA values appear.
df = dataframevalue.dropna(axis)

# Specify dropping from axis if any values are NA, or if all values are NA.
df = dataframevalue.dropna(axis,how)
```

- `dataframevalue` is the DataFrame with the source data.
- `axis` is equal to `0` for dropping rows and `1` for dropping columns, it defaults to `0`.
- `how` can be "any" or "all" and defaults to "any," which specifies if a row or column is dropped if any values are `NA` or if all values are `NA`.

`DataFrame.dropna()` has the following parameters:

| Parameter Name | Data Type                | Usage                                                                                                 |
| :------------: | ------------------------ | ----------------------------------------------------------------------------------------------------- |
|     `axis`     | 0/1 or 'index'/'columns' | Specifies dropping to columns or rows (indices). Defaults to `0`.                                     |
|     `how`      | 'any' or 'all'           | Specified dropping when any value is `NA` or if all values are `NA`                                   |
|    `subset`    | column label or sequence | Specifies labels to check for `NA` values along other axis. (i.e. columns to check if dropping rows.) |
|   `inplace`    | bool                     | If `True`, alters the existing `DataFrame` rather than returning a new one. Defaults to `False`.      |

## Example

In the following example, the `.dropna()` method is used in two separate instances:

```py
import pandas as pd
import numpy as np

d = {'col 1' : [1,2,3,np.nan], 'col 2' : ['A','B',np.nan,'D'], 'col 3' : [5,6,7,8], 'col 4' : ['E','F','G','H']}

df = pd.DataFrame(data = d)
print(f'Original df:\n{df}\n')

first_dropna = df.dropna()
print(f'First dropna():\n{first_dropna}\n')

second_dropna = df.dropna('columns')
print(f'Second dropna(\'columns\'):\n{second_dropna}')
```

The output from these instances of the `.dropna()` method is shown below:

```shell
Original df:
   col 1 col 2  col 3 col 4
0    1.0     A      5     E
1    2.0     B      6     F
2    3.0   NaN      7     G
3    NaN     D      8     H

After first dropna():
   col 1 col 2  col 3 col 4
0    1.0     A      5     E
1    2.0     B      6     F

After second dropna('columns'):
   col 3 col 4
0      5     E
1      6     F
2      7     G
3      8     H
```

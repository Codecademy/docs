---
Title: '.fillna()'
Description: 'Returns a DataFrame object with NA values replaced with the specified value.'
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

The `.fillna()` function returns a new [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) object with `NA` values replaced with a specified value. The original `DataFrame` object, used to call the method, remains unchanged.

## Syntax

```pseudo
df = dataframevalue.fillna(value)
```

`dataframevalue` is the DataFrame with the source data and `value` is the value used to fill holes. `value` can be a scalar such as `0`, or it can be a DataFrame specifying replacement values for each column. Column labels not in `value` won't be filled.

`.fillna()` has the following parameters:

| Parameter Name | Data Type                                   | Usage                                                                                                              |
| :------------: | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|    `value`     | scalar, dict, Series, Dataframe             | Value used to fill holes. A scalar or a dict/Series/DataFrame specifying replacement values for each column.       |
|    `method`    | 'backfill', 'bfill', 'pad', 'ffill', `None` | 'backfill'/'bfill' fills holes with next valid observation. 'pad'/'ffill' fills holes with last valid observation. |
|     `axis`     | 0/1 or 'index'/'columns'                    | Axis along which to fill missing values.                                                                           |
|   `inplace`    | bool                                        | If `True`, alters the existing `DataFrame` rather than returning a new one. Defaults to `False`.                   |
|    `limit`     | int                                         | Maximum consecutive items to back/forward fill. Defaults to `None`.                                                |

## Example

In the following example, the `.fillna()` method is used to fill in `NA` values in a DataFrame first with a scalar, then with a dict:

```py
import pandas as pd
import numpy as np

d = {'col 1' : [1,2,3,np.nan], 'col 2' : ['A','B',np.nan,'D'], 'col 3' : [5,np.nan,7,8], 'col 4' : [np.nan,'F','G','H']}
df = pd.DataFrame(data = d)

print(f'Original df:\n{df}\n')

first_fillna = df.fillna(0)
print(f'After first fillna():\n{first_fillna}\n')

second_fillna = df.fillna({'col 1':0,'col 2':'X','col 3':0,'col 4':'X'})
print(f'After second fillna():\n{second_fillna}\n')
```

The output from these instances of the `.fillna()` method is shown below:

```shell
Original df:
   col 1 col 2  col 3 col 4
0    1.0     A    5.0   NaN
1    2.0     B    NaN     F
2    3.0   NaN    7.0     G
3    NaN     D    8.0     H

After first fillna():
   col 1 col 2  col 3 col 4
0    1.0     A    5.0     0
1    2.0     B    0.0     F
2    3.0     0    7.0     G
3    0.0     D    8.0     H

After second fillna():
   col 1 col 2  col 3 col 4
0    1.0     A    5.0     X
1    2.0     B    0.0     F
2    3.0     X    7.0     G
3    0.0     D    8.0     H
```

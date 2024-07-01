---
Title: '.concat()'
Description: 'Concatenates multiple Dataframes or Series along a particular axis.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Pandas'
CatalogContent:
  - 'paths/data-science'
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science-foundations'
---

The **`.concat()`** function is used to concatenate and combine multiple [`DataFrames`](https://www.codecademy.com/resources/docs/pandas/dataframe) or `Series` along a particular axis.

## Syntax

```pseudo
pandas.concat(objs, axis=0, join='outer', ignore_index=False, keys=None, levels=None, names=None, verify_integrity=False, sort=False, copy=True)
```

- `objs`: Denotes the objects to concatenate, which can be a sequence or mapping of pandas `Series` or `DataFrame` objects. It must be specified and can be passed as a list, tuple, dictionary, Series, or DataFrame.
- `axis`: Specifies the axis along which to concatenate the objects. The default value is 0 for rows, while 1 represents columns.
- `join`: Determines how to handle indexes on other axes. Options include "outer" (default), "inner," "left," or "right."
- `ignore_index`: If `True`, resets the index in the resulting DataFrame. The new axis will be labeled 0, ..., n-1. Default value is `False`.
- `keys`: Constructs a hierarchical index using the provided keys as the outermost level. Default value is `None`.
- `levels`: Specific levels to use for constructing a MultiIndex if keys are provided. Default value is `None`.
- `names`: Names for the levels generated in the hierarchical index. Default value is `None`.
- `verify_integrity`: If `True`, checks whether the new concatenated axis contains duplicates. Default value is `False`.
- `sort`: If `True`, sorts the resulting `Series` or `Dataframe` by the keys. Default value is `False`.
- `copy`: If `False`, avoids copying data unnecessarily. Default value is `True`.

> **Note:** Only the `objs` parameter is required; all other parameters are optional.

## Example

The example below demonstrates the use of `.concat()` method:

```py
import pandas as pd

df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

result = pd.concat([df1, df2])
print(result)
```

The example will result in a new `DataFrame` created by concatenating `df1` and `df2` along the rows. The output is as follows:

```shell
   A   B
0  1   3
1  2   4
0  5   7
1  6   8
```

## Codebyte Example

The code demonstrates the `.concat()` function on two DataFrames, concatenating `df1` and `df2` column-wise (`axis=1`) and using `keys` to create a hierarchical column index:

```codebyte/python
import pandas as pd

df1 = pd.DataFrame({'A' : [1,2,3,4,5], 'B' : [6,7,8,9,10]})
df2 = pd.DataFrame({'C' : [11,12,13,14,15], 'D' : [16,17,18,19,20]})

result = pd.concat([df1, df2], axis=1, keys = ['df1', 'df2'])

print(result)

```

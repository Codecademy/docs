---
Title: '.sort_values()'
Description: 'Sorts values in a DataFrame by one or more selected columns or rows.'
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

The **`.sort_values()`** function sorts values in a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) along the selected axis and returns a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) with sorted values or None.

## Syntax

```pseudo
dataframevalue.sort_values(by, axis=0, ascending=True, inplace=False, kind='quicksort', na_position='last', ignore_index=False, key=None)
```

`.sort_values()` uses the following parameters:

- `by`: A label or a list of labels to sort by (levels can also be specified if applicable).
- `axis`: Specify which axis will be sorted (0 or index, 1 or columns), it defaults to 0.
- `ascending`: Specify whether the sort will be ascending or descending (`True` or `False`), it defaults to `True`.
- `inplace`: By setting it to `True`, the operation will be performed on the original `DataFrame` and the function will return None, it defaults to `False`.
- `kind`: Choose which algorithm to use: ‘quicksort’, ‘mergesort’, ‘heapsort’, or ‘stable’, it defaults to `quicksort`. For more information click [here](https://numpy.org/doc/stable/reference/generated/numpy.sort.html#numpy.sort).
- `na_position`: Specify where to put the `NaN` values, it defaults to `last`.
- `ignore_index`: Ignore the original index and put a new ascending set of values in its place. The default is `False`.
- `key`: Apply a function before sorting.

## Example

In the example below a DataFrame is created and sorted in multiple ways by applying the `.sort_values()` method and altering the parameters passed.

```py
# Import pandas and numpy
import pandas as pd
import numpy as np

# Create the DataFrame
df = pd.DataFrame({'numbers': [2, 2, 5, 9, np.nan, 1],
                   'letters': ['D', 'A', 'B', 'Z', np.nan, 'C']})

# Sort by the column 'numbers'
print(df.sort_values(by=['numbers']), end='\n\n')

# Sort by the columns 'numbers' and 'letters'
print(df.sort_values(by=['numbers', 'letters']), end='\n\n')

# Sort by the column 'numbers' and put NaN values first
print(df.sort_values(by=['numbers'], na_position='first'), end='\n\n')
```

The output will look like this:

```shell
   numbers letters
5      1.0       C
0      2.0       D
1      2.0       A
2      5.0       B
3      9.0       Z
4      NaN     NaN

   numbers letters
5      1.0       C
1      2.0       A
0      2.0       D
2      5.0       B
3      9.0       Z
4      NaN     NaN

   numbers letters
4      NaN     NaN
5      1.0       C
0      2.0       D
1      2.0       A
2      5.0       B
3      9.0       Z
```

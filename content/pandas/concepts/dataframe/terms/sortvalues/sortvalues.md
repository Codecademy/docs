---
Title: '.sort_values()'
Description: 'Sorts values in a DataFrame based on the specified column or columns.'
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
dataframevalue.sort_values(by, *, axis=0, ascending=True, inplace=False, kind='quicksort', na_position='last', ignore_index=False, key=None)
```

`.sort_values()` uses the following parameters:
- `by`: `Name` or `list of names` to sort by.
- `axis`: Specify which axis will be sorted.
- `ascending`: Specify whether the sort will be ascending or descending (True or False).
- `inplace`: By setting it to True, the operation will be performed on the original DataFrame and the function will return None.
- `kind`: Choose which algorithm to use: ‘quicksort’, ‘mergesort’, ‘heapsort’, or ‘stable’. For more information click [here](https://numpy.org/doc/stable/reference/generated/numpy.sort.html#numpy.sort).
- `na_position`: Specify where to put the NaN values.
- `ignore_index`: Ignore the original index and put the new ascending row of numbers in its place.
- `key`: Apply a function before sorting.

## Example

This example demonstrates the usage of `.sort_values()`.

```py
#Import pandas and numpy
import pandas as pd
import numpy as np

#Create the DataFrame
df = pd.DataFrame({'numbers': [2, 2, 5, 9, np.nan, 1],
                   'letters': ['D', 'A', 'B', 'Z', np.nan, 'C']})

#Sort by the column 'numbers'.
print(df.sort_values(by=['numbers']), end='\n\n')

#Sort by the columns 'numbers' and 'letters'.
print(df.sort_values(by=['numbers', 'letters']), end='\n\n')

#Sort by the column 'numbers' and put NaN values first.
print(df.sort_values(by=['numbers'], na_position='first'), end='\n\n')
```

This is the output of the code:
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
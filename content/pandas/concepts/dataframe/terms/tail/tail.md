---
Title: '.tail()'
Description: 'Returns last n rows from the DataFrame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Pandas'
  - 'Syntax'
  - 'Data Structures'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.tail()`** returns last _n_ rows from the object based on position. It is useful for quickly verifying data, for example, after sorting or appending rows.

Uses:
- For negative values of _n_, this function returns all rows except the first _|n|_ rows, equivalent to `df[|n|:]`.
- If _n_ is larger than the number of rows, this function returns all rows.
- If any value is passed the default output will be the last 5 rows.

## Syntax

```pseudo
dataFrame.tail()
```

The `dataFrame` must be a valid DataFrame object. 

## Example

The following example initiates a DataFrame and uses `.tail()` to return the last dataFrame row:

```py
import pandas as pd

d = {"col1" : [1, 2 ,3], "col2" : [4, 5, 6]}

df = pd.DataFrame(data = d)
print(df.tail(1))
```

This will print the following:

```shell
    col1  col2
 2   3      6
```

## Codebyte Example

The following example prints the last 2 rows of the dataFrame:

```codebyte/python
import pandas as pd

d = {"col1" : [1, 2, 3], "col2" : [4, 6, 8]}

df = pd.DataFrame(data = d)
print(df.tail(2))
```

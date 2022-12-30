---
Title: '.shape'
Description: 'Returns the number of rows and columns of given DataFrame in tuple form.'
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

The **`.shape`** property returns a tuple of information about the dimensions (rows and columns) of a DataFrame object.

## Syntax

```pseudo
dataFrameValue.shape
```

The `dataFrameValue` must be a valid DataFrame object. If the `dataFrameValue` has a different length for one or more columns, a `ValueError` will be thrown.

## Example

The following example initiates a DataFrame and uses `.shape` to return the number of rows and columns:

```py
import pandas as pd

d = {"col1" : [1, 2 ,3], "col2" : [4, 5, 6]}

df = pd.DataFrame(data = d)
print(df.shape)
```

This will print the following:

```shell
(3, 2)
```

The result can be interpreted that DataFrame has 3 rows and 2 columns.

## Codebyte Example

The following example throws a `ValueError` because the DataFrame has columns of differing length:

```codebyte/python
import pandas as pd

d = {"col1" : [1, 2, 3], "col2" : [4, 6]}

df = pd.DataFrame(data = d)
print(df.shape)
```

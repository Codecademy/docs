---
Title: '.prod()'
Description: 'Produces a new Series or DataFrame by computing the product of the values within the group.'
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

The **`.prod()`** method produces a new `Series` or [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) with the product of the values in a [`GroupBy`](https://www.codecademy.com/resources/docs/pandas/groupby) object.

## Syntax

```pseudo
groupbyobject.prod(numeric_only, min_count)
```

The `.prod()` method has the following parameters:

- `numeric_only`: Boolean value. `True` includes only int, float, and boolean columns. Default value is `False`.
- `min_count`: Int value. Required number of valid entries in order to produce a result. Default value is 0.

## Example

The following example produces a `GroupBy` object from a [`DataFrame`](https://www.codecademy.com/resources/docs/pandas/dataframe) and executes the `.prod()` method on it.

```py
import pandas as pd

df = pd.DataFrame({
    'Key' : ['A', 'A', 'B', 'B', 'C', 'C'],
    'Value1' : [2, 3, 4, 5, 6, 9],
    'Value2' : [10, 5, 2, 3, 4, 2]
})
print(df, end='\n\n')

group_prod = df.groupby('Key').prod()

print(group_prod)
```

This example produces the following output:

```shell
  Key  Value1  Value2
0   A       2      10
1   A       3       5
2   B       4       2
3   B       5       3
4   C       6       4
5   C       9       2

     Value1  Value2
Key                  
A          6      50
B         20       6
C         54       8
```

## Codebyte Example

Use the Codebytes editor below to produce a new DataFrame with the `.prod()` method.
```codebyte/py
import pandas as pd

df = pd.DataFrame({
    'Key' : ['A', 'A', 'B', 'B', 'C', 'C'],
    'Value1' : [2, 3, 4, 5, 6, 9],
    'Value2' : [10, 5, 2, 3, 4, 2]
})
print(df, end='\n\n')

group_prod = df.groupby('Key').prod()

print(group_prod)
```
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
groupbyobject.prod(numeric_only=False, min_count=0)
```

**Parameters:**

- `numeric_only`: If `True`, non-numeric columns are excluded. If `False`, attempts to include all columns (non-numeric columns are ignored in computation).
- `min_count`: If the number of valid (non-NA) entries in a group is less than `min_count`, the result for that group is `NaN`.

**Return value:**

Returns a `DataFrame` (or `Series` if applied on a SeriesGroupBy object) containing the product of each numeric column for each group.

## Example

The following example produces a `GroupBy` object from a `DataFrame` and executes the `.prod()` method on it:

```py
import pandas as pd

df = pd.DataFrame({
    'Key' : ['A', 'A', 'B', 'B', 'C', 'C','D'],
    'Value1' : [2, 3, 4, 5, 6, 9, 10],
    'Value2' : [10, 5, 2, 3, 4, 2, 11]
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
6   D      10      11

     Value1  Value2
Key
A          6      50
B         20       6
C         54       8
D         10      11
```

## Codebyte Example

This example calculates the total sales value for each product category by multiplying the price and quantity sold. It demonstrates how `.prod()` can be used in a real-world grouped dataset:

```codebyte/python
import pandas as pd

# Sample sales data
df = pd.DataFrame({
    'Category': ['Electronics', 'Electronics', 'Clothing', 'Clothing', 'Books'],
    'Price': [200, 150, 50, 30, 20],
    'Quantity': [2, 3, 4, 5, 10]
})

print("Original DataFrame:\n", df, end='\n\n')

# Group by Category and compute the product of numeric columns
category_prod = df.groupby('Category').prod()

print("Grouped product:\n", category_prod)
```
